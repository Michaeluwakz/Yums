import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Usp } from "@/components/Usp";
import { AboutUs } from "@/components/AboutUs";
import { MenuTeaser } from "@/components/MenuTeaser";
import { Testimonials } from "@/components/Testimonials";
import { InstagramCallout } from "@/components/InstagramCallout";
import { WeatherRecommendation } from "@/components/WeatherRecommendation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Usp />
        <AboutUs />
        <MenuTeaser />
        <WeatherRecommendation />
        <Testimonials />
        <InstagramCallout />
      </main>
      <Footer />
    </div>
  );
}
