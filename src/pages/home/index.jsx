import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import Navbar from "../../components/navbar/Navbar";
import PricingAndPlans from "../../components/pricing/Pricing";
import Testimonials from "../../components/testimonials/Testimonials";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <>
      <Navbar />

      <Element name="/">
        <Hero />
      </Element>
      <Element name="features">
        <Features />
      </Element>
      <Element name="how-it-works">
        <HowItWorks />
      </Element>
      <Testimonials />
      <Element name="pricing">
        <PricingAndPlans />
      </Element>
      <Footer />
    </>
  );
};

export default Home;
