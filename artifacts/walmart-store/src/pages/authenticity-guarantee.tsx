import Layout from "@/components/layout";
import { ShieldCheck, FileText, Building2, Globe } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Authorized Sourcing Only",
    desc: "We source 100% of our products directly from authorized U.S. distributors, manufacturers, or licensed wholesalers. We do not purchase from gray market suppliers, liquidators, or unverified third parties.",
  },
  {
    icon: FileText,
    title: "Full Documentation",
    desc: "Every product shipment includes certificates of authenticity, manufacturer invoices, and chain-of-custody documentation. These documents are available to our wholesale partners upon request.",
  },
  {
    icon: Building2,
    title: "Direct Manufacturer Relationships",
    desc: "For our core categories — Kitchen & Home, Pet Supplies, Electronics, and Beauty — we have established direct relationships with U.S. brand representatives and distributors.",
  },
  {
    icon: Globe,
    title: "Compliance & Customs",
    desc: "All exported products are compliant with U.S. export regulations and the import regulations of the destination country. We provide accurate product descriptions and HS codes on all commercial invoices.",
  },
];

export default function AuthenticityGuarantee() {
  return (
    <Layout>
      <div className="border-b">
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-2">Authenticity Guarantee</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every product we distribute is 100% authentic, sourced directly from U.S. manufacturers and authorized distributors.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">
        {/* Promise */}
        <div className="border rounded-md p-6 text-center">
          <ShieldCheck className="h-10 w-10 text-accent mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-3">Our Promise</h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Leader Store LLC guarantees that every product in our catalog is genuine, legally sourced, and fully compliant with U.S. export laws. If you ever receive a product you believe to be inauthentic, we will replace it immediately and investigate the issue at no cost to you.
          </p>
        </div>

        {/* Four Pillars */}
        <div>
          <h2 className="text-xl font-semibold mb-6">How We Ensure Authenticity</h2>
          <div className="space-y-5">
            {pillars.map((p) => (
              <div key={p.title} className="flex gap-4 border-b pb-5 last:border-b-0 last:pb-0">
                <div className="h-10 w-10 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                  <p.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What this means for buyers */}
        <div>
          <h2 className="text-xl font-semibold mb-4">What This Means for Your Business</h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-accent font-bold">✓</span>
              Sell with confidence — your customers receive genuine U.S. brand products.
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-bold">✓</span>
              Avoid counterfeit liability — full documentation protects you legally.
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-bold">✓</span>
              Build brand trust — authentic products generate repeat customers.
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-bold">✓</span>
              Smooth customs clearance — proper documentation reduces delays.
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="border rounded-md p-6">
          <h2 className="font-semibold mb-2">Questions About Product Authenticity?</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Our team is available to provide documentation and verification for any product in our catalog.
          </p>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:shop@leaderstore.us" className="text-primary underline">
              shop@leaderstore.us
            </a>
            <span className="text-muted-foreground mx-2">|</span>
            Phone: (786) 987-6217
          </p>
        </div>
      </div>
    </Layout>
  );
}
