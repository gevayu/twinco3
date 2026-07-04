import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import Leadership from "@/components/about/Leadership";
import ReadyToPlan from "@/components/methodology/ReadyToPlan";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/ui/Reveal";

export default function AboutPage() {
  return (
    <main>
      <div id="a-hero">
        <AboutHero />
      </div>
      <Reveal>
        <div id="a-story">
          <OurStory />
        </div>
      </Reveal>
      <Reveal>
        <div id="a-leadership">
          <Leadership />
        </div>
      </Reveal>
      <Reveal>
        <div id="a-ready">
          <ReadyToPlan />
        </div>
      </Reveal>
      <div id="a-footer">
        <Footer />
      </div>
    </main>
  );
}
