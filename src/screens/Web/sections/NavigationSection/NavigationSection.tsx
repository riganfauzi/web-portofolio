import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Me", href: "#" },
    { label: "Project", href: "#" },
    { label: "Testimonials", href: "#" },
  ];

  return (
    <header className="flex w-full items-center justify-between px-[30px] py-10 bg-white">
      {/* Logo/Brand Name */}
      <div className="inline-flex items-start gap-2.5 pl-[60px] relative">
        <h1 className="relative w-fit mt-[-1.00px] font-['Poppins',Helvetica] font-normal text-2xl leading-6">
          <span className="font-semibold text-[#7456ff] leading-[0.1px]">
            Rigan
          </span>
          <span className="font-semibold text-[#3d3d3d]">NurFauzi</span>
        </h1>
      </div>

      {/* Navigation Menu */}
      <div className="inline-flex items-center gap-10 pr-[60px] relative">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-10">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="font-heading-6 font-[number:var(--heading-6-font-weight)] text-foundation-blackblack-400 text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact Button */}
        <Button
          variant="outline"
          className="p-[15px] rounded-[5px] border-2 border-solid border-[#7456ff] bg-transparent"
        >
          <span className="font-heading-6 font-[number:var(--heading-6-font-weight)] text-pr-lavender text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
            Contact Me
          </span>
        </Button>
      </div>
    </header>
  );
};
