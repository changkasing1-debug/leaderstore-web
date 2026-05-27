import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { ArrowRight, ArrowLeft, Phone, Mail, FileText, Truck, MapPin, ArrowUpRight, ChevronRight, Users, ShieldCheck, Globe, Headphones } from "lucide-react";

const heroProducts = [
  { img: "prod-headphones.png", name: "Sony WH-1000XM5" },
  { img: "prod-smartphone.png", name: "Samsung Galaxy S24 Ultra" },
  { img: "prod-sneakers.png", name: "Nike Air Max 90" },
  { img: "prod-watch.png", name: "Apple Watch Series 9" },
  { img: "prod-skincare.png", name: "L'Oréal Revitalift" },
  { img: "prod-lighting.png", name: "Philips Hue Starter" },
  { img: "prod-toy.png", name: "LEGO Millennium Falcon" },
];

const brandLogos = [
  { src: "/brands/brand-01.jpeg", alt: "Brand 1" },
  { src: "/brands/brand-02.png",  alt: "Brand 2" },
  { src: "/brands/brand-03.jpeg", alt: "Brand 3" },
  { src: "/brands/brand-04.jpeg", alt: "Brand 4" },
  { src: "/brands/brand-05.jpeg", alt: "Brand 5" },
  { src: "/brands/brand-06.jpeg", alt: "Brand 6" },
  { src: "/brands/brand-07.jpeg", alt: "Brand 7" },
  { src: "/brands/brand-08.jpeg", alt: "Brand 8" },
  { src: "/brands/brand-09.jpeg", alt: "Brand 9" },
  { src: "/brands/brand-10.jpeg", alt: "Brand 10" },
  { src: "/brands/brand-11.jpeg", alt: "Brand 11" },
  { src: "/brands/brand-12.png",  alt: "Brand 12" },
  { src: "/brands/brand-13.jpeg", alt: "Brand 13" },
];

const stats = [
  { value: 60, suffix: "+", label: "Businesses Served" },
  { value: 150, suffix: "+", label: "Containers to Latin America" },
  { value: 15, suffix: "", label: "Countries Shipped" },
];

const howWeWork = [
  { icon: Phone,    step: "01", title: "Get in Touch",         desc: "Contact us by form, email, or phone. Tell us what products you need and your target market." },
  { icon: FileText, step: "02", title: "Receive a Quote",      desc: "Within 24 hrs we send a detailed proposal with pricing, MOQs, and shipping options." },
  { icon: Mail,     step: "03", title: "Confirm Your Order",   desc: "Approve the quote, sign the agreement, and our team verifies inventory and prepares export docs." },
  { icon: Truck,    step: "04", title: "We Handle Logistics",  desc: "We coordinate freight forwarding, customs clearance, and door-to-door shipping to your location." },
  { icon: MapPin,   step: "05", title: "Delivered & Supported", desc: "Products arrive ready to sell. Your account manager follows up to ensure everything is perfect." },
];

const whyUs = [
  { icon: Headphones, title: "Personalized Support", desc: "Real people, real support. Our bilingual team provides warm, personalized service in English or Spanish to ensure every client feels understood and guided from start to finish." },
  { icon: ShieldCheck, title: "Original Brand Products", desc: "We offer wholesale access to original, high-quality consumer goods from trusted brands — so your business always stocks what customers want." },
  { icon: Globe, title: "Latin America Expertise", desc: "We understand import regulations, consumer preferences, and market demand in every country we serve across the region." },
  { icon: Users, title: "Dedicated Account Manager", desc: "Every wholesale partner gets a dedicated point of contact who knows your business, your needs, and your markets." },
];

const productCategories = [
  { img: "prod-headphones.png",  label: "Audio & Headphones",  sub: "Premium sound gear",          accent: "#001A2E" },
  { img: "prod-smartphone.png",  label: "Mobile Devices",       sub: "Smartphones & tablets",        accent: "#012B1A" },
  { img: "cat-electronics.png",  label: "Electronics",          sub: "Gadgets & tech accessories",   accent: "#07121A" },
  { img: "cat-beauty.png",       label: "Beauty & Personal Care",sub: "Cosmetics & wellness",        accent: "#1A0A2E" },
  { img: "cat-kitchen.png",      label: "Home & Kitchen",       sub: "Appliances & cookware",        accent: "#001A2E" },
  { img: "cat-pet.png",          label: "Pet Supplies",         sub: "Food, toys & accessories",     accent: "#012B1A" },
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
      if (start >= target) { setCount(target); clearInterval(interval); }
      else setCount(start);
    }, 16);
    return () => clearInterval(interval);
  }, [visible, target, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">{count}{suffix}</div>
    </div>
  );
}

