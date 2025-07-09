import { Instagram } from "lucide-react";

export function InstagramCallout() {
  return (
    <section id="instagram" className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto text-center px-4">
        <a 
          href="https://www.instagram.com/yumsquad_caterng/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit our Instagram page"
          className="inline-block"
        >
          <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-4 hover:text-accent transition-colors" />
        </a>
        <h3 className="font-headline text-2xl sm:text-3xl text-primary font-bold mb-2">
          Follow us on Instagram for food pics!
        </h3>
      </div>
    </section>
  )
}
