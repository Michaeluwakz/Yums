import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutUs() {
  return (
    <section id="about" className="py-12 sm:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-lg border-2 border-primary/10">
          <CardHeader>
            <CardTitle className="font-headline text-3xl sm:text-4xl text-center text-accent">About YUMSQUAD</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-base sm:text-lg text-foreground/90 leading-relaxed">
              Welcome to YUMSQUAD, where we bring the vibrant, soulful flavors of African and Caribbean cuisine to the heart of Manchester. Our kitchen is a celebration of heritage, passion, and community, serving up traditional recipes with a modern twist. From our legendary Jollof Rice to the fiery kick of our Jerk Chicken, every dish is crafted with love and the freshest ingredients. Join the squad and taste the tradition!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
