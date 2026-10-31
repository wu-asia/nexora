import SEO from "../components/SEO";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Hero from "../components/home/Hero";
import BrandIntro from "../components/home/BrandIntro";
import ServicesOverview from "../components/home/ServicesOverview";
import TechAdvantages from "../components/home/TechAdvantages";
import Process from "../components/home/Process";
import ContactCTA from "../components/home/ContactCTA";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <SEO path="/" />
      <Hero />
      <BrandIntro />
      <ServicesOverview />
      <TechAdvantages />
      <Process />
      <ContactCTA />
    </>
  );
}
