import { useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Building, Heart, Home, Activity, HeartPulse, ArrowRight, Phone, Check } from "lucide-react";
import { useDataStore } from "@/stores/data-store";
import { Link } from "wouter";

const iconMap: Record<string, typeof Shield> = {
  shield: Shield,
  building: Building,
  heart: Heart,
  home: Home,
  activity: Activity,
  "heart-pulse": HeartPulse,
};

const serviceDetails: Record<string, { features: string[]; description: string }> = {
  "Criminal Law": {
    features: ["Defense representation", "Evidence analysis", "Bail applications", "Court representation", "Appeals handling"],
    description: "Our criminal defense team provides aggressive representation for clients facing various criminal charges. We protect your rights at every stage of the legal process."
  },
  "Corporate Law": {
    features: ["Contract negotiations", "Mergers & acquisitions", "Compliance consulting", "Business formation", "Intellectual property"],
    description: "We help businesses navigate complex legal landscapes with strategic advice on contracts, compliance, and corporate governance."
  },
  "Family Law": {
    features: ["Divorce proceedings", "Child custody", "Spousal support", "Adoption services", "Prenuptial agreements"],
    description: "We handle sensitive family matters with compassion and professionalism, always prioritizing the best interests of our clients and their families."
  },
  "Real Estate Law": {
    features: ["Property transactions", "Title examinations", "Lease agreements", "Zoning issues", "Property disputes"],
    description: "Our real estate team assists with all aspects of property law, from residential purchases to complex commercial transactions."
  },
  "Personal Injury Law": {
    features: ["Auto accidents", "Medical malpractice", "Workplace injuries", "Product liability", "Wrongful death"],
    description: "We fight for fair compensation for victims of negligence, helping them recover damages for medical expenses, lost wages, and pain and suffering."
  },
  "Health Care Policy": {
    features: ["Insurance disputes", "Regulatory compliance", "Medical licensing", "Patient rights", "Healthcare contracts"],
    description: "We navigate the complex healthcare regulatory environment, helping providers and patients understand their rights and obligations."
  }
};

export default function Services() {
  const { services, fetchServices } = useDataStore();

  useEffect(() => {
    if (services.length === 0) {
      fetchServices();
    }
  }, [services.length, fetchServices]);

  return (
    <div className="min-h-screen" data-testid="page-services">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Services</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Legal Services We Offer
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive range of legal services covers all major practice areas, 
              ensuring you receive expert representation tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services?.map((service, index) => {
              const Icon = iconMap[service.icon] || Shield;
              const details = serviceDetails[service.title] || { features: [], description: service.description };
              
              return (
                <div 
                  key={service.id} 
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                  data-testid={`service-detail-${service.id}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-3xl font-serif font-bold text-foreground">{service.title}</h2>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 text-lg">
                      {details.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {details.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-4">
                      <Link href="/contact">
                        <Button className="gap-2" data-testid={`button-consult-${service.id}`}>
                          Get Consultation
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button variant="outline" className="gap-2">
                        <Phone className="w-4 h-4" />
                        Call Now
                      </Button>
                    </div>
                  </div>

                  <Card className={`overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <CardContent className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                      <div className="text-center">
                        <Icon className="w-24 h-24 text-primary/20 mx-auto mb-6" />
                        <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                          Why Choose Us for {service.title}?
                        </h3>
                        <ul className="text-left space-y-3 max-w-sm mx-auto">
                          <li className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">Experienced specialists in this field</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">Proven track record of success</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">Personalized attention to every case</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">Transparent fee structure</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Our team is ready to help you navigate your legal challenges. 
            Schedule a free consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="gap-2" data-testid="button-schedule-consultation">
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent border-white text-white hover:bg-white/10">
              <Phone className="w-4 h-4" />
              +1 (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
