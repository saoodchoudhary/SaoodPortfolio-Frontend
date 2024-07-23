import HeroSection from "@/components/home/HeroSection";
import HireMeSection from "@/components/home/HireMeSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProjectSection from "@/components/home/ProjectSection";
import SkillSection from "@/components/home/SkillSection";
import Navbar from "@/components/layout/Navbar";


export default function Home() {
  return (
   <div>
    <HeroSection/>
    <SkillSection/>
    <ProjectSection/>
    <ProcessSection/>
    <HireMeSection/>
   </div>
  );
}
