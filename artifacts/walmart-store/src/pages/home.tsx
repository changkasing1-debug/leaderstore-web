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
  { icon: Mail, step: "02", title: "Quote", desc: "We send a detailed quote with MOQs, pricing, and shipping costs." },
  { icon: FileText, step: "03", title: "Order", desc: "Confirm your order. We verify stock and prepare export documentation." },
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
      <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">
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
      {/* ===== HERO: Full redesign ===== */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #001A2E 0%, #012B47 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="heroGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.2" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#heroGrid)" />
          </svg>
        </div>

        <div className="relative container-max w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="animate-fade-in-up">
              <p className="text-[#015D2C] font-semibold text-xs uppercase tracking-[0.25em] mb-5">
                Miami, Florida — Wholesale Import & Distribution
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.05]">
                U.S. Brands.<br />
                <span className="text-[#015D2C]">Latin American</span><br />
                Markets.
              </h1>
              <p className="text-lg text-white/60 mb-10 max-w-lg leading-[1.7] font-normal">
                Direct sourcing from U.S. manufacturers. End-to-end logistics. Bilingual support for retailers and distributors across Latin America.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={base + "/request-account"}>
                  <button className="btn-primary text-base flex items-center gap-2">
                    Become a Partner <ArrowRight className="h-5 w-5" />
                  </button>
                </Link>
                <Link href={base + "/catalog"}>
                  <button className="btn-secondary text-base flex items-center gap-2">
                    See Catalog <ChevronRight className="h-5 w-5" />
                  </button>
                </Link>
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
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-5 py-2.5 rounded-full border shadow-md">
                      <p className="text-sm font-semibold text-[#07121A] whitespace-nowrap">{p.name}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
                {heroProducts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === heroIndex ? "w-8 bg-[#015D2C]" : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BRANDS SCROLLING CAROUSEL ===== */}
      <section className="py-16 border-y bg-white overflow-hidden">
        <div className="container-max text-center mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-[#07121A]">
            Brands We Carry
          </h2>
          <p className="text-base text-[#526880] max-w-lg mx-auto leading-[1.7] mt-4">
            Authentic products from leading manufacturers, sourced through authorized distributors and verified wholesale suppliers.
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-brand-scroll whitespace-nowrap gap-16">
            {[...brands, ...brands].map((b, i) => (
              <span key={`${b}-${i}`} className="text-xl font-bold text-[#CFD9E6] tracking-wide shrink-0">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BANNER ===== */}
      <section className="py-20 md:py-24" style={{ background: "linear-gradient(135deg, #001A2E 0%, #012B47 100%)" }}>
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
                <p className="text-base text-white/60 mt-3 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="section-title text-3xl md:text-4xl font-extrabold text-[#07121A]">
              What Our Partners Say
            </h2>
            <p className="text-base text-[#526880] mt-4">Real businesses. Real results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-modern p-8 text-center">
                <div className="h-16 w-16 bg-[#F0F4F8] rounded-full mx-auto mb-5 flex items-center justify-center">
                  <Package className="h-7 w-7 text-[#526880]" />
                </div>
                <p className="text-base text-[#526880] mb-2">Customer review photo</p>
                <p className="text-sm text-[#526880]/60">Upload your photo to replace this placeholder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section className="section-padding bg-[#F0F4F8]">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="section-title text-3xl md:text-4xl font-extrabold text-[#07121A]">
              How We Work
            </h2>
            <p className="text-base text-[#526880] mt-4">From first contact to final delivery</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-5">
            {howWeWork.map((item, idx) => (
              <div key={item.step} className="card-modern p-7 text-center relative">
                <span className="text-4xl font-extrabold text-[#CFD9E6] block mb-4">
                  {item.step}
                </span>
                <item.icon className="h-5 w-5 text-[#015D2C] mx-auto mb-4" />
                <h3 className="font-bold text-base mb-3 text-[#07121A]">{item.title}</h3>
                <p className="text-sm text-[#526880] leading-[1.7]">{item.desc}</p>
                {idx < 4 && (
                  <div className="hidden sm:block absolute top-1/2 -right-2.5 w-5 h-0.5 bg-[#CFD9E6]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE LEADER STORE ===== */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="section-title text-3xl md:text-4xl font-extrabold text-[#07121A]">
              Why Choose Leader Store
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="card-modern p-8">
                <CheckCircle2 className="h-6 w-6 text-[#015D2C] mb-4" />
                <h3 className="font-bold text-lg mb-3 text-[#07121A]">{item.title}</h3>
                <p className="text-base text-[#526880] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="section-padding bg-[#F0F4F8]">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="section-title text-3xl md:text-4xl font-extrabold text-[#07121A]">
              Industries We Serve
            </h2>
            <p className="text-base text-[#526880] mt-4">We import across every major consumer category</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <div key={ind} className="card-modern p-6 text-center flex flex-col items-center justify-center gap-3">
                <ArrowUpRight className="h-5 w-5 text-[#015D2C]" />
                <span className="text-base font-semibold text-[#07121A]">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== READY TO PARTNER ===== */}
      <section className="py-20 md:py-24 text-center" style={{ background: "linear-gradient(135deg, #001A2E 0%, #012B47 100%)" }}>
        <div className="container-max">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">
            Ready to Partner?
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-lg mx-auto leading-[1.7]">
            Apply for a wholesale account and get access to our full catalog, pricing tiers, and a dedicated account manager.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={base + "/request-account"}>
              <button className="btn-primary text-base flex items-center gap-2">
                Apply for Wholesale <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
            <Link href={base + "/contact"}>
              <button className="btn-secondary text-base">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
