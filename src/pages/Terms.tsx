import React from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Terms of Service | Jason Sosa</title>
        <meta name="description" content="Terms of service for jasonsosa.com. Read our terms and conditions for using this website." />
        <link rel="canonical" href="https://jasonsosa.com/terms" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-white/70 mb-8">
              Last updated: January 2026
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Agreement to Terms</h2>
              <p className="text-white/70">
                By accessing and using jasonsosa.com, you agree to be bound by these Terms of Service.
                If you do not agree with any part of these terms, please do not use this website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Use of Website</h2>
              <p className="text-white/70 mb-4">
                This website is provided for informational purposes about Jason Sosa's keynote speaking
                services. You agree to use the website only for lawful purposes and in accordance with
                these terms.
              </p>
              <p className="text-white/70">
                You may not:
              </p>
              <ul className="list-disc pl-6 text-white/70 space-y-2 mt-4">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to interfere with the proper functioning of the website</li>
                <li>Copy, reproduce, or distribute content without permission</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Intellectual Property</h2>
              <p className="text-white/70">
                All content on this website, including text, images, logos, and design elements, is the
                property of Jason Sosa unless otherwise noted. You may not use, reproduce, or distribute
                any content without prior written permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Speaking Engagements</h2>
              <p className="text-white/70">
                Inquiries submitted through this website are not binding contracts. All speaking
                engagements are subject to availability and separate contractual agreements between
                Jason Sosa and the booking party.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Disclaimer</h2>
              <p className="text-white/70">
                This website and its content are provided "as is" without warranties of any kind.
                Jason Sosa makes no representations about the accuracy or completeness of the
                information on this website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Limitation of Liability</h2>
              <p className="text-white/70">
                Jason Sosa shall not be liable for any damages arising from the use or inability to
                use this website or its content.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Changes to Terms</h2>
              <p className="text-white/70">
                We reserve the right to modify these terms at any time. Continued use of the website
                after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Contact</h2>
              <p className="text-white/70">
                For questions about these terms, please contact us through the{" "}
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

export default Terms;
