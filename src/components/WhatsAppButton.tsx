import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "923001234567"; // Replace with actual number
  const message = "Hello! I'd like to book an appointment at DANK Salon.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30" />
      
      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110">
        <MessageCircle className="w-7 h-7 text-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-charcoal-deep border border-border rounded-lg px-4 py-2 whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg">
        <p className="text-foreground text-sm font-medium">Book via WhatsApp</p>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-charcoal-deep border-r border-t border-border rotate-45" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
