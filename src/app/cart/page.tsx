
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartView } from "@/components/CartView";

export default function CartPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h1 className="font-headline text-4xl sm:text-5xl text-primary font-bold">Your Shopping Cart</h1>
          </div>
          <CartView />
        </div>
      </main>
      <Footer />
    </div>
  );
}
