import { useEffect } from "react";
import { ArrowRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDataStore } from "@/stores/data-store";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { TeamSkeleton } from "@/components/loading-skeleton";
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

export function TeamSection() {
  const { ref, isVisible } = useScrollReveal();
  const { teamMembers, isLoading, errors, fetchTeamMembers } = useDataStore();
  
  const isLoadingTeam = isLoading.teamMembers;
  const error = errors.teamMembers;

  useEffect(() => {
    if (teamMembers.length === 0) {
      fetchTeamMembers();
    }
  }, [teamMembers.length, fetchTeamMembers]);
  
  const getImage = (apiPath: string) => localImages[apiPath] || apiPath;
  const duplicatedMembers = teamMembers ? [...teamMembers, ...teamMembers] : [];

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 bg-muted/30 overflow-hidden reveal-section ${isVisible ? "visible" : ""}`}
      data-testid="team-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Our Attorneys
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Dedicated Lawyers, Proven Results
            </h2>
          </div>
          <Button variant="outline" className="gap-2 self-start md:self-auto" data-testid="button-more-attorneys">
            More Attorneys
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="relative">
        {isLoadingTeam && <TeamSkeleton />}

        {error && (
          <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
            <AlertCircle className="w-12 h-12 mb-4" />
            <p>Failed to load team members.</p>
          </div>
        )}

        {teamMembers && (
          <>
            <div className="team-carousel-track flex gap-6 pl-4 sm:pl-6 lg:pl-8">
              {duplicatedMembers.map((member, index) => (
                <div
                  key={`${member.id}-${index}`}
                  className="flex-shrink-0 w-64 sm:w-72 group"
                  data-testid={`card-team-${member.id}-${index}`}
                >
                  <div className="relative overflow-hidden rounded-md mb-4">
                    <img
                      src={getImage(member.image)}
                      alt={member.name}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              ))}
            </div>

            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none" />
          </>
        )}
      </div>
    </section>
  );
}
