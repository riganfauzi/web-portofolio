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
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const TestimonialsSection = (): JSX.Element => {
  const testimonials = [
    {
      name: "Adit Praditya",
      image: "/ellipse-34.svg",
      text: '"Rigan Nur Fauzi is an outstanding UI/UX Designer. They are not only skilled at crafting visually appealing designs but also incredibly sharp in identifying user needs. Their workflow is structured, and they\'re always willing to share insights, making collaboration more efficient and enjoyable."',
    },
    {
      name: "Syahrul Awaludin",
      image: "/ellipse-36.svg",
      text: '"I highly recommend Rigan Nur Fauzi as a UI/UX designer. He possesses excellent skills in both UI/UX and visual design. I had the pleasure of working alongside him at our company, and I am confident he will continue to grow in his field. Rigan is a talented professional with a strong ability in this area, and I am sure he will be a valuable asset to any team..."',
    },
    {
      name: "Rifqi Ikhsan",
      image: "/ellipse-35.svg",
      text: '"Collaborating with Rigan on UI/UX projects is always a pleasure. They possess a deep understanding of user experience and consistently bring fresh ideas that make our designs not only beautiful but also highly functional. A truly collaborative and detail-oriented colleague!"',
    },
  ];

  return (
    <section className="w-full bg-foundation-bluelight-active py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading-2 text-[36px] font-semibold text-foundation-blackblack-400 mb-16 underline">
          Testimonials
        </h2>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-[#ffffff80] rounded-[20px] shadow-[0px_6px_32px_#00000026] backdrop-blur-lg">
                  <CardContent className="p-8 flex flex-col gap-8 h-full">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-[70px] h-[70px]">
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-['Poppins',Helvetica] font-semibold text-foundation-blackblack-400 text-[32px] text-justify">
                        {testimonial.name}
                      </span>
                    </div>
                    <p className="font-['Poppins',Helvetica] font-normal text-foundation-blackblack-400 text-2xl text-justify">
                      {testimonial.text}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mr-2" />
            <div className="flex items-center gap-[11.31px] mx-4">
              <div className="w-[15.08px] h-[15.08px] bg-gray-200 rounded-[20.74px]" />
              <div className="w-[60.32px] h-[15.08px] bg-foundation-bluenormal-hover rounded-[20.74px]" />
              <div className="w-[15.08px] h-[15.08px] bg-gray-200 rounded-[20.74px]" />
            </div>
            <CarouselNext className="relative static ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
