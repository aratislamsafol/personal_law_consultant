import { BrandMarqueeSkeleton } from "@/components/loading-skeleton";

const brandLogos = [
  { id: "1", name: "Legal Corp", initials: "LC" },
  { id: "2", name: "Justice Partners", initials: "JP" },
  { id: "3", name: "Law Alliance", initials: "LA" },
  { id: "4", name: "Advocate Pro", initials: "AP" },
  { id: "5", name: "Rights First", initials: "RF" },
];

export function BrandMarquee() {
  const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="py-12 bg-muted/50 overflow-hidden" data-testid="brand-marquee">
      <div className="relative">
        <div className="animate-marquee flex gap-16 items-center">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-32 h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              data-testid={`brand-logo-${logo.id}-${index}`}
            >
              <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center">
                <span className="font-serif font-bold text-xl text-muted-foreground">
                  {logo.initials}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
