import { Suspense, lazy, useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/cart";
import CartSidebar from "@/components/cart-sidebar";
import WhatsAppButton from "@/components/whatsapp-button";
import CookieConsent from "@/components/cookie-consent";
import Home from "@/pages/home";
import Catalog from "@/pages/catalog";
import NotFound from "@/pages/not-found";

const ProductDetail = lazy(() => import("@/pages/product-detail"));
const About = lazy(() => import("@/pages/about"));
const Contact = lazy(() => import("@/pages/contact"));
const RequestAccount = lazy(() => import("@/pages/request-account"));
const BecomeAPartner = lazy(() => import("@/pages/become-a-partner"));
const FAQ = lazy(() => import("@/pages/faq"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const TermsOfService = lazy(() => import("@/pages/terms-of-service"));
const ReturnPolicy = lazy(() => import("@/pages/return-policy"));
const AuthenticityGuarantee = lazy(() => import("@/pages/authenticity-guarantee"));
const Checkout = lazy(() => import("@/pages/checkout"));

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F2F5]">
      <div className="h-8 w-8 border-4 border-[#E6EBF0] border-t-[#001A2E] rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/request-account" component={RequestAccount} />
        <Route path="/become-a-partner" component={BecomeAPartner} />
        <Route path="/faq" component={FAQ} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/return-policy" component={ReturnPolicy} />
        <Route path="/authenticity-guarantee" component={AuthenticityGuarantee} />
        <Route path="/checkout" component={Checkout} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <ScrollToTop />
            <Router />
            <CartSidebar />
            <WhatsAppButton />
            <CookieConsent />
          </WouterRouter>
          <Toaster />
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
