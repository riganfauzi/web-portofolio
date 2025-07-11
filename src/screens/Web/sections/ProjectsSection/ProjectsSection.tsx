import { Card, CardContent } from "../../../../components/ui/card";
import { useRef } from "react";

export const ProjectsSection = (): JSX.Element => {

  const sectionRef = useRef(null);

  const projects = [
    {
      title: "UI/UX Design",
      image: "/assets/images/sospet.png",
    },
    {
      title: "UI/UX Design",
      image: "/assets/images/karyapro.png",

    },
    {
      title: "Mobile Apps",
      image: "/assets/images/khidma.png",
    },
    {
      title: "Mobile Apps",
      image: "/assets/images/ngiklan.png",
    },
    {
      title: "Mobile Apps",
      image: "/assets/images/dangdutmania.png",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      // Hapus kelas animasi kustom, tambahkan data-aos
      className={`relative w-full py-[90px] mt-12`}
      data-aos="fade-up" // AOS animation
      data-aos-duration="1000" // Durasi animasi
    >
      <div className="px-[30px] md:px-[90px]">
        {/* Title Section */}
        <div className="relative w-full h-[300px] mb-16">
          <div className="absolute w-full top-[135px] left-0 font-normal text-foundation-blackblack-400 text-4xl text-center">
            <span className="font-heading-2 underline text-[length:var(--heading-2-font-size)] font-[number:var(--heading-2-font-weight)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)]">
              Projects
            </span>
          </div>
          <div className="absolute w-full h-[300px] top-0 left-[-135px] [-webkit-text-stroke:1px_#84838333] font-['Poppins',Helvetica] font-semibold text-transparent text-[200px] text-justify leading-[normal]">
            MY PROJECT
          </div>
        </div>

        <div className="flex flex-nowrap overflow-x-auto md:flex-wrap md:overflow-x-visible justify-start md:justify-center gap-x-12 gap-y-24 pb-4 hide-scrollbar">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="w-[calc(100vw-60px)] sm:w-[350px] h-[420px] shadow-[0_12px_32px_12px_#a693ff40] flex-shrink-0
                         transition-all duration-300 ease-in-out
                         hover:bg-foundation-bluelight-active hover:shadow-[0_12px_32px_12px_#7456ff80] cursor-pointer"
              style={{
                backgroundSize: "100% 100%",
              }}
            >
              <div className="w-full h-[55px] mt-8">
                <div className="flex w-full h-[38px] items-start px-[30px]">
                  <div className="flex-1 mt-[-1.00px] mb-[-5.00px] font-['Poppins',Helvetica] font-semibold text-foundationbluenormal text-[28px] tracking-[-0.42px] leading-[normal]">
                    {project.title}
                  </div>
                </div>
              </div>

              <CardContent className="p-0 w-full h-[290px] mt-[70px]">
                <div className="relative h-[280px] mt-3">
                  <div className="absolute w-[280px] h-[260px] top-0 left-9 bg-[#757575] rounded-[30px] opacity-50" />
                  <div className="absolute w-[315px] h-[258px] top-[20px] left-[18px] bg-[#9e9d9d] rounded-[30px]" />
                  <img
                    className="absolute w-[350px] h-[240px] top-[40px] left-0 object-cover"
                    alt={`${project.title} Project`}
                    src={project.image}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
