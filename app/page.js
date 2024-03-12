import HeroSection from "../components/HeroSection";
import PlatformSection from "../components/PlatformSection";
import InfoSection from "../components/InfoSection";
import BenefitSection from "../components/BenefitSection";
import FeatureSection from "../components/FeatureSection";
import FaqSection from "../components/FaqSection";
import GetStartedSection from "../components/GetStartedSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <PlatformSection /> */}
      <InfoSection />
      <BenefitSection />
      <FeatureSection />
      <FaqSection />
      <GetStartedSection />
    </main>
  );
}
