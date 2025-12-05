import { useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, Award, Users, Briefcase, Target } from "lucide-react";
import { useDataStore } from "@/stores/data-store";
import aboutImage1 from "@assets/stock_images/attorney_lawyer_meet_7b9f60e8.jpg";
import aboutImage2 from "@assets/stock_images/attorney_lawyer_meet_586a7e16.jpg";
import aboutImage3 from "@assets/stock_images/modern_law_office_in_7183b75a.jpg";
import teamMale1 from "@assets/stock_images/professional_busines_7419220b.jpg";
import teamMale2 from "@assets/stock_images/professional_busines_fc37abbc.jpg";
import teamMale3 from "@assets/stock_images/professional_busines_ef023e6f.jpg";
import teamFemale1 from "@assets/stock_images/professional_busines_ad9bd69a.jpg";
import teamFemale2 from "@assets/stock_images/professional_busines_4557f13e.jpg";

const localImages: Record<string, string> = {
  "/images/team/team-1.jpg": teamMale1,
  "/images/team/team-2.jpg": teamFemale1,
  "/images/team/team-3.jpg": teamMale2,
  "/images/team/team-4.jpg": teamFemale2,
  "/images/team/team-5.jpg": teamMale3,
};

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in legal practice, ensuring every case receives meticulous attention."
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your needs and goals are our priority. We listen, understand, and tailor our approach to your situation."
  },
  {
    icon: Briefcase,
    title: "Integrity",
    description: "We uphold the highest ethical standards, maintaining transparency and honesty in all our dealings."
  },
  {
    icon: Target,
    title: "Results",
    description: "Our track record speaks for itself. We are committed to achieving the best possible outcomes for our clients."
  }
];

const milestones = [
  { year: "1995", title: "Firm Founded", description: "Established with a vision to provide exceptional legal services" },
  { year: "2000", title: "First Major Victory", description: "Won landmark corporate case setting industry precedent" },
  { year: "2010", title: "Expanded Practice", description: "Grew to include family, real estate, and personal injury law" },
  { year: "2020", title: "Modern Office", description: "Relocated to state-of-the-art facilities in downtown" },
  { year: "2024", title: "30+ Attorneys", description: "Expanded team to serve clients across all practice areas" }
];

export default function About() {
  const { teamMembers, counterStats, fetchTeamMembers, fetchCounterStats } = useDataStore();
  const stats = counterStats;
  const getImage = (apiPath: string) => localImages[apiPath] || apiPath;

  useEffect(() => {
    if (teamMembers.length === 0) {
      fetchTeamMembers();
    }
    if (counterStats.length === 0) {
      fetchCounterStats();
    }
  }, [teamMembers.length, counterStats.length, fetchTeamMembers, fetchCounterStats]);

  return (
    <div className="min-h-screen" data-testid="page-about">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">About Us</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              A Legacy of Legal Excellence
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              For nearly three decades, Ensaf Law Firm has been at the forefront of legal advocacy, 
              combining deep expertise with a genuine commitment to our clients' success.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={aboutImage1}
                alt="Legal team meeting"
                className="rounded-md w-full object-cover aspect-[4/3]"
                data-testid="img-about-hero"
              />
              <div className="absolute -bottom-8 -right-8 z-10 hidden md:block">
                <img
                  src={aboutImage2}
                  alt="Attorney consultation"
                  className="rounded-md w-48 h-64 object-cover border-4 border-background shadow-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 hidden lg:block">
                <img
                  src={aboutImage3}
                  alt="Law office"
                  className="rounded-md w-32 h-40 object-cover border-4 border-background shadow-lg"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-6">
                Founded in 1995, Ensaf Law Firm began with a simple mission: to provide exceptional 
                legal representation with unwavering dedication to our clients. What started as a 
                small practice has grown into one of the region's most respected law firms.
              </p>
              <p className="text-muted-foreground mb-8">
                Our team of experienced attorneys brings together diverse expertise across multiple 
                practice areas, ensuring comprehensive legal solutions for all your needs. We combine 
                traditional legal wisdom with innovative approaches to deliver results.
              </p>
              
              <ul className="space-y-3 mb-8">
                {["Over 10,000 cases successfully handled", "Expertise across 6 major practice areas", "24/7 client support available", "Award-winning legal team"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Button data-testid="button-contact-us">Contact Us Today</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as legal professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6" data-testid={`card-value-${index}`}>
                <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped our firm over the years.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="bg-card p-6 rounded-md border border-border" data-testid={`card-milestone-${index}`}>
                      <span className="text-primary font-bold text-2xl">{milestone.year}</span>
                      <h3 className="font-serif font-semibold text-lg text-foreground mt-2">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary z-10 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced attorneys are dedicated to providing exceptional legal representation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamMembers?.map((member) => (
              <div key={member.id} className="group" data-testid={`card-team-${member.id}`}>
                <div className="relative overflow-hidden rounded-md mb-4">
                  <img
                    src={getImage(member.image)}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats?.map((stat) => (
              <div key={stat.id} data-testid={`stat-${stat.id}`}>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
