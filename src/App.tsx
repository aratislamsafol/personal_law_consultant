import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { useDataStore } from "@/stores/data-store";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Blog from "@/pages/blog";
import Cases from "@/pages/cases";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/blog" component={Blog} />
      <Route path="/cases" component={Cases} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const { fetchAll } = useDataStore();

  useEffect(() => {
    // Initialize data on app mount
    fetchAll();
  }, [fetchAll]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="ensaf-theme">
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
