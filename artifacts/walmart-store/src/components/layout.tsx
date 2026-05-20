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
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
      {/* Top bar — contact info */}
      <div className="bg-primary text-primary-foreground text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-end gap-6">
          <a
            href="mailto:info@leaderstore.us"
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
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

      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 bg-background border-b transition-shadow ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo left */}
            <Link href={base + "/"} className="flex items-center gap-2 flex-shrink-0">
              <img
                src={`${base}logo.jpg`}
                alt="Leader Store LLC logo – wholesale distributor USA"
                className="h-14 w-auto rounded"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/catalog">Product</NavLink>
              <NavLink href="/about">How It&apos;s Work</NavLink>
              <NavLink href="/about">Blog</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <Button
                size="sm"
                className="ml-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                asChild
              >
                <Link href={base + "/request-account"}>Apply for Wholesale</Link>
              </Button>
            </nav>

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
              href={base + "/about"}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              How It&apos;s Work
            </Link>
            <Link
              href={base + "/about"}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              Blog
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
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img
                  src={`${base}logo.jpg`}
                  alt="Leader Store LLC"
                  className="h-10 w-auto rounded"
                />
              </div>
              <p className="text-sm text-primary-foreground/70">
                Miami-based import and distribution company connecting Latin
                American markets with top U.S. brands.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-1.5 text-sm text-primary-foreground/70">
                <li>
                  <Link href={base + "/"} className="hover:text-primary-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={base + "/about"} className="hover:text-primary-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href={base + "/catalog"} className="hover:text-primary-foreground">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href={base + "/contact"} className="hover:text-primary-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-1.5 text-sm text-primary-foreground/70">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  4805 NW 79TH AVE, STE 10 A101, Miami, FL 33166
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  (786) 940-1456
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  info@leaderstore.us
                </li>
              </ul>
              <div className="flex items-center gap-3 mt-4">
                <div className="h-8 w-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                  <Facebook className="h-4 w-4" />
                </div>
                <div className="h-8 w-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                  <Instagram className="h-4 w-4" />
                </div>
                <div className="h-8 w-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                  <Linkedin className="h-4 w-4" />
                </div>
                <div className="h-8 w-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                  <Twitter className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Leader Store LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
