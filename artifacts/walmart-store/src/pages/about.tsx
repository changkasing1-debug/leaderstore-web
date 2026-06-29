import { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout";
import { Link, useLocation } from "wouter";
import {
  Globe, ShieldCheck, Truck, MapPin, Users,
  ArrowRight, Phone, Mail, Clock, Package,
  CheckCircle2, ArrowUpRight
} from "lucide-react";

/* ── Animated Counter (ease-out cubic via rAF) ── */
function AnimatedCounter({ target, suffix, duration = 1200 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = performance.now();
    let rafId: number;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = easeOutCubic(progress);
      setCount(Math.round(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [visible, target, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-[#07121A] mb-1">{count.toLocaleString()}{suffix}</div>
    </div>
  );
}

/* ── Page ── */
export default function About() {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "") || "";
  const [, setLocation] = useLocation();

  const stats = [
    { value: 10, suffix: "+", label: "Years in Business", sub: "Serving the Americas since 2016" },
    { value: 50, suffix: "+", label: "Brand Partners", sub: "OEM & premium aftermarket" },
    { value: 10000, suffix: "+", label: "Clients Served", sub: "Repair shops, fleets & retailers" },
    { value: 21, suffix: "", label: "Product Categories", sub: "From filters to suspension kits" },
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: "100% Genuine Parts",
      desc: "We source exclusively from verified U.S. manufacturers and authorized distributors. Every part ships with full certificates, warranties, and compliance documentation.",
      color: "#015D2C",
    },
    {
      icon: Truck,
      title: "End-to-End Logistics",
      desc: "From warehouse pickup in Miami to your door anywhere in the Americas. We handle freight consolidation, customs clearance, and last-mile delivery.",
      color: "#001A2E",
    },
    {
      icon: Users,
      title: "Bilingual Account Managers",
      desc: "Every wholesale partner gets a dedicated English/Spanish-speaking account manager who knows your preferred brands, reorder schedules, and volume needs.",
      color: "#015D2C",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      desc: "Stocked in our Doral, Miami warehouse. Same-day local pickup and 3–5 day shipping across the U.S. and Latin America for in-stock items.",
      color: "#001A2E",
    },
    {
      icon: Package,
      title: "Volume Pricing Tiers",
      desc: "Competitive wholesale rates that improve as your volume grows. No hidden fees, no surprise charges — transparent pricing from day one.",
      color: "#015D2C",
    },
    {
      icon: Globe,
      title: "LatAm Market Expertise",
      desc: "We understand import regulations, consumer preferences, and distribution channels across Latin America. We do not just ship — we guide.",
      color: "#001A2E",
    },
  ];

  const values = [
    { title: "Integrity First", desc: "We never substitute brands, inflate prices, or cut corners. Our reputation is built on doing what we say." },
    { title: "Partnership Over Transaction", desc: "We grow when our partners grow. Your success is our long-term strategy, not a one-time sale." },
    { title: "Operational Excellence", desc: "Every process — from quoting to shipping — is optimized for speed, accuracy, and transparency." },
    { title: "Market-Driven Selection", desc: "We stock what sells. Our inventory is shaped by real demand data from repair shops and fleet operators across the Americas." },
  ];

  return (
    <Layout>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden">
        <div className="relative h-[380px] md:h-[520px]">
          <img
            src={`${base}/reviews/warehouse-aisle-1.jpg`}
            alt="Leader Store warehouse in Doral, Miami"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#001A2E]/80" />
          {/* subtle grid texture */}
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4ade80] mb-4">Who We Are</p>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
                Leader Store LLC
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Wholesale auto parts distributor based in Doral, Miami. Connecting OEM and premium aftermarket brands to repair shops, fleets, and retailers across the Americas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ OUR STORY ═══════════ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#CFD9E6]">
                <img
                  src={`${base}/reviews/warehouse-aisle-2.jpg`}
                  alt="Leader Store inventory aisle"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-5 -right-2 md:right-6 bg-[#001A2E] text-white px-5 py-3 rounded-xl shadow-lg">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#4ade80] mb-0.5">Since</p>
                <p className="text-xl font-extrabold">2016</p>
              </div>
            </div>

            {/* Text side */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#015D2C] mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#07121A] mb-6 leading-tight">
                Built for Wholesale,<br />Rooted in Miami
              </h2>
              <div className="space-y-4 text-[#526880] leading-[1.8] text-sm md:text-base">
                <p>
                  Leader Store LLC was founded with a clear mission: make genuine U.S. auto parts accessible to businesses across Latin America at true wholesale prices.
                </p>
                <p>
                  Based in <strong className="text-[#07121A]">Doral, Florida</strong> — one of Miami's premier logistics corridors — we operate a fully stocked warehouse minutes from major freight hubs and the Port of Miami.
                </p>
                <p>
                  We are not a marketplace. We are a dedicated wholesale operation with real inventory, real people, and real relationships with brands like Toyota, ARB, WeatherTech, AMSOIL, Nitto, and Mopar.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setLocation(`${base}/request-account`)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#015D2C] text-white rounded-lg font-bold text-sm hover:bg-[#001A2E] transition-colors"
                >
                  Apply for Wholesale <ArrowRight className="h-4 w-4" />
                </button>
                <Link
                  href={`${base}/catalog`}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#CFD9E6] text-[#07121A] rounded-lg font-bold text-sm hover:border-[#001A2E] hover:text-[#001A2E] transition-colors"
                >
                  Browse Catalog <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ STATS ═══════════ */}
      <section className="bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#015D2C] mb-3">By The Numbers</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#07121A]">Trusted Numbers That Speak</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl border border-[#CFD9E6] p-6 md:p-8 text-center hover:shadow-lg hover:border-[#001A2E]/20 transition-all duration-300"
              >
                <AnimatedCounter target={s.value} suffix={s.suffix} />
                <p className="text-sm font-bold text-[#07121A] mt-2">{s.label}</p>
                <p className="text-xs text-[#526880] mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT SETS US APART ═══════════ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#015D2C] mb-3">Our Difference</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#07121A] mb-4">What Sets Us Apart</h2>
            <p className="text-[#526880] max-w-xl mx-auto">
              Six pillars that define how we operate and why partners choose to stay with us year after year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group bg-[#F0F4F8] rounded-2xl p-6 md:p-7 border border-transparent hover:border-[#CFD9E6] hover:shadow-lg hover:bg-white transition-all duration-300"
              >
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: p.color + "15" }}
                >
                  <p.icon className="h-5 w-5" style={{ color: p.color }} />
                </div>
                <h3 className="text-lg font-extrabold text-[#07121A] mb-2">{p.title}</h3>
                <p className="text-sm text-[#526880] leading-[1.75]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ VALUES ═══════════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #001A2E 0%, #012035 60%, #001428 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-15 blur-3xl rounded-full"
          style={{ background: "radial-gradient(ellipse, #015D2C, transparent)" }} />

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28 relative z-10">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4ade80] mb-3">Our DNA</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">What We Stand For</h2>
            <p className="text-white/50 max-w-xl mx-auto">
              These values are not slogans. They are the filter through which every decision at Leader Store passes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-7 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-[#4ade80]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white mb-2">{v.title}</h3>
                    <p className="text-sm text-white/60 leading-[1.75]">{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ LOCATION ═══════════ */}
      <section className="bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Info side */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#015D2C] mb-3">Visit Us</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#07121A] mb-6 leading-tight">
                Our Miami Warehouse
              </h2>
              <p className="text-[#526880] leading-[1.8] mb-8">
                Our facility in Doral, Florida is strategically positioned near Miami International Airport and the Port of Miami — giving us fast access to both air and sea freight for domestic and international shipments.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#001A2E] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-[#4ade80]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#526880] mb-0.5">Address</p>
                    <p className="text-sm font-bold text-[#07121A]">4805 NW 79th Ave</p>
                    <p className="text-sm text-[#526880]">Doral, FL 33166</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#001A2E] flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-[#4ade80]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#526880] mb-0.5">Phone</p>
                    <p className="text-sm font-bold text-[#07121A]">+1 (786) 987-6217</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#001A2E] flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-[#4ade80]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#526880] mb-0.5">Email</p>
                    <p className="text-sm font-bold text-[#07121A]">shop@leaderstore.us</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#001A2E] flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-[#4ade80]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#526880] mb-0.5">Hours</p>
                    <p className="text-sm font-bold text-[#07121A]">Mon – Fri: 8:00 AM – 6:00 PM EST</p>
                    <p className="text-sm text-[#526880]">Sat: 9:00 AM – 2:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#CFD9E6]">
                <img
                  src={`${base}/reviews/weathertech-floor-liner.jpg`}
                  alt="Premium auto parts inventory at Leader Store"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #001A2E 0%, #012B1E 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] opacity-20 blur-3xl rounded-full"
          style={{ background: "radial-gradient(ellipse, #015D2C, transparent)" }} />

        <div className="max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-28 text-center relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4ade80] mb-4">Ready to Partner?</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Let's Grow Your Business Together
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you run a repair shop, manage a fleet, or distribute parts across Latin America — we have the inventory, pricing, and logistics to support your growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setLocation(`${base}/request-account`)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#015D2C] text-white rounded-xl font-bold text-sm hover:bg-[#014d24] transition-colors"
            >
              Apply for Wholesale <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              href={`${base}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-colors"
            >
              Contact Our Team <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
