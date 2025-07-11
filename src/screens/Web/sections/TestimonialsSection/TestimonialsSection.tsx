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
  CarouselPrevious,
  CarouselNext,
} from "../../../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "../../../../lib/utils";
import { useState, useRef, useEffect, useCallback } from "react";

export const TestimonialsSection = (): JSX.Element => {
  const sectionRef = useRef(null);

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
  const [isHovered] = useState(false);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    const newIndex = carouselApi.selectedScrollSnap();
    setCurrentIndex(newIndex);
  }, []);

  useEffect(() => {
    if (!api || isHovered) return;

    const interval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [api, isHovered]);

  useEffect(() => {
    if (!api) return;

    api.on("select", onSelect);
    api.on("reInit", onSelect);
    onSelect(api);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`w-full bg-foundation-bluelight-active py-16 mt-12`}
      data-aos="fade-up" 
      data-aos-duration="1000" 
    >
      <div className="container mx-auto px-8">
        <h2 className="font-heading-2 text-[36px] font-semibold text-foundation-blackblack-400 mb-16 underline text-center">
          Testimonials
        </h2>

        <Carousel
          opts={{ 
            loop: true, 
            startIndex: 0, 
            duration: 25, 
            dragFree: false,
            slidesToScroll: 1,
            skipSnaps: false,
            containScroll: "trimSnaps",
            watchDrag: true,
            watchResize: true,
            watchSlides: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000, 
              stopOnInteraction: true, 
              stopOnMouseEnter: true, 
              stopOnFocusIn: true, 
            }),
          ]}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="px-2 md:px-4 basis-[90%] sm:basis-[70%] md:basis-[60%] lg:basis-[50%] xl:basis-[40%]"
              >
                <Card className="group w-full max-w-[600px] mx-auto h-full bg-[#ffffffcc] rounded-[20px] shadow-[0px_6px_32px_#00000026] backdrop-blur-lg hover:bg-foundation-bluenormal-active transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-[0px_8px_40px_#00000033]">
                  <CardContent className="p-6 flex flex-row items-start gap-6 h-full">
                    <Avatar className="w-[60px] h-[60px] flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="transition-all duration-300"
                      />
                      <AvatarFallback className="transition-all duration-300 group-hover:bg-white group-hover:text-foundation-bluenormal-active">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-2">
                      <span className="font-semibold group-hover:text-white text-foundation-blackblack-400 text-[20px] transition-colors duration-300 ease-in-out">
                        {testimonial.name}
                      </span>
                      <p className="group-hover:text-white text-foundation-blackblack-400 text-[16px] leading-relaxed text-justify transition-colors duration-300 ease-in-out">
                        {testimonial.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Dot Indicators dengan transisi yang lebih smooth */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  api?.scrollTo(index);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "rounded-full transition-all duration-500 ease-in-out hover:scale-125 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2",
                  currentIndex === index
                    ? "w-10 h-3 bg-purple-600 shadow-lg"
                    : "w-3 h-3 bg-white hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <CarouselPrevious className="transition-all duration-300 hover:scale-110 hover:shadow-lg" />
          <CarouselNext className="transition-all duration-300 hover:scale-110 hover:shadow-lg" />
        </Carousel>
      </div>
    </section>
  );
};