"use client";
import { ProjectsSection } from "./ProjectsSection";
import { IntroSection } from "./IntroSection.jsx/index.js";
import { SocialMediaSection } from "./SocialMediaSection";
import { ExperienceSection } from "./ExperienceSection";
import { EducationSection } from "./EducationSection";
import { SkillsSection } from "./SkillsSection";
import Image from "next/image";
import photo from "../../../public/Profile.jpeg";

export function LandingPage() {
  return (
    <>
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
  );
}