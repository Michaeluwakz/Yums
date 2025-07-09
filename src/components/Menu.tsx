"use client";

import { menuData } from "@/lib/data";
import { MenuItemCard } from "./MenuItemCard";
import { UtensilsCrossed, GlassWater, Sandwich, Drumstick } from "lucide-react";

export function Menu() {
  const iconBaseClasses = "text-foreground/5 absolute hidden md:block";

  return (
    <section id="menu" className="relative py-16 sm:py-24 bg-secondary/50 overflow-hidden">
      
      {/* Watermark Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <UtensilsCrossed className={`${iconBaseClasses} h-32 w-32 top-[10%] left-[5%] -rotate-12`} />
        <Sandwich className={`${iconBaseClasses} h-28 w-28 top-[20%] right-[10%] rotate-12`} />
        <GlassWater className={`${iconBaseClasses} h-24 w-24 bottom-[30%] left-[15%] rotate-6`} />
        <Drumstick className={`${iconBaseClasses} h-36 w-36 top-[65%] right-[15%] -rotate-6`} />
        <Sandwich className={`${iconBaseClasses} h-20 w-20 bottom-[5%] left-[45%] rotate-12`} />
        <GlassWater className={`${iconBaseClasses} h-20 w-20 top-[5%] right-[40%] -rotate-12`} />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl text-primary font-bold">Our Menu</h2>
          <p className="text-lg text-foreground/80 mt-2">Crafted with love, served with soul.</p>
        </div>

        {menuData.map((category) => (
          <div key={category.categoryName} className="mb-16">
            <h3 className="font-headline text-3xl sm:text-4xl text-primary/90 mb-8 text-center md:text-left border-b-2 border-primary/20 pb-2">{category.categoryName}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {category.items.map((item) => (
                <MenuItemCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
