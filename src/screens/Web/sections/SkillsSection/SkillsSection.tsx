import { useRef} from "react";
import { Card, CardContent, CardTitle } from "../../../../components/ui/card";

export const SkillsSection = (): JSX.Element => {
  const sectionRef = useRef(null);

  const technicalSkills = [
    {
      name: "Figma",
      image: "/assets/images/figma.png",
      description: "A modern UI/UX design tool used for prototyping and collaborative interface design.",
    },
    {
      name: "Flutter",
      image: "/assets/images/flutter.png",
      description: "A cross-platform framework for building mobile applications using a single codebase.",
    },
    {
      name: "Dart",
      image: "/assets/images/dart.png",
      description: "The programming language behind Flutter, designed for fast, scalable, and structured apps.",
    },
    {
      name: "CSS",
      image: "/assets/images/css.png",
      description: "A styling language for creating responsive and visually appealing web interfaces.",
    },
    {
      name: "React",
      image: "/assets/images/react.png",
      description: "A JavaScript library for building fast, dynamic, and interactive user interfaces.",
    },
    {
      name: "TypeScript",
      image: "/assets/images/typescript.png",
      description: "A strongly typed superset of JavaScript that enhances code quality and scalability.",
    },
    {
      name: "HTML",
      image: "/assets/images/html.png",
      description: "The core markup language used to structure web content semantically.",
    },
    {
      name: "Git",
      image: "/assets/images/git.png",
      description: "A distributed version control system for tracking changes and collaborating on code.",
    },
    {
      name: "Tailwind CSS",
      image: "/assets/images/tailwind.png",
      description: "A utility-first CSS framework for quickly building modern and responsive designs.",
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

        <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-8">
          {technicalSkills.map((skill, index) => (
            <Card
              key={index}
              className="w-[90%] sm:w-[47%] md:w-[31%] lg:w-[23%] xl:w-[18%]
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
