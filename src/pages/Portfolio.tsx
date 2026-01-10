import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BentoGrid } from "@/components/bento/BentoGrid";
import { useBentoItems } from "@/components/bento/useBentoItems";
import { BentoItem } from "@/components/bento/types";
import ProjectDetailModal from "@/components/portfolio/ProjectDetailModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Portfolio = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("recent");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<BentoItem | null>(null);

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

    // For video items, open the video URL in a new tab
    if (item.type === "video" && item.videoUrl) {
      window.open(item.videoUrl, "_blank", "noopener,noreferrer");
      return;
    }

    // Other static items do nothing for now
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
        <link rel="canonical" href={`${window.location.origin}/portfolio`} />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main id="main-content" className="flex-1 pt-24 md:pt-28">
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Minimal header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                  Work
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
                  Companies built, projects delivered, stages conquered
                </p>
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
    </>
  );
};

export default Portfolio;
