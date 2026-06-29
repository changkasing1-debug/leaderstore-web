import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { useCart } from "@/context/cart";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, CheckCircle2, ShoppingBag, Truck, CreditCard, Mail } from "lucide-react";

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const { toast } = useToast();
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.address || !form.city || !form.state || !form.zip) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setSubmitting(true);

    // Build email body
    const itemsList = items
      .map((i) => `  - ${i.name} (SKU: ${i.sku}) x${i.quantity} @ $${i.unitPrice.toFixed(2)} = $${(i.unitPrice * i.quantity).toFixed(2)}`)
      .join("\n");

    const body = `New Order from Leader Store Website

Customer:
  Name: ${form.name}
  Email: ${form.email}
  Phone: ${form.phone}
  Address: ${form.address}, ${form.city}, ${form.state} ${form.zip}

Order Items:
${itemsList}

Subtotal: $${subtotal.toFixed(2)}
Shipping: TBD
Total:    $${subtotal.toFixed(2)} + shipping

Notes:
${form.notes || "None"}
`;

    // Attempt to send via mailto
    const mailto = `mailto:shop@leaderstore.us?subject=${encodeURIComponent(`New Order - ${form.name}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      clearCart();
    }, 800);
  };

  if (submitted) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="h-20 w-20 rounded-full bg-[#015D2C]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-[#015D2C]" />
            </div>
            <h1 className="text-2xl font-extrabold text-[#07121A] mb-2">
              Order Request Submitted!
            </h1>
            <p className="text-[#526880] mb-6">
              Thanks, {form.name}. We received your order request and will follow up within 24 hours with a detailed quote and shipping estimate.
            </p>
            <div className="bg-[#F0F4F8] rounded-xl p-4 text-left mb-6 text-sm">
              <p className="text-[#526880]">
                A confirmation email was sent to <strong className="text-[#07121A]">shop@leaderstore.us</strong> with your order details.
              </p>
            </div>
            <Link
              href={base + "/catalog"}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#001A2E] text-white rounded-lg font-bold text-sm hover:bg-[#012B4A] transition-colors"
            >
              <ShoppingBag className="h-4 w-4" /> Continue Shopping
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  if (items.length === 0) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="h-16 w-16 rounded-full bg-[#F0F4F8] flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="h-8 w-8 text-[#CFD9E6]" />
            </div>
            <h1 className="text-xl font-extrabold text-[#07121A] mb-2">Your Cart is Empty</h1>
            <p className="text-[#526880] mb-6">Add some products before checking out.</p>
            <Link
              href={base + "/catalog"}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#001A2E] text-white rounded-lg font-bold text-sm hover:bg-[#012B4A] transition-colors"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-[#F0F4F8] min-h-screen">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
          {/* Breadcrumb */}
          <Link
            href={base + "/catalog"}
            className="inline-flex items-center gap-1.5 text-sm text-[#526880] hover:text-[#001A2E] font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Catalog
          </Link>

          <h1 className="text-2xl md:text-3xl font-extrabold text-[#07121A] mb-2">Checkout</h1>
          <p className="text-[#526880] mb-8">
            Review your order and enter your details. We'll send a quote within 24 hours.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left — Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact */}
                <div className="bg-white rounded-xl border border-[#CFD9E6] p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Mail className="h-4 w-4 text-[#015D2C]" />
                    <h3 className="font-extrabold text-[#07121A] text-sm">Contact Information</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#526880] uppercase tracking-wider mb-1 block">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#CFD9E6] text-sm text-[#07121A] focus:outline-none focus:ring-2 focus:ring-[#001A2E]/20 focus:border-[#001A2E]"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#526880] uppercase tracking-wider mb-1 block">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#CFD9E6] text-sm text-[#07121A] focus:outline-none focus:ring-2 focus:ring-[#001A2E]/20 focus:border-[#001A2E]"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#526880] uppercase tracking-wider mb-1 block">
                        Phone *
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#CFD9E6] text-sm text-[#07121A] focus:outline-none focus:ring-2 focus:ring-[#001A2E]/20 focus:border-[#001A2E]"
                        placeholder="+1 (786) 987-6217"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping */}
                <div className="bg-white rounded-xl border border-[#CFD9E6] p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Truck className="h-4 w-4 text-[#015D2C]" />
                    <h3 className="font-extrabold text-[#07121A] text-sm">Shipping Address</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="text-xs font-bold text-[#526880] uppercase tracking-wider mb-1 block">
                        Street Address *
                      </label>
                      <input
                        name="address"
                        required
                        value={form.address}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#CFD9E6] text-sm text-[#07121A] focus:outline-none focus:ring-2 focus:ring-[#001A2E]/20 focus:border-[#001A2E]"
                        placeholder="123 Main St, Suite 4"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#526880] uppercase tracking-wider mb-1 block">
                        City *
                      </label>
                      <input
                        name="city"
                        required
                        value={form.city}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#CFD9E6] text-sm text-[#07121A] focus:outline-none focus:ring-2 focus:ring-[#001A2E]/20 focus:border-[#001A2E]"
                        placeholder="Miami"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#526880] uppercase tracking-wider mb-1 block">
                        State *
                      </label>
                      <input
                        name="state"
                        required
                        value={form.state}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#CFD9E6] text-sm text-[#07121A] focus:outline-none focus:ring-2 focus:ring-[#001A2E]/20 focus:border-[#001A2E]"
                        placeholder="FL"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#526880] uppercase tracking-wider mb-1 block">
                        ZIP Code *
                      </label>
                      <input
                        name="zip"
                        required
                        value={form.zip}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#CFD9E6] text-sm text-[#07121A] focus:outline-none focus:ring-2 focus:ring-[#001A2E]/20 focus:border-[#001A2E]"
                        placeholder="33166"
                      />
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="bg-white rounded-xl border border-[#CFD9E6] p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <CreditCard className="h-4 w-4 text-[#015D2C]" />
                    <h3 className="font-extrabold text-[#07121A] text-sm">Order Notes</h3>
                  </div>
                  <textarea
                    name="notes"
                    rows={3}
                    value={form.notes}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-[#CFD9E6] text-sm text-[#07121A] focus:outline-none focus:ring-2 focus:ring-[#001A2E]/20 focus:border-[#001A2E] resize-none"
                    placeholder="Any special requests, preferred delivery window, or additional parts you need..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-lg bg-[#015D2C] text-white font-bold text-sm tracking-wide hover:bg-[#014a23] transition-colors disabled:opacity-70"
                >
                  {submitting ? "Submitting..." : "Place Order"}
                </button>
              </form>
            </div>

            {/* Right — Order Summary */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-[#CFD9E6] p-5 sticky top-24">
                <h3 className="font-extrabold text-[#07121A] text-sm mb-4">Order Summary</h3>
                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="h-14 w-14 bg-[#F0F4F8] rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img
                          src={`${base}/${item.image}`}
                          alt={item.name}
                          className="h-full w-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `${base}/cat-electronics.png`;
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-[#07121A] leading-snug line-clamp-2">
                          {item.name}
                        </p>
                        <p className="text-[10px] text-[#526880]">
                          x{item.quantity} @ ${item.unitPrice.toFixed(2)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-[#07121A]">
                          ${(item.unitPrice * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#CFD9E6] pt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#526880]">Subtotal</span>
                    <span className="font-bold text-[#07121A]">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#526880]">Shipping</span>
                    <span className="font-bold text-[#526880]">TBD</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#CFD9E6]">
                    <span className="font-extrabold text-[#07121A]">Total</span>
                    <span className="font-extrabold text-[#001A2E] text-lg">
                      ${subtotal.toFixed(2)} +
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
