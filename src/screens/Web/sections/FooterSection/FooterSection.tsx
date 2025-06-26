import { Card, CardContent } from "../../../../components/ui/card";

export const FooterSection = (): JSX.Element => {
  
  const contactInfo = [
    {
      type: "Phone",
      value: "0823-1954-8914",
      icon: "/assets/icons/phone_icon.svg",
      iconRotate: "rotate-[-164.17deg]",
      containerRotate: "rotate-[164.17deg]",
    },
    {
      type: "Email",
      value: "riganfauzi@gmail.com",
      icon: "/assets/icons/email_icon.svg",
      iconRotate: "",
      containerRotate: "",
    },
    {
      type: "Linkedin",
      value: "www.linkedin.com/rigannurfauzi",
      icon: "/assets/icons/linkedin_icon.svg",
      iconRotate: "",
      containerRotate: "",
      href: "https://www.linkedin.com/in/rigannurfauzi/"
    },
  ];

  return (
    <footer id="footer" className="flex flex-col w-full items-start gap-2.5 p-[90px] bg-foundation-bluenormal-active rounded-t-[32px] mt-[200px]">
      <div className="flex w-full items-center justify-between relative">
        <div className="flex flex-col w-full max-w-[503px] items-start gap-[30px] relative">
          <div className="relative w-full">
            <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-white text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
              Get in Touch
            </h2>

            <p className="mt-6 font-body-6 font-[number:var(--body-6-font-weight)] text-white text-[length:var(--body-6-font-size)] tracking-[var(--body-6-letter-spacing)] leading-[var(--body-6-line-height)] [font-style:var(--body-6-font-style)]">
              For business and partnership inquiry please contact me below!
            </p>
          </div>

          <div className="flex flex-col gap-[25px] w-full max-w-[341px]">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-transparent border-none shadow-none"
              >
                <CardContent className="flex items-start p-0">
                  <div className="w-[42px] h-[42px] rounded-full border border-solid border-white flex items-center justify-center">
                    <div
                      className={`relative w-[25px] h-[25px] ${info.containerRotate}`}
                    >
                      <img
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${info.iconRotate}`}
                        alt={`${info.type} icon`}
                        src={info.icon}
                      />
                    </div>
                  </div>
                  <div className="ml-5">
                    <p className="font-body-6 font-[number:var(--body-6-font-weight)] text-foundation-blackblack-100 text-[length:var(--body-6-font-size)] tracking-[var(--body-6-letter-spacing)] leading-[var(--body-6-line-height)] [font-style:var(--body-6-font-style)]">
                      {info.type}
                    </p>
                    <p className="font-body-6 font-[number:var(--body-6-font-weight)] text-white text-[length:var(--body-6-font-size)] tracking-[var(--body-6-letter-spacing)] leading-[var(--body-6-line-height)] [font-style:var(--body-6-font-style)]">
                      <a
                        href={info.href}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:underline" 
                      >
                        {info.value}
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <img src="/assets/images/image_decoration.png" alt="decoration" className="w-[300px] h-[250px]"/>
      </div>
    </footer>
  );
};