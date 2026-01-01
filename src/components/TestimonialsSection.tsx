import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ahmed Hassan",
      role: "Regular Client",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "DANK Salon has transformed my grooming experience. The attention to detail and premium products make every visit worthwhile. Highly recommend the Janssen facial treatment!",
    },
    {
      id: 2,
      name: "Saad Khan",
      role: "Groom Package Client",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Got the complete groom package for my wedding. The team made me look and feel amazing for my special day. Professional service from start to finish.",
    },
    {
      id: 3,
      name: "Bilal Raza",
      role: "Monthly Subscriber",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Been coming here for 2 years now. The consistency in quality and the modern vibe of the salon keeps me coming back. Best haircuts in town!",
    },
    {
      id: 4,
      name: "Usman Ali",
      role: "First-time Client",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Walked in for a simple haircut, walked out feeling like a million bucks. The ambiance, service, and skill of the stylists exceeded all expectations.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="section-padding bg-charcoal-deep relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--teal)/0.03)_0%,_transparent_70%)]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-display text-lg tracking-widest">
            TESTIMONIALS
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-4 mb-4">
            CLIENT <span className="text-gradient-teal">REVIEWS</span>
          </h2>
          <div className="w-20 h-1 gradient-teal mx-auto" />
        </div>

        {/* Carousel */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-primary/20">
            <Quote size={80} />
          </div>

          {/* Testimonial Card */}
          <div className="card-premium text-center py-12 px-8 md:px-16 relative">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-secondary text-secondary"
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary"
              />
              <div className="text-left">
                <p className="font-display text-lg text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-muted hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
