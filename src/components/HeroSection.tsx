import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/20 rounded-full opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/10 rounded-full opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-up">
          <h1 className="font-display text-8xl md:text-[12rem] tracking-[0.3em] text-foreground leading-none">
            DANK
          </h1>
          <p className="font-display text-xl md:text-2xl tracking-[0.5em] text-muted-foreground mt-2">
            SALON
          </p>
        </div>

        {/* Tagline */}
        <p
          className="text-2xl md:text-4xl font-display tracking-wider mb-4 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-gradient-teal">ELEVATE</span>{" "}
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

      {/* Side Decorative Elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-secondary/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
