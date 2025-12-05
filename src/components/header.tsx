import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Scale, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useUIStore } from "@/stores/ui-store";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/cases", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const { isScrolled, isMobileMenuOpen, isSearchOpen, setIsScrolled, setMobileMenuOpen, setSearchOpen } = useUIStore();
  const [location] = useLocation();
  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrolled]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location, setMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage && !isScrolled
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md shadow-lg"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-logo">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <span className={`font-serif text-2xl font-bold ${isHomePage && !isScrolled ? "text-white" : "text-foreground"}`}>
                Ensaf
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    location === link.href
                      ? "text-primary"
                      : isHomePage && !isScrolled
                      ? "text-white/80 hover:text-white"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle className={isHomePage && !isScrolled ? "text-white/80 hover:text-white" : "text-foreground hover:text-foreground"} />
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setSearchOpen(true)}
              className={isHomePage && !isScrolled ? "text-white hover:text-white" : "text-foreground hover:text-foreground"}
              data-testid="button-search"
            >
              <Search className={`w-5 h-5 ${isHomePage && !isScrolled ? "text-white" : "text-foreground"}`} />
            </Button>
            <Button 
              className="gap-2"
              data-testid="button-consultation"
            >
              <Phone className="w-4 h-4" />
              Free Consultation
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle className={isHomePage && !isScrolled ? "text-white/80 hover:text-white" : "text-foreground hover:text-foreground"} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className={isHomePage && !isScrolled ? "text-white" : "text-foreground"}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className="lg:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border shadow-lg animate-slide-down"
            data-testid="nav-mobile"
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`block px-6 py-3 text-sm font-medium transition-colors cursor-pointer ${
                      location === link.href
                        ? "text-primary bg-primary/10"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    }`}
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="px-6 py-4">
                <Button className="w-full gap-2" data-testid="button-mobile-consultation">
                  <Phone className="w-4 h-4" />
                  Free Consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      <Dialog open={isSearchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Search</DialogTitle>
          <div className="flex items-center gap-2">
            <Input 
              placeholder="Search..." 
              className="flex-1"
              data-testid="input-search"
            />
            <Button data-testid="button-search-submit">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
