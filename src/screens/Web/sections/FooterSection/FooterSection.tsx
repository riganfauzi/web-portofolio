import { Card, CardContent } from "../../../../components/ui/card";

export const FooterSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      type: "Phone",
      value: "0823-1954-8914",
      icon: "/group.png",
      iconRotate: "rotate-[-164.17deg]",
      containerRotate: "rotate-[164.17deg]",
    },
    {
      type: "Email",
      value: "riganfauzi@gmail.com",
      icon: "/group-1.png",
      iconRotate: "",
      containerRotate: "",
    },
    {
      type: "Linkedin",
      value: "www.linkedin.com/in/rigannurfauzi",
      icon: "/group-2.png",
      iconRotate: "",
      containerRotate: "",
    },
  ];

  return (
    <footer className="flex flex-col w-full items-start gap-2.5 p-[90px] bg-foundation-bluenormal-active rounded-t-[32px]">
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
                        className={`absolute ${info.iconRotate}`}
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
                      {info.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-[365.92px] h-[316px]">
          <div className="relative w-full h-full">
            <div className="absolute w-[343px] h-[316px] top-0 left-[23px]">
              <img
                className="absolute w-[263px] h-[246px] top-0 left-20"
                alt="Vector"
                src="/vector-5.svg"
              />
              <div className="absolute w-6 h-6 top-[218px] left-[108px] rounded-[12.06px] border-[2.5px] border-solid border-white rotate-180" />
              <img
                className="absolute w-[89px] h-[86px] top-[230px] left-0"
                alt="Vector"
                src="/vector-6-1.svg"
              />
              <img
                className="absolute w-[41px] h-[29px] top-[188px] left-[147px]"
                alt="Vector"
                src="/vector-7-1.svg"
              />
            </div>
            <img
              className="absolute w-[52px] h-[52px] top-[71px] left-[23px]"
              alt="Polygon"
              src="/polygon-3.svg"
            />
            <img
              className="absolute w-[37px] h-[37px] top-[34px] left-0"
              alt="Polygon"
              src="/polygon-4.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
