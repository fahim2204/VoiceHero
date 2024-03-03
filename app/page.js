import HeroSection from "../components/HeroSection";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeaderSection />
      <HeroSection />
      <FooterSection />
    </main>
  );
}
