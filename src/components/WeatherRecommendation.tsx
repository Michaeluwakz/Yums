"use client";

import { useState } from "react";
import { BrainCircuit, Loader, ServerCrash, Wind, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getRecommendation } from "@/app/actions";
import type { RecommendMenuItemOutput } from "@/ai/flows/menu-recommendation";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const weatherOptions = [
  { label: "Cold & Rainy", value: "cold and rainy" },
  { label: "Warm & Sunny", value: "warm and sunny" },
  { label: "Chilly & Windy", value: "chilly and windy" },
];

export function WeatherRecommendation() {
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<RecommendMenuItemOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleWeatherClick = async (weather: string) => {
    setLoading(true);
    setError(null);
    setRecommendation(null);
    try {
      const result = await getRecommendation(weather);
      setRecommendation(result);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "AI Recommendation Failed",
        description: "Could not fetch a menu recommendation. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="recommendation" className="py-16 sm:py-24 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="font-headline text-4xl text-primary mb-4">What's the vibe today?</h2>
        <p className="max-w-2xl mx-auto text-primary-foreground/80 mb-8 text-lg">
          Let our AI chef pick the perfect dish for you based on Manchester's mood. Just tell us what it's like outside!
        </p>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {weatherOptions.map((weather) => (
            <Button
              key={weather.value}
              onClick={() => handleWeatherClick(weather.value)}
              disabled={loading}
              size="lg"
              variant="outline"
              className="font-bold border-2 border-[#6bcaba]/80 text-[#6bcaba] hover:bg-[#6bcaba]/10 hover:text-[#6bcaba]"
            >
              <Wind className="mr-2 h-5 w-5" />
              {weather.label}
            </Button>
          ))}
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center gap-4 p-8 text-primary">
            <Loader className="h-12 w-12 animate-spin" />
            <p className="font-headline text-2xl">Our AI is thinking...</p>
          </div>
        )}

        {error && (
            <Alert variant="destructive" className="max-w-2xl mx-auto">
              <ServerCrash className="h-4 w-4" />
              <AlertTitle>Oops! Something went wrong.</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}
        
        {recommendation && (
          <div className="flex justify-center">
            <Card className="max-w-2xl w-full shadow-lg animate-in fade-in-50 zoom-in-95 duration-500 bg-gradient-to-br from-secondary/50 to-background">
              <CardHeader className="items-center text-center">
                <BrainCircuit className="w-12 h-12 text-accent mb-2" />
                <CardTitle className="font-headline text-3xl text-primary">AI Suggests...</CardTitle>
                <CardDescription className="text-foreground/80">Here's the perfect match for today's weather!</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-headline text-4xl text-accent-foreground mb-2">{recommendation.menuItem}</p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  &ldquo;{recommendation.reason}&rdquo;
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                      <a href="#menu">
                          <Zap className="mr-2"/> Find it on the menu
                      </a>
                  </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
