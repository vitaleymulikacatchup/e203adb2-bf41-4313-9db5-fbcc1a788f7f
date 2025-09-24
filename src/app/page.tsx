use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import YearRoadmapTimeline from '@/components/sections/layouts/roadmap/YearRoadmapTimeline';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/images/logo.svg"
          logoAlt="DOGE COIN"
          buttonText="Get DOGE"
          onButtonClick={() => alert('Button clicked!')}
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero
          title="Welcome to DogeCoin!"
          subtitle="The best memecoin of all time!"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="Connect with us"
          descriptions={["Find us on Telegram!", "Follow us on Twitter!", "Join our Community!"]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy DOGE"
          steps={[
            { title: "Step 1", description: "Create a Wallet", image: "/images/placeholder1.avif", position: 'left', isCenter: false },
            { title: "Step 2", description: "Choose an Exchange", image: "/images/placeholder2.avif", position: 'center', isCenter: true },
            { title: "Step 3", description: "Trade for DOGE", image: "/images/placeholder3.avif", position: 'right', isCenter: false },
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics Overview"
          description="A brief overview of DOGE's tokenomics"
          tokenData={[
            { value: "100M", description: "Total Supply" },
            { value: "1M", description: "Market Cap" },
            { value: "10%," description: "Tax" },
          ]}
        />
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24">
        <ImageFAQ
          items={[
            { title: "What is Dogecoin?", content: "Dogecoin is a cryptocurrency..." },
            { title: "How to buy DOGE?", content: "You can buy DOGE on several exchanges..." },
            { title: "What makes DOGE unique?", content: "It has a vibrant community!" },
          ]}
        />
      </div>

      <div id="roadmap" data-section="roadmap" className="scroll-mt-24">
        <YearRoadmapTimeline
          items={[
            { year: "2020", title: "Launch", description: "DogeCoin launched successfully!" },
            { year: "2021", title: "Community Growth", description: "The community grows significantly!" },
            { year: "2022", title: "Tokenomics Revisions", description: "New tokenomics implemented successfully!" },
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="/images/logo.svg"
          logoAlt="DOGE COIN"
          logoText="DOGE COIN"
          items={[
            { label: "Contact", onClick: () => alert('Contact clicked!') },
            { label: "Privacy", onClick: () => alert('Privacy clicked!') },
            { label: "Terms", onClick: () => alert('Terms clicked!') },
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}
