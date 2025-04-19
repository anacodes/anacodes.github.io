"use client";
import { NavBar } from "../components/ui/sections/FloatingNavbar";
import { User, Briefcase, GraduationCap, Zap, Terminal } from "lucide-react";
import { LandingPage } from "../components/ui/sections/HomePage";

export default function Home() {
  const navItems = [
    { name: "About", url: "/", icon: User },
    { name: "Experience", url: "#Experience", icon: Briefcase },
    { name: "Education", url: "#Education", icon: GraduationCap },
    { name: "Skills", url: "#Skills", icon: Zap },
    { name: "Projects", url: "#Projects", icon: Terminal },
  ];
  return (
    <div className="block mx-auto">
      <NavBar items={navItems} />
      <LandingPage />
    </div>
  );
}
