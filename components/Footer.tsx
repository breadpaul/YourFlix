'use client';

import { Twitter, Facebook, Instagram, Youtube, MessageCircle, Zap, ShieldCheck, HeadphonesIcon, Clock, Mail, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-gray-400">

      {/* Main Footer Content */}
      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-6">

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* Column 1 - Brand */}
            <div>
              <Link href="/" className="inline-block mb-4 group">
                <div className="text-2xl font-black tracking-tighter">
                  <span className="text-white">Your</span>
                  <span className="text-[#FFC107] relative">
                    Flix
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FFC107] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </span>
                </div>
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Premium IPTV streaming with Anti-Freeze v4.0 technology. Watch 20,000+ channels in stunning 4K/8K quality.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <ShieldCheck className="w-4 h-4 text-[#FFC107]" />
                <span>100% Secure & Encrypted</span>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#FFC107]" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li><Link href="/pricing" className="text-sm text-gray-500 hover:text-[#FFC107] transition-colors flex items-center gap-1 group">Pricing <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" /></Link></li>
                <li><Link href="/setup" className="text-sm text-gray-500 hover:text-[#FFC107] transition-colors flex items-center gap-1 group">Setup Guide <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" /></Link></li>
                <li><Link href="/blog" className="text-sm text-gray-500 hover:text-[#FFC107] transition-colors flex items-center gap-1 group">Blog <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" /></Link></li>
                <li><Link href="/faq" className="text-sm text-gray-500 hover:text-[#FFC107] transition-colors flex items-center gap-1 group">FAQ <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" /></Link></li>
              </ul>
            </div>

            {/* Column 3 - Legal */}
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFC107]" />
                Legal
              </h3>
              <ul className="space-y-3">
                <li><Link href="/terms" className="text-sm text-gray-500 hover:text-[#FFC107] transition-colors flex items-center gap-1 group">Terms of Service <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" /></Link></li>
                <li><Link href="/privacy" className="text-sm text-gray-500 hover:text-[#FFC107] transition-colors flex items-center gap-1 group">Privacy Policy <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" /></Link></li>
                <li><Link href="/refund" className="text-sm text-gray-500 hover:text-[#FFC107] transition-colors flex items-center gap-1 group">Refund Policy <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" /></Link></li>
                <li><Link href="/cookies" className="text-sm text-gray-500 hover:text-[#FFC107] transition-colors flex items-center gap-1 group">Cookie Policy <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" /></Link></li>
              </ul>
            </div>

            {/* Column 4 - Support */}
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                <HeadphonesIcon className="w-4 h-4 text-[#FFC107]" />
                24/7 Support
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-[#FFC107] shrink-0 mt-0.5" />
                  <div>
                    <a href="https://wa.me/447549589503" target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-[#FFC107] transition-colors block">WhatsApp Support</a>
                    <span className="text-xs text-gray-600">Response within 5 minutes</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#FFC107] shrink-0 mt-0.5" />
                  <div>
                    <a href="mailto:support@yourflix.vip" className="text-sm text-gray-500 hover:text-[#FFC107] transition-colors block">support@yourflix.vip</a>
                    <span className="text-xs text-gray-600">Email support 24/7</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#FFC107] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm text-gray-500 block">Instant Activation</span>
                    <span className="text-xs text-gray-600">Start streaming in minutes</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white/5 py-6 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-3 order-2 md:order-1">
            </div>

            {/* Copyright */}
            <div className="text-xs text-gray-500 order-1 md:order-2">
              © 2026 <span className="text-[#FFC107] font-medium">yourflix.vip</span>. All rights reserved.
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-2 order-3">
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}