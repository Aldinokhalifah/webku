import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import CarGallery from "@/components/CarGallery";
import Testimonials from "@/components/Testimonials";
import CustomerCarousel from "@/components/CustomerCarousel";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Carousel />
        <main>
          <Hero />
          <CarGallery />
          <Testimonials />
          <CustomerCarousel />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
}