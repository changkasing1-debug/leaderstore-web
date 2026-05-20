import { Link } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Package,
  Truck,
  ShieldCheck,
  Globe,
  ArrowRight,
  Award,
  TrendingUp,
  Users,
  CheckCircle2,
} from "lucide-react";
import { brands, stats, products } from "@/lib/data";

export default function Home() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";
  const featured = products.slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-3 py-1 text-xs font-medium mb-6">
              <Award className="h-3.5 w-3.5" />
              Authorized distributor of 120+ global brands
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Wholesale Access to<br />World-Class Brands
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
              Connect your retail business with authentic products from the world's leading manufacturers. Competitive MOQs, reliable logistics, and full authorization documentation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href={base + "/catalog"}>
                  Browse Catalog <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href={base + "/request-account"}>
                  Request Account
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-background">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Partner With Leader Store</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">We handle the complexity of international sourcing so you can focus on growing your retail business.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: "100% Authentic", desc: "Direct relationships with brands. Full traceability and certificates of authenticity provided." },
            { icon: Truck, title: "Global Logistics", desc: "Sea and air freight options. Customs clearance handled. Door-to-door delivery available." },
            { icon: TrendingUp, title: "Competitive Pricing", desc: "Volume-based pricing tiers. MOQs designed for growing retailers, not just giants." },
            { icon: Globe, title: "Market Expansion", desc: "Access brands that may not have direct distribution in your region yet." },
          ].map((item) => (
            <Card key={item.title} className="hover:border-primary/30 transition-colors">
              <CardContent className="pt-6">
                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
              <p className="text-muted-foreground text-sm mt-1">High-demand items with strong margins</p>
            </div>
            <Button variant="outline" asChild>
              <Link href={base + "/catalog"}>View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <Link key={p.id} href={base + `/product/${p.id}`} className="group">
                <Card className="overflow-hidden h-full transition-all group-hover:shadow-md group-hover:border-primary/20">
                  <div className="h-40 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <Package className="h-12 w-12 text-muted-foreground/40" />
                  </div>
                  <CardContent className="pt-4">
                    <div className="text-xs text-primary font-medium mb-1">{p.brand}</div>
                    <h3 className="font-semibold text-sm mb-1 line-clamp-2">{p.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{p.category} | MOQ: {p.moq}</p>
                    <div className="text-sm font-semibold">{p.priceRange}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Brands We Represent</h2>
          <p className="text-muted-foreground">Direct distribution agreements with leading global manufacturers</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((b) => (
            <Card key={b.id} className="hover:border-primary/30 transition-colors">
              <CardContent className="pt-5 pb-5 text-center">
                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-sm font-bold text-primary">{b.logo}</span>
                </div>
                <h3 className="font-semibold text-sm">{b.name}</h3>
                <p className="text-xs text-muted-foreground">{b.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">How It Works</h2>
            <p className="text-muted-foreground">Four simple steps to start sourcing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Request Account", desc: "Submit your business information for verification. We review within 24 hours." },
              { step: "02", title: "Browse Catalog", desc: "Access our full catalog with wholesale pricing, MOQs, and availability." },
              { step: "03", title: "Place Order", desc: "Submit PO with your desired quantities. We confirm stock and delivery timeline." },
              { step: "04", title: "Receive & Sell", desc: "Goods delivered to your warehouse. Start selling with full margin control." },
            ].map((s, i) => (
              <div key={s.step} className="relative">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary-foreground">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <Card className="bg-primary text-primary-foreground border-0">
          <CardContent className="py-12 px-6 md:px-12 text-center">
            <Users className="h-10 w-10 mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Expand Your Product Range?</h2>
            <p className="max-w-lg mx-auto mb-6 opacity-80">
              Join 500+ retailers and distributors who source through Leader Store. Verified business accounts get immediate access to pricing and availability.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href={base + "/request-account"}>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Create Account
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href={base + "/contact"}>Talk to Sales</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
}
