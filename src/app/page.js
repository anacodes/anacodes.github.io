"use client";
import { NavBar } from "../components/ui/sections/FloatingNavbar";
import { IntroSection } from "../components/ui/sections/IntroSection";
import { SocialMediaSection } from "../components/ui/sections/SocialMediaSection";
import { ProjectsSection } from "../components/ui/sections/ProjectsSection";
import { ExperienceSection } from "../components/ui/sections/ExperienceSection";
import { EducationSection } from "../components/ui/sections/EducationSection";
import { SkillsSection } from "../components/ui/sections/SkillsSection";
import { User, Briefcase, GraduationCap, Zap, Terminal } from "lucide-react";
import Image from "next/image";
import photo from "../public/Profile.jpeg";

export default function Home() {
  const navItems = [
    { name: "About", url: "/", icon: User },
    { name: "Experience", url: "#Experience", icon: Briefcase },
    { name: "Education", url: "#Education", icon: GraduationCap },
    { name: "Skills", url: "#Skills", icon: Zap },
    { name: "Projects", url: "#Projects", icon: Terminal },
  ];
  return (
    <>
    <div className="block mx-auto">
      <NavBar items={navItems} />
      Hello!
    </div>
      <>
        Hello world !
        <div id="About" className="invisible h-16"></div>
        <div className="w-full py-0 lg:pt-28">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 items-center sm:mx-5 md:mx-0 lg:grid-cols-2">
              <div className="flex gap-4 flex-col">
                <IntroSection />
              </div>
              <div>
                <div className="bg-muted w-6/12 mx-auto rounded-full aspect-square overflow-hidden">
                  <Image
                    src={photo}
                    className="object-cover max-w-full max-h-full rounded-full scale-125 transform transition-transform duration-300 hover:scale-150"
                  />
                </div>
                <div className="w-full place-items-center mx-auto py-20">
                  <SocialMediaSection />
                </div>
              </div>
            </div>
          </div>
          <div
            className="container w-full mx-auto py-5 lg:py-10" id="Experience">
            <ExperienceSection />
          </div>
          <div className="container w-full mx-auto py-5 lg:py-10" id="Education">
            <EducationSection />
          </div>
          <div className="container w-full mx-auto py-5 lg:py-20" id="Skills">
            <SkillsSection />
          </div>
          <div className="container w-full mx-auto py-5 lg:py-20" id="Projects">
            <ProjectsSection />
          </div>
        </div>
      </>
    </>
  );
}
