import { useMemo, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

const FALLBACK_NUMBER = '919876543210';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const whatsappNumber = useMemo(() => {
    const envNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
    return (envNumber || FALLBACK_NUMBER).replace(/\D/g, '');
  }, []);

const handleSend = () => {
  const typedMessage = message.trim();
  const text =
    typedMessage || "Hi, I want to know more about your photography services.";

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank"); // opens in new tab
  setMessage("");
};

  return (
    <div className="fixed right-5 bottom-8 z-50 md:right-8 md:bottom-8">
      {isOpen && (
        <div className="w-[300px] sm:w-[340px] overflow-hidden rounded-2xl border border-emerald-500/30 bg-white shadow-2xl mb-4">
          <div className="flex items-center justify-between bg-[#075E54] px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">Guddu Raj Support</p>
              <p className="text-xs text-white/80">Typically replies in minutes</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="bg-[#ECE5DD] p-4">
            <div className="max-w-[90%] rounded-xl bg-white p-3 text-sm text-gray-700 shadow-sm">
              Hi. Tell us your shoot type, preferred date, and city.
            </div>
          </div>

          <div className="border-t border-gray-200 p-3 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Type your message..."
                className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-emerald-500"
                aria-label="Type your WhatsApp message"
              />
              <button
                type="button"
                onClick={handleSend}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white hover:bg-[#1FB359] transition-colors"
                aria-label="Send message on WhatsApp"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="ml-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#1FB359] transition-all duration-300"
        aria-label="Open WhatsApp chat"
      >
        <MessageCircle size={26} />
      </button>
    </div>
  );
};

export default WhatsAppChat;
