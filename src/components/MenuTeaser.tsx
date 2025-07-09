"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const galleryImages = [
  { src: "https://i0.wp.com/afrovitalityeats.com/wp-content/uploads/2017/07/Easy-Baked-Basmati-jollof-rice.jpg?resize=1200%2C1200&ssl=1", alt: "Jollof Rice", hint: "jollof rice" },
  { src: "https://www.foodandwine.com/thmb/hJKqrZ-6S7NQJYadNnKi8zdLrio=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/creamy-chicken-stew-FT-RECIPE1021-24e3084b5c0b47ccba4e82272b68f0c7.jpg", alt: "Chicken Stew", hint: "chicken stew" },
  { src: "https://yellowchilis.com/wp-content/uploads/2023/08/jamaican-curry-chicken.jpg", alt: "Chicken Curry", hint: "chicken curry" },
  { src: "https://homesteading.com/wp-content/uploads/2020/07/grilled-goat-goat-recipes-px.jpg", alt: "Grilled Goat", hint: "grilled goat" },
  { src: "https://boondockingrecipes.com/wp-content/uploads/2025/02/3.-Congolese-Makayabu-Recipe-1-600x600.jpg", alt: "Makayabo", hint: "salted cod" },
  { src: "https://img.hellofresh.com/w_3840,q_auto,f_auto,c_limit,fl_lossy/recipes/image/cajun-spiced-bass-8422e3ab-7cd368ae.jpg", alt: "Fried Sea Bass", hint: "fried fish" },
  { src: "https://ichef.bbc.co.uk/ace/standard/1600/food/recipes/caribbean_jerk_chicken_18860_16x9.jpg.webp", alt: "Jerk Chicken", hint: "jerk chicken" },
  { src: "https://belquistwist.com/wp-content/uploads/2022/07/sweet-plantain-and-cheese-fritters-500x375.jpg", alt: "Plantain Fritters", hint: "plantain fritters" },
  { src: "https://static.wixstatic.com/media/f00cb0_a3acb8262716490783fd83dc1bd82516~mv2_d_4752_3168_s_4_2.jpeg/v1/fit/w_2500,h_1330,al_c/f00cb0_a3acb8262716490783fd83dc1bd82516~mv2_d_4752_3168_s_4_2.jpeg", alt: "Yumsquad Classic Burger", hint: "classic burger" },
  { src: "https://www.thespicedchickpea.com/media/1863/img_2137.jpg", alt: "Spicy Bird Burger", hint: "spicy chicken burger" },
  { src: "https://i.pinimg.com/736x/2d/a5/70/2da570da1fc119c349adc15f6fe7147d.jpg", alt: "Veggie Supreme Burger", hint: "veggie burger" },
  { src: "https://staycreative.blog/wp-content/uploads/2020/11/image-1.jpg", alt: "Seasoned Fries", hint: "seasoned fries" },
  { src: "https://www.marthastewart.com/thmb/zC99YuNR6nsRMJ8krUmrMlCPWOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/348566-john-legends-macaroni-and-cheese-13-2-d3432fb58ec04b3580e4be3e30fcaa26.jpg", alt: "Mac & Cheese", hint: "mac cheese" },
]

export function MenuTeaser() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  return (
    <section id="gallery" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl text-primary font-bold">From Our Kitchen</h2>
          <p className="text-base sm:text-lg text-foreground/80 mt-2">A gallery of our vibrant flavors.</p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      data-ai-hint={image.hint}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
