import React, { Component } from 'react';
import { MessageCircleIcon } from 'lucide-react';
export function FloatingWhatsApp() {
  const phoneNumber = '94771234567';
  const message = encodeURIComponent(
    'Hello! I would like to inquire about solar panel maintenance services.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
      style={{
        backgroundColor: '#f98a10',
        color: 'white'
      }}
      aria-label="Chat with us on WhatsApp">

      <MessageCircleIcon className="w-5 h-5" strokeWidth={2} />
      <span className="text-sm font-semibold hidden sm:inline">
        WhatsApp
      </span>
    </a>);
}