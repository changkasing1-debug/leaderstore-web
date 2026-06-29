import Layout from "@/components/layout";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Contact Your Account Manager",
    desc: "Reach out to your dedicated account manager or email shop@leaderstore.us within the eligible return window to request a Return Merchandise Authorization (RMA).",
  },
  {
    step: "02",
    title: "Receive RMA Number",
    desc: "We'll issue an RMA number within 2 business days. All returned packages must clearly display the RMA number on the outside of the package.",
  },
  {
    step: "03",
    title: "Ship the Items",
    desc: "Pack the items securely in their original packaging and ship to our Miami facility. You are responsible for return shipping costs unless the return is due to our error.",
  },
  {
    step: "04",
    title: "Inspection & Credit",
    desc: "Upon receipt, our team inspects the returned goods within 5 business days and issues a credit note or refund to your account.",
  },
];

export default function ReturnPolicy() {
  return (
    <Layout>
      <div className="border-b">
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-2">Return Policy</h1>
          <p className="text-muted-foreground">
            Our commitment to fair and transparent returns for wholesale partners
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">
        {/* Overview */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Return Eligibility</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">Defective or Damaged Goods — 30 Days</h3>
                  <p className="text-sm text-muted-foreground">
                    Items received defective or damaged in transit are eligible for a full return or replacement within 30 days of delivery. Photo documentation of the damage is required.
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-md p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">Incorrect Items — 15 Days</h3>
                  <p className="text-sm text-muted-foreground">
                    If we shipped the wrong item, we will cover return shipping and send the correct product at no additional cost within 15 days of delivery.
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-md p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 accent/60 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">Buyer's Remorse / Overstock — 15 Days</h3>
                  <p className="text-sm text-muted-foreground">
                    Returns due to change of mind or overstock are accepted within 15 days of delivery in original, unopened packaging. A 15% restocking fee applies and return shipping is the buyer's responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Non-Returnable */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Non-Returnable Items</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
            <li>Opened or used personal care and cosmetic products.</li>
            <li>Perishable food items or opened pet food products.</li>
            <li>Items marked as final sale or clearance at time of purchase.</li>
            <li>Custom or special-order products.</li>
            <li>Items returned without an RMA number.</li>
            <li>Items returned more than 30 days after delivery.</li>
          </ul>
        </div>

        {/* Process */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Return Process</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="text-2xl font-bold text-primary/20 w-10 flex-shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="border rounded-md p-6">
          <h2 className="font-semibold mb-2">Need to Start a Return?</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Contact our support team and we'll guide you through the process.
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
