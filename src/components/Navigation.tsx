import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Location */}
          <div className="flex-1">
            <p className="text-sm text-muted-foreground font-playfair">
              Based in: Kenya, Africa
            </p>
          </div>

          {/* Center - Logo */}
          <div className="flex-1 flex justify-center">
            <h1 className="text-2xl font-playfair font-semibold tracking-wider text-foreground">
              AVYA
            </h1>
          </div>

          {/* Right side - Menu */}
          <div className="flex-1 flex justify-end items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
              >
                About us
              </a>
              <a
                href="#services"
                className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
