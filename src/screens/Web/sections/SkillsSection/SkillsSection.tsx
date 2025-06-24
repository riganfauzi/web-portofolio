import { Card, CardContent } from "../../../../components/ui/card";

export const SkillsSection = (): JSX.Element => {
  const skills = [
    {
      name: "Figma",
      image: "/figma-4642727-4642727-1-removebg-1.png",
      background: "bg-[url(/rectangle-20.png)]",
      imageStyles: "w-[137px] h-[147px] top-5 left-[23px]",
    },
    {
      name: "Flutter",
      image: "/devicon-flutter-1.png",
      background: "bg-[url(/rectangle-18.png)]",
      imageStyles: "w-[166px] h-[166px] top-2 left-2",
    },
    {
      name: "CSS",
      image: "/css3-1.png",
      background: "bg-[url(/rectangle-18-1.png)]",
      imageStyles: "w-[166px] h-[166px] top-2 left-2",
    },
    {
      name: "React",
      image: "/group-13-2.png",
      background: "bg-[url(/rectangle-18-2.png)]",
      imageStyles: "w-[166px] h-[166px] top-2 left-2",
    },
    {
      name: "HTML",
      image: "/html--1--1.png",
      background: "bg-[url(/rectangle-17.png)]",
      imageStyles: "w-[166px] h-[166px] top-2 left-2",
    },
  ];

  return (
    <section className="w-full py-16 relative">
      <div className="container mx-auto">
        <div className="relative mb-16">
          <h2 className="text-4xl font-heading-2 font-semibold underline text-foundation-blackblack-400 relative z-10">
            Tools and Skills
          </h2>
          <div className="absolute top-0 left-0 text-[200px] font-semibold font-['Poppins',Helvetica] text-transparent [-webkit-text-stroke:1px_#84838333] tracking-[0] text-justify">
            TOOLS AND SKILLS
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-16 md:gap-22">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className={`relative w-[182px] h-[182px] ${skill.background} bg-[100%_100%] border-none`}
            >
              <CardContent className="p-0 h-full flex items-center justify-center">
                <img
                  className={`absolute object-cover ${skill.imageStyles}`}
                  alt={skill.name}
                  src={skill.image}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
