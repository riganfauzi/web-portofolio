import { AboutMeSection } from "./sections/AboutMeSection";
import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const Web = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full overflow-x-hidden">
      <NavigationSection />
      <HeaderSection />
      <AboutMeSection />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};
