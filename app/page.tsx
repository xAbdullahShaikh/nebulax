import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import ProjectsSlider from "@/components/ProjectsSlider";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <ProjectsSlider />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
