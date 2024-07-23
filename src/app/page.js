import HeroSection from "@/components/home/HeroSection";
import SkillSection from "@/components/home/SkillSection";
import Navbar from "@/components/layout/Navbar";


export default function Home() {
  return (
   <div>
    <Navbar/>
    <HeroSection/>
    <SkillSection/>
   </div>
  );
}
