import HeroSection from "@/components/home/HeroSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProjectSection from "@/components/home/ProjectSection";
import SkillSection from "@/components/home/SkillSection";
import Navbar from "@/components/layout/Navbar";


export default function Home() {
  return (
   <div>
    <Navbar/>
    <HeroSection/>
    <SkillSection/>
    <ProjectSection/>
    <ProcessSection/>
   </div>
  );
}
