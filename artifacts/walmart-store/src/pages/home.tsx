import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { ArrowRight, ArrowLeft, Phone, Mail, FileText, Truck, MapPin, ArrowUpRight, ChevronRight, Users, ShieldCheck, Globe, Headphones } from "lucide-react";

const heroProducts = [
  { img: "products/arb-summit-side-step.jpg", name: "ARB Summit Side Step & Rail Kit" },
  { img: "products/old-man-emu-mt64-lift-kit.jpg", name: "Old Man Emu MT64 Lift Kit" },
  { img: "products/awning-truck.webp", name: "OVS Overland Truck Awning" },
  { img: "products/roam-cooler.webp", name: "ROAM 20L Rugged Cooler" },
  { img: "products/kn-intake-system.webp", name: "K&N Performance Intake System" },
  { img: "products/stedi-driving-lights.png", name: "STEDI Type-X Pro LED Lights" },
  { img: "products/rugged-ridge-mats.png", name: "Rugged Ridge All-Terrain Mats" },
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
  { value: 21, suffix: "+", label: "Part Numbers in Stock" },
  { value: 14, suffix: "+", label: "Top Brands Carried" },
  { value: 24, suffix: "h", label: "Order Turnaround" },
];

const howWeWork = [
  { icon: Phone,    step: "01", title: "Get in Touch",          desc: "Contact us by phone, email, or form. Tell us which parts you need and your estimated volume." },
  { icon: FileText, step: "02", title: "Receive a Quote",       desc: "Within 24 hours we send a detailed proposal with pricing, MOQs, and available stock." },
  { icon: Mail,     step: "03", title: "Confirm Your Order",    desc: "Approve the quote, sign the agreement, and our team prepares your order for fulfillment." },
  { icon: Truck,    step: "04", title: "Fast Local Fulfillment", desc: "Orders ship from our Miami warehouse. Local pickup also available at our Doral location." },
  { icon: MapPin,   step: "05", title: "Delivered & Supported", desc: "Parts arrive ready to resell. Your account manager follows up to keep your stock moving." },
];

const whyUs = [
  { icon: Headphones, title: "Bilingual Support", desc: "Real people, real answers. Our bilingual team — English and Spanish — is available to help you from your first quote to your final delivery." },
  { icon: ShieldCheck, title: "100% Genuine Parts", desc: "We stock only certified OEM and premium aftermarket brands — no counterfeits, no substitutions. Every part is authentic and quality-guaranteed." },
  { icon: Globe, title: "Miami-Based, Always Ready", desc: "Our warehouse is in Doral, Miami. Fast turnaround, local pickup available, and same-week shipping across the U.S. and beyond." },
  { icon: Users, title: "Dedicated Account Manager", desc: "Every wholesale account gets a dedicated contact who knows your business, your preferred brands, and your restocking schedule." },
];

const productCategories = [
  { img: "products/arb-summit-side-step.jpg", label: "Exterior Protection",    sub: "Side steps, rails & body armor",  accent: "#001A2E" },
  { img: "products/old-man-emu-mt64-lift-kit.jpg", label: "Suspension & Lift Kits", sub: "Lift kits, shocks & control arms", accent: "#012B1A" },
  { img: "products/weathertech-liner.jpg", label: "Interior Accessories",  sub: "Floor liners, mats & protection", accent: "#07121A" },
  { img: "products/kn-air-filter.png",     label: "Filters & Intake",      sub: "Air filters, intakes & cleaners", accent: "#1A0A2E" },
  { img: "products/stedi-driving-lights.png", label: "Lighting",             sub: "LED lights, bars & assemblies",   accent: "#001A2E" },
  { img: "products/awning-truck.webp",     label: "Roof Racks & Cargo",    sub: "Awnings, carriers & overland",  accent: "#012B1A" },
];

const industries = [
  "Auto Parts Retailers", "Car Detailing Shops", "Repair & Service Centers",
  "Car Dealerships", "Commercial Fleets", "Off-Road & 4x4 Shops",
  "Racing & Motorsport Teams", "Tire & Wheel Shops", "Auto Body Shops",
];

type Review = { img: string; name: string; location: string; quote: string };

