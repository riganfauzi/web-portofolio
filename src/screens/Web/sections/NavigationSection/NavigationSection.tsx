import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { cn } from "../../../../lib/utils"; 

export const NavigationSection = (): JSX.Element => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  const [activeSection, setActiveSection] = useState<string>('');

  const navItems = [
    { label: "Home", href: "#header" },
    { label: "About Me", href: "#about-me" },
    { label: "Project", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  
  const observerRef = useRef<IntersectionObserver | null>(null);

  
  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    let currentActiveId = '';
    let maxRatio = 0; 

    entries.forEach(entry => {
      
      
      
      if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
        currentActiveId = entry.target.id;
        maxRatio = entry.intersectionRatio;
      }
    });

    
    if (currentActiveId && activeSection !== currentActiveId) {
      setActiveSection(currentActiveId);
    }
  }, [activeSection]); 

  useEffect(() => {
    
    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null, 
      
      
      
      rootMargin: '-50% 0px -49% 0px',
      
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    });

    const observer = observerRef.current;

    
    const elementsToObserve: HTMLElement[] = [];
    navItems.forEach(item => {
      const id = item.href.substring(1); 
      const element = document.getElementById(id);
      if (element) {
        elementsToObserve.push(element);
      }
    });
    
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      elementsToObserve.push(footerElement);
    }

    
    elementsToObserve.forEach(element => observer.observe(element));

    
    return () => {
      elementsToObserve.forEach(element => observer.unobserve(element));
      observer.disconnect();
    };
  }, [handleIntersect, navItems]); 

  
  const handleNavItemClick = (href: string) => {
    setIsMobileOpen(false); 
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      setActiveSection(id);
    }
  };

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
                    
                    className={cn(
                      "text-base font-medium transition-colors",
                      activeSection === item.href.substring(1) ? 'text-pr-lavender' : 'text-[#3d3d3d] hover:text-pr-lavender'
                    )}
                    onClick={() => handleNavItemClick(item.href)}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="outline"
            
            className={cn(
              "px-4 py-2 border-2 text-pr-lavender",
              activeSection === 'footer' ? 'border-pr-lavender bg-pr-lavender text-white' : 'border-pr-lavender hover:bg-pr-lavender hover:text-white'
            )}
            onClick={() => handleNavItemClick("#footer")}
          >
            <span className="font-heading-6">Contact Me</span>
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
              onClick={() => handleNavItemClick(item.href)}
              
              className={cn(
                "text-[#3d3d3d] text-base font-medium hover:text-pr-lavender transition-colors",
                activeSection === item.href.substring(1) ? 'text-pr-lavender' : ''
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#footer"
            onClick={() => handleNavItemClick("#footer")}
            
            className={cn(
              "mt-2 border-2 rounded px-4 py-2 text-pr-lavender font-heading-6 text-center transition-colors",
              activeSection === 'footer' ? 'border-pr-lavender bg-pr-lavender text-white' : 'border-pr-lavender hover:bg-pr-lavender hover:text-white'
            )}
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
};
