import Layout from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  ShieldCheck,
  Truck,
  MapPin,
  BadgeDollarSign,
  Users,
} from "lucide-react";

export default function About() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

  return (
    <Layout>
      {/* Hero image */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src={`${base}/about-office.png`}
          alt="Leader Store Miami office"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
              About Leader Store LLC
            </h1>
            <p className="text-primary-foreground/70">
              Your trusted partner for U.S. imports and Latin American distribution
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* Story */}
        <div className="text-center max-w-2xl mx-auto">
          <Badge className="mb-4">Miami, Florida</Badge>
          <h2 className="text-2xl font-bold mb-5">
            Bridging U.S. Brands to Latin America
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Leader Store LLC was founded with a clear mission: make quality
            U.S. products accessible to retailers and distributors across Latin
            America. Based in Miami — the commercial gateway to the Americas —
            we leverage our strategic location to streamline imports and
            deliver reliable distribution.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {[
            { icon: Globe, label: "LatAm Focus", sub: "Regional Expertise" },
            { icon: Users, label: "500+", sub: "Partners" },
            { icon: ShieldCheck, label: "100%", sub: "Authentic" },
            { icon: Truck, label: "Door-to-Door", sub: "Logistics" },
          ].map((s) => (
            <div key={s.label} className="bg-background p-6 text-center">
              <s.icon className="h-5 w-5 text-accent mx-auto mb-2" />
              <div className="text-sm font-bold">{s.label}</div>
              <div className="text-xs text-muted-foreground">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* What sets us apart */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              {
                icon: ShieldCheck,
                title: "Quality Assurance",
                desc: "Every product is sourced directly from verified U.S. manufacturers. Full certificates and compliance documentation provided.",
              },
              {
                icon: Truck,
                title: "End-to-End Logistics",
                desc: "From supplier pickup in the U.S. to your warehouse door. We handle freight, customs, and last-mile delivery.",
              },
              {
                icon: BadgeDollarSign,
                title: "Competitive Pricing",
                desc: "Volume-based wholesale tiers designed for growing retailers. No minimums that exclude smaller businesses.",
              },
              {
                icon: MapPin,
                title: "Strategic Location",
                desc: "Miami-based operations provide faster transit times and lower shipping costs to Latin America.",
              },
              {
                icon: Globe,
                title: "Market Knowledge",
                desc: "Our team understands both U.S. supply chains and Latin American consumer preferences.",
              },
              {
                icon: Users,
                title: "Dedicated Support",
                desc: "Personal account management and bilingual support for smooth communication.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-background p-6">
                <item.icon className="h-4 w-4 text-accent mb-3" />
                <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Markets */}
        <div className="text-center">
          <Badge variant="outline" className="mb-4">Coverage</Badge>
          <h2 className="text-2xl font-bold mb-6">Markets We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border max-w-2xl mx-auto">
            {[
              "Mexico", "Colombia", "Peru", "Chile",
              "Ecuador", "Panama", "Costa Rica", "Guatemala",
            ].map((m) => (
              <div
                key={m}
                className="bg-background flex items-center justify-center gap-2 px-4 py-3"
              >
                <Globe className="h-3 w-3 text-accent" />
                <span className="text-sm font-medium">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
