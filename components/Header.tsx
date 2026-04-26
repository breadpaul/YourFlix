'use client';

import { useState, useEffect } from 'react';
import { Menu, X, User, ShoppingBag, Search, MessageCircle, Zap } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setIsScrolled(scrollPos > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true, capture: true });

    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll, { capture: true });
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Setup', href: '/setup' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl'
        : 'bg-black/80 backdrop-blur-sm border-b border-white/5'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-[70px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50 group">
          <div className="text-2xl font-black tracking-tighter">
            <span className="text-white">Your</span>
            <span className="text-[#FFC107] relative">
              Flix
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FFC107] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${pathname === link.href
                ? 'text-[#FFC107] bg-white/5'
                : 'text-white hover:text-[#FFC107] hover:bg-white/5'
                }`}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#FFC107] rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4 z-50">
          {/* WhatsApp Support Link */}
          <a
            href="https://wa.me/447549589503"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-[#FFC107] transition-colors text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Support</span>
          </a>

          {/* CTA Button */}
          <a
            href="/pricing"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#FFC107] to-[#E5AD06] text-black px-6 py-2.5 text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#FFC107]/20 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Get Started
            </span>
            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white transition-colors z-50 hover:text-[#FFC107]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 px-6 overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 py-6' : 'max-h-0 py-0'
          }`}
      >
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-bold tracking-tight transition-all duration-300 py-2 ${pathname === link.href
                ? 'text-[#FFC107] border-l-4 border-[#FFC107] pl-4'
                : 'text-white hover:text-[#FFC107] pl-4'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-white/10 w-full my-2" />
          <a
            href="https://wa.me/447549589503"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFC107] to-[#E5AD06] text-black px-6 py-4 rounded-xl text-base font-bold transition-all duration-300 w-full"
          >
            <Zap className="w-5 h-5" />
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}