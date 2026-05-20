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
  Building2,
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
      <div className="border-b">
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-muted-foreground">
            Get in touch with our team to discuss wholesale opportunities
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-5 text-center">
                <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div className="text-xs text-muted-foreground">Phone</div>
                <div className="text-sm font-medium">(786) 940-1456</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-5 text-center">
                <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm font-medium">info@leaderstore.us</div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardContent className="pt-5 text-center">
              <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <div className="text-xs text-muted-foreground">Address</div>
              <div className="text-sm font-medium">
                4805 NW 79TH AVE, STE 10 A101<br />Miami, FL 33166
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-5 text-center">
              <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <div className="text-xs text-muted-foreground">Business Hours</div>
              <div className="text-sm font-medium">Mon — Fri: 9AM — 6PM EST</div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="overflow-hidden p-0">
            <div className="h-72 w-full">
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
          </Card>

          {/* Form */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Building2 className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">Send a Message</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Your company"
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
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
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      placeholder="(786) 000-0000"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your business and what products you are interested in..."
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
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
        </div>
      </div>
    </Layout>
  );
}
