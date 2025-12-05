import { useState } from "react";
import { Link } from "wouter";
import { Scale, Phone, Mail, MapPin, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Case Studies", href: "/cases" },
  { label: "Contact Us", href: "/contact" },
];

const practiceAreas = [
  { label: "Criminal Law", href: "/services" },
  { label: "Corporate Law", href: "/services" },
  { label: "Family Law", href: "/services" },
  { label: "Real Estate Law", href: "/services" },
  { label: "Personal Injury", href: "/services" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      await apiRequest("POST", "/api/newsletter", { email });
      setIsSuccess(true);
      setEmail("");
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div>
              <Link href="/">
                <div className="flex items-center gap-3 cursor-pointer mb-6">
                  <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-serif text-2xl font-bold text-foreground">
                    Ensaf
                  </span>
                </div>
              </Link>
              <p className="text-muted-foreground mb-6">
                Providing exceptional legal services with a commitment to excellence, 
                integrity, and client satisfaction since 1995.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                    aria-label={social.label}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-lg text-foreground mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-lg text-foreground mb-6">
                Practice Areas
              </h4>
              <ul className="space-y-3">
                {practiceAreas.map((area) => (
                  <li key={area.label}>
                    <Link href={area.href}>
                      <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        {area.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-lg text-foreground mb-6">
                Contact Info
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    123 Legal Avenue, Suite 500<br />
                    New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">contact@ensaf.law</span>
                </li>
              </ul>

              <div className="mt-6">
                <h5 className="font-medium text-foreground mb-3">Newsletter</h5>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="Your email" 
                    className="flex-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    data-testid="input-newsletter"
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    disabled={isLoading}
                    data-testid="button-newsletter-submit"
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : isSuccess ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2024 Ensaf Law Firm. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
              <Link href="/privacy">
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms">
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </Link>
              <Link href="/sitemap">
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Sitemap
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
