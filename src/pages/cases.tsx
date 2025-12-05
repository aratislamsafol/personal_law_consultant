import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Filter } from "lucide-react";
import { useDataStore } from "@/stores/data-store";
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

const categories = ["All", "Family Law", "Divorce Cases", "Custody Disputes", "Parental Rights", "Child Support", "Paternity Cases", "Civil Unions", "Marriage Contracts"];

const caseDetails: Record<string, { challenge: string; approach: string; result: string; attorney: string }> = {
  "1": {
    challenge: "Complex custody dispute involving international jurisdiction issues and conflicting court orders from different countries.",
    approach: "Our team worked with international law experts to navigate the complex jurisdictional issues while prioritizing the children's best interests.",
    result: "Successfully obtained a unified custody order recognized in both jurisdictions, ensuring stability for the children.",
    attorney: "Samira Dsuza"
  },
  "2": {
    challenge: "High-asset divorce case with multiple business interests and disputed property valuations.",
    approach: "Engaged forensic accountants and business valuation experts to ensure accurate asset division.",
    result: "Achieved a fair settlement that protected our client's business interests while ensuring equitable distribution.",
    attorney: "Sarah Rahman"
  },
  "3": {
    challenge: "Emergency custody modification due to concerns about the children's safety.",
    approach: "Filed emergency motions and presented compelling evidence to support immediate protective action.",
    result: "Obtained emergency custody modification within 48 hours, ensuring the children's safety.",
    attorney: "Michel Phelops"
  },
  "4": {
    challenge: "Establishing parental rights for a father who was not married to the mother at the time of birth.",
    approach: "Filed paternity action and negotiated custody arrangement while maintaining positive co-parenting relationship.",
    result: "Established legal paternity and obtained shared custody arrangement that serves the child's best interests.",
    attorney: "Smith Miller"
  },
  "5": {
    challenge: "Modification of child support due to significant change in circumstances.",
    approach: "Documented the changed financial circumstances and presented a compelling case for modification.",
    result: "Successfully obtained a support modification that reflected current financial realities.",
    attorney: "David Chen"
  },
  "6": {
    challenge: "Complex paternity case involving DNA testing disputes and contested results.",
    approach: "Engaged medical experts and conducted thorough investigation to resolve testing discrepancies.",
    result: "Established paternity definitively and secured a fair custody and support arrangement.",
    attorney: "Samira Dsuza"
  },
  "7": {
    challenge: "Legal recognition of civil union rights in property division after separation.",
    approach: "Applied relevant state laws and precedents to ensure equal treatment under the law.",
    result: "Achieved equitable property division recognizing the full legal rights of our client.",
    attorney: "Sarah Rahman"
  },
  "8": {
    challenge: "Prenuptial agreement challenge alleging fraud and duress.",
    approach: "Defended the validity of the prenuptial agreement with evidence of fair negotiation and disclosure.",
    result: "Successfully upheld the prenuptial agreement, protecting our client's assets.",
    attorney: "Michel Phelops"
  }
};

export default function Cases() {
  const { caseStudies, fetchCaseStudies } = useDataStore();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  useEffect(() => {
    if (caseStudies.length === 0) {
      fetchCaseStudies();
    }
  }, [caseStudies.length, fetchCaseStudies]);

  const getImage = (apiPath: string) => localImages[apiPath] || apiPath;

  const filteredCases = caseStudies?.filter(c => 
    selectedCategory === "All" || c.category === selectedCategory
  );

  return (
    <div className="min-h-screen" data-testid="page-cases">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Case Studies</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Our Success Stories
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our track record of successful outcomes across various practice areas. 
              Each case represents our commitment to excellence and client advocacy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                data-testid={`button-filter-${category.toLowerCase().replace(/\s/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCases && filteredCases.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredCases.map((caseItem, index) => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No cases found in this category.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSelectedCategory("All")}
              >
                View All Cases
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div data-testid="stat-cases-won">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Case Success Rate</div>
            </div>
            <div data-testid="stat-total-cases">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">10k+</div>
              <div className="text-muted-foreground">Cases Handled</div>
            </div>
            <div data-testid="stat-client-satisfaction">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedCase?.title} - {selectedCase?.category}
          </DialogTitle>
          {selectedCase && (
            <div>
              <div className="relative">
                <img
                  src={getImage(selectedCase.image)}
                  alt={selectedCase.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="mb-2">{selectedCase.category}</Badge>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {selectedCase.title}
                  </h3>
                </div>
              </div>
              
              {caseDetails[selectedCase.id] && (
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
                    <p className="text-muted-foreground">{caseDetails[selectedCase.id].challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Our Approach</h4>
                    <p className="text-muted-foreground">{caseDetails[selectedCase.id].approach}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">The Result</h4>
                    <p className="text-muted-foreground">{caseDetails[selectedCase.id].result}</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Lead Attorney: <span className="font-medium text-foreground">{caseDetails[selectedCase.id].attorney}</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
