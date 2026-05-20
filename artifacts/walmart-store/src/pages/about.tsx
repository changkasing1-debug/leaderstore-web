import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
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
  return (
    <Layout>
      <div className="border-b">
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-2">About Leader Store LLC</h1>
          <p className="text-muted-foreground">
            Your trusted partner for U.S. imports and Latin American distribution
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Story */}
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-4">Miami, Florida</Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            Bridging U.S. Brands to Latin America
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Leader Store LLC was founded with a clear mission: make quality
            U.S. products accessible to retailers and distributors across Latin
            America. Based in Miami — the commercial gateway to the Americas —
            we leverage our strategic location to streamline imports and
            deliver reliable distribution.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            We specialize in four core categories: Kitchen & Home, Pet
            Supplies, Electronics, and Beauty & Personal Care. Our deep
            relationships with American manufacturers allow us to offer
            competitive wholesale pricing, flexible order quantities, and
            authentic products with full documentation.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Globe, label: "LatAm Focus", sub: "Regional Expertise" },
              { icon: Users, label: "500+", sub: "Partners" },
              { icon: ShieldCheck, label: "100%", sub: "Authentic" },
              { icon: Truck, label: "Door-to-Door", sub: "Logistics" },
            ].map((s) => (
              <Card key={s.label}>
                <CardContent className="pt-5 text-center">
                  <s.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                  <div className="text-lg font-bold">{s.label}</div>
                  <div className="text-xs text-muted-foreground">{s.sub}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What sets us apart */}
        <div>
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Strengths</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              What Sets Us Apart
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4">
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
              <Card
                key={item.title}
                className="hover:border-accent/30 transition-colors"
              >
                <CardContent className="pt-5 text-center">
                  <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Markets */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4">Coverage</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Markets We Serve
            </h2>
            <p className="text-muted-foreground">
              Active distribution across major Latin American markets
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Mexico",
              "Colombia",
              "Peru",
              "Chile",
              "Ecuador",
              "Panama",
              "Costa Rica",
              "Guatemala",
            ].map((m) => (
              <div
                key={m}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-muted rounded-lg"
              >
                <Globe className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
