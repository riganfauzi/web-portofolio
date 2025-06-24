import { FileTextIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const ContactSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-center justify-between px-6 py-16 md:px-[90px] md:py-[66px] relative">
      <div className="flex flex-col w-full md:w-[537px] items-start gap-[90px] relative">
        <div className="flex flex-col items-start justify-center gap-6 relative self-stretch w-full">
          <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
            <h2 className="relative self-stretch mt-[-1.00px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-foundation-blackblack-400 text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
              Hello
            </h2>

            <h1 className="relative self-stretch [font-family:'Poppins',Helvetica] font-semibold text-[52px] tracking-[0] leading-[normal]">
              <span className="text-[#3d3d3d]">I am</span>
              <span className="text-pr-lavender"> Rigan Nur Fauzi</span>
            </h1>
          </div>

          <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-xl tracking-[0] leading-5">
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
          className="inline-flex items-center gap-2.5 px-5 py-[15px] bg-pr-lavender rounded-[5px] text-white"
          variant="default"
        >
          <FileTextIcon className="w-4 h-4" />
          <span className="relative w-fit mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-[length:var(--heading-6-font-size)] text-justify tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
            Download CV
          </span>
        </Button>
      </div>

      
        <img src="/assets/images/get_in_touch.png" 
          alt="Get in Touch"
          className="max-w-full max-h-full object-contain" 
          width={500} 
          height={400} />
      
    </section>
  );
};
