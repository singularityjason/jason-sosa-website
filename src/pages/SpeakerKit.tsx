import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpeakerOneSheet from "@/components/speaker-kit/SpeakerOneSheet";
import SpeakerMediaKit from "@/components/speaker-kit/SpeakerMediaKit";
import { Button } from "@/components/ui/button";
import { FileText, BookOpen, Download, Printer, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SpeakerKit = () => {
  const [activeTab, setActiveTab] = useState<"onesheet" | "mediakit">("onesheet");
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Trigger print dialog which allows saving as PDF
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>Speaker Kit - Jason Sosa | AI Keynote Speaker Media Resources</title>
        <meta
          name="description"
          content="Download Jason Sosa's speaker kit including one-sheet and full media kit. Professional resources for event planners and speaker bureaus."
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Screen view with navigation */}
      <div className="print:hidden">
        <Header />

        <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Back link */}
            <div className="mb-8 relative z-20">
              <a
                href="/speaking"
                className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors cursor-pointer pointer-events-auto"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Speaking</span>
              </a>
            </div>

            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Speaker Kit
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Professional resources for event planners, speaker bureaus, and media.
                Download or print these materials for your records.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex bg-white/5 border border-white/10 rounded-xl p-1.5">
                <button
                  onClick={() => setActiveTab("onesheet")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === "onesheet"
                      ? "bg-accent text-white shadow-lg shadow-accent/25"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  One Sheet
                </button>
                <button
                  onClick={() => setActiveTab("mediakit")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === "mediakit"
                      ? "bg-accent text-white shadow-lg shadow-accent/25"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  Full Media Kit
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  onClick={handlePrint}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Printer className="w-4 h-4 mr-2" />
                  Print
                </Button>
                <Button
                  onClick={handleDownload}
                  className="bg-accent hover:bg-accent/90"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Save as PDF
                </Button>
              </div>
            </div>

            {/* Tab Description */}
            <div className="text-center mb-8">
              {activeTab === "onesheet" ? (
                <p className="text-white/60 text-sm">
                  A concise 1-page overview perfect for quick reference and event proposals.
                </p>
              ) : (
                <p className="text-white/60 text-sm">
                  Comprehensive 6-page media kit with detailed information, topics, and technical requirements.
                </p>
              )}
            </div>

            {/* Preview Container */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-8 overflow-hidden">
              <div
                ref={printRef}
                className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto transform origin-top"
                style={{
                  maxHeight: "80vh",
                  overflowY: "auto",
                }}
              >
                {activeTab === "onesheet" ? <SpeakerOneSheet /> : <SpeakerMediaKit />}
              </div>
            </div>

            {/* Help Text */}
            <div className="text-center mt-8 text-white/50 text-sm">
              <p>
                Tip: Use "Save as PDF" in your browser's print dialog to download a PDF version.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {/* Print view - shows only the content */}
      <div className="hidden print:block">
        {activeTab === "onesheet" ? <SpeakerOneSheet /> : <SpeakerMediaKit />}
      </div>

      {/* Print-specific styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }

          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .print\\:hidden {
            display: none !important;
          }

          .print\\:block {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default SpeakerKit;
