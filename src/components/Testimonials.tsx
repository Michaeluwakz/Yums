import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "YUMSQUAD catered our office party – the Jollof rice was legendary!",
    author: "Aisha B.",
    source: "Corporate Client"
  },
  {
    quote: "Best burgers in Manchester, hands down. The spice is on point!",
    author: "@MCRFoodExplorer",
    source: "Instagram"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl text-primary font-bold">What The Squad Says</h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-4 sm:p-6 text-center shadow-lg bg-card border-none">
              <CardContent className="p-0">
                <blockquote className="text-lg sm:text-xl italic text-foreground/90 mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <footer className="font-bold text-primary">
                  – {testimonial.author}, <span className="font-normal text-foreground/70">{testimonial.source}</span>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
