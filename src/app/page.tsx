"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          navItems={[{ name: "hero", id: "hero" }, { name: "about", id: "about" }, { name: "how-to-buy", id: "how-to-buy" }, { name: "tokenomics", id: "tokenomics" }, { name: "faq", id: "faq" }, { name: "footer", id: "footer" }]}
          logoSrc="/images/logo.svg"
          brandName="DogeCoin"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to DogeCoin"
          description="Join the community of playful cryptocurrency enthusiasts."
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About DogeCoin"
          descriptions={["DogeCoin is a fun and vibrant memecoin dedicated to community involvement and playful experiences.", "Join us in the Doge revolution where everyone can participate, share, and grow together!"]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="reveal"
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics"
          description="A transparent view of DogeCoin's economy."
          kpiItems={[
            { value: "1000000000", description: "Total Supply", longDescription: "The cap for DogeCoin, ensuring scarcity is key to value.", icon: { name: "DollarSign" } },
            { value: "100000000", description: "Market Cap", longDescription: "Total value of all DogeCoins in issuance.", icon: { name: "DollarSign" } },
            { value: "10000000", description: "Active Community", longDescription: "Active users and transactions driving DogeCoin growth.", icon: { name: "Users" } }
          ]}
        />
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ
          items={[
            { title: "What is DogeCoin?", content: "DogeCoin is a fun memecoin born from the famous 'Doge' meme." },
            { title: "How to buy DogeCoin?", content: "You can buy DogeCoin on various exchanges using cryptocurrency or fiat." },
            { title: "Is DogeCoin safe?", content: "DogeCoin is secure and backed by a passionate community." },
            { title: "What can I do with DogeCoin?", content: "You can HODL, trade, or even use it for tipping!" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={50}
          columns={[
            { title: "Explore", items: [{ label: "About", onClick: () => {} }, { label: "How to Buy", onClick: () => {} }, { label: "Tokenomics", onClick: () => {} }] },
            { title: "Community", items: [{ label: "FAQ", onClick: () => {} }, { label: "Join Us", onClick: () => {} }] },
            { title: "Legal", items: [{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }] }
          ]}
          copyrightText="© 2023 DogeCoin. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}