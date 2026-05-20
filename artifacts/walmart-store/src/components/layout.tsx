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
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive
          ? "bg-accent text-accent-foreground"
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
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline">Import & Distribution — Miami, FL</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              (786) 940-1456
            </span>
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3" />
              info@leaderstore.us
            </span>
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
          <div className="flex items-center h-16 relative">
            {/* Left nav — Home + Products */}
            <nav className="hidden md:flex items-center gap-1 flex-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/catalog">Products</NavLink>
            </nav>

            {/* Center logo */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
              <Link href={base + "/"}>
                <img
                  src={`${base}logo.jpg`}
                  alt="Leader Store LLC"
                  className="h-10 w-auto rounded"
                />
              </Link>
            </div>

            {/* Right nav — About + Contact */}
            <nav className="hidden md:flex items-center gap-1 flex-1 justify-end">
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>

            <button
              className="md:hidden p-2 ml-auto"
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

        {mobileOpen && (
          <div className="md:hidden border-t bg-background px-4 py-3 space-y-1">
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
              Products
            </Link>
            <Link
              href={base + "/contact"}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <Link
              href={base + "/contact"}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-accent text-accent-foreground font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Get in Touch
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
