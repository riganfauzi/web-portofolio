import { Card, CardContent } from "../../../../components/ui/card";
import { useState, useRef, useEffect } from "react";

export const AboutMeSection = (): JSX.Element => {

  const fullText = "As a passionate UI/UX Designer with 2 years of experience, I specialize in creating intuitive, user-centered digital products that blend aesthetic appeal with seamless functionality. My approach is rooted in understanding user needs, translating complex problems into elegant solutions, and ensuring a delightful experience. I'm proficient in Figma and have a strong grasp of design principles, user research, wireframing, prototyping, and usability testing. I thrive in collaborative environments, constantly seeking to learn and adapt to the evolving landscape of design and technology.";

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const sectionRef = useRef(null);

  const maxLength = 350;

  const toggleExpand = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    
    setIsAnimating(true);
    setIsExpanded((prevIsExpanded: boolean) => {
      const newState = !prevIsExpanded;
      
      // Reset animation state after transition completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      
      return newState;
    });
  };

  // Get the text to display based on expanded state
  const getDisplayText = () => {
    if (isExpanded) {
      return fullText;
    }
    return fullText.substring(0, maxLength) + '...';
  };

  // Calculate actual height for smooth transitions
  const [collapsedHeight, setCollapsedHeight] = useState<number>(0);
  const [expandedHeight, setExpandedHeight] = useState<number>(0);

  useEffect(() => {
    if (textRef.current) {
      // Measure collapsed height
      const originalText = textRef.current.textContent;
      textRef.current.textContent = fullText.substring(0, maxLength) + '...';
      const collapsed = textRef.current.scrollHeight;
      
      // Measure expanded height
      textRef.current.textContent = fullText;
      const expanded = textRef.current.scrollHeight;
      
      // Restore original text
      textRef.current.textContent = originalText;
      
      setCollapsedHeight(collapsed);
      setExpandedHeight(expanded);
    }
  }, []);

  return (
    <section
      id="about-me"
      ref={sectionRef}
      className={`w-full py-6 sm:py-8 md:py-10 mt-4 sm:mt-8 md:mt-12 lg:mt-[80px] bg-foundation-bluelight-active`}
      data-aos="fade-up" 
      data-aos-duration="1000" 
    >
      <div className="flex flex-col items-start gap-8 sm:gap-12 md:gap-16 max-w-[1260px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <h2 className="font-heading-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-foundation-blackblack-400 underline text-center w-full">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row lg:items-center items-start gap-8 sm:gap-12 md:gap-16 w-full">
          {/* Avatar Image */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <img
              src="/assets/images/avatar.png"
              alt="Avatar"
              className="max-w-full h-auto object-contain w-64 sm:w-80 md:w-96 lg:w-[400px] max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[400px]"
            />
          </div>

          {/* Text Content */}
          <Card className="border-none bg-transparent shadow-none w-full lg:flex-1">
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <p
                  ref={textRef}
                  className={`font-poppins text-base sm:text-lg md:text-xl lg:text-2xl text-justify text-[#3d3d3d] leading-relaxed
                             transition-all duration-500 ease-in-out
                             ${isAnimating ? 'pointer-events-none' : ''}`}
                  style={{
                    height: isExpanded 
                      ? expandedHeight > 0 ? `${expandedHeight}px` : 'auto'
                      : collapsedHeight > 0 ? `${collapsedHeight}px` : 'auto',
                    overflow: 'hidden'
                  }}
                >
                  {getDisplayText()}
                </p>
                
                {/* Toggle Button */}
                {fullText.length > maxLength && (
                  <button
                    className={`text-[#7456ff] cursor-pointer font-semibold hover:underline transition-all duration-200 mt-2 block
                               ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:text-[#5a3fd1]'}`}
                    onClick={toggleExpand}
                    disabled={isAnimating}
                    aria-label={isExpanded ? "Show less text" : "Show more text"}
                  >
                    {isExpanded ? "show less" : "show more"}
                  </button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};