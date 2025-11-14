import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '923152199168'; // WhatsApp requires number without '+' or spaces
    const message = encodeURIComponent('Hi! I would like to inquire about your travel services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="icon"
      className="fixed bottom-8 left-8 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-[#25D366] hover:bg-[#20BA5A] text-white h-14 w-14 animate-[fade-in_0.3s_ease-out] hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}
