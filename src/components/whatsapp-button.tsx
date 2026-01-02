'use client';

import { useState } from 'react';
import { whatsappNumber } from '@/lib/config';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-8"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    const cleanNumber = whatsappNumber.replace(/\s/g, '');
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${cleanNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Mini Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 transition-all animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-[#075E54] p-4 text-white">
            <h3 className="font-bold text-lg leading-tight">Supporto Clienti</h3>
            <p className="text-xs opacity-90">Inviaci un messaggio su WhatsApp</p>
          </div>
          
          {/* Body */}
          <div className="bg-[#E5DDD5] p-4">
            {/* Messaggio di benvenuto */}
            <div className="relative mb-4 max-w-[85%] rounded-lg bg-white p-3 text-sm text-gray-800 shadow-sm">
              <span className="block">Ciao! Come possiamo aiutarti? 👋</span>
              {/* Piccola freccetta del fumetto */}
              <div className="absolute -left-2 top-2 h-0 w-0 border-y-[6px] border-r-[8px] border-y-transparent border-r-white"></div>
            </div>
            
            {/* Area di testo */}
            <textarea
              className="w-full resize-none rounded-lg border-none p-3 text-sm text-gray-900 shadow-inner focus:ring-2 focus:ring-[#25D366] placeholder:text-gray-400"
              rows={3}
              placeholder="Scrivi qui il tuo messaggio..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            
            {/* Bottone Invia */}
            <button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] py-2.5 font-bold text-white transition-colors hover:bg-[#128C7E] disabled:cursor-not-allowed disabled:opacity-50 shadow-md"
            >
              <span>Invia ora</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-16 w-16 items-center justify-center rounded-full text-white shadow-xl transition-all duration-300 hover:scale-110 
          ${isOpen ? 'bg-gray-600 rotate-90' : 'bg-[#25D366]'}`}
      >
        {isOpen ? (
          <span className="text-3xl">×</span>
        ) : (
          <WhatsAppIcon />
        )}
      </button>
    </div>
  );
}