import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Phone, Mail, FileText, Package, Truck, MapPin, CheckCircle2, Star, ArrowUpRight } from "lucide-react";

const heroProducts = [
  { img: "prod-headphones.png", name: "Sony WH-1000XM5" },
  { img: "prod-smartphone.png", name: "Samsung Galaxy S24 Ultra" },
  { img: "prod-sneakers.png", name: "Nike Air Max 90" },
  { img: "prod-watch.png", name: "Apple Watch Series 9" },
  { img: "prod-skincare.png", name: "L'Oréal Revitalift" },
  { img: "prod-lighting.png", name: "Philips Hue Starter" },
  { img: "prod-toy.png", name: "LEGO Millennium Falcon" },
];

const brands = [
  "BLACK+DECKER", "KitchenAid", "Hamilton Beach", "Cuisinart",
  "Purina", "Pedigree", "Friskies", "Anker",
  "Revlon", "L'Oréal", "Maybelline", "NIVEA",
  "Sony", "Samsung", "Apple", "Philips",
];

const stats = [
  { value: 60, suffix: "+", label: "Businesses Served" },
  { value: 150, suffix: "+", label: "Containers to Latin America" },
  { value: 15, suffix: "", label: "Countries Shipped" },
];

const howWeWork = [
  { icon: Phone, step: "01", title: "Contact", desc: "Reach out via form, email, or phone. Tell us what you need." },
  { icon: FileText, step: "02", title: "Quote", desc: "We send a detailed quote with MOQs, pricing, and shipping costs." },
  { icon: Package, step: "03", title: "Order", desc: "Confirm your order. We verify stock and prepare export documentation." },
  { icon: Truck, step: "04", title: "Ship", desc: "We coordinate freight, customs clearance, and door-to-door delivery." },
  { icon: MapPin, step: "05", title: "Deliver", desc: "Your products arrive ready to sell. We follow up to ensure satisfaction." },
];

const whyUs = [
  { title: "Direct U.S. Sourcing", desc: "No intermediaries. We buy directly from manufacturers and authorized distributors." },
  { title: "Full Export Handling", desc: "Documentation, customs, freight coordination — we manage every step." },
  { title: "Latin America Expertise", desc: "We understand import regulations, consumer preferences, and market demand in every country we serve." },
  { title: "Competitive Wholesale Pricing", desc: "Volume-based tiers designed for growing businesses, not just the big players." },
];

const industries = [
  "Beauty & Cosmetics", "Consumer Electronics", "Home & Kitchen",
  "Pet Supplies", "Garden & Outdoor", "Accessories & Lifestyle",
  "Health & Wellness", "Toys & Entertainment", "Sports & Fitness",
];

function AnimatedCounter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [visible, target, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-1">
        {count}{suffix}
      </div>
    </div>
  );
}

export default function Home() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroProducts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <Layout>
      {/* ===== HERO: Split popup-style ===== */}
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="heroGrid" width="6" height="6" patternUnits="userSpaceOnUse">
                <path d="M 6 0 L 0 0 0 6" fill="none" stroke="white" strokeWidth="0.2" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#heroGrid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="animate-fade-in-up">
              <p className="text-accent font-medium text-xs uppercase tracking-[0.2em] mb-4">
                Miami, Florida — Wholesale Import & Distribution
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-[1.1]">
                U.S. Brands.<br />
                <span className="text-accent">Latin American</span><br />
                Markets.
              </h1>
              <p className="text-base text-primary-foreground/60 mb-8 max-w-md leading-relaxed">
                Direct sourcing from U.S. manufacturers. End-to-end logistics. Bilingual support for retailers and distributors across Latin America.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold" asChild>
                  <Link href={base + "/request-account"}>
                    Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link href={base + "/catalog"}>
                    See Catalog <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Product carousel */}
            <div className="relative h-[400px] md:h-[500px] animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {heroProducts.map((p, i) => (
                <div
                  key={p.img}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                    i === heroIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <div className="relative">
                    <img
                      src={`${base}${p.img}`}
                      alt={p.name}
                      className="w-full max-w-[320px] md:max-w-[380px] h-auto object-contain drop-shadow-2xl"
                    />
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-full border shadow-sm">
                      <p className="text-xs font-medium text-foreground whitespace-nowrap">{p.name}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Dots */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
                {heroProducts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === heroIndex ? "w-6 bg-accent" : "w-1.5 bg-primary-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BRANDS SCROLLING CAROUSEL ===== */}
      <section className="py-16 border-y bg-background overflow-hidden">
        <div className="max-w-3xl mx-auto text-center px-4 mb-10">
          <h2 className="text-2xl font-bold mb-3">Brands We Carry</h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Authentic products from leading manufacturers, sourced through authorized distributors and verified wholesale suppliers.
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-brand-scroll whitespace-nowrap gap-12">
            {[...brands, ...brands].map((b, i) => (
              <span key={`${b}-${i}`} className="text-lg font-semibold text-muted-foreground/40 tracking-wide shrink-0">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BANNER ===== */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
                <p className="text-sm text-primary-foreground/60 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">What Our Partners Say</h2>
          <p className="text-sm text-muted-foreground">Real businesses. Real results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-dashed border-border rounded-lg p-8 text-center bg-muted/30">
              <div className="h-16 w-16 bg-border rounded-full mx-auto mb-4 flex items-center justify-center">
                <Package className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">Customer review photo</p>
              <p className="text-xs text-muted-foreground/60">Upload your photo to replace this placeholder</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t" />
      </div>

      {/* ===== HOW WE WORK ===== */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">How We Work</h2>
          <p className="text-sm text-muted-foreground">From first contact to final delivery</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-px bg-border">
          {howWeWork.map((item) => (
            <div key={item.step} className="bg-background p-6 text-center group hover:bg-muted/30 transition-colors">
              <span className="text-2xl font-bold text-primary/10 group-hover:text-accent/20 transition-colors block mb-3">
                {item.step}
              </span>
              <item.icon className="h-4 w-4 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t" />
      </div>

      {/* ===== WHY CHOOSE LEADER STORE ===== */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">Why Choose Leader Store</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          {whyUs.map((item) => (
            <div key={item.title} className="bg-background p-8">
              <CheckCircle2 className="h-4 w-4 text-accent mb-3" />
              <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t" />
      </div>

      {/* ===== INDUSTRIES ===== */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">Industries We Serve</h2>
          <p className="text-sm text-muted-foreground">We import across every major consumer category</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {industries.map((ind) => (
            <div key={ind} className="border border-border p-5 text-center hover:border-accent/40 transition-colors group">
              <ArrowUpRight className="h-4 w-4 text-primary/10 group-hover:text-accent/30 transition-colors mx-auto mb-2" />
              <span className="text-sm font-medium">{ind}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t" />
      </div>

      {/* ===== READY TO PARTNER ===== */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Partner?</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
          Apply for a wholesale account and get access to our full catalog, pricing tiers, and a dedicated account manager.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold" asChild>
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
