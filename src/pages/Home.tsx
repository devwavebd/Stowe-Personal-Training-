import { HeroSection } from '../components/home/HeroSection';
import { TrustBanner } from '../components/home/TrustBanner';
import { ServicesSection } from '../components/home/ServicesSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { AboutSnippet } from '../components/home/AboutSnippet';
import { TestimonialSection } from '../components/home/TestimonialSection';
import { FAQSection } from '../components/home/FAQSection';
import { CTASection } from '../components/home/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrustBanner />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <AboutSnippet />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
