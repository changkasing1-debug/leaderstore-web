import { useState, useRef } from "react";
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
  Shield,
  BadgeCheck,
} from "lucide-react";

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
    </Layout>
  );
}
