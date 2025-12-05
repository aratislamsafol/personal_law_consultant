import { useState, useEffect } from "react";
import { ArrowUpRight, AlertCircle } from "lucide-react";
import { useDataStore } from "@/stores/data-store";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CaseStudiesSkeleton } from "@/components/loading-skeleton";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { CaseStudy } from "@/lib/types";
import caseImage1 from "@assets/stock_images/legal_document_contr_031d5c56.jpg";
import caseImage2 from "@assets/stock_images/legal_document_contr_1539d387.jpg";
import caseImage3 from "@assets/stock_images/legal_document_contr_edabb1e7.jpg";
import caseImage4 from "@assets/stock_images/legal_document_contr_9920fabe.jpg";
import aboutImage1 from "@assets/stock_images/attorney_lawyer_meet_7b9f60e8.jpg";
import aboutImage2 from "@assets/stock_images/attorney_lawyer_meet_586a7e16.jpg";
import aboutImage3 from "@assets/stock_images/modern_law_office_in_7183b75a.jpg";

const localImages: Record<string, string> = {
  "/images/cases/case-1.jpg": caseImage1,
  "/images/cases/case-2.jpg": caseImage2,
  "/images/cases/case-3.jpg": caseImage3,
  "/images/cases/case-4.jpg": caseImage4,
  "/images/cases/case-5.jpg": aboutImage1,
  "/images/cases/case-6.jpg": aboutImage2,
  "/images/cases/case-7.jpg": aboutImage3,
  "/images/cases/case-8.jpg": caseImage1,
};

export function CaseStudiesSection() {
  const { ref, isVisible } = useScrollReveal();
  const { caseStudies, isLoading, errors, fetchCaseStudies } = useDataStore();
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  
  const isLoadingCases = isLoading.caseStudies;
  const error = errors.caseStudies;

  useEffect(() => {
    if (caseStudies.length === 0) {
      fetchCaseStudies();
    }
  }, [caseStudies.length, fetchCaseStudies]);

  const getImage = (apiPath: string) => localImages[apiPath] || apiPath;

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 bg-muted/30 reveal-section ${isVisible ? "visible" : ""}`}
      data-testid="case-studies-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Case Study
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Attorney Legal Excellence in Action
          </h2>
        </div>

        {isLoadingCases && <CaseStudiesSkeleton />}

        {error && (
          <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
            <AlertCircle className="w-12 h-12 mb-4" />
            <p>Failed to load case studies.</p>
          </div>
        )}

        {caseStudies && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {caseStudies.map((caseItem, index) => (
              <button
                key={caseItem.id}
                onClick={() => setSelectedCase(caseItem)}
                className={`group relative overflow-hidden rounded-md cursor-pointer ${
                  index === 0 || index === 5 ? "row-span-2" : ""
                }`}
                data-testid={`card-case-${caseItem.id}`}
              >
                <img
                  src={getImage(caseItem.image)}
                  alt={caseItem.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index === 0 || index === 5 ? "h-full" : "aspect-square"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-serif font-semibold text-white text-sm sm:text-base">
                        {caseItem.title}
                      </h3>
                      <p className="text-white/70 text-xs sm:text-sm">
                        {caseItem.category}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedCase?.title} - {selectedCase?.category}
          </DialogTitle>
          {selectedCase && (
            <div className="relative">
              <img
                src={getImage(selectedCase.image)}
                alt={selectedCase.title}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-primary text-white text-sm rounded-md mb-2">
                  {selectedCase.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {selectedCase.title}
                </h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
