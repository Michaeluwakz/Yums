
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckoutView } from "@/components/CheckoutView";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h1 className="font-headline text-4xl sm:text-5xl text-primary font-bold">Checkout</h1>
            <p className="text-lg text-foreground/80 mt-2">Complete your order by making a payment to our bank account.</p>
          </div>
          <CheckoutView />
        </div>
      </main>
      <Footer />
    </div>
  );
}
