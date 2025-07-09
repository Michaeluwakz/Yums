import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section 
      id="home" 
      className="bg-foreground text-background py-24 sm:py-32"
    >
      <div className="container mx-auto text-center">
        <h1 className="font-headline text-3xl md:text-6xl font-bold tracking-tight">
          African-Caribbean Spice
        </h1>
        <p className="font-headline text-2xl md:text-5xl font-bold tracking-tight mb-6">
          Made in Manchester!
        </p>
        <p className="text-lg md:text-xl text-background/80 mb-8 max-w-2xl mx-auto">
          Halal • Bold Flavors • Event Catering • Street Food
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href="/menu">
            Order Now
          </a>
        </Button>
      </div>
    </section>
  );
}
