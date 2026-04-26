'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

export default function FAQPage() {
  return (
    <>
      <div className="pt-32 pb-16 px-6 bg-[#1B1A20] text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto relative z-10 max-w-4xl">
          <h4 className="text-[#FFC107] text-sm font-bold uppercase tracking-wider mb-2">Help Center</h4>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">IPTV Support & FAQ</h1>
           <p className="text-lg text-neutral-400">
             Got questions? We&apos;ve got answers. If you need further assistance, don&apos;t hesitate to reach out.
           </p>
        </div>
      </div>

      <div className="py-24 px-6 min-h-[50vh] bg-white">
        <div className="container mx-auto max-w-3xl">
          
          <div className="space-y-4 mb-16">
            <FAQItem 
              question="What is IPTV and how does it work?"
              answer="IPTV (Internet Protocol Television) delivers television content over Internet Protocol networks instead of traditional satellite or cable formats. It allows you to stream live TV, movies, and series directly through your internet connection."
            />
            <FAQItem 
               question="How long does activation take?"
               answer="Activation is instant in most cases, but guaranteed within 5 to 30 minutes. Once you contact us via WhatsApp and process your payment, we generate your unique encrypted credentials immediately."
            />
            <FAQItem 
              question="Do I need a VPN?"
              answer="Our YourFlix network includes built-in anti-blocking technology (Anti-Freeze v4.0). A VPN is strictly optional, but perfectly compatible. We recommend one only if your local ISP severely throttles streaming traffic."
            />
            <FAQItem 
              question="Which devices are supported?"
              answer="Virtually all connected devices are supported: Smart TVs (Samsung, LG, generic Android), Firestick/FireTV, Apple TV, MAG Boxes, iOS/Android smartphones, and MacOS/Windows PCs."
            />
            <FAQItem 
              question="Can I use it on multiple devices?"
              answer="A single standard subscription permits 1 active stream at a time. You can install it on multiple devices, but cannot watch them simultaneously. Message us on WhatsApp for custom multi-room packages."
            />
            <FAQItem 
               question="What payment methods do you accept?"
               answer="To maintain privacy and continuous service, we accept Crypto (BTC, USDT, ETH, LTC), wise, revolut, and direct bank transfers. We will guide you perfectly through the process in WhatsApp."
            />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center max-w-xl mx-auto shadow-sm">
            <h2 className="text-2xl font-black mb-4 text-gray-900">Still have questions?</h2>
            <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">Our specialized support team operates 24/7 on WhatsApp to help you with any setup or proxy questions.</p>
            <a href="https://wa.me/447549589503" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded bg-[#FFC107] text-black px-8 py-4 text-sm font-bold shadow-lg hover:bg-[#E5AD06] transition-colors border-b-4 border-[#D4A004] active:border-b-0 active:translate-y-1">
              <MessageCircle className="w-5 h-5 text-gray-900" />
              Chat with Support
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 bg-white rounded flex flex-col shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left px-6 md:px-8 py-5 flex items-center justify-between focus:outline-none transition-colors ${isOpen ? 'bg-[#1B1A20] text-white' : 'hover:bg-gray-50 text-gray-900'}`}
      >
        <span className="font-bold text-lg pr-4">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#E31B23] text-white' : 'bg-gray-100 text-gray-400'}`}>
           <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 md:px-8 pb-6 pt-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50 font-medium">
          {answer}
        </div>
      </div>
    </div>
  );
}
