import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductShowcase from '@/components/ProductShowcase';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
