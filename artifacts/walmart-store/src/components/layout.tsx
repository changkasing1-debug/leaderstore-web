import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  Search,
  Menu,
  X,
  ArrowUp,
  ChevronDown,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/context/cart";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";
  return (
    <li>
      <Link
        href={base + href}
        className="text-sm text-white/60 hover:text-white transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {children}
      </Link>
    </li>
  );
}

function Newsletter() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate submission — no backend required for static Vercel deploy
    setTimeout(() => {
      toast({ title: "Subscribed!", description: "You'll receive our latest updates." });
      setEmail("");
      setLoading(false);
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-3">
      <Input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 text-sm h-9"
      />
      <Button type="submit" size="sm" disabled={loading}
        className="bg-[#015D2C] text-white hover:bg-[#014a23] px-3 h-9 flex-shrink-0">
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}

const categories = [
  "Frenos", "Suspensión", "Filtros", "Encendido",
  "Sensores & Electrónica", "Bandas & Mangueras",
  "Dirección & Suspensión", "Rodamientos & Hubs", "Lubricantes",
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [, setLocation] = useLocation();
  const { itemCount, toggleCart } = useCart();

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(base + "/catalog?search=" + encodeURIComponent(searchQuery.trim()));
      setSearchQuery("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ===== ROW 1: White — Logo | Search | Social ===== */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
          {/* Logo */}
          <Link href={base + "/"} className="flex-shrink-0 flex items-center gap-2">
            <img src={`${base}/logo.jpg`} alt="Leader Store LLC" className="h-11 w-auto rounded" />
          </Link>

          {/* Search — center */}
          <form onSubmit={handleSearch} className="flex-1 flex justify-center">
            <div className="w-full max-w-xl relative">
              <Input
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 h-10 border border-[#CFD9E6] bg-white rounded-lg text-sm text-[#07121A] placeholder:text-[#526880]"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#526880] hover:text-[#015D2C] transition-colors">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </form>

          {/* Social icons — right */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full border border-[#CFD9E6] text-[#526880] hover:text-[#015D2C] hover:border-[#015D2C] transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full border border-[#CFD9E6] text-[#526880] hover:text-[#015D2C] hover:border-[#015D2C] transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full border border-[#CFD9E6] text-[#526880] hover:text-[#015D2C] hover:border-[#015D2C] transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {/* Cart icon */}
          <button
            onClick={toggleCart}
            className="relative p-2 text-[#526880] hover:text-[#015D2C] transition-colors md:mr-2"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 h-4.5 min-w-[18px] px-1 flex items-center justify-center rounded-full bg-[#C41E3A] text-white text-[10px] font-extrabold">
                {itemCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 ml-auto" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ===== ROW 2: Navy — Categories | Nav | Apply ===== */}
      <div className="bg-[#001A2E] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex items-center justify-center h-12 gap-1">
              {[
                { label: "HOME", href: "/" },
                { label: "PRODUCTS", href: "/catalog" },
                { label: "ABOUT US", href: "/about" },
                { label: "BECOME A PARTNER", href: "/request-account" },
                { label: "CONTACT US", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={base + link.href}
                  className="text-white/80 hover:text-white text-xs font-bold tracking-wide px-3 py-3 hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
          </div>

          {/* Mobile nav */}
          {mobileOpen && (
            <div className="md:hidden py-3 space-y-1 border-t border-white/10">
              <Link href={base + "/"} className="block text-white/80 hover:text-white text-sm py-2 px-2 font-semibold" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href={base + "/catalog"} className="block text-white/80 hover:text-white text-sm py-2 px-2 font-semibold" onClick={() => setMobileOpen(false)}>Products</Link>
              <Link href={base + "/about"} className="block text-white/80 hover:text-white text-sm py-2 px-2 font-semibold" onClick={() => setMobileOpen(false)}>About Us</Link>
              <Link href={base + "/request-account"} className="block text-white/80 hover:text-white text-sm py-2 px-2 font-semibold" onClick={() => setMobileOpen(false)}>Become a Partner</Link>
              <Link href={base + "/contact"} className="block text-white/80 hover:text-white text-sm py-2 px-2 font-semibold" onClick={() => setMobileOpen(false)}>Contact Us</Link>
            </div>
          )}
        </div>
      </div>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#07121A] text-white">
        <div className="max-w-7xl mx-auto px-4 pt-12 pb-8">

          {/* Newsletter bar */}
          <div className="border border-white/15 rounded-lg px-8 py-6 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#015D2C] mb-1">Newsletter</p>
              <h4 className="font-bold text-base text-white mb-1">Subscribe to Our Wholesale Newsletter</h4>
              <p className="text-sm text-white/50">New arrivals, restocked brands, and trade updates — delivered to your inbox.</p>
            </div>
            <Newsletter />
          </div>

          {/* 4-column links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-white/50">Company</h4>
              <ul className="space-y-2.5">
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/request-account">Become a Partner</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
                <FooterLink href="/faq">FAQ</FooterLink>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-white/50">Products</h4>
              <ul className="space-y-2.5">
                <FooterLink href="/catalog">Product Catalog</FooterLink>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-white/50">Support</h4>
              <ul className="space-y-2.5">
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
                <FooterLink href="/return-policy">Return Policy</FooterLink>
                <FooterLink href="/about">Authenticity Guarantee</FooterLink>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-white/50">Contact Info</h4>
              <p className="font-bold text-sm text-white mb-4">Leader Store LLC</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="h-3.5 w-3.5 text-[#4ade80]" />
                  </div>
                  <span className="text-sm text-white/60 leading-snug">4805 NW 79TH AVE<br />Doral, FL 33166</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-3.5 w-3.5 text-[#4ade80]" />
                  </div>
                  <a href="tel:+17869876217" className="text-sm text-white/60 hover:text-white transition-colors">+1 (786) 987-6217</a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-3.5 w-3.5 text-[#4ade80]" />
                  </div>
                  <a href="mailto:info@leaderstore.us" className="text-sm text-white/60 hover:text-white transition-colors">info@leaderstore.us</a>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-white/10 pt-4 pb-3 text-center">
            <p className="text-[10px] text-white/30 leading-relaxed max-w-4xl mx-auto">
              <strong className="text-white/40">Disclaimer:</strong> All brand names, logos, trademarks, and product images displayed on this website are used solely for representative and illustrative purposes.
              Leader Store LLC is an independent wholesale distributor and is not affiliated with, endorsed by, or sponsored by any of the brands listed herein.
              All trademarks remain the property of their respective owners.
            </p>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
            <span>&copy; {new Date().getFullYear()} Leader Store LLC. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link href={base + "/privacy-policy"} className="hover:text-white/60 transition-colors">Privacy</Link>
              <Link href={base + "/terms-of-service"} className="hover:text-white/60 transition-colors">Terms</Link>
              <Link href={base + "/return-policy"} className="hover:text-white/60 transition-colors">Returns</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 h-10 w-10 bg-[#015D2C] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#014a23] ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