function ReviewCarousel({ reviews, base }: { reviews: Review[]; base: string }) {
  const [idx, setIdx] = useState(0);
  const total = reviews.length;
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  const visible = [0, 1, 2].map((offset) => reviews[(idx + offset) % total]);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#015D2C] mb-3">Testimonials</p>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-[#07121A]">
            What Our Partners Say
          </h2>
          <p className="text-base text-[#526880] mt-4">Real businesses. Real results.</p>
          {/* Arrow controls */}
          <div className="flex gap-3 justify-center mt-6">
            <button onClick={prev}
              className="h-10 w-10 rounded-full border border-[#CFD9E6] flex items-center justify-center text-[#526880] hover:bg-[#001A2E] hover:text-white hover:border-[#001A2E] transition-all duration-200">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button onClick={next}
              className="h-10 w-10 rounded-full border border-[#CFD9E6] flex items-center justify-center text-[#526880] hover:bg-[#001A2E] hover:text-white hover:border-[#001A2E] transition-all duration-200">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Cards — show 3 on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((r, i) => (
            <div
              key={`${r.name}-${i}`}
              className={`bg-white rounded-2xl border border-[#CFD9E6] overflow-hidden shadow-sm transition-all duration-500 ${i === 0 ? "ring-2 ring-[#001A2E]/10" : "opacity-90"}`}
            >
              <div className="px-5 pt-5 pb-3">
                <p className="font-extrabold text-[#07121A] text-sm leading-tight">{r.name}</p>
                <p className="text-xs text-[#015D2C] font-semibold mt-0.5">{r.location}</p>
              </div>
              <div className="h-48 overflow-hidden">
                <img src={`${base}/${r.img}`} alt={r.name} className="w-full h-full object-cover object-center" />
              </div>
              <div className="px-5 py-4">
                <p className="text-sm text-[#526880] leading-[1.75] italic">"{r.quote}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`rounded-full transition-all duration-300 ${i === idx ? "w-6 h-2 bg-[#001A2E]" : "w-2 h-2 bg-[#CFD9E6]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

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
        className="py-6 px-4 md:px-8 relative overflow-hidden"
        style={{ background: "#001A2E" }}
      >
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
            src={`${base}/hero-bg.mp4`}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,26,46,0.55) 0%, rgba(1,43,71,0.50) 100%)" }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[420px]"
            style={{ background: "linear-gradient(135deg, rgba(0,31,61,0.75) 0%, rgba(1,51,82,0.75) 100%)", backdropFilter: "blur(2px)" }}>

            {/* LEFT — text content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-5">
                Leader Store —{" "}
                <span className="text-[#4ade80]">Wholesale Auto Parts</span>{" "}
                Distributor in Miami
              </h1>
              <p className="text-white/70 text-base leading-[1.7] mb-8 max-w-md">
                OEM and premium aftermarket parts from the world's top brands — stocked in our Miami warehouse and ready for wholesale buyers, repair shops, and fleets.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href={base + "/request-account"}>
                  <button className="bg-[#07121A] text-white font-bold px-6 py-3 rounded-lg hover:bg-black transition-colors text-sm">
                    Open Wholesale Account
                  </button>
                </Link>
                <Link href={base + "/about"}>
                  <button className="border border-white/50 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm">
                    About Us
                  </button>
                </Link>
              </div>
            </div>

            {/* RIGHT — featured product card */}
            <div className="bg-white/5 border-l border-white/10 flex flex-col">
              <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-white/10">
                <span className="text-white font-bold text-sm">Featured Parts</span>
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
                      src={`${base}/${p.img}`}
                      alt={p.name}
                      className="max-h-[200px] max-w-[220px] object-contain drop-shadow-2xl mb-4"
                    />
                    <p className="text-[#4ade80] font-bold text-sm text-center uppercase tracking-wide">
                      {p.name}
                    </p>
                    <p className="text-white/50 text-xs mt-1 text-center">Want to stock this part?</p>
                    <Link href={base + "/request-account"}>
                      <button className="mt-3 bg-[#07121A] text-white text-xs font-bold px-4 py-2 rounded hover:bg-black transition-colors">
                        Get Wholesale Access
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
            OEM and premium aftermarket parts from the world's most trusted automotive manufacturers.
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
            Trusted Numbers That<br className="hidden md:block" /> Speak for Themselves
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { value: 21, suffix: "+", label: "Part Numbers in Stock", sub: "Ready to ship from Miami", icon: Users },
              { value: 14, suffix: "+", label: "Top Brands Carried", sub: "OEM & premium aftermarket", icon: Truck },
              { value: 24, suffix: "h", label: "Order Turnaround", sub: "Same-week fulfillment", icon: Globe },
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

      {/* ===== REVIEWS CAROUSEL ===== */}
      {(() => {
        const reviews = [
          { img: "reviews/rev-01.jpg", name: "Miami Auto Group", location: "Miami, FL", quote: "Parts always arrive on time. Great stock." },
          { img: "reviews/rev-02.jpg", name: "Pro Fleet Services", location: "Hialeah, FL", quote: "Best wholesale pricing in South Florida." },
          { img: "reviews/rev-03.jpg", name: "Sunshine Auto Repair", location: "Doral, FL", quote: "Genuine parts, fast turnaround every time." },
          { img: "reviews/rev-04.jpg", name: "Rodriguez Auto Parts", location: "Homestead, FL", quote: "Great variety and quality guaranteed." },
          { img: "reviews/rev-05.jpg", name: "Tropical Tire & Service", location: "Kendall, FL", quote: "Simple process, no complications." },
        ];
        return (
          <ReviewCarousel reviews={reviews} base={base} />
        );
      })()}

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
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#015D2C] mb-3">What We Carry</p>
            <h2 className="section-title text-3xl md:text-4xl font-extrabold text-[#07121A]">
              Auto Parts Categories
            </h2>
            <p className="text-base text-[#526880] max-w-xl mx-auto leading-[1.7] mt-4">
              Full vehicle coverage — brakes, suspension, filters, ignition, belts, and steering all in one place.
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
                      src={`${base}/${cat.img}`}
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
      <section className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(150deg, #001A2E 0%, #012030 60%, #01301A 100%)" }}>
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, #4ade80, transparent)" }} />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, #015D2C, transparent)" }} />

        <div className="container-max relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4ade80] mb-3">Our Advantage</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Why Choose Leader Store
            </h2>
          </div>

          {/* 2×2 feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.08]">
            {whyUs.map((item, idx) => (
              <div
                key={item.title}
                className="group relative p-8 md:p-10 flex gap-6 hover:bg-white/[0.04] transition-colors duration-300"
              >
                {/* Subtle top-border accent on hover */}
                <div className="absolute top-0 left-8 right-8 h-px bg-[#4ade80] opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

                {/* Icon */}
                <div className="shrink-0 h-14 w-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(1,93,44,0.30)", border: "1px solid rgba(74,222,128,0.20)" }}>
                  <item.icon className="h-6 w-6 text-[#4ade80]" />
                </div>

                {/* Text */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4ade80] mb-1">0{idx + 1}</p>
                  <h3 className="font-extrabold text-white text-base mb-2 leading-snug">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-[1.8]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div className="mt-12 border-t border-white/10 pt-10 flex flex-col items-center gap-5 text-center">
            <p className="text-white/60 text-sm">Ready to experience the difference?</p>
            <Link href={base + "/request-account"}>
              <button className="inline-flex items-center gap-2 bg-[#015D2C] hover:bg-[#017a3a] text-white font-bold px-7 py-3 rounded-xl text-sm transition-colors duration-300 shadow-lg">
                Apply for Wholesale
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="section-padding bg-[#F0F4F8]">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#015D2C] mb-3">Coverage</p>
            <h2 className="section-title text-3xl md:text-4xl font-extrabold text-[#07121A]">
              Who We Serve
            </h2>
            <p className="text-base text-[#526880] mt-4 max-w-lg mx-auto leading-[1.7]">
              We serve the full automotive ecosystem — from the independent shop to the national fleet operator.
            </p>
          </div>

          {/* Badge cloud */}
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-6 py-3 rounded-full border border-[#CFD9E6] bg-white text-sm font-semibold text-[#07121A] hover:bg-[#001A2E] hover:text-white hover:border-[#001A2E] transition-all duration-300 cursor-default select-none"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== READY TO PARTNER ===== */}
      <section className="py-20 md:py-24 text-center" style={{ background: "linear-gradient(135deg, #001A2E 0%, #012B47 100%)" }}>
        <div className="container-max">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">Ready to Open a Wholesale Account?</h2>
          <p className="text-lg text-white/60 mb-10 max-w-lg mx-auto leading-[1.7]">
            Apply today and get access to our full catalog, volume pricing, and a dedicated account manager based in Miami.
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
