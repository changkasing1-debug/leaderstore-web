import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Send,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [location] = useLocation();
  const isActive = location === href;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";
  const fullHref = base + href;
  return (
    <Link
      href={fullHref}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
        isActive
          ? "text-accent"
          : "text-foreground hover:text-primary"
      }`}
    >
      {children}
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";
  return (
    <li>
      <Link
        href={base + href}
        className="text-sm text-primary-foreground/65 hover:text-primary-foreground transition-colors"
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
      <p className="text-xs text-primary-foreground/65 mb-3">
        Subscribe to receive product updates and wholesale offers.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm h-9"
        />
        <Button
          type="submit"
          size="sm"
          disabled={loading}
          className="bg-accent text-accent-foreground hover:bg-accent/90 px-3 h-9 flex-shrink-0"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar — promo + contact info */}
      <div className="bg-primary text-primary-foreground text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-accent font-medium">
            <Truck className="h-3.5 w-3.5" />
            <span>Envíos gratis dentro de US en pedidos de más de $3,000</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@leaderstore.us"
              className="hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail className="h-3 w-3" />
              info@leaderstore.us
            </a>
            <a
              href="tel:+17869401456"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Phone className="h-3 w-3" />
              <b>(786) 940-1456</b>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 bg-background border-b transition-shadow ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-[auto_1fr_auto] items-center h-20">
            {/* Logo left */}
            <Link href={base + "/"} className="flex items-center gap-2 flex-shrink-0">
              <img
                src={`${base}logo.jpg`}
                alt="Leader Store LLC logo – wholesale distributor USA"
                className="h-14 w-auto rounded"
              />
            </Link>

            {/* Desktop nav — centered in middle column */}
            <nav className="hidden lg:flex items-center gap-1 justify-self-center">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/catalog">Product</NavLink>
              <NavLink href="/faq">FAQ</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>

            <div className="flex items-center justify-end">
              <Button
                size="sm"
                className="hidden lg:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                asChild
              >
                <Link href={base + "/request-account"}>Apply for Wholesale</Link>
              </Button>

              <button
                className="lg:hidden p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-background px-4 py-3 space-y-1">
            <Link
              href={base + "/"}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href={base + "/about"}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href={base + "/catalog"}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              Product
            </Link>
            <Link
              href={base + "/faq"}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href={base + "/contact"}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <Link
              href={base + "/request-account"}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-accent text-accent-foreground font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Apply for Wholesale
            </Link>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 pt-14 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

            {/* Brand */}
            <div className="lg:col-span-2">
              <img
                src={`${base}logo.jpg`}
                alt="Leader Store LLC"
                className="h-10 w-auto rounded mb-4"
              />
              <p className="text-sm text-primary-foreground/65 leading-relaxed mb-5 max-w-xs">
                Miami-based import and distribution company connecting Latin American markets with top U.S. brands.
              </p>
              <div className="flex items-center gap-3 mb-6">
                <a href="#" className="h-8 w-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="h-8 w-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="h-8 w-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="h-8 w-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
              <Newsletter />
            </div>

            {/* Company */}
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

            {/* Products */}
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

            {/* Support + Contact */}
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
                  <a href="tel:+17869401456" className="hover:text-primary-foreground transition-colors">
                    (786) 940-1456
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href="mailto:info@leaderstore.us" className="hover:text-primary-foreground transition-colors">
                    info@leaderstore.us
                  </a>
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
    </div>
  );
}
