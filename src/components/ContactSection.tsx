import { useEffect, useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Send,
  Play,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import vid1 from "@/assets/vid1.mp4";
import vid2 from "@/assets/vid2.mp4";
import vid3 from "@/assets/vid3.mp4";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const { toast } = useToast();

  const portfolioVideos = [
    { id: 1, src: vid1 },
    { id: 2, src: vid2 },
    { id: 3, src: vid3 },
  ];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent!",
      description:
        "We'll get back to you within 24 hours to confirm your appointment.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleVideoPlay = (index: number) => {
    // Pause all other videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });
    setPlayingVideo(index);
  };

  const handleVideoPause = () => {
    setPlayingVideo(null);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "04235195634",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "danksalon1@gmail.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value:
        "DANK Salon Ground Floor 9, Civic Center, Faisal Town, Lahore Pakistan",
    },
  ];

  const hours = [{ day: "Monday - Sunday", time: "10:00 AM - 12:00 AM" }];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding bg-charcoal relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--gold)/0.05)_0%,_transparent_50%)]" />

      <div className="container-custom relative z-10">
        {/* Ali Nasir Introduction Section */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
              Owner and Director Stylist –{" "}
              <span className="text-gradient-gold">Ali Nasir</span>
            </h2>
            <div className="w-20 h-1 gradient-gold mx-auto mb-8" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card-premium p-8 md:p-12">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 text-center">
                With over{" "}
                <span className="text-primary font-semibold">20+ years</span> of
                distinguished experience in the styling industry, Ali Nasir
                stands as a master craftsman and visionary leader in the world
                of premium grooming and beauty. His unwavering passion for
                excellence, combined with an innate understanding of
                contemporary aesthetics, has established him as one of the most
                sought-after stylists in the region.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 text-center">
                Ali's expertise transcends traditional styling—he is a true
                artist who transforms each client's vision into reality,
                creating looks that are both timeless and cutting-edge. His
                commitment to personalized service ensures that every
                appointment is tailored to the individual, reflecting their
                unique style, personality, and lifestyle. This dedication to
                bespoke excellence has earned him a reputation for unparalleled
                client satisfaction and a loyal following of discerning clients
                who trust his vision and skill.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed text-center">
                At DANK Salon, Ali Nasir brings his wealth of knowledge, refined
                techniques, and genuine passion for beauty and grooming to
                create an experience that goes beyond the ordinary. Welcome to a
                world where artistry meets precision, and where your
                transformation begins with a master's touch.
              </p>
            </div>
          </div>

          {/* Video Portfolio Section */}
          <div className="mt-16">
            <h3 className="font-display text-2xl md:text-3xl text-foreground text-center mb-8">
              Portfolio <span className="text-gradient-gold">Reels</span>
            </h3>
            <div className="flex flex-col gap-6 max-w-4xl mx-auto">
              {portfolioVideos.map((video, index) => (
                <div
                  key={video.id}
                  className="card-premium overflow-hidden group cursor-pointer"
                  onClick={() => {
                    const videoEl = videoRefs.current[index];
                    if (videoEl) {
                      if (playingVideo === index) {
                        videoEl.pause();
                        handleVideoPause();
                      } else {
                        handleVideoPlay(index);
                        videoEl.play();
                      }
                    }
                  }}
                >
                  <div className="relative aspect-video bg-charcoal-deep">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={video.src}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                      onPlay={() => handleVideoPlay(index)}
                      onPause={handleVideoPause}
                    />
                    {playingVideo !== index && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors">
                          <Play
                            className="w-8 h-8 text-charcoal-deep ml-1"
                            fill="currentColor"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-display text-lg tracking-widest">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-4 mb-4">
            BOOK YOUR <span className="text-gradient-gold">APPOINTMENT</span>{" "}
            WITH ALI NASIR
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="+92 300 1234567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Service Interested In
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="haircut">Haircut & Styling</option>
                  <option value="facial">Skin Treatment</option>
                  <option value="groom">Groom Package</option>
                  <option value="colour">Hair Colour</option>
                  <option value="keratin">Keratin Treatment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Any special requests or preferred timing..."
                />
              </div>

              <button type="submit" className="btn-primary w-full text-lg">
                SEND BOOKING REQUEST
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Contact Details */}
            <div className="card-premium">
              <h3 className="font-display text-2xl text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="p-2 rounded-lg gradient-gold text-charcoal-deep">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Opening Hours */}
            <div className="card-premium">
              <h3 className="font-display text-2xl text-foreground mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary" />
                Opening Hours
              </h3>
              <div className="space-y-3">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center py-2 border-b border-border/30 last:border-0"
                  >
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className="text-foreground font-medium">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Location & Social Row - Full Width Below Form */}
        <div
          className={`grid md:grid-cols-2 gap-8 mt-12 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Location Map - Left Half */}
          <div className="card-premium">
            <h3 className="font-display text-2xl text-foreground mb-4">
              Our Location
            </h3>
            <div className="rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.8!2d74.3058942!3d31.4751799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903fbfe19bd5b%3A0xfe24c19c157bb7a7!2sDANK%20salon%C2%AE!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DANK Salon Location"
                className="w-full"
              />
            </div>
            <a
              href="https://www.google.com/maps/place/DANK+salon%C2%AE/@31.4751799,74.3058942,17z/data=!3m1!4b1!4m6!3m5!1s0x391903fbfe19bd5b:0xfe24c19c157bb7a7!8m2!3d31.4751799!4d74.3058942!16s%2Fg%2F11f3n3679b"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 inline-block text-center"
            >
              GET DIRECTIONS
            </a>
          </div>

          {/* Social & Newsletter - Right Half */}
          <div className="space-y-6">
            {/* Social Links */}
            <div className="card-premium">
              <h3 className="font-display text-2xl text-foreground mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/danksalon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
                >
                  <Send className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="card-premium bg-gradient-to-br from-card to-muted">
              <h3 className="font-display text-2xl text-foreground mb-3">
                Newsletter
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Subscribe for exclusive offers and style tips
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-charcoal-deep border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <button className="btn-primary py-2 px-4 text-sm">JOIN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
