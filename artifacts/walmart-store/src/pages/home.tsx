import { Link } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

const categories = [
  "Kitchen & Home",
  "Pet Supplies",
  "Electronics",
  "Beauty & Personal Care",
];

const features = [
  { title: "Direct Sourcing", desc: "Direct relationships with U.S. manufacturers. No intermediaries." },
  { title: "End-to-End Logistics", desc: "Export docs, freight, customs — we handle it all." },
  { title: "Bilingual Support", desc: "English and Spanish. We understand LatAm import requirements." },
];

const brands = [
  "BLACK+DECKER",
  "KitchenAid",
  "Hamilton Beach",
  "Cuisinart",
  "Purina",
  "Pedigree",
  "Friskies",
  "ANker",
  "Revlon",
  "L'Oréal",
  "Maybelline",
  "NIVEA",
];

export default function Home() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="heroGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#heroGrid)" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-24 md:py-36 text-center">
          <p className="text-accent font-medium text-xs uppercase tracking-widest mb-6">
            Miami, Florida
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            U.S. Brands.<br />Latin American Markets.
          </h1>
          <p className="text-base text-primary-foreground/60 mb-10 max-w-lg mx-auto leading-relaxed">
            Wholesale import and distribution. Direct sourcing. Reliable logistics.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              asChild
            >
              <Link href={base + "/request-account"}>
                Apply for Wholesale <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href={base + "/catalog"}>
                View Catalog <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Are — centered */}
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
        <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
          Miami-based wholesale import company connecting Latin American retailers and distributors with authentic U.S. products.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
          {features.map((f) => (
            <div key={f.title} className="bg-background p-8">
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t" />
      </div>

      {/* Product Categories — centered, minimal */}
      <section className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-12">Product Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat}
              href={base + "/catalog"}
              className="group border border-border hover:border-accent/40 transition-colors py-8 px-4"
            >
              <div className="text-3xl font-bold text-primary/10 mb-2 group-hover:text-accent/20 transition-colors">
                {i + 1}
              </div>
              <div className="font-semibold text-sm">{cat}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t" />
      </div>

      {/* Brands */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold mb-12 text-center">Brands We Work With</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-px bg-border">
          {brands.map((b) => (
            <div
              key={b}
              className="bg-background flex items-center justify-center py-6 px-3 text-center"
            >
              <span className="text-sm font-semibold text-muted-foreground tracking-wide">
                {b}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t" />
      </div>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Start sourcing U.S. products today</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Apply for a wholesale account and get access to our catalog and pricing.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            asChild
          >
            <Link href={base + "/request-account"}>
              Apply for Wholesale <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={base + "/contact"}>Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
