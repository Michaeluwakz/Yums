import { Header } from "@/components/Header";
import { CateringForm } from "@/components/CateringForm";
import { Footer } from "@/components/Footer";

export default function CateringPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h1 className="font-headline text-4xl sm:text-5xl text-primary font-bold">Catering Services</h1>
            <p className="text-base sm:text-lg text-foreground/80 mt-4">
              Bring the vibrant flavours of YUMSQUAD to your next event! From corporate lunches to weddings, we offer bespoke catering services to make your gathering unforgettable.
            </p>
            <p className="text-base sm:text-lg text-foreground/80 mt-2">
              Please fill out the form below to tell us more about your event, and we'll get back to you as soon as possible.
            </p>
          </div>
          <CateringForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
