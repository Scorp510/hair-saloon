import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Crown,
  Scissors,
  Palette,
  Users,
  Star,
  Zap,
} from "lucide-react";

interface ServiceItem {
  name: string;
  price: string;
  description?: string;
}

interface ServiceCategory {
  title: string;
  icon: React.ReactNode;
  items: ServiceItem[];
  isPremium?: boolean;
}

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("haircut");
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

  const skinTreatments: ServiceCategory[] = [
    {
      title: "Janssen Skin Treatments",
      icon: <Sparkles className="w-6 h-6" />,
      isPremium: true,
      items: [
        {
          name: "Complete Facial Treatment",
          price: "Rs. 8,000",
          description:
            "Polisher, Cleanser, Brightening Night Care, Steam, Scrub, Nose Strip, Mask, Ampule, Brightening Day Protection",
        },
        {
          name: "Normal Facial Treatment",
          price: "Rs. 5,000",
          description: "Polisher, Cleanser, Steam, Scrub, Nose Strip, Mask",
        },
        {
          name: "Polisher Treatment",
          price: "Rs. 4,000",
          description: "Polisher, Cleanser, Scrub, Nose Strip",
        },
        {
          name: "Scrubbing Treatment",
          price: "Rs. 2,500",
          description: "Cleanser, Scrub, Nose Strip",
        },
        {
          name: "Cleansing Treatment",
          price: "Rs. 1,500",
          description: "Cleanser, Nose Strip",
        },
      ],
    },
    {
      title: "SB Skin Treatments",
      icon: <Sparkles className="w-6 h-6" />,
      isPremium: true,
      items: [
        {
          name: "Complete Facial Treatment",
          price: "Rs. 6,000",
          description:
            "Polisher, Cleanser, Massage Cream, Steam, Scrub, Nose Strip, Mask, Ampule, Triple Action",
        },
        {
          name: "Normal Facial Treatment",
          price: "Rs. 4,000",
          description: "Polisher, Cleanser, Steam, Scrub, Nose Strip, Mask",
        },
        {
          name: "Polisher Treatment",
          price: "Rs. 3,000",
          description: "Polisher, Cleanser, Scrub, Nose Strip",
        },
        {
          name: "Scrubbing Treatment",
          price: "Rs. 1,500",
          description: "Cleanser, Scrub, Nose Strip",
        },
        {
          name: "Cleansing Treatment",
          price: "Rs. 1,000",
          description: "Cleanser, Nose Strip",
        },
      ],
    },
  ];

  const groomPackages: ServiceCategory[] = [
    {
      title: "Janssen Groom Package",
      icon: <Crown className="w-6 h-6" />,
      isPremium: true,
      items: [
        {
          name: "Groom Package - 1st Day",
          price: "Rs. 15,000",
          description:
            "Facial Treatment, Manicure & Pedicure, Haircut, Beard, Makeup Touching, Hair Styling",
        },
        {
          name: "Groom Package - 2nd Day",
          price: "Rs. 5,000",
          description:
            "Just For Men Hair Polish, Beard, Makeup Touching, Hair Styling",
        },
        {
          name: "Groom Package - 3rd Day",
          price: "Rs. 5,000",
          description:
            "Scrubbing Treatment, Beard, Makeup Touching, Hair Styling",
        },
      ],
    },
    {
      title: "SB Groom Package",
      icon: <Crown className="w-6 h-6" />,
      isPremium: true,
      items: [
        {
          name: "Groom Package - 1st Day",
          price: "Rs. 13,000",
          description:
            "Facial Treatment, Manicure & Pedicure, Haircut, Beard, Makeup Touching, Hair Styling",
        },
        {
          name: "Groom Package - 2nd Day",
          price: "Rs. 4,000",
          description:
            "Keune Hair Polish, Beard, Makeup Touching, Hair Styling",
        },
        {
          name: "Groom Package - 3rd Day",
          price: "Rs. 4,000",
          description:
            "Scrubbing Treatment, Beard, Makeup Touching, Hair Styling",
        },
      ],
    },
  ];

  const hairTreatments: ServiceCategory[] = [
    {
      title: "Keratin Treatment",
      icon: <Zap className="w-6 h-6" />,
      items: [
        { name: "Keratin Treatment (Short Hair)", price: "Rs. 10,000" },
        { name: "Keratin Treatment (Medium Hair)", price: "Rs. 15,000" },
        { name: "Keratin Treatment (Long Hair)", price: "Rs. 20,000" },
      ],
    },
    {
      title: "Keratin Service Charges Only",
      icon: <Zap className="w-6 h-6" />,
      items: [
        { name: "Short Hair", price: "Rs. 5,000" },
        { name: "Medium Hair", price: "Rs. 7,500" },
        { name: "Long Hair", price: "Rs. 10,000" },
      ],
    },
  ];

  const generalServices: ServiceCategory[] = [
    {
      title: "General Services",
      icon: <Users className="w-6 h-6" />,
      items: [
        { name: "Manicure", price: "Rs. 1,500" },
        { name: "Pedicure", price: "Rs. 2,000" },
        { name: "Half Massage", price: "Rs. 500" },
        { name: "Full Massage", price: "Rs. 1,000" },
        { name: "Makeup Touching", price: "Rs. 1,500" },
      ],
    },
  ];

  const haircutServices: ServiceCategory[] = [
    {
      title: "Haircut Services",
      icon: <Scissors className="w-6 h-6" />,
      items: [
        { name: "Hair Cut", price: "Rs. 1,000" },
        { name: "Senior Stylist Hair Cut", price: "Rs. 2,000" },
        { name: "Senior Stylist Child Hair Cut", price: "Rs. 1,000" },
        { name: "Child Hair Cut", price: "Rs. 500" },
        { name: "Head Machine", price: "Rs. 500" },
        { name: "Head Shave", price: "Rs. 500" },
        { name: "Neck Round", price: "Rs. 100" },
        { name: "Head Wash", price: "Rs. 100" },
      ],
    },
    {
      title: "Beard Services",
      icon: <Scissors className="w-6 h-6" />,
      items: [
        { name: "Beard (Wash & Disposable Razor)", price: "Rs. 500" },
        { name: "Senior Stylist Beard", price: "Rs. 1,000" },
        { name: "French Neat", price: "Rs. 200" },
        { name: "Eyebrows Shape", price: "Rs. 200" },
        { name: "Threading", price: "Rs. 100" },
        { name: "Mustache", price: "Rs. 100" },
      ],
    },
    {
      title: "Styling Services",
      icon: <Star className="w-6 h-6" />,
      items: [
        { name: "Short Hair", price: "Rs. 300" },
        { name: "Medium Hair", price: "Rs. 500" },
        { name: "Long Hair (Iron Straightener)", price: "Rs. 1,000" },
        { name: "Fiber Styling", price: "Rs. 500" },
        { name: "Beard Styling", price: "Rs. 200" },
        { name: "Styling (Hair Wax & Spray)", price: "Rs. 200" },
      ],
    },
  ];

  const colourServices: ServiceCategory[] = [
    {
      title: "Revlon Colour Services",
      icon: <Palette className="w-6 h-6" />,
      items: [
        { name: "Hair Colour", price: "Rs. 1,300" },
        { name: "Beard Colour", price: "Rs. 800" },
        { name: "French Colour", price: "Rs. 400" },
        { name: "Mustache Colour", price: "Rs. 200" },
        { name: "Sideburns Colour", price: "Rs. 300" },
      ],
    },
    {
      title: "Keune Colour Services",
      icon: <Palette className="w-6 h-6" />,
      items: [
        { name: "Hair Colour", price: "Rs. 1,500" },
        { name: "Beard Colour", price: "Rs. 1,000" },
        { name: "French Colour", price: "Rs. 500" },
        { name: "Mustache Colour", price: "Rs. 300" },
        { name: "Sideburns Colour", price: "Rs. 400" },
        { name: "Hair Polish", price: "Rs. 1,500" },
        { name: "Hair Polish (Long Hair)", price: "Rs. 2,500" },
      ],
    },
    {
      title: "Just For Men Colour Services",
      icon: <Palette className="w-6 h-6" />,
      items: [
        { name: "Hair Colour", price: "Rs. 2,500" },
        { name: "Beard Colour", price: "Rs. 1,300" },
        { name: "French Colour", price: "Rs. 700" },
        { name: "Mustache Colour", price: "Rs. 400" },
        { name: "Sideburns Colour", price: "Rs. 500" },
        { name: "Hair Polish", price: "Rs. 2,500" },
        { name: "Hair Polish (Long Hair)", price: "Rs. 3,500" },
      ],
    },
    {
      title: "Colour Service Charges Only",
      icon: <Palette className="w-6 h-6" />,
      items: [
        { name: "Hair Streaking", price: "Rs. 4,000" },
        { name: "Hair Color Service", price: "Rs. 500" },
        { name: "Beard Colour Service", price: "Rs. 400" },
        { name: "French Colour Service", price: "Rs. 200" },
        { name: "Mustache Colour Service", price: "Rs. 100" },
        { name: "Sideburns Colour Service", price: "Rs. 100" },
      ],
    },
  ];

  const tabs = [
    {
      id: "haircut",
      label: "Haircut & Styling",
      icon: <Scissors className="w-4 h-4" />,
    },
    { id: "colour", label: "Colour", icon: <Palette className="w-4 h-4" /> },
    {
      id: "general",
      label: "Massage Treatments",
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: "skin",
      label: "Skin & Facial",
      icon: <Sparkles className="w-4 h-4" />,
    },
    { id: "hair", label: "Hair Treatments", icon: <Zap className="w-4 h-4" /> },
    {
      id: "groom",
      label: "Groom Packages",
      icon: <Crown className="w-4 h-4" />,
    },
  ];

  const getActiveServices = () => {
    switch (activeTab) {
      case "skin":
        return skinTreatments;
      case "groom":
        return groomPackages;
      case "hair":
        return hairTreatments;
      case "general":
        return generalServices;
      case "haircut":
        return haircutServices;
      case "colour":
        return colourServices;
      default:
        return skinTreatments;
    }
  };

  const isPremiumTab = activeTab === "skin" || activeTab === "groom";

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-padding bg-charcoal relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--teal)/0.05)_0%,_transparent_50%)]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-display text-lg tracking-widest">
            OUR MENU
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-4 mb-4">
            SERVICES & <span className="text-gradient-gold">PRICING</span>
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From premium skin treatments to expert grooming services, discover
            our comprehensive menu designed for the modern gentleman.
          </p>
        </div>

        {/* Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 md:gap-3 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 font-display text-xs md:text-sm tracking-wider transition-all duration-300 rounded-full border ${
                activeTab === tab.id
                  ? tab.id === "skin" || tab.id === "groom"
                    ? "gradient-gold text-charcoal-deep border-transparent glow-gold"
                    : "gradient-gold text-charcoal-deep border-transparent"
                  : "bg-transparent border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground"
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Premium Badge for Skin & Groom */}
        {isPremiumTab && (
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
              <Crown className="w-4 h-4 text-gold" />
              <span className="text-sm text-gold font-medium">
                Premium Services
              </span>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div
          className={`grid ${
            getActiveServices().length === 1
              ? "md:grid-cols-1 max-w-2xl mx-auto"
              : "md:grid-cols-2"
          } gap-8`}
        >
          {getActiveServices().map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`card-premium transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${
                getActiveServices().length % 2 === 0
                  ? ""
                  : categoryIndex === getActiveServices().length - 1
                  ? "col-span-2"
                  : "col-span-1"
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/30">
                <div
                  className={`p-2.5 rounded-lg ${
                    category.isPremium
                      ? "gradient-gold glow-gold"
                      : "gradient-gold"
                  }`}
                >
                  {category.icon}
                </div>
                <h3 className="font-display text-xl md:text-2xl text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Services List */}
              <div className="space-y-4">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="group py-3 border-b border-border/20 last:border-0 last:pb-0 hover:bg-muted/30 -mx-2 px-2 rounded transition-colors"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                          {item.name}
                        </span>
                        {item.description && (
                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                            Includes: {item.description}
                          </p>
                        )}
                      </div>
                      <span
                        className={`font-display text-lg whitespace-nowrap ${
                          category.isPremium
                            ? "text-gold-light"
                            : "text-primary"
                        }`}
                      >
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-muted-foreground mb-6">
            Ready to elevate your style?
          </p>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            BOOK YOUR APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
