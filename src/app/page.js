"use client"
import HeroSection from "@/components/home/HeroSection";
import HireMeSection from "@/components/home/HireMeSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProjectSection from "@/components/home/ProjectSection";
import SkillSection from "@/components/home/SkillSection";
import Navbar from "@/components/layout/Navbar";
import { Provider } from "react-redux";
import store from "../../store/reducer";
import ClientFeedback from "@/components/home/ClientFeedback";


export default function Home() {
  return (
    
    <Provider store={store}>
   <div>
    <HeroSection/>
    <SkillSection/>
    <ProjectSection/>
    <ProcessSection/>
    <ClientFeedback/>
    <HireMeSection/>
   </div>
    </Provider>
  );
}
