
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { CartButton } from './CartButton';

export function Header() {
  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/menu", label: "Menu" },
    { href: "/catering", label: "Catering" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/#recommendation", label: "AI Chef" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="py-4 bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b border-border/50">
      <div className="container mx-auto text-center relative">
        
        <div className="absolute top-1/2 -translate-y-1/2 right-4 h-full flex items-center">
            <CartButton />
        </div>
        
        {/* Logo */}
        <div className="flex items-center justify-center mb-2 md:mb-4">
            {/* Desktop Logo */}
            <Link href="/" aria-label="YUMSQUAD Home" className="hidden md:block">
              <h1 className="font-headline text-5xl font-bold text-accent">YUMSQUAD</h1>
            </Link>
            {/* Mobile Logo */}
            <Link href="/" aria-label="YUMSQUAD Home" className="md:hidden">
              <Image src="https://i.ibb.co/vx7Sc5Yf/image.png" alt="Yumsquad Logo" width={288} height={96} className="h-16 w-auto"/>
            </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center justify-center flex-wrap gap-x-1 gap-y-1 sm:gap-x-2 md:gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Button asChild variant="ghost" className="font-headline text-sm md:text-lg tracking-wider px-2 sm:px-3">
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
}
