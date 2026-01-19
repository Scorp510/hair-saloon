import { useEffect, useRef, useState } from "react";
import { Play, Youtube, ChevronLeft, ChevronRight } from "lucide-react";

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  videoId: string; // YouTube video ID or URL
  description?: string;
}

const VideosSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Sample videos - replace with your actual video data
  const videos: Video[] = [
    {
      id: 1,
      title: "DANK Salon Experience",
      thumbnail: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=450&fit=crop",
      videoId: "dQw4w9WgXcQ", // Replace with your YouTube video ID
      description: "Experience the premium grooming services at DANK Salon",
    },
    {
      id: 2,
      title: "Haircut & Styling Process",
      thumbnail: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=450&fit=crop",
      videoId: "dQw4w9WgXcQ", // Replace with your YouTube video ID
      description: "Watch our expert stylists create the perfect look",
    },
    {
      id: 3,
      title: "Facial Treatment Showcase",
      thumbnail: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=450&fit=crop",
      videoId: "dQw4w9WgXcQ", // Replace with your YouTube video ID
      description: "Premium Janssen skin treatments in action",
    },
  ];

  const videosPerPage = 3;
  const totalPages = Math.ceil(videos.length / videosPerPage);
  const startIndex = currentPage * videosPerPage;
  const displayedVideos = videos.slice(startIndex, startIndex + videosPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const openVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="videos"
        className="section-padding bg-charcoal-deep relative overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--gold)/0.03)_0%,_transparent_70%)]" />

        <div className="container-custom relative z-10">
          {/* Header */}
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-primary font-display text-lg tracking-widest">
              VIDEO GALLERY
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-foreground mt-4 mb-4 px-4">
              WATCH OUR <span className="text-gradient-gold">WORK</span>
            </h2>
            <div className="w-20 h-1 gradient-gold mx-auto" />
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mt-6 px-4">
              Experience the artistry and precision of DANK Salon through our video collection
            </p>
          </div>

          {/* Videos Grid */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Video Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
              {displayedVideos.map((video, index) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-lg border border-border/30 bg-card hover:border-primary/50 transition-all duration-500 cursor-pointer"
                  onClick={() => openVideo(video)}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Thumbnail Container */}
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-charcoal-deep/40 to-transparent" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Outer Glow Ring */}
                        <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform duration-500" />
                        
                        {/* Play Icon Container */}
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full gradient-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 glow-gold">
                          <Play className="w-6 h-6 sm:w-8 sm:h-8 text-charcoal-deep ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>

                    {/* YouTube Badge */}
                    <div className="absolute top-3 right-3 bg-red-600/90 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1.5 text-white text-xs font-medium">
                      <Youtube className="w-3.5 h-3.5" />
                      <span>YouTube</span>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-4 sm:p-6">
                    <h3 className="font-display text-lg sm:text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {video.description}
                      </p>
                    )}
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={prevPage}
                  className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all hover:bg-primary/5"
                  aria-label="Previous videos"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Page Indicators */}
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentPage
                          ? "w-8 bg-primary"
                          : "w-2 bg-muted hover:bg-muted-foreground"
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextPage}
                  className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all hover:bg-primary/5"
                  aria-label="Next videos"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-deep/95 backdrop-blur-sm p-2 sm:p-4 animate-fade-in overflow-y-auto"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-4xl bg-card rounded-lg overflow-hidden border border-primary/30 shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-charcoal-deep/90 backdrop-blur-sm border border-border text-foreground hover:text-primary hover:border-primary transition-all flex items-center justify-center"
              aria-label="Close video"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative aspect-video bg-charcoal-deep">
              <iframe
                src={getYouTubeEmbedUrl(selectedVideo.videoId)}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Video Info */}
            <div className="p-4 sm:p-6 border-t border-border">
              <h3 className="font-display text-xl sm:text-2xl text-foreground mb-2">
                {selectedVideo.title}
              </h3>
              {selectedVideo.description && (
                <p className="text-sm sm:text-base text-muted-foreground">{selectedVideo.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideosSection;
