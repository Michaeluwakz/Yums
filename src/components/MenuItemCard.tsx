
"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { MenuItem } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-cart";
import { ShoppingCart } from "lucide-react";

export function MenuItemCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();

  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-primary/50">
      <div className="relative w-full h-48">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          data-ai-hint={item.imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl sm:text-2xl text-primary">{item.name}</CardTitle>
        <CardDescription className="text-base text-foreground/80 min-h-[4.5rem]">{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {item.tags && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Badge key={tag.name} variant="secondary" className="text-xs sm:text-sm">
                <tag.icon className={`mr-1 h-4 w-4 ${tag.color}`} />
                {tag.name}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-xl sm:text-2xl font-bold text-accent">£{item.price.toFixed(2)}</p>
        <Button onClick={() => addItem(item)}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
