import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-50 group">
      <a
        href="https://wa.me/254719707003"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sebby Logistics on WhatsApp"
        className="relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Subtle Ambient Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        
        {/* Official WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 text-white fill-current relative z-10"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.53 1.36 5.07L2.05 22l5.21-1.37c1.47.8 3.13 1.23 4.78 1.23h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.06 14.69 2 12.04 2zm0 18.14h-.01c-1.52 0-3.01-.41-4.32-1.19l-.31-.18-3.21.84.86-3.13-.2-.32a8.21 8.21 0 0 1-1.26-4.25c0-4.55 3.7-8.25 8.25-8.25 2.2 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.55-3.7 8.25-8.26 8.25zm4.52-6.19c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.65.81-.8 1-.15.19-.3.21-.55.08-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.47c-.17 0-.44.06-.67.31-.23.25-.89.87-.89 2.12 0 1.25.91 2.45 1.04 2.62.12.17 1.79 2.73 4.33 3.83.6.26 1.08.42 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.22-.17-.47-.29z" />
        </svg>

        {/* Hover Tooltip */}
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-[#0B0F0D] text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xl pointer-events-none border border-white/10">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
