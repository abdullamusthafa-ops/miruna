import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "971500000000"; // TODO: replace with real Miruna WhatsApp number
const DEFAULT_MESSAGE = "Hi Miruna! I have a question about your collection.";

const WhatsAppButton = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-20 right-4 z-40 sm:bottom-6 sm:right-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#25D366] animate-ping opacity-75" />
    </a>
  );
};

export default WhatsAppButton;
