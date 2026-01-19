import { useEffect, useRef, useState } from "react";
import { Award, Package, MapPin } from "lucide-react";

const FeaturesSection = () => {
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

  const features = [
    {
      icon: <Award className="w-10 h-10" />,
      title: "Expert Stylists",
      description: "Certified professionals with 10+ years experience delivering exceptional cuts and styles that define modern elegance.",
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: "Premium Products",
      description: "We use only salon-grade treatments from top brands like Janssen, Keune, and Just For Men for superior results.",
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Modern Space",
      description: "Experience grooming in our sleek, comfortable urban environment designed for relaxation and style.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="section-padding bg-charcoal relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-display text-lg tracking-widest">
            WHY CHOOSE US
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-foreground mt-4 mb-4 px-4">
            THE DANK <span className="text-gradient-gold">DIFFERENCE</span>
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Icon Container */}
              <div className="relative inline-flex items-center justify-center mb-8">
                {/* Background Circle */}
                <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br from-gold/20 to-transparent -m-2" />
                <div className="relative w-20 h-20 rounded-full border-2 border-foreground flex items-center justify-center text-foreground group-hover:border-primary group-hover:text-primary transition-all duration-500 group-hover:scale-110">
                  {feature.icon}
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-2" style={{ boxShadow: "0 0 40px hsl(var(--gold) / 0.4)" }} />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 group-hover:text-secondary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Lines */}
        <div className="hidden md:block absolute top-1/2 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      </div>
    </section>
  );
};

export default FeaturesSection;
