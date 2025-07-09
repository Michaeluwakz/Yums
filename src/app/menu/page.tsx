import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Menu />
      </main>
      <Footer />
    </div>
  );
}
