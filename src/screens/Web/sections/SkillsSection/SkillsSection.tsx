import { useRef} from "react";
import { Card, CardContent, CardTitle } from "../../../../components/ui/card";

export const SkillsSection = (): JSX.Element => {
  const sectionRef = useRef(null);

  const technicalSkills = [
     {
    name: "Figma",
    image: "/assets/images/figma.png",
    description:
      "Skilled in designing intuitive user interfaces, creating interactive prototypes, and collaborating efficiently with design and development teams using Figma.",
  },
  {
    name: "Flutter",
    image: "/assets/images/flutter.png",
    description:
      "Experienced in building fast and responsive cross-platform mobile applications using Flutter’s rich widget library and efficient architecture.",
  },
  {
    name: "Dart",
    image: "/assets/images/dart.png",
    description:
      "Proficient in writing clean, structured, and scalable Dart code, the primary language for Flutter app development.",
  },
  {
    name: "CSS",
    image: "/assets/images/css.png",
    description:
      "Expertise in styling layouts, animations, and responsive designs with CSS to deliver optimal web experiences across devices.",
  },
  {
    name: "React",
    image: "/assets/images/react.png",
    description:
      "Develop dynamic and reusable user interface components in React to create seamless and interactive web applications.",
  },
  {
    name: "TypeScript",
    image: "/assets/images/typescript.png",
    description:
      "Use TypeScript to write strongly typed code that enhances code quality, maintainability, and scalability in complex projects.",
  },
  {
    name: "HTML",
    image: "/assets/images/html.png",
    description:
      "Solid understanding of semantic HTML to ensure accessibility and improve SEO for web pages.",
  },
  {
    name: "Git",
    image: "/assets/images/git.png",
    description:
      "Manage version control and collaborate effectively using Git for clean project history and teamwork.",
  },
  {
    name: "Tailwind CSS",
    image: "/assets/images/tailwind.png",
    description:
      "Utilize Tailwind CSS’s utility-first approach for rapid, consistent, and customizable styling of modern web designs.",
  },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`relative w-full py-[90px] mt-12`}
      data-aos="fade-up" 
      data-aos-duration="1000" 
    >
      <div className="px-6 md:px-20">
        <div className="relative mb-24 text-center">
          <h2 className="text-4xl font-heading-2 font-semibold underline text-foundation-blackblack-400 relative z-10">
            Tools and Skills
          </h2>
          <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 text-[200px] font-semibold font-['Poppins',Helvetica] text-transparent [-webkit-text-stroke:1px_#84838333] tracking-[0] whitespace-nowrap z-0">
            TOOLS AND SKILLS
          </div>
        </div>
        <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-pl-6
                        justify-start md:justify-center w-full max-w-7xl mx-auto gap-x-6 gap-y-8 pb-4 hide-scrollbar">
          {technicalSkills.map((skill, index) => (
            <Card
              key={index}
              className="snap-start flex-shrink-0 w-[calc(80vw-48px)] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] xl:w-[calc(20%-20px)]
              min-h-[240px] flex flex-col items-center justify-center p-4
              bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.03]
              hover:bg-[#ECE9FF] transition-all duration-300 ease-in-out cursor-pointer group text-center"
            >
              <CardContent className="flex flex-col items-center text-center p-0">
                <div className="w-20 h-20 flex items-center justify-center mb-4 bg-white rounded-md overflow-hidden transition-colors duration-300 group-hover:bg-[#ECE9FF]">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <CardTitle className="text-lg font-semibold text-foundation-blackblack-400 group-hover:text-[#5D45CC] transition-colors duration-300">
                  {skill.name}
                </CardTitle>
                <p className="text-xs text-gray-700 mt-2 hidden md:block group-hover:text-gray-800 transition-colors duration-300">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
