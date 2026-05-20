import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Globe,
  ShieldCheck,
  Award,
  TrendingUp,
  Users,
  Package,
  Truck,
  FileCheck,
} from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="bg-muted/50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-2">About GlobalTrade</h1>
          <p className="text-muted-foreground">Your trusted partner for wholesale imports and brand distribution</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-3">Since 2010</Badge>
            <h2 className="text-2xl font-bold mb-4">Bridging Global Brands to Local Markets</h2>
            <p className="text-muted-foreground mb-4">
              GlobalTrade was founded with a clear mission: make world-class brands accessible to retailers and distributors of all sizes. What started as a small trading company in Miami has grown into a trusted partner for over 500 businesses across 35 countries.
            </p>
            <p className="text-muted-foreground">
              We hold direct distribution agreements with 120+ major brands across electronics, apparel, toys, beauty, and household goods. Our relationships with manufacturers allow us to offer competitive pricing, flexible MOQs, and authentic products with full documentation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, label: "15 Years", sub: "In Business" },
              { icon: Globe, label: "35 Countries", sub: "Served" },
              { icon: Users, label: "500+", sub: "Partners" },
              { icon: Package, label: "120+", sub: "Brands" },
            ].map((s) => (
              <Card key={s.label}>
                <CardContent className="pt-5 text-center">
                  <s.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-xl font-bold">{s.label}</div>
                  <div className="text-xs text-muted-foreground">{s.sub}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What sets us apart */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Brand Authorization", desc: "We provide certificates of authorization for every brand we distribute. Your customers can verify authenticity directly with manufacturers." },
              { icon: Truck, title: "End-to-End Logistics", desc: "From factory pickup to your warehouse door. We handle freight forwarding, customs clearance, and last-mile delivery." },
              { icon: TrendingUp, title: "Market Intelligence", desc: "Our team monitors trends across categories to help you stock products with the highest sell-through potential." },
              { icon: FileCheck, title: "Compliance Ready", desc: "All products ship with required certifications (FCC, CE, RoHS, etc.) and safety documentation for your market." },
              { icon: Building2, title: "Flexible MOQs", desc: "We work with retailers of all sizes. Our minimum order quantities are designed to be accessible for growing businesses." },
              { icon: Globe, title: "Regional Expertise", desc: "Team members based in North America, Europe, and Asia ensure responsive support across time zones." },
            ].map((item) => (
              <Card key={item.title} className="hover:border-primary/20 transition-colors">
                <CardContent className="pt-6">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Markets */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Markets We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "United States",
              "Canada",
              "Mexico",
              "United Kingdom",
              "Germany",
              "France",
              "Spain",
              "Italy",
              "Brazil",
              "Colombia",
              "Australia",
              "UAE",
            ].map((m) => (
              <div key={m} className="flex items-center gap-2 px-4 py-3 bg-muted rounded-lg">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
