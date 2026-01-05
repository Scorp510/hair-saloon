import { useEffect, useRef, useState } from "react";
import salonInterior from "@/assets/salon-interior.png";

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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-charcoal-deep relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Salon Interior Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="relative overflow-hidden rounded-lg group">
              {/* Gold border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold/40 via-gold-light/30 to-gold/40 rounded-lg blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative overflow-hidden rounded-lg border border-gold/20">
                <img
                  src={salonInterior}
                  alt="DANK Salon Interior - Civic Center Faisal Town"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gold overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-transparent to-gold/5 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-gold/30 rounded-lg" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-gold-light/30 rounded-lg" />
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
            <div className="w-20 h-1 gradient-gold mb-8" />

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
                <p className="font-display text-4xl text-foreground">5000+</p>
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
