import Layout from "@/components/layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="border-b">
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 1, 2025</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 prose prose-sm max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            Leader Store LLC ("we," "our," or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard data when you visit our website or apply for a wholesale account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">We may collect the following types of information:</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
            <li><strong>Business Information:</strong> Company name, EIN, business type, country of operation.</li>
            <li><strong>Contact Information:</strong> Name, email address, phone number.</li>
            <li><strong>Documents:</strong> Resale tax certificates and other business verification documents submitted during the application process.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on our site.</li>
            <li><strong>Newsletter:</strong> Email address if you subscribe to our newsletter.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
            <li>To process wholesale account applications and verify business credentials.</li>
            <li>To communicate order status, pricing updates, and account information.</li>
            <li>To send newsletters and product announcements (only if you opt in).</li>
            <li>To improve our website and services.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Data Sharing</h2>
          <p className="text-muted-foreground leading-relaxed">
            We do not sell, rent, or trade your personal information to third parties. We may share data with trusted service providers who assist in operating our business (shipping partners, payment processors) under confidentiality agreements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Data Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            We implement industry-standard security measures to protect your data, including encrypted transmission (HTTPS), access controls, and secure document storage. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Document Retention</h2>
          <p className="text-muted-foreground leading-relaxed">
            Business verification documents (resale tax certificates, EIN documentation) are retained for the duration of the business relationship and for up to 7 years thereafter as required by applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            You have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us at <a href="mailto:shop@leaderstore.us" className="text-primary underline">shop@leaderstore.us</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            For questions about this Privacy Policy, contact:<br />
            Leader Store LLC<br />
            4805 NW 79TH AVE STE 10 A101, Miami, FL 33166<br />
            Email: shop@leaderstore.us<br />
            Phone: (786) 987-6217
          </p>
        </section>
      </div>
    </Layout>
  );
}
