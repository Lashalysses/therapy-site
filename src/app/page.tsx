import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navigation />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <HowItWorks />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
