import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import HowItWorks from "../../components/how it works/HowItWorks";
import Navbar from "../../components/navbar/Navbar";
import PricingAndPlans from "../../components/pricing/Pricing";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <PricingAndPlans />
      <Footer />
    </>
  );
};

export default Home;
