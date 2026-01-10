import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BentoGrid } from "@/components/bento/BentoGrid";
import { useBentoItems } from "@/components/bento/useBentoItems";
import { BentoItem } from "@/components/bento/types";
import ProjectDetailModal from "@/components/portfolio/ProjectDetailModal";
import VideoPopup from "@/components/VideoPopup";
import ImageLightbox from "@/components/ImageLightbox";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("recent");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<BentoItem | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{url: string; title?: string; subtitle?: string} | null>(null);

  const { items, loading } = useBentoItems({
    categoryFilter,
    searchQuery,
    sortBy,
  });

  const handleItemClick = (item: BentoItem) => {
    // Open modal for Supabase projects with project data
    if (item.source === "supabase" && item.projectData) {
      setSelectedItem(item);
      return;
    }

    // For video items, open in embedded modal
    if (item.type === "video" && item.videoUrl) {
      setVideoUrl(item.videoUrl);
      setIsVideoPopupOpen(true);
      return;
    }

    // For image items with a preview, open lightbox
    if (item.type === "image" && (item.previewImageUrl || item.imageUrl)) {
      setLightboxImage({
        url: item.previewImageUrl || item.imageUrl || "",
        title: item.title,
        subtitle: item.subtitle,
      });
      return;
    }
  };

  return (
    <>
      <Helmet>
        <title>Work - Jason Sosa | AI Keynote Speaking Projects & Engagements</title>
        <meta
          name="description"
          content="Explore Jason Sosa's portfolio of AI keynote speaking engagements, consulting projects, and strategic leadership initiatives for Fortune 500 companies and global organizations."
        />
        <meta
          name="keywords"
          content="AI speaker portfolio, keynote speaking projects, Jason Sosa projects, AI consulting engagements, Fortune 500 speaking"
        />
        <link rel="canonical" href="https://jasonsosa.com/portfolio" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main id="main-content" className="flex-1 pt-24 md:pt-28">
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Hero header with credibility */}
              <div className="text-center mb-8 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Speaking Portfolio
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Trusted by Fortune 500 companies, global conferences, and leading universities
                </p>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-2xl md:text-3xl font-bold text-accent">100+</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Keynotes Delivered</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-2xl md:text-3xl font-bold text-white">10+</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Countries</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-2xl md:text-3xl font-bold text-white">5</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Continents</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-2xl md:text-3xl font-bold text-white">25+</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Years in AI</p>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className="mb-10 space-y-4 animate-fade-in">
                <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                  <Tabs
                    value={categoryFilter}
                    onValueChange={setCategoryFilter}
                    className="w-full lg:w-auto"
                  >
                    <TabsList className="grid grid-cols-3 md:flex md:w-auto">
                      <TabsTrigger value="all">
                        <span className="md:hidden">All</span>
                        <span className="hidden md:inline">All Work</span>
                      </TabsTrigger>
                      <TabsTrigger value="speaking-media">
                        <span className="md:hidden">Speaking</span>
                        <span className="hidden md:inline">Speaking & Media</span>
                      </TabsTrigger>
                      <TabsTrigger value="technology-innovation">
                        <span className="md:hidden">Tech</span>
                        <span className="hidden md:inline">Technology & Innovation</span>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>

                  <div className="flex gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="recent">Recent</SelectItem>
                        <SelectItem value="title">A-Z</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Bento Grid */}
              {items.length === 0 && !loading ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    {searchQuery || categoryFilter !== "all"
                      ? "No items match your search criteria."
                      : "No projects available yet."}
                  </p>
                </div>
              ) : (
                <BentoGrid
                  items={items}
                  onItemClick={handleItemClick}
                  loading={loading}
                />
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Event?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book Jason for your next corporate event, conference, or executive summit.
                Engaging keynotes that inspire action and drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all shadow-lg shadow-accent/20"
                >
                  <Calendar className="w-5 h-5" />
                  Check Availability
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/speaker-kit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all border border-white/20"
                >
                  Download Speaker Kit
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* Project Detail Modal */}
      {selectedItem?.projectData && (
        <ProjectDetailModal
          project={selectedItem.projectData}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}

      {/* Video Popup Modal */}
      <VideoPopup
        videoUrl={videoUrl}
        isOpen={isVideoPopupOpen}
        onClose={() => {
          setIsVideoPopupOpen(false);
          setVideoUrl(null);
        }}
      />

      {/* Image Lightbox Modal */}
      <ImageLightbox
        imageUrl={lightboxImage?.url || null}
        title={lightboxImage?.title}
        subtitle={lightboxImage?.subtitle}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
};

export default Portfolio;
