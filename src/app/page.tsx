"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import VerticalCardRoadmap from '@/components/sections/layouts/roadmap/VerticalCardRoadmap';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal logoSrc="/images/logo.svg" logoAlt="DogeCoin" buttonText="Get DOGE" onButtonClick={() => {}} className="" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero title="Welcome to DogeCoin!" subtitle="The best of the best meme coin!" primaryButtonText="Join Us" secondaryButtonText="Learn More" onPrimaryButtonClick={() => {}} onSecondaryButtonClick={() => {}} />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout title="What is DogeCoin?" descriptions={['An innovative memecoin founded on enthusiasm.', 'Join us as we revolutionize digital currency.']} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy DogeCoin" steps={[{ title: "Step 1", description: "Create an account on an exchange.", image: "/images/logo.svg", position: "left", isCenter: false }, { title: "Step 2", description: "Deposit funds into your account.", image: "/images/logo.svg", position: "center", isCenter: true }, { title: "Step 3", description: "Purchase DogeCoin!", image: "/images/logo.svg", position: "right", isCenter: false }]} />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics title="DogeCoin Tokenomics" description="Understanding the essentials of DogeCoin’s economics." kpiItems={[{ value: "10M", description: "Total Supply" }, { value: "5M", description: "Market Cap" }]} />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ items={[{ title: "What is DogeCoin?", content: "DogeCoin is a meme-based cryptocurrency that was introduced to the market in 2013." }, { title: "How can I invest in DogeCoin?", content: "You can buy DogeCoin from various cryptocurrency exchanges." }]} />
      </div>
      <div id="roadmap" data-section="roadmap" className="scroll-mt-24">
        <VerticalCardRoadmap title="DogeCoin Roadmap" items={[{ title: "Phase 1", description: "Initial development and community building", video: "/images/logo-dot.svg", image: "/images/logo.svg" }, { title: "Phase 2", description: "Expanding use in platforms", video: "/images/logo-dot.svg", image: "/images/logo.svg" }]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo logoSrc="/images/logo.svg" logoAlt="DogeCoin" logoText="DogeCoin" className="" />
      </div>
    </SiteThemeProvider>
  );
}