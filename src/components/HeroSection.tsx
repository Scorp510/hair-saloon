import { ChevronDown } from "lucide-react";
import dankLogo from "@/assets/dank-logo.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Animated Background Elements - Neon theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-pure-white/10 rounded-full opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-pure-white/5 rounded-full opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo Image */}
        <div className="mb-8 animate-fade-up">
          <img 
            src={dankLogo} 
            alt="DANK Salon Logo" 
            className="w-64 md:w-80 lg:w-96 mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Tagline */}
        <p
          className="text-2xl md:text-4xl font-display tracking-wider mb-4 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-gradient-neon">ELEVATE</span>{" "}
          <span className="text-foreground">YOUR STYLE</span>
        </p>

        <p
          className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-12 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Where modern artistry meets precision grooming
        </p>

        {/* CTA Button */}
        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary text-xl px-12 py-5 animate-pulse-slow"
          >
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-scroll-indicator"
      >
        <ChevronDown size={32} />
      </button>

      {/* Side Decorative Elements - Neon lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-neon-cyan/50 to-transparent" />
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-neon-purple/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
