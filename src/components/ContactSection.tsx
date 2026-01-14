import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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
      description: "We'll get back to you within 24 hours to confirm your appointment.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+92 300 1234567" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "info@danksalon.com" },
    { icon: <MapPin className="w-5 h-5" />, label: "Address", value: "123 Main Boulevard, DHA Phase 5, Lahore" },
  ];

  const hours = [
    { day: "Monday - Thursday", time: "10:00 AM - 9:00 PM" },
    { day: "Friday - Saturday", time: "10:00 AM - 10:00 PM" },
    { day: "Sunday", time: "12:00 PM - 8:00 PM" },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding bg-charcoal relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--gold)/0.05)_0%,_transparent_50%)]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-display text-lg tracking-widest">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-4 mb-4">
            BOOK YOUR <span className="text-gradient-gold">APPOINTMENT</span>
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
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
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
            className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
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
                      <p className="text-sm text-muted-foreground">{item.label}</p>
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
                  <div key={item.day} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className="text-foreground font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Map & Social/Newsletter Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Location Map */}
              <div className="card-premium">
                <h3 className="font-display text-2xl text-foreground mb-4">
                  Our Location
                </h3>
                <div className="rounded-lg overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.0693!2d74.2135!3d31.4504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCivic%20Center%20Faisal%20Town%2C%20Lahore!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DANK Salon Location"
                    className="w-full"
                  />
                </div>
                <a
                  href="https://maps.google.com/?q=Civic+Center+Faisal+Town+Lahore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm hover:underline mt-3 inline-block"
                >
                  View larger map
                </a>
              </div>

              {/* Social & Newsletter Column */}
              <div className="space-y-6">
                {/* Social Links */}
                <div className="card-premium">
                  <h3 className="font-display text-xl text-foreground mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
                    >
                      <Send className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="card-premium bg-gradient-to-br from-card to-muted">
                  <h3 className="font-display text-xl text-foreground mb-2">
                    Newsletter
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Subscribe for exclusive offers
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 px-3 py-2 bg-charcoal-deep border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                    />
                    <button className="btn-primary py-2 px-3 text-sm">
                      JOIN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
