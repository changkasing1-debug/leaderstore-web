import { useState, useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, BadgeDollarSign, Globe, Users, FileCheck, TrendingDown, ArrowLeft } from "lucide-react";

const benefits = [
  { icon: BadgeDollarSign, title: "Wholesale Pricing", desc: "Access tiered pricing with significant discounts below retail. The more you order, the lower your cost per unit." },
  { icon: ShieldCheck, title: "100% Authentic Products", desc: "All products sourced directly from U.S. manufacturers. Full documentation and certificates provided." },
  { icon: Truck, title: "End-to-End Logistics", desc: "We handle freight, customs documentation, and coordinate delivery to your warehouse or port." },
  { icon: Globe, title: "Latin America Expertise", desc: "Our team understands Latin American import regulations, consumer preferences, and market dynamics." },
  { icon: Users, title: "Dedicated Account Manager", desc: "Every partner gets a dedicated bilingual account manager for personalized service and support." },
  { icon: FileCheck, title: "Flexible Terms", desc: "We work with your business needs — from sample orders to full container loads. Net-30 terms available." },
];

const brandLogos = [
  { src: "/brands/amsoil.png", alt: "AMSOIL" },
  { src: "/brands/weathertech.png", alt: "WeatherTech" },
  { src: "/brands/kn.png", alt: "K&N" },
  { src: "/brands/mopar.png", alt: "Mopar" },
  { src: "/brands/jeep.png", alt: "Jeep" },
  { src: "/brands/nitto.png", alt: "Nitto" },
  { src: "/brands/toyota-logo.png", alt: "Toyota" },
  { src: "/brands/arb.png", alt: "ARB" },
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
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#015D2C] mb-3">Testimonials</p>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-[#07121A]">
            What Our Partners Say
          </h2>
          <p className="text-base text-[#526880] mt-4">Real businesses. Real results.</p>
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

const base = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

export default function BecomeAPartner() {
  return (
    <Layout>
      {/* ===== HERO ===== */}
      <div className="border-b">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Become a Partner</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Join hundreds of retailers and distributors across Latin America who trust Leader Store LLC as their U.S. wholesale supplier.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold" asChild>
            <Link href={base + "/request-account"}>
              Apply for Wholesale <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* ===== BETTER PRICES INTRO ===== */}
      <section className="section-padding bg-[#F0F4F8]">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#015D2C] mb-3">Why Partner Up</p>
            <h2 className="section-title text-3xl md:text-4xl font-extrabold text-[#07121A]">
              Better Prices for Partners
            </h2>
            <p className="text-base text-[#526880] max-w-lg mx-auto leading-[1.7] mt-4">
              As an approved partner, you unlock wholesale pricing that regular buyers never see. The more you buy, the more you save.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-[#CFD9E6] p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-14 w-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: "rgba(1, 93, 44, 0.10)", border: "1px solid rgba(74, 222, 128, 0.2)" }}>
                <TrendingDown className="h-6 w-6 text-[#015D2C]" />
              </div>
              <h3 className="font-extrabold text-[#07121A] text-lg mb-2">Volume Discounts</h3>
              <p className="text-sm text-[#526880] leading-[1.7]">
                Save up to <span className="text-[#015D2C] font-bold">30%</span> below retail when ordering in bulk. The higher the volume, the deeper the discount.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-[#CFD9E6] p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#015D2C]" />
              <div className="h-14 w-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: "rgba(1, 93, 44, 0.10)", border: "1px solid rgba(74, 222, 128, 0.2)" }}>
                <BadgeDollarSign className="h-6 w-6 text-[#015D2C]" />
              </div>
              <h3 className="font-extrabold text-[#07121A] text-lg mb-2">Tiered Pricing</h3>
              <p className="text-sm text-[#526880] leading-[1.7]">
                Move through pricing tiers as your order volume grows. Loyal partners get the best rates on every shipment.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-[#CFD9E6] p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-14 w-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: "rgba(1, 93, 44, 0.10)", border: "1px solid rgba(74, 222, 128, 0.2)" }}>
                <ShieldCheck className="h-6 w-6 text-[#015D2C]" />
              </div>
              <h3 className="font-extrabold text-[#07121A] text-lg mb-2">Price Protection</h3>
              <p className="text-sm text-[#526880] leading-[1.7]">
                Lock in your rates for <span className="text-[#015D2C] font-bold">90 days</span> on repeat orders. No surprises, no inflation spikes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">
        {/* Benefits */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-center">Partner Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4">
                <div className="h-9 w-9 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                  <b.icon className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{b.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-center">How It Works</h2>
          <div className="space-y-5">
            {[
              { step: "01", title: "Submit Your Application", desc: "Fill out our wholesale application form with your business information, EIN, and resale tax certificate." },
              { step: "02", title: "Verification (24–48 Hours)", desc: "Our team reviews your application and verifies your business credentials. We'll contact you with any questions." },
              { step: "03", title: "Account Approval", desc: "Once approved, you'll receive access to our wholesale price list, catalog, and a dedicated account manager." },
              { step: "04", title: "Place Your First Order", desc: "Browse the catalog, select your products, and place your first wholesale order. We handle the rest." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 border-b pb-5 last:border-b-0 last:pb-0">
                <div className="text-2xl font-bold text-primary/20 w-10 flex-shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="border rounded-md p-6">
          <h2 className="font-semibold mb-3">Application Requirements</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Valid business registration or company documentation</li>
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> EIN (Employer Identification Number) for U.S.-based businesses</li>
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Resale tax certificate or equivalent document</li>
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Intent to purchase for resale (not personal use)</li>
          </ul>
          <div className="mt-5">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href={base + "/request-account"}>
                Start Your Application <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* ===== BRANDS CAROUSEL ===== */}
      <section className="py-16 bg-[#F0F4F8] overflow-hidden border-y border-[#CFD9E6]">
        <div className="container-max text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#015D2C] mb-3">Our Portfolio</p>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-[#07121A]">
            Brands We Carry
          </h2>
          <p className="text-base text-[#526880] max-w-lg mx-auto leading-[1.7] mt-4">
            OEM and premium aftermarket parts from the world's most trusted automotive manufacturers.
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
            style={{ background: "linear-gradient(to right, #F0F4F8, transparent)" }} />
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

      {/* ===== REVIEWS ===== */}
      {(() => {
        const reviews = [
          { img: "reviews/warehouse-aisle-2.jpg", name: "Miami Auto Group", location: "Miami, FL", quote: "Parts always arrive on time. Great stock." },
          { img: "reviews/warehouse-aisle-1.jpg", name: "Pro Fleet Services", location: "Hialeah, FL", quote: "Best wholesale pricing in South Florida." },
          { img: "reviews/weathertech-floor-liner.jpg", name: "Sunshine Auto Repair", location: "Doral, FL", quote: "Genuine parts, fast turnaround every time." },
          { img: "reviews/old-man-emu-display.jpg", name: "Rodriguez Auto Parts", location: "Homestead, FL", quote: "Great variety and quality guaranteed." },
          { img: "reviews/weathertech-box.jpg", name: "Tropical Tire & Service", location: "Kendall, FL", quote: "Simple process, no complications." },
        ];
        return (
          <ReviewCarousel reviews={reviews} base={base} />
        );
      })()}
    </Layout>
  );
}
