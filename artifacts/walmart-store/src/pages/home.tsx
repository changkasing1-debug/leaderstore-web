import { Link } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

const categories = [
  { name: "Kitchen & Home", img: "cat-kitchen.png" },
  { name: "Pet Supplies", img: "cat-pet.png" },
  { name: "Electronics", img: "cat-electronics.png" },
  { name: "Beauty & Care", img: "cat-beauty.png" },
];

const features = [
  { title: "Direct Sourcing", desc: "Direct relationships with U.S. manufacturers. No intermediaries." },
  { title: "End-to-End Logistics", desc: "Export docs, freight, customs — we handle it all." },
  { title: "Bilingual Support", desc: "English and Spanish. We understand LatAm import requirements." },
];

const brands = [
  "BLACK+DECKER", "KitchenAid", "Hamilton Beach", "Cuisinart",
  "Purina", "Pedigree", "Friskies", "Anker",
  "Revlon", "L'Oréal", "Maybelline", "NIVEA",
];

export default function Home() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

  return (
    <Layout>
      {/* Hero with warehouse image */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <img
          src={`${base}hero-warehouse.png`}
          alt="Leader Store wholesale warehouse"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <p className="text-accent font-medium text-xs uppercase tracking-widest mb-4">
              Miami, Florida
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
              U.S. Brands.<br />Latin American Markets.
            </h1>
            <p className="text-base text-primary-foreground/70 mb-8 max-w-md mx-auto">
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
        </div>
      </section>

      {/* Who We Are */}
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

      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t" />
      </div>

      {/* Product Categories with images */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold mb-12 text-center">Product Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={base + "/catalog"}
              className="group block overflow-hidden border border-border hover:border-accent/40 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={`${base}${cat.img}`}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <div className="font-semibold text-sm">{cat.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

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
