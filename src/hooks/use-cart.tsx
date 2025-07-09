'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import type { MenuItem } from '@/lib/data';
import { useToast } from './use-toast';

interface CartItem extends MenuItem {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (itemName: string) => void;
  updateQuantity: (itemName: string, quantity: number) => void;
  clearCart: () => void;
  totalPrice: number;
  totalItems: number;
  isCartReady: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartReady, setIsCartReady] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    try {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setItems(JSON.parse(storedCart));
        }
    } catch (error) {
        console.error("Could not parse cart from localStorage", error);
        localStorage.removeItem('cart');
    } finally {
        setIsCartReady(true);
    }
  }, []);

  useEffect(() => {
    if (isCartReady) {
        if (items.length > 0) {
            localStorage.setItem('cart', JSON.stringify(items));
        } else {
            localStorage.removeItem('cart');
        }
    }
  }, [items, isCartReady]);

  const addItem = (item: MenuItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);
      if (existingItem) {
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const removeItem = (itemName: string) => {
    setItems((prevItems) => prevItems.filter((i) => i.name !== itemName));
    toast({
        variant: 'destructive',
        title: "Removed from cart",
        description: `${itemName} has been removed from your cart.`,
    });
  };

  const updateQuantity = (itemName: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemName);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((i) => (i.name === itemName ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalPrice, totalItems, isCartReady }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
