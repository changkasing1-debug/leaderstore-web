import { useState, useRef, useEffect } from "react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  CheckCircle2,
  ArrowRight,
  Upload,
  X,
  FileText,
  Lock,
  ArrowLeft,
} from "lucide-react";

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

export default function RequestAccount() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [resaleFile, setResaleFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    company: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    businessType: "",
    ein: "",
    message: "",
  });

  const base = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowed = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
      if (!allowed.includes(file.type)) {
        toast({ title: "Invalid file type", description: "Please upload a JPG, PNG, WebP, or PDF file.", variant: "destructive" });
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        toast({ title: "File too large", description: "Maximum file size is 10 MB.", variant: "destructive" });
        return;
      }
      setResaleFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Application Submitted",
      description: "We will review your application within 24 hours.",
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-xl mx-auto px-4 py-24 text-center">
          <div className="h-14 w-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="h-7 w-7 text-accent" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Application Received</h1>
          <p className="text-muted-foreground max-w-sm mx-auto mb-6">
            Thank you for applying. Our team will review your information and contact you within 24 hours.
          </p>
          <p className="text-sm text-muted-foreground">
            Reference ID:{" "}
            <span className="font-mono font-medium">
              LS-{Math.random().toString(36).substring(2, 10).toUpperCase()}
            </span>
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold mb-2">Apply for Wholesale</h1>
          <p className="text-sm text-muted-foreground">
            Verified access to our wholesale catalog and pricing
          </p>
        </div>

        {/* Form */}
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contactName">Contact Name *</Label>
                  <Input
                    id="contactName"
                    placeholder="Full name"
                    value={form.contactName}
                    onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="email">Business Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="ein">EIN (Tax ID) *</Label>
                  <Input
                    id="ein"
                    placeholder="XX-XXXXXXX"
                    value={form.ein}
                    onChange={(e) => {
                      const v = e.target.value.replace(/[^0-9-]/g, "");
                      setForm({ ...form, ein: v });
                    }}
                    maxLength={10}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    U.S. businesses only. International buyers provide equivalent tax ID.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="businessType">Business Type *</Label>
                  <Input
                    id="businessType"
                    placeholder="Retail, Distributor..."
                    value={form.businessType}
                    onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="country">Country of Operation *</Label>
                <Input
                  id="country"
                  placeholder="e.g. Colombia, Mexico, Peru..."
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  required
                />
              </div>

              {/* Resale Tax Certificate Upload */}
              <div className="space-y-1.5">
                <Label>Resale Tax Certificate *</Label>
                <div
                  className={`border-2 border-dashed rounded-md p-5 text-center cursor-pointer transition-colors ${
                    resaleFile
                      ? "border-accent/50 bg-accent/5"
                      : "border-border hover:border-accent/40 hover:bg-muted/30"
                  }`}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,application/pdf"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  {resaleFile ? (
                    <div className="flex items-center justify-center gap-3">
                      <FileText className="h-6 w-6 text-accent" />
                      <div className="text-left">
                        <p className="text-sm font-medium">{resaleFile.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(resaleFile.size / 1024).toFixed(0)} KB
                        </p>
                      </div>
                      <button
                        type="button"
                        className="ml-2 text-muted-foreground hover:text-destructive"
                        onClick={(e) => {
                          e.stopPropagation();
                          setResaleFile(null);
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <Upload className="h-7 w-7 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm font-medium mb-1">Upload resale tax certificate</p>
                      <p className="text-xs text-muted-foreground">JPG, PNG, WebP or PDF — max 10 MB</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your business and what products you are looking for..."
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <div className="flex items-start gap-2">
                <Checkbox id="terms" required />
                <label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed">
                  I confirm this is a legitimate business inquiry and authorize Leader Store LLC to verify my business information. I agree to the{" "}
                  <a href="/terms-of-service" className="text-primary underline">Terms of Service</a>{" "}
                  and{" "}
                  <a href="/privacy-policy" className="text-primary underline">Privacy Policy</a>.
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Submit Application <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Bottom security note */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          <Lock className="h-3 w-3 inline mr-1" />
          Your data is transmitted securely via 256-bit SSL encryption. We never share your business information with third parties.
        </p>
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
