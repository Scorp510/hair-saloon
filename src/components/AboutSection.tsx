import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const images = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop",
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-charcoal-deep relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal/5 to-transparent pointer-events-none" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Gallery */}
          <div
            className={`relative grid grid-cols-2 gap-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg group">
                <img
                  src={images[0]}
                  alt="Salon interior"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="relative overflow-hidden rounded-lg group">
                <img
                  src={images[1]}
                  alt="Styling session"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="pt-8">
              <div className="relative overflow-hidden rounded-lg group">
                <img
                  src={images[2]}
                  alt="Barber at work"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-lg" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-secondary/30 rounded-lg" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <span className="text-primary font-display text-lg tracking-widest">
              ABOUT US
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4 mb-6">
              CRAFTING <span className="text-gradient-gold">EXCELLENCE</span>
            </h2>
            <div className="w-20 h-1 gradient-teal mb-8" />

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Where modern artistry meets precision grooming. DANK Salon delivers 
              cutting-edge styles in a sophisticated urban environment. Our team of 
              expert stylists combines years of experience with the latest techniques 
              to create looks that define individuality.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From classic cuts to avant-garde transformations, we believe every 
              client deserves a personalized experience that exceeds expectations. 
              Step into DANK and discover your signature style.
            </p>

            <div className="flex flex-wrap gap-8">
              <div>
                <p className="font-display text-4xl text-primary">10+</p>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-4xl text-secondary">5000+</p>
                <p className="text-muted-foreground text-sm">Happy Clients</p>
              </div>
              <div>
                <p className="font-display text-4xl text-foreground">15+</p>
                <p className="text-muted-foreground text-sm">Expert Stylists</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
