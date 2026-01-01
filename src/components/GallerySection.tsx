import { useEffect, useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filters = ["all", "cuts", "color", "styling", "grooming"];

  const galleryItems = [
    { id: 1, src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=600&fit=crop", category: "cuts", alt: "Modern haircut" },
    { id: 2, src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&h=400&fit=crop", category: "grooming", alt: "Beard grooming" },
    { id: 3, src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=400&h=600&fit=crop", category: "color", alt: "Hair coloring" },
    { id: 4, src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop", category: "cuts", alt: "Classic cut" },
    { id: 5, src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=500&fit=crop", category: "styling", alt: "Hair styling" },
    { id: 6, src: "https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?w=600&h=600&fit=crop", category: "grooming", alt: "Hot towel shave" },
    { id: 7, src: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=400&h=400&fit=crop", category: "color", alt: "Highlights" },
    { id: 8, src: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=600&h=400&fit=crop", category: "styling", alt: "Professional styling" },
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <>
      <section
        ref={sectionRef}
        id="gallery"
        className="section-padding bg-charcoal-deep relative overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(var(--gold)/0.05)_0%,_transparent_50%)]" />

        <div className="container-custom relative z-10">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-secondary font-display text-lg tracking-widest">
              PORTFOLIO
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-foreground mt-4 mb-4">
              OUR <span className="text-gradient-gold">WORK</span>
            </h2>
            <div className="w-20 h-1 gradient-gold mx-auto" />
          </div>

          {/* Filters */}
          <div
            className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 font-display text-sm tracking-widest uppercase transition-all duration-300 rounded-full ${
                  activeFilter === filter
                    ? "gradient-gold text-charcoal-deep"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-secondary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative group overflow-hidden rounded-lg cursor-pointer transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                } ${index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-3 bg-primary rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-6 h-6 text-charcoal-deep" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-sm font-display tracking-widest text-foreground uppercase">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-deep/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default GallerySection;
