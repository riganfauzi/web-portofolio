import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../../../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "../../../../lib/utils"; 
import { useState, useRef, useEffect } from "react"; 

export const TestimonialsSection = (): JSX.Element => {
   
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
  
  const testimonials = [
    {
      name: "Adit Praditya",
      image: "/assets/icons/icon_2.svg",
      text: `"Rigan Nur Fauzi is an outstanding UI/UX Designer. They are not only skilled at crafting visually appealing designs but also incredibly sharp in identifying user needs. Their workflow is structured, and they're always willing to share insights, making collaboration more efficient and enjoyable."`,
    },
    {
      name: "Syahrul Awaludin",
      image: "/assets/icons/icon_1.svg",
      text: `"I highly recommend Rigan Nur Fauzi as a UI/UX designer. He possesses excellent skills in both UI/UX and visual design. I had the pleasure of working alongside him at our company, and I am confident he will continue to grow in his field. Rigan is a talented professional with a strong ability in this area, and I am sure he will be a valuable asset to any team..."`,
    },
    {
      name: "Rifqi Ikhsan",
      image: "/assets/icons/icon_3.svg",
      text: `"Collaborating with Rigan on UI/UX projects is always a pleasure. They possess a deep understanding of user experience and consistently bring fresh ideas that make our designs not only beautiful but also highly functional. A truly collaborative and detail-oriented colleague!"`,
    },
    {
      name: "Heiwa Alkahfi",
      image: "/assets/icons/icon_4.svg",
      text: `"Working with Rigan has been a truly enjoyable experience. He has a strong grasp of UI/UX principles and consistently delivers designs that are both intuitive and visually compelling. Rigan is open to feedback, communicates clearly, and brings a calm, solution-focused attitude to every project. A valuable team member through and through!"`,
    },
  ];

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
  if (!api) return;

  const onSelect = () => {
    setCurrentIndex(api.selectedScrollSnap());
  };

  api.on("select", onSelect);
  onSelect();

  
  return () => {
    api.off("select", onSelect);
  };
}, [api]);


  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`w-full bg-foundation-bluelight-active py-16 mt-[120px] fade-up-initial ${isVisible ? 'fade-up-animate' : ''}`}>
      <div className="container mx-auto px-8">
        <h2 className="font-heading-2 text-[36px] font-semibold text-foundation-blackblack-400 mb-16 underline text-center">
          Testimonials
        </h2>

        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 3500,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="px-2 basis-[90%] sm:basis-[70%] md:basis-[60%] lg:basis-[50%] xl:basis-[40%]"
              >
                <Card className="w-full max-w-[600px] mx-auto h-full bg-[#ffffffcc] rounded-[20px] shadow-[0px_6px_32px_#00000026] backdrop-blur-lg">
                  <CardContent className="p-6 flex flex-row items-start gap-6 h-full">
                    <Avatar className="w-[60px] h-[60px] flex-shrink-0">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-2">
                      <span className="font-semibold text-foundation-blackblack-400 text-[20px]">
                        {testimonial.name}
                      </span>
                      <p className="text-foundation-blackblack-400 text-[16px] leading-relaxed text-justify">
                        {testimonial.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          
          <div className="flex justify-center items-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "rounded-full transition-all duration-300",
                  currentIndex === index
                    ? "w-10 h-3 bg-purple-600"
                    : "w-3 h-3 bg-gray-100"
                )}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};
