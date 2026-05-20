import { Link } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, BadgeDollarSign, Globe, Users, FileCheck } from "lucide-react";

const benefits = [
  {
    icon: BadgeDollarSign,
    title: "Wholesale Pricing",
    desc: "Access tiered pricing with significant discounts below retail. The more you order, the lower your cost per unit.",
  },
  {
    icon: ShieldCheck,
    title: "100% Authentic Products",
    desc: "All products sourced directly from U.S. manufacturers. Full documentation and certificates provided.",
  },
  {
    icon: Truck,
    title: "End-to-End Logistics",
    desc: "We handle freight, customs documentation, and coordinate delivery to your warehouse or port.",
  },
  {
    icon: Globe,
    title: "Latin America Expertise",
    desc: "Our team understands Latin American import regulations, consumer preferences, and market dynamics.",
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    desc: "Every partner gets a dedicated bilingual account manager for personalized service and support.",
  },
  {
    icon: FileCheck,
    title: "Flexible Terms",
    desc: "We work with your business needs — from sample orders to full container loads. Net-30 terms available.",
  },
];

const base = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

export default function BecomeAPartner() {
  return (
    <Layout>
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
    </Layout>
  );
}
