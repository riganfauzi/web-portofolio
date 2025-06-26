import { Card, CardContent } from "../../../../components/ui/card";
import { useState, useRef, useEffect } from "react";

export const ProjectsSection = (): JSX.Element => {
  
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
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
      className={`relative w-full py-[90px] mt-16 fade-up-initial ${isVisible ? 'fade-up-animate' : ''}`} >
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

        {/* Grid Layout with Gaps */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-24">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="w-[416px] h-[508px] shadow-[0_12px_32px_12px_#a693ff40] flex-shrink-0"
              style={{
                backgroundSize: "100% 100%",
              }}
            >
              <div className="w-full h-[65px] mt-11">
                <div className="flex w-full h-[42px] items-start px-[37px]">
                  <div className="flex-1 mt-[-1.00px] mb-[-5.00px] font-['Poppins',Helvetica] font-semibold text-foundationbluenormal text-[32px] tracking-[-0.48px] leading-[normal]">
                    {project.title}
                  </div>
                </div>
              </div>

              <CardContent className="p-0 w-full h-[351px] mt-[82px]">
                <div className="relative h-[339px] mt-3">
                  <div className="absolute w-[328px] h-[317px] top-0 left-11 bg-[#757575] rounded-[35px] opacity-50" />
                  <div className="absolute w-[374px] h-[314px] top-[25px] left-[21px] bg-[#9e9d9d] rounded-[35px]" />
                  <img
                    className="absolute w-[416px] h-[289px] top-[50px] left-0 object-cover"
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
