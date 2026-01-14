
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
import SkipLink from "@/components/SkipLink";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

// Create a loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="w-16 h-16 border-4 border-accent border-solid rounded-full border-t-transparent animate-spin" aria-label="Loading"></div>
  </div>
);

// ScrollToTop component to handle scrolling to top when navigating between pages
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top only if there's no hash in the URL
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);
  
  return null;
};

// Lazy load pages for code splitting - with error boundaries
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() =>
  import("./pages/About").catch(err => {
    console.error("Failed to load About page:", err);
    return { default: () => <div>Failed to load About page</div> };
  })
);
const Contact = lazy(() => import("./pages/Contact"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Speaking = lazy(() => import("./pages/Speaking"));
const Topics = lazy(() => import("./pages/Topics"));
const SpeakerKit = lazy(() => import("./pages/SpeakerKit"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/Login"));
const Admin = lazy(() => import("./pages/Admin"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Faq = lazy(() => import("./pages/Faq"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Helmet>
          <html lang="en" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
          <meta name="theme-color" content="#000000" />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SkipLink />
          <Suspense fallback={<PageLoader />}>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/speaking" element={<Speaking />} />
              <Route path="/speaker-kit" element={<SpeakerKit />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