export default function Home() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setHeroIndex((i) => (i + 1) % heroProducts.length), 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, []);

  const prev = () => setHeroIndex((i) => (i - 1 + heroProducts.length) % heroProducts.length);
  const next = () => setHeroIndex((i) => (i + 1) % heroProducts.length);

  return (
    <Layout>
      {/* ===== HERO: Split card layout ===== */}
      <section
        className="py-6 px-4 md:px-8"
        style={{ background: "linear-gradient(135deg, #001A2E 0%, #012B47 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[420px]"
            style={{ background: "linear-gradient(135deg, #001F3D 0%, #013352 100%)" }}>

            {/* LEFT — text content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-5">
                Welcome to Leader Store —{" "}
                <span className="text-[#4ade80]">Wholesale Import & Distribution</span>{" "}
                in Miami
              </h1>
              <p className="text-white/70 text-base leading-[1.7] mb-8 max-w-md">
                Bulk supply of consumer goods, electronics, beauty, and more for licensed businesses across Latin America and beyond.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href={base + "/request-account"}>
                  <button className="bg-[#07121A] text-white font-bold px-6 py-3 rounded-lg hover:bg-black transition-colors text-sm">
                    Become a Partner
                  </button>
                </Link>
                <Link href={base + "/about"}>
                  <button className="border border-white/50 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm">
                    More About Us
                  </button>
                </Link>
              </div>
            </div>

            {/* RIGHT — featured product card */}
            <div className="bg-white/5 border-l border-white/10 flex flex-col">
              <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-white/10">
                <span className="text-white font-bold text-sm">Featured products</span>
                <div className="flex gap-2">
                  <button onClick={prev}
                    className="h-7 w-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <ArrowLeft className="h-3.5 w-3.5" />
                  </button>
                  <button onClick={next}
                    className="h-7 w-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
              <div className="flex-1 relative overflow-hidden min-h-[280px]">
                {heroProducts.map((p, i) => (
                  <div
                    key={p.img}
                    className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-700 ${
                      i === heroIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                  >
                    <img
                      src={`${base}${p.img}`}
                      alt={p.name}
                      className="max-h-[200px] max-w-[220px] object-contain drop-shadow-2xl mb-4"
                    />
                    <p className="text-[#4ade80] font-bold text-sm text-center uppercase tracking-wide">
                      {p.name}
                    </p>
                    <p className="text-white/50 text-xs mt-1 text-center">Want to sell our products?</p>
                    <Link href={base + "/request-account"}>
                      <button className="mt-3 bg-[#07121A] text-white text-xs font-bold px-4 py-2 rounded hover:bg-black transition-colors">
                        Become a Partner
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-1.5 pb-4">
                {heroProducts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === heroIndex ? "w-6 bg-[#4ade80]" : "w-1.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BRANDS SCROLLING CAROUSEL ===== */}
      <section className="py-16 bg-[#F0F4F8] overflow-hidden border-b border-[#CFD9E6]">
        <div className="container-max text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#015D2C] mb-3">Our Portfolio</p>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-[#07121A]">
            Brands We Carry
          </h2>
          <p className="text-base text-[#526880] max-w-lg mx-auto leading-[1.7] mt-4">
            Authentic products from leading manufacturers, sourced through authorized distributors.
          </p>
        </div>

        {/* Carousel track with fade edges */}
        <div className="relative">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
            style={{ background: "linear-gradient(to right, #F0F4F8, transparent)" }} />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
            style={{ background: "linear-gradient(to left, #F0F4F8, transparent)" }} />

          <div className="flex animate-brand-scroll gap-6" style={{ width: "max-content" }}>
            {[...brandLogos, ...brandLogos].map((b, i) => (
              <div
                key={`${b.src}-${i}`}
                className="shrink-0 flex items-center justify-center bg-white rounded-2xl border border-[#CFD9E6] shadow-sm"
                style={{ width: 160, height: 96, padding: "12px 20px" }}
              >
                <img
                  src={b.src}
                  alt={b.alt}
                  className="max-h-full max-w-full object-contain"
                  style={{ filter: "grayscale(20%)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BANNER ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #001A2E 0%, #01263F 50%, #012B47 100%)" }}>
        {/* decorative blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #015D2C, transparent)" }} />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #4ade80, transparent)" }} />

        <div className="container-max relative z-10">
          {/* eyebrow */}
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-[#4ade80] mb-2">By the numbers</p>
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-white mb-14 leading-tight">
            Trusted by growing businesses<br className="hidden md:block" /> across the Americas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { value: 60, suffix: "+", label: "Businesses Served", sub: "Active wholesale partners", icon: Users },
              { value: 150, suffix: "+", label: "Containers Shipped", sub: "To Latin America & beyond", icon: Truck },
              { value: 15, suffix: "", label: "Countries Reached", sub: "International distribution", icon: Globe },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center py-8 md:py-0 md:px-12 gap-4">
                <div className="h-14 w-14 rounded-2xl flex items-center justify-center mb-1"
                  style={{ background: "rgba(1, 93, 44, 0.25)", border: "1px solid rgba(74, 222, 128, 0.2)" }}>
                  <s.icon className="h-6 w-6 text-[#4ade80]" />
                </div>
                <AnimatedCounter target={s.value} suffix={s.suffix} />
                <div>
                  <p className="text-base font-bold text-white">{s.label}</p>
                  <p className="text-sm text-white/40 mt-0.5">{s.sub}</p>
                </div>
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
                  <span className="text-2xl text-[#526880]">★</span>
                </div>
                <p className="text-base text-[#526880] mb-2">Customer review photo</p>
                <p className="text-sm text-[#526880]/60">Upload your photo to replace this placeholder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "linear-gradient(160deg, #001A2E 0%, #012035 60%, #001428 100%)" }}>
        {/* subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        {/* glow accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-20 blur-3xl rounded-full" style={{ background: "radial-gradient(ellipse, #015D2C, transparent)" }} />

        <div className="container-max relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4ade80] mb-3">Simple & transparent</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">How We Work</h2>
            <p className="text-base text-white/50 max-w-xl mx-auto">From your first message to products arriving at your door — a clear, reliable process every step of the way.</p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {howWeWork.map((item, idx) => (
              <div key={item.step} className="relative flex flex-col items-center text-center">
                {/* connector line */}
                {idx < 4 && (
                  <div className="hidden md:block absolute top-10 left-[58%] w-full h-px" style={{ background: "linear-gradient(90deg, rgba(74,222,128,0.4), rgba(74,222,128,0.1))" }} />
                )}

                {/* icon circle */}
                <div className="relative mb-5">
                  <div className="h-20 w-20 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, rgba(1,93,44,0.5), rgba(1,93,44,0.15))", border: "1px solid rgba(74,222,128,0.25)", boxShadow: "0 0 24px rgba(74,222,128,0.08)" }}>
                    <item.icon className="h-8 w-8 text-[#4ade80]" />
                  </div>
                  {/* step badge */}
                  <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-[#015D2C] text-white text-[10px] font-extrabold flex items-center justify-center shadow-md">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed px-1">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Link href={base + "/request-account"}>
              <button className="inline-flex items-center gap-2 bg-[#015D2C] hover:bg-[#014a23] text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-all shadow-lg shadow-green-900/30">
                Start the Process <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== OUR PRODUCTS ===== */}
      <section className="section-padding bg-[#F0F4F8]">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#015D2C] mb-3">What We Distribute</p>
            <h2 className="section-title text-3xl md:text-4xl font-extrabold text-[#07121A]">
              Product Categories
            </h2>
            <p className="text-base text-[#526880] max-w-xl mx-auto leading-[1.7] mt-4">
              Original, brand-name merchandise across the most in-demand consumer categories — ready for wholesale distribution.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <Link key={cat.label} href={base + "/catalog"}>
                <div className="group relative bg-white rounded-2xl border border-[#CFD9E6] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  {/* Image area */}
                  <div
                    className="relative flex items-center justify-center h-52 overflow-hidden"
                    style={{ background: `linear-gradient(160deg, ${cat.accent}18 0%, ${cat.accent}08 100%)` }}
                  >
                    {/* Decorative circle behind image */}
                    <div
                      className="absolute w-44 h-44 rounded-full opacity-[0.06]"
                      style={{ background: cat.accent }}
                    />
                    <img
                      src={`${base}${cat.img}`}
                      alt={cat.label}
                      className="relative z-10 max-h-[150px] max-w-[150px] object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                    />
                    {/* Hover green overlay badge */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="h-8 w-8 rounded-full bg-[#015D2C] flex items-center justify-center shadow-md">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Text area */}
                  <div className="px-6 py-5 border-t border-[#CFD9E6] flex items-center justify-between">
                    <div>
                      <p className="font-bold text-[#07121A] text-sm leading-tight">{cat.label}</p>
                      <p className="text-xs text-[#526880] mt-0.5">{cat.sub}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-[#CFD9E6] group-hover:text-[#015D2C] group-hover:translate-x-0.5 transition-all duration-300 shrink-0" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <Link href={base + "/catalog"}>
              <button className="inline-flex items-center gap-2 bg-[#001A2E] text-white font-bold px-8 py-3.5 rounded-xl text-sm hover:bg-[#015D2C] transition-colors duration-300 shadow-md">
                Browse Full Catalog
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE LEADER STORE ===== */}
      <section className="section-padding bg-[#F0F4F8]">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="section-title text-3xl md:text-4xl font-extrabold text-[#07121A]">
              Why Choose Leader Store
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="card-modern p-8 text-center flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-[#001A2E] flex items-center justify-center mb-5">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-base mb-3 text-[#07121A]">{item.title}</h3>
                <p className="text-sm text-[#526880] leading-[1.7]">{item.desc}</p>
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
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">Ready to Partner?</h2>
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
              <button className="btn-secondary text-base flex items-center gap-2">
                Contact Us <ChevronRight className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
