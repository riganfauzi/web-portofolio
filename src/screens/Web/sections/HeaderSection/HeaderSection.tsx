import { FileTextIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { useState, useRef, useEffect } from "react";

export const HeaderSection = (): JSX.Element => {

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  
  const [hasShownSessionWelcome, setHasShownSessionWelcome] = useState<boolean>(() => {
    try {
      const welcomeStatus = sessionStorage.getItem('sessionWelcomeShown');
      return welcomeStatus ? JSON.parse(welcomeStatus) : false;
    } catch (error) {
      console.error("Failed to read from sessionStorage:", error);
      return false;
    }
  });
  
  useEffect(() => {
    if (isVisible && !hasShownSessionWelcome) {
      
      console.log("Selamat datang kembali!"); 
      try {
        sessionStorage.setItem('sessionWelcomeShown', JSON.stringify(true));
        setHasShownSessionWelcome(true);
      } catch (error) {
        console.error("Failed to write to sessionStorage:", error);
      }
    }
  }, [isVisible, hasShownSessionWelcome]);

  return (
    <section
      id="header"
      ref={sectionRef}
      className={`flex flex-col lg:flex-row w-full items-center justify-between px-6 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-[90px] lg:py-[66px] relative mt-12 sm:mt-8 md:mt-12 lg:mt-[80px]`}
      data-aos="fade-up" 
      data-aos-duration="1000" 
    >
      
      {/* Text Content */}
      <div className="flex flex-col w-full lg:w-[537px] items-start gap-8 sm:gap-12 md:gap-16 lg:gap-[90px] relative order-2 lg:order-1">
        <div className="flex flex-col items-start justify-center gap-4 sm:gap-5 md:gap-6 relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2 sm:gap-3 relative self-stretch w-full">
            <h2 className="relative self-stretch mt-[-1.00px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-foundation-blackblack-400 text-2xl sm:text-3xl md:text-4xl lg:text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
              Hallo 👋
            </h2>

            <h1 className="relative self-stretch [font-family:'Poppins',Helvetica] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[52px] tracking-[0] leading-[1.2] lg:leading-[normal]">
              <span className="text-[#3d3d3d]">I am</span>
              <span className="text-pr-lavender"> Rigan Nur Fauzi</span>
            </h1>
          </div>

          <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-base sm:text-lg md:text-xl tracking-[0] leading-5 sm:leading-6 md:leading-7">
            <span className="font-medium text-[#999999] leading-[0.1px]">
              UI{" "}
            </span>
            <span className="[font-family:'Noto_Sans',Helvetica] font-medium text-[#999999]">
              /
            </span>
            <span className="font-medium text-[#999999] leading-[0.1px]">
              {" "}
              UX Design Enthusiast
            </span>
          </p>
        </div>

        <Button
          className="inline-flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-[15px] bg-pr-lavender rounded-[5px] text-white text-sm sm:text-base w-fit"
          variant="default"
        >
          <FileTextIcon className="w-4 h-4" />
          <span className="relative w-fit mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-[length:var(--heading-6-font-size)] text-justify tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
            Download CV
          </span>
        </Button>
      </div>

      {/* Image */}
      <div className="w-full lg:w-auto flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
        <img 
          src="/assets/images/get_in_touch.png" 
          alt="Get in Touch"
          className="max-w-full h-auto object-contain w-full sm:w-80 md:w-96 lg:w-[500px] max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[400px]" 
        />
      </div>
      
    </section>
  );
};
