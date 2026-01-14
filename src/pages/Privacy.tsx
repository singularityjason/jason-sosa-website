import React from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Privacy Policy | Jason Sosa</title>
        <meta name="description" content="Privacy policy for jasonsosa.com. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://jasonsosa.com/privacy" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-white/70 mb-8">
              Last updated: January 2026
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Information We Collect</h2>
              <p className="text-white/70 mb-4">
                When you visit jasonsosa.com or contact us through the website, we may collect:
              </p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>Contact information (name, email, company) when you submit the contact form</li>
                <li>Usage data through privacy-friendly analytics (Plausible Analytics)</li>
                <li>Technical information such as browser type and device for website optimization</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">How We Use Your Information</h2>
              <p className="text-white/70 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>Respond to your inquiries about speaking engagements</li>
                <li>Improve our website and user experience</li>
                <li>Send relevant communications about speaking services (only if requested)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Analytics</h2>
              <p className="text-white/70">
                We use Plausible Analytics, a privacy-friendly analytics service that does not use cookies
                and does not collect personal data. All data is aggregated and cannot be used to identify
                individual visitors.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Data Storage</h2>
              <p className="text-white/70">
                Contact form submissions are stored securely using Supabase. We do not sell, trade, or
                otherwise transfer your personal information to third parties without your consent.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Your Rights</h2>
              <p className="text-white/70 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Opt out of any marketing communications</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Contact</h2>
              <p className="text-white/70">
                For any privacy-related questions or requests, please contact us through the{" "}
                <a href="/contact" className="text-accent hover:underline">contact page</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
