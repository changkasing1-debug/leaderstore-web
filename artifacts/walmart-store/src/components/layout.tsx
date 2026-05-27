import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Send,
  Search,
  Menu,
  X,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";
  return (
    <li>
      <Link href={base + href} className="text-sm text-primary-foreground/65 hover:text-primary-foreground transition-colors">
        {children}
      </Link>
    </li>
  );
}

function Newsletter() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";
      const res = await fetch(`${base}/api/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        toast({ title: "Subscribed!", description: "You'll receive our latest updates and product news." });
        setEmail("");
      } else {
        throw new Error("Failed");
      }
    } catch {
      toast({ title: "Error", description: "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h4 className="font-semibold mb-1 text-sm">Newsletter</h4>
      <p className="text-xs text-primary-foreground/65 mb-3">Subscribe to receive product updates and wholesale offers.</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required
          className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm h-9" />
        <Button type="submit" size="sm" disabled={loading} className="bg-accent text-accent-foreground hover:bg-accent/90 px-3 h-9 flex-shrink-0">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Search bar — standalone, top */}
      <div className="bg-[#001A2E] py-3 px-4 z-50">
        <div className="max-w-3xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          <Input
            placeholder="Search products, brands, categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                if (searchQuery.trim()) {
                  setLocation(base + "/catalog?search=" + encodeURIComponent(searchQuery.trim()));
                  setSearchQuery("");
                }
              }
            }}
            className="pl-12 w-full h-11 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-lg text-base focus-visible:ring-[#015D2C]"
          />
        </div>
      </div>

      {/* Nav bar — logo + links + button */}
      <div className="bg-background border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href={base + "/"} className="flex items-center gap-2 flex-shrink-0">
            <img src={`${base}logo.jpg`} alt="Leader Store LLC" className="h-10 w-auto rounded" />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href={base + "/catalog"} className="text-sm font-semibold text-[#07121A] hover:text-[#015D2C] transition-colors">Catalog</Link>
            <Link href={base + "/about"} className="text-sm font-semibold text-[#07121A] hover:text-[#015D2C] transition-colors">About</Link>
            <Link href={base + "/contact"} className="text-sm font-semibold text-[#07121A] hover:text-[#015D2C] transition-colors">Contact</Link>
            <Button size="sm" className="btn-primary h-9 px-5" asChild>
              <Link href={base + "/request-account"}>Apply for Wholesale</Link>
            </Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setSearchOpen(!searchOpen)}>
            {searchOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {searchOpen && (
          <div className="md:hidden border-t bg-background px-4 py-3 space-y-2">
            <Link href={base + "/catalog"} className="block text-sm py-2 hover:text-[#015D2C] font-semibold" onClick={() => setSearchOpen(false)}>Catalog</Link>
            <Link href={base + "/about"} className="block text-sm py-2 hover:text-[#015D2C] font-semibold" onClick={() => setSearchOpen(false)}>About</Link>
            <Link href={base + "/contact"} className="block text-sm py-2 hover:text-[#015D2C] font-semibold" onClick={() => setSearchOpen(false)}>Contact</Link>
            <Link href={base + "/request-account"} className="block text-sm py-2 text-[#015D2C] font-bold" onClick={() => setSearchOpen(false)}>Apply for Wholesale</Link>
          </div>
        )}
      </div>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 pt-14 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <img src={`${base}logo.jpg`} alt="Leader Store LLC" className="h-10 w-auto rounded mb-4" />
              <p className="text-sm text-primary-foreground/65 leading-relaxed mb-5 max-w-xs">
                Miami-based import and distribution company connecting Latin American markets with top U.S. brands.
              </p>
              <div className="flex items-center gap-3 mb-6">
                <a href="#" className="h-8 w-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"><Facebook className="h-4 w-4" /></a>
                <a href="#" className="h-8 w-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"><Instagram className="h-4 w-4" /></a>
                <a href="#" className="h-8 w-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"><Linkedin className="h-4 w-4" /></a>
                <a href="#" className="h-8 w-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"><Twitter className="h-4 w-4" /></a>
              </div>
              <Newsletter />
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2.5">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/become-a-partner">Become a Partner</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
                <FooterLink href="/faq">FAQ</FooterLink>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Products</h4>
              <ul className="space-y-2.5">
                <FooterLink href="/catalog">Product Catalog</FooterLink>
                <FooterLink href="/catalog">Kitchen &amp; Home</FooterLink>
                <FooterLink href="/catalog">Pet Supplies</FooterLink>
                <FooterLink href="/catalog">Electronics</FooterLink>
                <FooterLink href="/catalog">Beauty &amp; Care</FooterLink>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Support</h4>
              <ul className="space-y-2.5 mb-6">
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
                <FooterLink href="/return-policy">Return Policy</FooterLink>
                <FooterLink href="/authenticity-guarantee">Authenticity Guarantee</FooterLink>
              </ul>
              <h4 className="font-semibold mb-3 text-sm">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/65">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>4805 NW 79TH AVE, STE 10 A101<br />Miami, FL 33166</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a href="tel:+17869401456" className="hover:text-primary-foreground transition-colors">(786) 940-1456</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href="mailto:info@leaderstore.us" className="hover:text-primary-foreground transition-colors">info@leaderstore.us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/40">
            <span>&copy; {new Date().getFullYear()} Leader Store LLC. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link href={base + "/privacy-policy"} className="hover:text-primary-foreground/70 transition-colors">Privacy</Link>
              <Link href={base + "/terms-of-service"} className="hover:text-primary-foreground/70 transition-colors">Terms</Link>
              <Link href={base + "/return-policy"} className="hover:text-primary-foreground/70 transition-colors">Returns</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 h-10 w-10 bg-accent text-accent-foreground rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-accent/90 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
