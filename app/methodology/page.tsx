import MethodologyHero from "@/components/methodology/MethodologyHero";
import MethodologyStages from "@/components/methodology/MethodologyStages";
import ReadyToPlan from "@/components/methodology/ReadyToPlan";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/ui/Reveal";

export default function MethodologyPage() {
  return (
    <main>
      <div id="m-hero">
        <MethodologyHero />
      </div>
      <Reveal>
        <div id="m-stages">
          <MethodologyStages />
        </div>
      </Reveal>
      <Reveal>
        <div id="m-ready">
          <ReadyToPlan />
        </div>
      </Reveal>
      <div id="m-footer">
        <Footer />
      </div>
    </main>
  );
}
