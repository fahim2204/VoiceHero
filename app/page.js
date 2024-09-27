import HeroSection from "../components/HeroSection";
import PlatformSection from "../components/PlatformSection";
import InfoSection from "../components/InfoSection";
import BenefitSection from "../components/BenefitSection";
import FeatureSection from "../components/FeatureSection";
import FaqSection from "../components/FaqSection";
import GetStartedSection from "../components/GetStartedSection";
import UsecaseSection from "../components/UsecaseSection";
import PricingCards from "../components/PricingCards";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <UsecaseSection />
      {/* <PlatformSection /> */}
      <InfoSection />
      <BenefitSection />
      <FeatureSection />
      <PricingCards />
      <FaqSection />
      <GetStartedSection />
    </main>
  );
}
