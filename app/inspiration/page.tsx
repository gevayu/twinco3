import InspirationHero from "@/components/inspiration/InspirationHero";
import InspirationIntro from "@/components/inspiration/InspirationIntro";
import InspirationCTA from "@/components/inspiration/InspirationCTA";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/ui/Reveal";

export default function InspirationPage() {
  return (
    <main>
      <div id="i-hero">
        <InspirationHero />
      </div>
      <Reveal>
        <div id="i-intro">
          <InspirationIntro />
        </div>
      </Reveal>
      <Reveal>
        <div id="i-cta">
          <InspirationCTA />
        </div>
      </Reveal>
      <div id="i-footer">
        <Footer />
      </div>
    </main>
  );
}
