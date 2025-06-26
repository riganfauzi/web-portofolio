import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export const NavigationSection = (): JSX.Element => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#header" },
    { label: "About Me", href: "#about-me" },
    { label: "Project", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-semibold">
          <span className="text-pr-lavender">Rigan</span>
          <span className="text-[#3d3d3d]">NurFauzi</span>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    href={item.href}
                    className="text-[#3d3d3d] text-base font-medium hover:text-pr-lavender transition-colors"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="outline"
            className="px-4 py-2 border-2 border-pr-lavender text-pr-lavender"
          >
            <a href="#footer" className="font-heading-6">Contact Me</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-[#3d3d3d] text-base font-medium hover:text-pr-lavender transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#footer"
            onClick={() => setIsMobileOpen(false)}
            className="mt-2 border-2 border-pr-lavender rounded px-4 py-2 text-pr-lavender font-heading-6 text-center"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
};
