import { Link, useLocation } from "wouter";
import { useState } from "react";
import {
  Menu,
  X,
  Package,
  Building2,
  Phone,
  FileText,
  UserPlus,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function NavLink({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon?: React.ComponentType<{ className?: string }> }) {
  const [location] = useLocation();
  const isActive = location === href;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";
  const fullHref = base + href;
  return (
    <Link href={fullHref} className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </Link>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span>Authorized distributor of 120+ major brands | Wholesale only</span>
          <span className="hidden sm:inline">Contact: sales@globaltrade.com | +1 (555) 123-4567</span>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href={import.meta.env.BASE_URL.replace(/\/$/, "") || "/"} className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <Package className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-lg font-bold text-foreground leading-tight">GlobalTrade</span>
                <p className="text-[10px] text-muted-foreground leading-tight -mt-0.5">Wholesale Imports</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <NavLink href="/" icon={Building2}>Home</NavLink>
              <NavLink href="/catalog" icon={Package}>Catalog</NavLink>
              <NavLink href="/about" icon={FileText}>About</NavLink>
              <NavLink href="/contact" icon={Phone}>Contact</NavLink>
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href={(import.meta.env.BASE_URL.replace(/\/$/, "") || "") + "/request-account"}>
                  <UserPlus className="h-4 w-4 mr-1" />
                  Request Account
                </Link>
              </Button>
              <Button size="sm" variant="ghost" className="relative">
                <ShoppingCart className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
              </Button>
            </div>

            <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t bg-background px-4 py-3 space-y-1">
            <Link href={(import.meta.env.BASE_URL.replace(/\/$/, "") || "") + "/"} className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-muted" onClick={() => setMobileOpen(false)}><Building2 className="h-4 w-4" /> Home</Link>
            <Link href={(import.meta.env.BASE_URL.replace(/\/$/, "") || "") + "/catalog"} className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-muted" onClick={() => setMobileOpen(false)}><Package className="h-4 w-4" /> Catalog</Link>
            <Link href={(import.meta.env.BASE_URL.replace(/\/$/, "") || "") + "/about"} className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-muted" onClick={() => setMobileOpen(false)}><FileText className="h-4 w-4" /> About</Link>
            <Link href={(import.meta.env.BASE_URL.replace(/\/$/, "") || "") + "/contact"} className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-muted" onClick={() => setMobileOpen(false)}><Phone className="h-4 w-4" /> Contact</Link>
            <Link href={(import.meta.env.BASE_URL.replace(/\/$/, "") || "") + "/request-account"} className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-muted" onClick={() => setMobileOpen(false)}><UserPlus className="h-4 w-4" /> Request Account</Link>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-muted border-t">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-7 w-7 bg-primary rounded-md flex items-center justify-center">
                  <Package className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-bold">GlobalTrade</span>
              </div>
              <p className="text-sm text-muted-foreground">Authorized wholesale importer and distributor of major international brands. Serving retailers and distributors across 35+ countries.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Categories</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>Electronics</li>
                <li>Apparel & Footwear</li>
                <li>Toys & Games</li>
                <li>Beauty & Personal Care</li>
                <li>Household Goods</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li><Link href={(import.meta.env.BASE_URL.replace(/\/$/, "") || "") + "/about"} className="hover:text-foreground">About Us</Link></li>
                <li><Link href={(import.meta.env.BASE_URL.replace(/\/$/, "") || "") + "/contact"} className="hover:text-foreground">Contact</Link></li>
                <li><Link href={(import.meta.env.BASE_URL.replace(/\/$/, "") || "") + "/request-account"} className="hover:text-foreground">Become a Partner</Link></li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>sales@globaltrade.com</li>
                <li>+1 (555) 123-4567</li>
                <li>1200 Trade Center Blvd</li>
                <li>Miami, FL 33131, USA</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-xs text-muted-foreground">
            © 2025 GlobalTrade Wholesale Imports. All rights reserved. | Authorized distributor only. B2B wholesale transactions.
          </div>
        </div>
      </footer>
    </div>
  );
}
