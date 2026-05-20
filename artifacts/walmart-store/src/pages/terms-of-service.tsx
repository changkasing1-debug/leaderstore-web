import Layout from "@/components/layout";

export default function TermsOfService() {
  return (
    <Layout>
      <div className="border-b">
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 1, 2025</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing this website or placing an order with Leader Store LLC ("Company"), you agree to be bound by these Terms of Service. If you do not agree, do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Wholesale Account Eligibility</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Access to wholesale pricing is restricted to approved business accounts. To qualify, you must:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
            <li>Provide a valid EIN (Employer Identification Number) or equivalent business registration number.</li>
            <li>Submit a valid resale tax certificate or equivalent document.</li>
            <li>Operate as a legitimate business entity (retailer, distributor, importer).</li>
            <li>Agree to purchase goods solely for resale, not personal use.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Orders and Payment</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
            <li>All orders are subject to product availability and minimum order quantities (MOQs).</li>
            <li>Prices are quoted in U.S. dollars and are subject to change without notice.</li>
            <li>Payment must be received before orders are processed unless credit terms have been established.</li>
            <li>Accepted payment methods: wire transfer, ACH, and major credit cards.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Shipping and Risk of Loss</h2>
          <p className="text-muted-foreground leading-relaxed">
            Risk of loss and title for products pass to the buyer upon delivery to the carrier at our Miami facility. The Company is not responsible for delays caused by carriers, customs authorities, or force majeure events.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Resale Restrictions</h2>
          <p className="text-muted-foreground leading-relaxed">
            Products purchased from Leader Store LLC are intended for resale in the buyer's designated market territory. Unauthorized resale in restricted markets or on unauthorized digital marketplaces may result in account termination.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            To the fullest extent permitted by law, Leader Store LLC shall not be liable for indirect, incidental, special, or consequential damages arising from the use of our products or services, even if advised of the possibility of such damages.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms are governed by the laws of the State of Florida, United States. Any disputes shall be resolved exclusively in the courts of Miami-Dade County, Florida.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">8. Changes to Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">9. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            Questions? Contact us at <a href="mailto:info@leaderstore.us" className="text-primary underline">info@leaderstore.us</a> or (786) 940-1456.
          </p>
        </section>
      </div>
    </Layout>
  );
}
