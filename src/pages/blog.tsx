import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react";
import caseImage1 from "@assets/stock_images/legal_document_contr_031d5c56.jpg";
import caseImage2 from "@assets/stock_images/legal_document_contr_1539d387.jpg";
import caseImage3 from "@assets/stock_images/legal_document_contr_edabb1e7.jpg";
import caseImage4 from "@assets/stock_images/legal_document_contr_9920fabe.jpg";
import aboutImage1 from "@assets/stock_images/attorney_lawyer_meet_7b9f60e8.jpg";
import aboutImage2 from "@assets/stock_images/attorney_lawyer_meet_586a7e16.jpg";

const categories = ["All", "Criminal Law", "Corporate Law", "Family Law", "Real Estate", "Personal Injury"];

const blogPosts = [
  {
    id: "1",
    title: "Understanding Your Rights During a Criminal Investigation",
    excerpt: "Learn what to do and what not to do when you find yourself the subject of a criminal investigation. Protecting your rights from the start is crucial.",
    category: "Criminal Law",
    author: "Michel Phelops",
    date: "December 2, 2024",
    readTime: "8 min read",
    image: caseImage1,
    featured: true
  },
  {
    id: "2",
    title: "Key Considerations for Business Formation in 2024",
    excerpt: "Choosing the right business structure is one of the most important decisions entrepreneurs make. Here's what you need to know.",
    category: "Corporate Law",
    author: "Sarah Rahman",
    date: "November 28, 2024",
    readTime: "6 min read",
    image: caseImage2,
    featured: false
  },
  {
    id: "3",
    title: "Navigating Child Custody Disputes: A Parent's Guide",
    excerpt: "Child custody cases can be emotionally challenging. Learn how to approach these situations with your child's best interests in mind.",
    category: "Family Law",
    author: "Samira Dsuza",
    date: "November 25, 2024",
    readTime: "10 min read",
    image: caseImage3,
    featured: false
  },
  {
    id: "4",
    title: "Common Pitfalls in Real Estate Transactions",
    excerpt: "Avoid these common mistakes that buyers and sellers make during property transactions. Knowledge is your best protection.",
    category: "Real Estate",
    author: "Smith Miller",
    date: "November 20, 2024",
    readTime: "7 min read",
    image: caseImage4,
    featured: false
  },
  {
    id: "5",
    title: "What to Do After a Car Accident: Legal Steps",
    excerpt: "The moments after a car accident are critical. Here's a step-by-step guide to protecting your rights and building a strong case.",
    category: "Personal Injury",
    author: "David Chen",
    date: "November 15, 2024",
    readTime: "5 min read",
    image: aboutImage1,
    featured: false
  },
  {
    id: "6",
    title: "Corporate Compliance: Avoiding Legal Pitfalls",
    excerpt: "Staying compliant with regulations is essential for business success. Learn the key areas where companies often fall short.",
    category: "Corporate Law",
    author: "Sarah Rahman",
    date: "November 10, 2024",
    readTime: "9 min read",
    image: aboutImage2,
    featured: false
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen" data-testid="page-blog">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Blog</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Legal Insights & News
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay informed with the latest legal news, insights, and updates from our team of experts.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-blog-search"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                data-testid={`button-category-${category.toLowerCase().replace(/\s/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {featuredPost && selectedCategory === "All" && !searchQuery && (
            <div className="mb-16">
              <Card className="overflow-hidden" data-testid="card-featured-post">
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4">{featuredPost.category}</Badge>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Button className="w-fit gap-2" data-testid="button-read-featured">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          )}

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory === "All" && !searchQuery ? regularPosts : filteredPosts).map((post) => (
                <Card key={post.id} className="overflow-hidden group" data-testid={`card-post-${post.id}`}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                    <h3 className="font-serif font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" data-testid="button-load-more">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-8">
            Get the latest legal insights delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
              data-testid="input-newsletter-email"
            />
            <Button type="submit" data-testid="button-subscribe">Subscribe</Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
