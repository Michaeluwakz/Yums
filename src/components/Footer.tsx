import { Phone, Instagram } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/yumsquad_caterng/' },
  ];
  const contactInfo = [
    { name: 'Phone', icon: Phone, href: 'tel:01617265656', text: '0161 726 5656' },
  ];
  const openingTimes = [
    { day: "Thursday - Saturday", hours: "3:30pm - 11:30pm" },
    { day: "Sunday", hours: "1:00pm - 12:00am" },
    { day: "Monday - Wednesday", hours: "Closed" },
  ];

  return (
    <footer id="contact" className="bg-card text-card-foreground border-t-4 border-primary/50">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div>
            <h3 className="font-headline text-2xl text-primary mb-4">YUMSQUAD</h3>
            <p className="text-card-foreground/80">Bringing the heart of African-Caribbean flavor to your plate. Good food, good mood.</p>
            <p className="font-headline text-lg text-primary mt-4">Flavour That Brings the Squad Together!</p>
          </div>

          <div>
            <h3 className="font-headline text-2xl text-primary mb-4">Opening Times</h3>
            <ul className="space-y-1 text-card-foreground/80">
              {openingTimes.map(time => (
                <li key={time.day}>
                  <span className="font-bold">{time.day}:</span> {time.hours}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline text-2xl text-primary mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-card-foreground/80">
              {contactInfo.map(item => (
                <li key={item.name} className="flex items-center justify-center md:justify-start">
                  <item.icon className="w-5 h-5 mr-3 text-accent" />
                  <a href={item.href} className="hover:text-primary transition-colors">{item.text}</a>
                </li>
              ))}
              {socialLinks.map(item => (
                <li key={item.name} className="flex items-center justify-center md:justify-start">
                  <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.name} className="hover:text-primary transition-colors">
                    <item.icon className="w-5 h-5 text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-card-foreground/60">
          <p>&copy; {new Date().getFullYear()} YUMSQUAD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
