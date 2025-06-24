import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const ProjectsSection = (): JSX.Element => {
  // Project data for mapping
  const projects = [
    {
      id: "sospet",
      type: "UI/UX Design",
      image: "/sospet.png",
      alt: "Sospet",
      bgImage: "/rectangle-6-2.svg",
    },
    {
      id: "karyapro",
      type: "UI/UX Design",
      image: "/karyapro-1.png",
      alt: "Karyapro",
      bgImage: "/rectangle-6-4.svg",
    },
    {
      id: "khidma",
      type: "Mobile Apps",
      image: "/khidma-1.png",
      alt: "Khidma",
      bgImage: "/rectangle-6.svg",
    },
    {
      id: "ngiklan",
      type: "Mobile Apps",
      image: "/ngiklan.png",
      alt: "Ngiklan",
      bgImage: "/rectangle-6-1.svg",
    },
    {
      id: "dangdutmania",
      type: "Mobile Apps",
      image: "/dangdutmania.png",
      alt: "Dangdutmania",
      bgImage: "/rectangle-6-3.svg",
    },
  ];

  return (
    <section className="relative w-full py-16 mt-16">
      <div className="relative w-full h-[300px] mb-16">
        <div className="absolute w-full top-[135px] left-0 font-normal text-foundation-blackblack-400 text-4xl">
          <span className="font-heading-2 underline text-[length:var(--heading-2-font-size)] font-[number:var(--heading-2-font-weight)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)]">
            Projects
          </span>
        </div>

        <div className="absolute w-full h-[300px] top-0 left-0 [-webkit-text-stroke:1px_#84838333] font-['Poppins',Helvetica] font-semibold text-transparent text-[200px] text-justify leading-[normal]">
          MY PROJECT
        </div>
      </div>

      <ScrollArea className="w-full h-[508px]">
        <div className="flex space-x-6 pb-4">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="flex-shrink-0 w-[416px] h-[508px] shadow-[0px_4px_55px_#a693ff40]"
              style={{
                backgroundImage: `url(${project.bgImage})`,
                backgroundSize: "100% 100%",
              }}
            >
              <div className="w-full h-[65px] mt-11">
                <div className="flex w-full h-[42px] items-start px-[37px]">
                  <div className="flex-1 mt-[-1.00px] mb-[-5.00px] font-['Poppins',Helvetica] font-semibold text-foundationbluenormal text-[32px] tracking-[-0.48px] leading-[normal]">
                    {project.type}
                  </div>
                </div>
                <img
                  className="w-full h-px mt-[23px]"
                  alt="Line"
                  src="/line-3.svg"
                />
              </div>

              <CardContent className="p-0 w-full h-[351px] mt-[82px]">
                <div className="relative h-[339px] mt-3">
                  <div className="absolute w-[328px] h-[317px] top-0 left-11 bg-[#757575] rounded-[35px] opacity-50" />
                  <div className="absolute w-[374px] h-[314px] top-[25px] left-[21px] bg-[#9e9d9d] rounded-[35px]" />
                  <img
                    className="absolute w-[416px] h-[289px] top-[50px] left-0 object-cover"
                    alt={project.alt}
                    src={project.image}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
