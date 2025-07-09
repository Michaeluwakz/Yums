'use client';

import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, ShoppingCart, Loader2 } from 'lucide-react';
import { submitOrder } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

export function CheckoutView() {
  const { items, totalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handlePlaceOrder = async () => {
    setLoading(true);
    try {
      const orderPayload = {
        items: items.map(item => ({ name: item.name, quantity: item.quantity, price: item.price })),
        totalPrice,
      };
      await submitOrder(orderPayload);
      
      clearCart();
      setOrderPlaced(true);

    } catch (error) {
      toast({
        variant: 'destructive',
        title: "Order Failed",
        description: "There was a problem placing your order. Please try again.",
      });
    } finally {
        setLoading(false);
    }
  };
  
  if (orderPlaced) {
    return (
        <Card className="max-w-2xl mx-auto text-center p-8 bg-secondary/50">
            <CardHeader>
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-3xl font-headline text-primary">Order Placed!</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg text-foreground/80">Thank you for your order. Please complete the payment using the bank details provided.</p>
                <p className="text-foreground/80 mt-2">We will start preparing your food once payment is confirmed.</p>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button asChild>
                    <Link href="/">Back to Homepage</Link>
                </Button>
            </CardFooter>
        </Card>
    )
  }

  if (items.length === 0 && !orderPlaced) {
      return (
        <div className="text-center py-16">
            <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-headline mb-2">Your Cart is Empty</h2>
            <p className="text-muted-foreground mb-6">You have no items in your cart to check out.</p>
            <Button asChild>
                <Link href="/menu">Browse Menu</Link>
            </Button>
        </div>
      )
  }

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="font-headline text-3xl text-primary mb-6">Order Summary</h2>
        <Card className="shadow-lg">
            <CardContent className="p-4 space-y-4">
                {items.map(item => (
                    <div key={item.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-md object-cover w-16 h-16" />
                            <div>
                                <p className="font-bold">{item.name}</p>
                                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                        </div>
                        <p className="font-bold text-lg">£{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                ))}
            </CardContent>
            <CardFooter className="flex justify-between items-center bg-secondary/50 p-4 font-bold text-xl rounded-b-lg">
                <span>Total</span>
                <span>£{totalPrice.toFixed(2)}</span>
            </CardFooter>
        </Card>
      </div>

      <div>
        <h2 className="font-headline text-3xl text-primary mb-6">Payment Details</h2>
        <Card className="bg-secondary/50 shadow-lg border-primary/20">
            <CardHeader>
                <CardTitle>Bank Transfer</CardTitle>
                <CardDescription>Please use the following details to complete your payment. Use your name as the payment reference.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Account Name:</span>
                    <span className="font-mono">Sandra Paulo</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Sort Code:</span>
                    <span className="font-mono">04-06-05</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Account No:</span>
                    <span className="font-mono">20708855</span>
                </div>
            </CardContent>
            <CardFooter className="flex-col items-stretch space-y-4 pt-6">
                 <p className="text-xs text-center text-muted-foreground">Your order will be prepared once payment is confirmed.</p>
                 <Button size="lg" className="w-full" onClick={handlePlaceOrder} disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Confirm & Place Order
                 </Button>
            </CardFooter>
        </Card>
      </div>
    </div>
  );
}
