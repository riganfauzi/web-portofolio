import { useState, useRef, useEffect } from "react"; 

export const SkillsSection = (): JSX.Element => {
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
  const skills = [
    {
      name: "Figma",
      image: "/assets/images/figma.png",
      background: "bg-[url(/rectangle-20.png)]",
      imageStyles: "w-[137px] h-[147px] top-5 left-[23px]",
    },
    {
      name: "Flutter",
      image: "/assets/images/flutter.png",
      background: "bg-[url(/rectangle-18.png)]",
      imageStyles: "w-[166px] h-[166px] top-2 left-2",
    },
    {
      name: "CSS",
      image: "/assets/images/css.png",
      background: "bg-[url(/rectangle-18-1.png)]",
      imageStyles: "w-[166px] h-[166px] top-2 left-2",
    },
    {
      name: "React",
      image: "/assets/images/react.png",
      background: "bg-[url(/rectangle-18-2.png)]",
      imageStyles: "w-[166px] h-[166px] top-2 left-2",
    },
    {
      name: "HTML",
      image: "/assets/images/html.png",
      background: "bg-[url(/rectangle-17.png)]",
      imageStyles: "w-[166px] h-[166px] top-2 left-2",
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`relative w-full py-[90px] mt-16 fade-up-initial ${isVisible ? 'fade-up-animate' : ''}`}>
      <div className="px-[30px] md:px-[90px]">
        <div className="relative mb-[200px] text-center">
          <h2 className="text-4xl font-heading-2 font-semibold underline text-foundation-blackblack-400 relative z-10">
            Tools and Skills
          </h2>
          <div className="absolute top-[-120px] left-[-500px] text-[200px] font-semibold font-['Poppins',Helvetica] text-transparent [-webkit-text-stroke:1px_#84838333] tracking-[0] whitespace-nowrap z-0">
            TOOLS AND SKILLS
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-16 md:gap-22 ">
          {skills.map((skill, index) => (
            <div key={index} className={`relative w-[182px] h-[182px] ${skill.background} bg-[100%_100%] border-none flex items-center justify-center`}>
              <img
                className={'absolute object-cover ${skill.imageStyles}'}
                src={skill.image}
                alt={skill.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
