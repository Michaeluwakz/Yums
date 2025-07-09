
'use client';

import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, ShoppingCart } from 'lucide-react';

export function CartView() {
  const { items, totalPrice, totalItems, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
        <div className="text-center py-16">
            <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-headline mb-2">Your Cart is Empty</h2>
            <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Button asChild>
                <Link href="/menu">Explore Menu</Link>
            </Button>
        </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
                <Card key={item.name} className="flex items-center p-4 overflow-hidden">
                    <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-md object-cover w-24 h-24" />
                    <div className="ml-4 flex-grow">
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-muted-foreground">£{item.price.toFixed(2)} each</p>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-2">
                            <Input 
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.name, parseInt(e.target.value))}
                                className="w-16 text-center"
                                min={1}
                            />
                        </div>
                        <p className="font-bold w-20 text-right text-lg">£{(item.price * item.quantity).toFixed(2)}</p>
                        <Button variant="ghost" size="icon" onClick={() => removeItem(item.name)}>
                            <Trash2 className="h-5 w-5 text-destructive" />
                            <span className="sr-only">Remove item</span>
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
        <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg border-primary/20">
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between text-lg">
                        <span>Subtotal ({totalItems} items)</span>
                        <span>£{totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-xl pt-4 border-t">
                        <span>Total</span>
                        <span>£{totalPrice.toFixed(2)}</span>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button asChild size="lg" className="w-full">
                        <Link href="/checkout">Proceed to Checkout</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  );
}
