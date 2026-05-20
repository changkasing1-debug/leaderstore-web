import { Link } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

const categories = [
  {
    title: "Kitchen & Home",
    desc: "Cookware, appliances, and home essentials from leading U.S. manufacturers.",
  },
  {
    title: "Pet Supplies",
    desc: "Premium pet food, accessories, and care products for the growing LatAm pet market.",
  },
  {
    title: "Electronics",
    desc: "Consumer electronics and accessories from trusted American brands.",
  },
  {
    title: "Beauty & Personal Care",
    desc: "Skincare, cosmetics, and personal care with strong demand across Latin America.",
  },
];

const testimonials = [
  {
    name: "Carlos M.",
    role: "Retailer — Bogotá, Colombia",
    text: "Leader Store has been our primary U.S. supplier for two years. Shipments arrive on time and documentation is always complete.",
  },
  {
    name: "Ana R.",
    role: "Distributor — Mexico City, Mexico",
    text: "Their pet supply catalog is deep and well-curated. We have doubled our U.S. brand portfolio since partnering with them.",
  },
  {
    name: "Luis P.",
    role: "E-commerce — Lima, Peru",
    text: "Reliable, transparent, and easy to work with. Exactly what you need in a wholesale partner.",
  },
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
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-6">
            Miami, Florida — Wholesale Import & Distribution
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            U.S. Brands.<br />Latin American Markets.
          </h1>
          <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Leader Store LLC sources and distributes authentic U.S. products to retailers and distributors across Latin America. Direct sourcing. Reliable logistics. Real wholesale pricing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
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

      {/* Who we are */}
      <section className="max-w-5xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-5">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Leader Store LLC is a Miami-based wholesale import and distribution company. We work directly with U.S. manufacturers and authorized distributors to supply Latin American businesses with authentic, in-demand products.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our location in Miami — one of the largest trade hubs for the Americas — gives us direct access to U.S. supply chains and efficient shipping routes to the entire region.
          </p>
        </div>
        <div className="space-y-6">
          <div className="border-l-2 border-accent pl-5">
            <h3 className="font-semibold mb-1">Direct sourcing</h3>
            <p className="text-sm text-muted-foreground">We buy directly from U.S. manufacturers and authorized distributors — no intermediaries, no gray market.</p>
          </div>
          <div className="border-l-2 border-accent pl-5">
            <h3 className="font-semibold mb-1">End-to-end logistics</h3>
            <p className="text-sm text-muted-foreground">We handle export documentation, freight coordination, and customs paperwork so your order arrives ready to sell.</p>
          </div>
          <div className="border-l-2 border-accent pl-5">
            <h3 className="font-semibold mb-1">Bilingual support</h3>
            <p className="text-sm text-muted-foreground">Our team operates in English and Spanish and understands the import requirements of each Latin American market.</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t" />
      </div>

      {/* Product Categories */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Product Categories</h2>
          <p className="text-muted-foreground max-w-xl">
            Four core categories with proven demand across retail and e-commerce in Latin America.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
          {categories.map((cat, i) => (
            <div key={cat.title} className="flex gap-5">
              <span className="text-xs font-mono text-muted-foreground/50 pt-1 w-5 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold mb-1">{cat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
                <Link
                  href={base + "/catalog"}
                  className="inline-flex items-center gap-1 text-xs text-accent mt-2 hover:underline"
                >
                  Browse catalog <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t" />
      </div>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-3">How It Works</h2>
          <p className="text-muted-foreground">From application to delivery — a straightforward process.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Apply", desc: "Submit your wholesale application with your business information and tax documentation." },
            { step: "02", title: "Get Approved", desc: "Our team reviews and verifies your application within 24–48 hours." },
            { step: "03", title: "Place Your Order", desc: "Access wholesale pricing, browse the catalog, and submit your purchase order." },
            { step: "04", title: "We Ship to You", desc: "We handle customs documentation and coordinate freight to your destination." },
          ].map((s) => (
            <div key={s.step}>
              <div className="text-3xl font-bold text-primary/15 mb-4">{s.step}</div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t" />
      </div>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-3">What Our Partners Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div key={t.name}>
              <p className="text-foreground leading-relaxed mb-5 text-sm">
                "{t.text}"
              </p>
              <div className="font-semibold text-sm">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t" />
      </div>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Ready to start sourcing U.S. products?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Apply for a wholesale account and get access to our full catalog, pricing tiers, and a dedicated account manager.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
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
        </div>
      </section>
    </Layout>
  );
}
