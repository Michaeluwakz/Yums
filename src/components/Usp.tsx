import { Leaf, PartyPopper, Zap } from 'lucide-react';

const uspItems = [
  {
    icon: Leaf,
    text: "100% Halal & Fresh Ingredients"
  },
  {
    icon: PartyPopper,
    text: "Perfect for Events – From Offices to Weddings!"
  },
  {
    icon: Zap,
    text: "Instant Ordering via WhatsApp"
  }
];

export function Usp() {
  return (
    <section id="usp" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 md:gap-12 text-center">
          {uspItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-accent/10 rounded-full p-3 md:p-4 mb-4">
                <item.icon className="w-10 h-10 md:w-12 md:h-12 text-accent" />
              </div>
              <h3 className="font-bold text-sm md:text-xl text-foreground/90">{item.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
