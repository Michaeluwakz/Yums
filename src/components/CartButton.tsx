
"use client";

import { useCart } from "@/hooks/use-cart";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";

export function CartButton() {
    const { totalItems, isCartReady } = useCart();

    return (
        <Button asChild variant="ghost" className="relative">
            <Link href="/cart">
                <ShoppingCart />
                <span className="sr-only">Shopping Cart</span>
                {isCartReady && totalItems > 0 && (
                    <Badge variant="destructive" className="absolute -top-2 -right-2 h-6 w-6 rounded-full flex items-center justify-center">
                        {totalItems}
                    </Badge>
                )}
            </Link>
        </Button>
    )
}
