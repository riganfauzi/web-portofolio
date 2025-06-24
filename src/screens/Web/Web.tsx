import { AboutMeSection } from "./sections/AboutMeSection";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const Web = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <NavigationSection />
      <ContactSection />
      <AboutMeSection />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};
