import { Link } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  UtensilsCrossed,
  Dog,
  Smartphone,
  Sparkles,
  ShieldCheck,
  Truck,
  BadgeDollarSign,
  Quote,
  Star,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const categories = [
  {
    icon: UtensilsCrossed,
    title: "Kitchen & Home",
    desc: "Premium cookware, appliances, and home essentials sourced from top U.S. manufacturers.",
  },
  {
    icon: Dog,
    title: "Pet Supplies",
    desc: "High-quality pet food, toys, and accessories for the growing pet care market.",
  },
  {
    icon: Smartphone,
    title: "Electronics",
    desc: "Consumer electronics and tech accessories from trusted American brands.",
  },
  {
    icon: Sparkles,
    title: "Beauty & Personal Care",
    desc: "Skincare, cosmetics, and personal care products with strong market demand.",
  },
];

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Quality Brands",
    desc: "We partner exclusively with reputable U.S. manufacturers to ensure every product meets high standards.",
  },
  {
    icon: Truck,
    title: "Reliable Distribution",
    desc: "End-to-end logistics from Miami to Latin America. Customs, freight, and delivery handled.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Pricing",
    desc: "Volume-based wholesale pricing that helps your margins stay healthy and competitive.",
  },
];

const testimonials = [
  {
    name: "Carlos M.",
    role: "Retailer — Colombia",
    text: "Leader Store has been our go-to supplier for U.S. kitchen products. Consistent quality and reliable delivery every time.",
  },
  {
    name: "Ana R.",
    role: "Distributor — Mexico",
    text: "Their pet supply catalog is excellent. We have grown our business 40% since partnering with them.",
  },
  {
    name: "Luis P.",
    role: "E-commerce — Peru",
    text: "Competitive pricing and authentic products. Our customers love the U.S. brands they bring us.",
  },
];

export default function Home() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="heroGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#heroGrid)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            <Badge className="bg-accent text-accent-foreground mb-6">
              Wholesale Import & Distribution
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Quality Products.
              <br />
              Trusted Imports.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/75 mb-8 max-w-lg leading-relaxed">
              Bringing premium brands from the U.S. to Latin America. Your
              reliable partner for wholesale distribution across Kitchen & Home,
              Pet Supplies, Electronics, and Beauty.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                asChild
              >
                <Link href={base + "/contact"}>
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href={base + "/catalog"}>
                  View Products <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4">
              About Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Bridge to U.S. Brands
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Leader Store LLC is a Miami-based import and distribution company
              specialized in connecting Latin American markets with top U.S.
              brands. We source and distribute products across categories
              including Kitchen & Home, Pet Supplies, Electronics, and Beauty —
              delivering quality and reliability to our partners.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With our strategic location in Miami and deep relationships with
              American manufacturers, we streamline the import process so you can
              focus on growing your retail business.
            </p>
          </div>
          <div className="bg-gradient-to-br from-muted to-muted/50 rounded-2xl h-80 flex items-center justify-center">
            <div className="text-center">
              <img
                src={`${base}logo.jpg`}
                alt="Leader Store LLC"
                className="h-32 w-auto mx-auto mb-4 rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground font-medium">
                Miami, Florida — Gateway to Latin America
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-muted/40 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4">
              Our Categories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              What We Offer
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Four core product categories with proven demand in Latin American
              markets
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Card
                key={cat.title}
                className="group hover:border-accent/40 transition-all hover:shadow-md"
              >
                <CardContent className="pt-6 pb-6 text-center">
                  <div className="h-14 w-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <cat.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cat.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <Badge variant="outline" className="mb-4">
            Why Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Why Choose Leader Store
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Three reasons retailers and distributors across Latin America trust
            us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyUs.map((item, i) => (
            <div key={item.title} className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-sm font-bold text-accent mb-2">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/40 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="hover:border-primary/20">
                <CardContent className="pt-6 pb-6">
                  <Quote className="h-6 w-6 text-accent/60 mb-3" />
                  <p className="text-foreground leading-relaxed mb-5">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <Card className="bg-primary text-primary-foreground border-0 overflow-hidden">
          <CardContent className="py-14 px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Source U.S. Products?
                </h2>
                <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                  Whether you are a retailer, distributor, or e-commerce business in
                  Latin America, we are here to help you access the best U.S.
                  brands at competitive wholesale prices.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    4805 NW 79TH AVE, STE 10 A101, Miami, FL 33166
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    (786) 940-1456
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    info@leaderstore.us
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  asChild
                >
                  <Link href={base + "/contact"}>
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden h-64 md:h-72 bg-primary-foreground/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.1234567890123!2d-80.12345678901234!3d25.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzI0LjQiTiA4MMKwMDcnMjQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Leader Store LLC Location"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
}
