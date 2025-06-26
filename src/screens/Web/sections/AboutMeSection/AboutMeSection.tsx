import { Card, CardContent } from "../../../../components/ui/card";
import { useState, useRef, useEffect } from "react";

export const AboutMeSection = (): JSX.Element => {

  const fullText = "As a passionate UI/UX Designer with 2 years of experience, I specialize in creating intuitive, user-centered digital products that blend aesthetic appeal with seamless functionality. My approach is rooted in understanding user needs, translating complex problems into elegant solutions, and ensuring a delightful experience. I'm proficient in Figma and have a strong grasp of design principles, user research, wireframing, prototyping, and usability testing. I thrive in collaborative environments, constantly seeking to learn and adapt to the evolving landscape of design and technology.";
  
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 350; 

  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedText = isExpanded ? fullText : fullText.substring(0, maxLength) + '...';

  
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
  

  return (
    <section
      id="about-me"
      ref={sectionRef}
      className={`w-full py-16 mt-[120px] bg-foundation-bluelight-active fade-up-initial ${isVisible ? 'fade-up-animate' : ''}`}> 
      <div className="flex flex-col items-start gap-16 max-w-[1260px] mx-auto ">
        <h2 className="font-heading-2 text-4xl font-semibold text-foundation-blackblack-400 underline text-center w-full">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-16 w-full">
          <img src="/assets/images/avatar.png" alt="Avatar" className="max-w-full max-h-full object-contain" width={400} height={400} />

          <Card className="border-none bg-transparent shadow-none">
            <CardContent className="p-0">
              <p className="font-poppins text-[32px] text-justify text-[#3d3d3d]">
                {displayedText}{" "}
                {fullText.length > maxLength && ( 
                  <span
                    className=" text-[#7456ff] cursor-pointer font-semibold"
                    onClick={toggleExpand} 
                  >
                    {isExpanded ? "show less" : "show more"} 
                  </span>
                )}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};