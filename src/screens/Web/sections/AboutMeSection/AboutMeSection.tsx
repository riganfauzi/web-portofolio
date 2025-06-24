import { Card, CardContent } from "../../../../components/ui/card";

export const AboutMeSection = (): JSX.Element => {

  return (
    <section className="w-full py-[90px] px-5 md:px-[90px] bg-foundation-bluelight-active">
      <div className="flex flex-col items-start gap-16 max-w-[1260px] mx-auto">
        <h2 className="font-heading-2 text-4xl font-semibold text-foundation-blackblack-400 underline">
          About me
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-16 w-full">
          {/* Profile image */}
           
           <img src="/assets/images/avatar.png" alt="Avatar" className="max-w-full max-h-full object-contain" width={400} height={400} />

          {/* About me text */}
          <Card className="border-none bg-transparent shadow-none">
            <CardContent className="p-0">
              <p className="font-poppins text-[32px] text-justify text-[#3d3d3d]">
                As a passionate UI/UX Designer with 2 years of experience, I
                specialize in creating intuitive, user-centered digital products
                that blend aesthetic appeal with seamless functionality. My
                approach is rooted in understanding user needs, translating
                complex problems into elegant solutions, and ensuring a
                delightful experience. I&apos;m proficient in Figma and have a
                strong grasp of design principles, user research....{" "}
                <span className="font-bold text-[#7456ff] cursor-pointer">
                  More
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
