import { useState } from "react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Lock,
  Shield,
  BadgeCheck,
} from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Message Sent",
        description: "Our team will contact you within 24 hours.",
      });
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <Layout>
      <div className="max-w-xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
          <p className="text-sm text-muted-foreground">
            Get in touch to discuss wholesale opportunities
          </p>
        </div>

        {/* Security badges */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Lock className="h-3 w-3" />
            <span>256-bit SSL</span>
          </div>
          <div className="w-px h-3 bg-border" />
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Shield className="h-3 w-3" />
            <span>Encrypted</span>
          </div>
          <div className="w-px h-3 bg-border" />
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <BadgeCheck className="h-3 w-3" />
            <span>Verified Business</span>
          </div>
        </div>

        {/* Contact info row */}
        <div className="grid grid-cols-2 gap-px bg-border mb-8">
          <div className="bg-background p-4 text-center">
            <Phone className="h-4 w-4 text-accent mx-auto mb-1.5" />
            <div className="text-xs text-muted-foreground">Phone</div>
            <div className="text-sm font-medium">(786) 940-1456</div>
          </div>
          <div className="bg-background p-4 text-center">
            <Mail className="h-4 w-4 text-accent mx-auto mb-1.5" />
            <div className="text-xs text-muted-foreground">Email</div>
            <div className="text-sm font-medium">info@leaderstore.us</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border mb-8">
          <div className="bg-background p-4 text-center">
            <MapPin className="h-4 w-4 text-accent mx-auto mb-1.5" />
            <div className="text-xs text-muted-foreground">Address</div>
            <div className="text-sm font-medium leading-tight">
              4805 NW 79TH AVE, STE 10 A101<br />Miami, FL 33166
            </div>
          </div>
          <div className="bg-background p-4 text-center">
            <Clock className="h-4 w-4 text-accent mx-auto mb-1.5" />
            <div className="text-xs text-muted-foreground">Hours</div>
            <div className="text-sm font-medium">Mon — Fri: 9AM — 6PM EST</div>
          </div>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-lg border mb-8 h-56">
          <iframe
            src="https://maps.google.com/maps?q=4805+NW+79TH+AVE%2C+STE+10+A101%2C+Miami%2C+FL+33166&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Leader Store LLC Location"
          />
        </div>

        {/* Form */}
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-lg font-semibold text-center mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your company"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email *</Label>
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
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    placeholder="(786) 000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your business and what products you are interested in..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                disabled={sending}
              >
                <Send className="mr-2 h-4 w-4" />
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Bottom security note */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          <Lock className="h-3 w-3 inline mr-1" />
          Your data is transmitted securely via 256-bit SSL encryption. We never share your information with third parties.
        </p>
      </div>
    </Layout>
  );
}
