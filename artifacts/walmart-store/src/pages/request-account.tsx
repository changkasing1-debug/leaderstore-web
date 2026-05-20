import { useState } from "react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import {
  UserPlus,
  Building2,
  Globe,
  Truck,
  CheckCircle2,
  FileCheck,
  ArrowRight,
} from "lucide-react";

export default function RequestAccount() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    company: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    country: "",
    businessType: "",
    taxId: "",
    annualVolume: "",
    interestedCategories: [] as string[],
    message: "",
  });

  const categories = ["Electronics", "Apparel", "Toys", "Beauty", "Household", "Sports"];

  const toggleCategory = (cat: string) => {
    setForm((prev) => ({
      ...prev,
      interestedCategories: prev.interestedCategories.includes(cat)
        ? prev.interestedCategories.filter((c) => c !== cat)
        : [...prev.interestedCategories, cat],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Application Submitted", description: "We'll review your application within 24 hours." });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Application Received</h1>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Thank you for applying. Our verification team will review your business information and contact you within 24 hours with next steps.
          </p>
          <div className="text-sm text-muted-foreground">
            <p>Reference ID: <span className="font-mono font-medium">GT-{Math.random().toString(36).substring(2, 10).toUpperCase()}</span></p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-muted/50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-2">Request a Wholesale Account</h1>
          <p className="text-muted-foreground">Apply for verified access to our wholesale catalog and pricing</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Benefits */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="bg-primary text-primary-foreground border-0">
              <CardContent className="pt-5">
                <UserPlus className="h-6 w-6 mb-3 opacity-80" />
                <h3 className="font-semibold mb-1">Why Apply?</h3>
                <p className="text-sm opacity-80">Verified accounts get immediate access to wholesale pricing, real-time inventory, and dedicated account management.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-5">
                <div className="flex items-start gap-3">
                  <FileCheck className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Full Transparency</h4>
                    <p className="text-xs text-muted-foreground">See MOQs, pricing tiers, and availability in real time.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-5">
                <div className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Logistics Support</h4>
                    <p className="text-xs text-muted-foreground">Get quotes for freight and customs handling.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-5">
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Market Expansion</h4>
                    <p className="text-xs text-muted-foreground">Access brands not yet distributed in your region.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-6">
                  <Building2 className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold">Business Information</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input id="company" placeholder="Your company name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="taxId">Tax ID / EIN</Label>
                      <Input id="taxId" placeholder="XX-XXXXXXX" value={form.taxId} onChange={(e) => setForm({ ...form, taxId: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input id="contactName" placeholder="Full name" value={form.contactName} onChange={(e) => setForm({ ...form, contactName: e.target.value })} required />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Business Email *</Label>
                      <Input id="email" type="email" placeholder="you@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+1 (555) 000-0000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" placeholder="https://yourcompany.com" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="country">Country *</Label>
                      <Input id="country" placeholder="United States" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} required />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="businessType">Business Type</Label>
                      <Input id="businessType" placeholder="Retail Store, Distributor, E-commerce..." value={form.businessType} onChange={(e) => setForm({ ...form, businessType: e.target.value })} />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="annualVolume">Estimated Annual Purchase Volume (USD)</Label>
                    <Input id="annualVolume" placeholder="$50,000 - $100,000" value={form.annualVolume} onChange={(e) => setForm({ ...form, annualVolume: e.target.value })} />
                  </div>

                  <div className="space-y-2">
                    <Label>Interested Categories</Label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <Badge
                          key={cat}
                          variant={form.interestedCategories.includes(cat) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleCategory(cat)}
                        >
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea id="message" placeholder="Tell us about your business, target markets, and what you're looking for..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox id="terms" required />
                    <label htmlFor="terms" className="text-sm text-muted-foreground leading-tight">
                      I confirm this is a legitimate business inquiry and authorize Leader Store to verify my business information.
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Submit Application <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
