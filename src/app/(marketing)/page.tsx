import Faq1 from "@/components/mvpblocks/faq-1";
import Features from "@/components/mvpblocks/feature-1";
import GradientHero from "@/components/mvpblocks/gradient-hero";
import SimplePricing from "@/components/mvpblocks/simple-pricing";
import TestimonialsCarousel from "@/components/mvpblocks/testimonials-carousel";

export default function Home() {
  return (
    <>
      <GradientHero />
      <Features />
      <TestimonialsCarousel />
      <SimplePricing />
      <Faq1 />
    </>
  );
}
