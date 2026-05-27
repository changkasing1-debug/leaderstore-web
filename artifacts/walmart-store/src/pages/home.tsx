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
  { icon: Headphones, title: "Personalized Support", desc: "Real people, real support. Our bilingual team provides warm, personalized service in English or Spanish to ensure every client feels understood and guided from start to finish." },
  { icon: ShieldCheck, title: "Original Brand Products", desc: "We offer wholesale access to original, high-quality consumer goods from trusted brands — so your business always stocks what customers want." },
  { icon: Globe, title: "Latin America Expertise", desc: "We understand import regulations, consumer preferences, and market demand in every country we serve across the region." },
  { icon: Users, title: "Dedicated Account Manager", desc: "Every wholesale partner gets a dedicated point of contact who knows your business, your needs, and your markets." },
];

const productCategories = [
  { img: "prod-headphones.png", label: "AUDIO" },
  { img: "prod-smartphone.png", label: "MOBILE DEVICES" },
  { img: "cat-electronics.png", label: "ELECTRONICS" },
  { img: "cat-beauty.png", label: "BEAUTY & CARE" },
  { img: "cat-kitchen.png", label: "HOME & KITCHEN" },
  { img: "cat-pet.png", label: "PET SUPPLIES" },
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
      <section className="py-14 border-b bg-white overflow-hidden">
        <div className="container-max text-center mb-10">
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-[#07121A]">
            Brands We Carry
          </h2>
          <p className="text-base text-[#526880] max-w-lg mx-auto leading-[1.7] mt-4">
            Authentic products from leading manufacturers, sourced through authorized distributors.
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-brand-scroll whitespace-nowrap gap-16">
            {[...brands, ...brands].map((b, i) => (
              <span key={`${b}-${i}`} className="text-lg font-bold text-[#CFD9E6] tracking-wide shrink-0">
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
                <span className="text-4xl font-extrabold text-[#CFD9E6] block mb-4">{item.step}</span>
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

      {/* ===== OUR PRODUCTS ===== */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, #EBF4FF 0%, #F0F7FF 100%)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Left panel */}
              <div className="md:col-span-1 p-8 md:p-10 flex flex-col justify-center border-r border-[#D0E4F7]">
                <h2 className="text-2xl font-extrabold text-[#001A2E] mb-3">Our products</h2>
                <p className="text-sm font-semibold text-[#526880] mb-2 leading-snug">
                  Discover our growing selection of wholesale goods and consumer products.
                </p>
                <p className="text-sm text-[#526880] leading-[1.7] mb-6">
                  We supply only original products from top brands — trusted merchandise to keep your business competitive and your customers satisfied.
                </p>
                <Link href={base + "/catalog"}>
                  <button className="bg-[#07121A] text-white font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-[#001A2E] transition-colors self-start">
                    Explore
                  </button>
                </Link>
              </div>

              {/* Right — category cards */}
              <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#D0E4F7]">
                {productCategories.map((cat) => (
                  <Link key={cat.label} href={base + "/catalog"}>
                    <div className="bg-white hover:bg-[#F8FBFF] transition-colors p-6 flex flex-col items-center justify-center gap-4 cursor-pointer group">
                      <div className="h-28 w-28 flex items-center justify-center">
                        <img
                          src={`${base}${cat.img}`}
                          alt={cat.label}
                          className="max-h-[110px] max-w-[110px] object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-xs font-bold text-[#07121A] tracking-widest text-center">
                        {cat.label}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
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
