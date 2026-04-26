'use client';

import { useState } from 'react';
import { Play, CheckCircle2, Tv, Wifi, Radio, MonitorPlay, Zap, HeadphonesIcon, Settings2, ShieldCheck, Heart, Smartphone, MessageCircle, ArrowRight, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { FaAndroid, FaApple, FaWindows, FaLinux, FaChrome, FaAmazon } from 'react-icons/fa';
import { SiNetflix, SiHbomax, SiCnn } from 'react-icons/si';
import { articles } from '@/lib/data/articles';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedCounter } from '@/components/AnimatedCounter';

// SEO: Schema Markup
const SchemaMarkup = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "author": {
          "@type": "Organization",
          "name": "YourFlix"
        },
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "YourFlix",
        "description": "Premium IPTV subscription with 20,000+ live channels and 60,000+ VODs in 4K/8K quality. Anti-Freeze v4.0 technology eliminates buffering.",
        "brand": { "@type": "Brand", "name": "YourFlix" },
        "url": "https://yourflix.vip",
        "offers": [
          {
            "@type": "Offer",
            "name": "3 Month Plan",
            "priceCurrency": "EUR",
            "price": "30.00",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "6 Month Plan",
            "priceCurrency": "EUR",
            "price": "50.00",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "12 Month Plan",
            "priceCurrency": "EUR",
            "price": "72.00",
            "availability": "https://schema.org/InStock"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1250",
          "bestRating": "5",
          "worstRating": "1"
        }
      })
    }}
  />
);

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [globalDeviceCount, setGlobalDeviceCount] = useState<number>(1);

  // UNIQUE PRICES FOR EACH PLAN AND DEVICE
  const pricing = {
    3: { 1: 30, 2: 40, 3: 55 },
    6: { 1: 50, 2: 70, 3: 99 },
    12: { 1: 72, 2: 99, 3: 139 },
  };

  const getPrice = (baseMultiplier: number) => {
    const multiplier = globalDeviceCount;
    return (baseMultiplier * multiplier).toFixed(2);
  };

  return (
    <>
      <SchemaMarkup />

      {/* Hidden H1 for screen readers */}
      {/* <h1 className="sr-only">YourFlix - Premium IPTV Subscription Service</h1> */}

      {/* ==================== HERO SECTION ==========z========== */}
      <section className="relative min-h-[calc(115vh-25px)] flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black">
        {/* Background Image - FIXED */}
        <div className="absolute inset-0 z-0">
          {/* Use regular img tag instead of Next.js Image for external URL */}
          <img
            src="/img/hero.webp"
            alt="YourFlix IPTV streaming on large TV screen - family enjoying 4K content"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 md:mb-6 leading-[1.2]">
              <span className="text-white">Your</span>
              <span className="text-[#FFC107]">Flix</span>
              <br />
              <span className="text-white">Best Premium IPTV</span>
              <br />
              <span className="text-white">Subscription</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-200 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
              <strong className="text-[#FFC107]">YourFlix</strong> delivers{' '}
              <strong className="text-white">20,000+ live channels</strong> and{' '}
              <strong className="text-white">60,000+ on-demand titles</strong> in stunning 4K/8K quality.
              Powered by <strong className="text-white">Anti-Freeze v4.0</strong> for buffer-free streaming.
              <strong className="text-[#FFC107]"> Instant WhatsApp activation</strong> — start watching in minutes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Link
                href="/pricing"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFC107] text-black px-6 sm:px-8 py-3 sm:py-4 text-sm font-bold shadow-lg hover:bg-[#E5AD06] hover:scale-105 transition-all duration-300"
              >
                View YourFlix Plans
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/447549589503"
                target="_blank"
                rel="noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm font-bold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                Start YourFlix Now
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== SERVICES SECTION ==================== */}
      <section className="py-16 bg-white relative z-20 -mt-16 container mx-auto px-6 max-w-6xl rounded-xl shadow-xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 bg-[#FFC107]/10 rounded-xl flex items-center justify-center shrink-0">
              <Wifi className="w-6 h-6 text-[#FFC107]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-2">YourFlix Broadband Compatible</h3>
              <p className="text-sm text-gray-500 leading-relaxed">YourFlix works on any modern broadband connection. Unlimited high-speed streaming for the whole family without lag or buffering.</p>
            </div>
          </div>

          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 bg-[#FFC107]/10 rounded-xl flex items-center justify-center shrink-0">
              <Radio className="w-6 h-6 text-[#FFC107]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-2">YourFlix Satellite Quality TV</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Get 200+ premium entertainment channels in lossless definition. YourFlix delivers live sports, movies, documentaries, and news.</p>
            </div>
          </div>

          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 bg-[#FFC107]/10 rounded-xl flex items-center justify-center shrink-0">
              <Smartphone className="w-6 h-6 text-[#FFC107]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-2">YourFlix Global Mobility</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Take YourFlix anywhere in the world. Watch on Android, iOS, or any modern web browser securely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SUPPORTED DEVICES ==================== */}
      <section className="py-10 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="sr-only">YourFlix Supported Devices</h2>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 text-gray-400">
            <FaAndroid className="w-8 h-8 hover:text-[#3DDC84] transition-colors" aria-label="Android" />
            <FaApple className="w-8 h-8 hover:text-black transition-colors" aria-label="Apple" />
            <FaWindows className="w-8 h-8 hover:text-[#0078D6] transition-colors" aria-label="Windows" />
            <Tv className="w-8 h-8 hover:text-black transition-colors" aria-label="Smart TV" />
            <FaLinux className="w-8 h-8 hover:text-[#FCC624] transition-colors" aria-label="Linux" />
            <FaChrome className="w-8 h-8 hover:text-[#4285F4] transition-colors" aria-label="Chrome" />
            <FaAmazon className="w-8 h-8 hover:text-[#FF9900] transition-colors" aria-label="Amazon Firestick" />
          </div>
        </div>
      </section>

      {/* ==================== VOD SLIDER ==================== */}
      <section className="pt-10 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FFC107 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-6 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
            <div>
              <h4 className="text-[#FFC107] text-sm font-bold uppercase tracking-wider mb-2">Video On Demand</h4>
              <h2 className="text-3xl md:text-4xl font-black text-white">Latest Blockbusters & 4K Series on YourFlix</h2>
            </div>
            <Link href="/pricing" className="inline-flex items-center gap-2 text-[#FFC107] font-bold hover:text-white transition-colors">
              Explore YourFlix Library <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex overflow-hidden pb-8">
            <div className="flex gap-5 w-max animate-slide hover:[animation-play-state:paused]">
              {[
                'movie-01.jpg',
                'movie-02.jpg',
                'movie-03.jpg',
                'movie-04.jpg',
                'movie-05.jpg',
                'movie-06.jpg',
                'movie-07.jpg',
                'movie-08.jpg',
                'movie-09.jpg',
                'movie-10.jpg',
                'movie-11.jpg',
                '1RaSkWakWBxxYOWRrqmwo2my5zg.webp',
                '1XS1oqL89opfnbLl8WnZY1O1ujx.webp',
                'cjXLrg4R7FRPFafvuQ3SSznQOd9.webp',
                'dmo6TYuuJgaYinXBPjrgG9mB5od.webp',
                'kf5Hz70tjNAHg4swGDzOr9BfoZ1.webp',
                'kidkbZRBGbseIrX7pODRSKi9ipl.webp',
                'ldyfo0BKmx5rWtUJKCvwaNS4cJT.webp',
                'nrM2xFUkJEmZzd5d7kohT2G0C.webp',
                'oANi0veE92nuijjZQgPZ88FSxqQ.webp',
                'og6S0aTZU6YUJAbqxekKjCa3kY1E.webp',
              ].map((filename, index) => (
                <div key={index} className="w-[180px] md:w-[220px] aspect-[2/3] relative rounded-xl overflow-hidden group bg-gray-800 shrink-0 border border-white/10 shadow-xl cursor-pointer">
                  <Image
                    src={`/img/movies/${filename}`}
                    alt={`YourFlix VOD library - trending movie ${index + 1} available in 4K`}
                    fill
                    className="object-cover group-hover:scale-150 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-[#FFC107] text-black rounded-full p-4 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" aria-label="Watch on YourFlix">
                      <Play className="w-6 h-6 ml-0.5 fill-current" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ==================== LOGO SLIDER ==================== */}
      <section className="py-8 bg-black overflow-hidden whitespace-nowrap border-y border-white/5">
        <h2 className="sr-only">YourFlix includes content from top providers</h2>
        <div className="flex animate-slide-reverse w-max">
          {[1, 2, 3].map((group) => (
            <div key={group} className="flex items-center gap-12 px-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                <div key={num} className="relative w-20 h-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src={`/img/partners/${num}.png`}
                    alt={`YourFlix partner ${num}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      {/* ==================== FEATURES GRID ==================== */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-black">YourFlix <span className="text-[#FFC107]">Features</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#FFC107]/10 rounded-2xl flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-[#FFC107]" />
              </div>
              <h4 className="text-black font-bold">YourFlix Ultra-speed Connection</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#FFC107]/10 rounded-2xl flex items-center justify-center mb-4">
                <Tv className="w-8 h-8 text-[#FFC107]" />
              </div>
              <h4 className="text-black font-bold">YourFlix 250+ World Channels</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#FFC107]/10 rounded-2xl flex items-center justify-center mb-4">
                <Settings2 className="w-8 h-8 text-[#FFC107]" />
              </div>
              <h4 className="text-black font-bold">Free YourFlix Installation</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#FFC107]/10 rounded-2xl flex items-center justify-center mb-4">
                <MonitorPlay className="w-8 h-8 text-[#FFC107]" />
              </div>
              <h4 className="text-black font-bold">YourFlix 4K and 8K Quality</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#FFC107]/10 rounded-2xl flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-[#FFC107]" />
              </div>
              <h4 className="text-black font-bold">Flexible YourFlix Tariff Plans</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#FFC107]/10 rounded-2xl flex items-center justify-center mb-4">
                <HeadphonesIcon className="w-8 h-8 text-[#FFC107]" />
              </div>
              <h4 className="text-black font-bold">YourFlix Fast Support 24/7</h4>
            </div>
          </div>
        </div>
      </section>


      {/* ==================== PRICING SECTION ==================== */}
      <section className="py-24 bg-black text-center">
        <div className="container mx-auto px-6">
          <h4 className="text-[#FFC107] text-sm font-bold uppercase tracking-wider mb-2">Our Plans</h4>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">YourFlix Subscription Plans</h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-16">
            Select the best YourFlix plan for you and choose the number of devices you need to stream on simultaneously.
          </p>

          <div className="flex flex-col items-center justify-center mb-12 relative z-50">
            <div className="bg-white/10 p-1.5 rounded-xl inline-flex text-sm font-bold shadow-2xl border border-white/20">
              <button type="button" onClick={() => setGlobalDeviceCount(1)} className={`cursor-pointer px-6 py-3 rounded-lg transition-all select-none flex items-center gap-2 ${globalDeviceCount === 1 ? 'bg-[#FFC107] text-black shadow-md scale-105' : 'text-neutral-400 hover:text-white hover:bg-white/5'}`}>
                1 Device
              </button>
              <button type="button" onClick={() => setGlobalDeviceCount(2)} className={`cursor-pointer px-6 py-3 rounded-lg transition-all select-none flex items-center gap-2 ${globalDeviceCount === 2 ? 'bg-[#FFC107] text-black shadow-md scale-105' : 'text-neutral-400 hover:text-white hover:bg-white/5'}`}>
                2 Devices
              </button>
              <button type="button" onClick={() => setGlobalDeviceCount(3)} className={`cursor-pointer px-6 py-3 rounded-lg transition-all select-none flex items-center gap-2 ${globalDeviceCount === 3 ? 'bg-[#FFC107] text-black shadow-md scale-105' : 'text-neutral-400 hover:text-white hover:bg-white/5'}`}>
                3 Devices
              </button>
            </div>
            <p className="text-[#FFC107] text-xs font-bold uppercase tracking-wider mt-6 bg-[#FFC107]/10 px-4 py-2 rounded-full border border-[#FFC107]/20">Currently Selected YourFlix Plan: {globalDeviceCount} Device{globalDeviceCount > 1 ? 's' : ''}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 3 Months Plan */}
            <a
              href={`https://wa.me/447549589503?text=I%20want%20the%203%20Months%20YourFlix%20Plan%20for%20${globalDeviceCount}%20Device(s)%20paying%20%E2%82%AC${pricing[3][globalDeviceCount as 1 | 2 | 3]}`}
              target="_blank"
              rel="noreferrer"
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl overflow-hidden flex flex-col pt-8 relative border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                <h5 className="text-[#FFC107] text-xs font-bold uppercase tracking-wider mb-2 flex flex-wrap items-center justify-center gap-2">
                  <span>YourFlix IPTV Access</span>
                  <span className="flex items-center gap-1.5 opacity-60"><FaAndroid /><FaApple /><Tv /></span>
                </h5>
                <h3 className="text-2xl font-black mb-4 text-black leading-none">3 Month</h3>
                <div className="flex justify-center gap-1 mb-8">
                  <span className="text-2xl font-bold mt-2">€</span>
                  <span className="text-8xl font-black tracking-tighter text-black">{pricing[3][globalDeviceCount as 1 | 2 | 3]}</span>
                </div>
                <div className="h-px w-full bg-gray-100 mb-8" />
                <div className="flex-grow px-6 text-left text-sm text-gray-600 space-y-3 mb-8">
                  {[
                    '20,000+ YourFlix Premium Channels',
                    '60,000+ YourFlix 4K/8K Movies & Series',
                    'All Global Sports Packages on YourFlix',
                    'Free Updates & YourFlix EPG Guide',
                    'YourFlix Premium Anti-Freeze v4.0',
                    '7-Day Catch-up on YourFlix',
                    'Instant YourFlix Activation 24/7',
                    'YourFlix on All Devices Support'
                  ].map((feature, i) => (
                    <p key={i} className="flex items-center gap-3 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#FFC107] shrink-0" />
                      {feature}
                    </p>
                  ))}
                </div>
                <div className="mt-auto border-t border-gray-100 p-5 bg-gray-50">
                  <div className="w-full flex items-center justify-center gap-2 bg-[#FFC107] text-black font-bold text-sm py-3 rounded-lg group-hover:bg-[#E5AD06] transition-all uppercase tracking-wider">
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    Get YourFlix Now
                  </div>
                </div>
              </div>
            </a>

            {/* 6 Months Plan (Most Popular) */}
            <a
              href={`https://wa.me/447549589503?text=I%20want%20the%206%20Months%20YourFlix%20Plan%20for%20${globalDeviceCount}%20Device(s)%20paying%20%E2%82%AC${pricing[6][globalDeviceCount as 1 | 2 | 3]}`}
              target="_blank"
              rel="noreferrer"
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl overflow-hidden flex flex-col pt-8 relative border-2 border-[#FFC107] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 h-full">
                <div className="absolute top-0 right-0 bg-[#FFC107] text-black text-[10px] uppercase font-bold px-4 py-1 rounded-bl-lg tracking-widest shadow-lg z-20">Most Popular</div>
                <h5 className="text-[#FFC107] text-xs font-bold uppercase tracking-wider mb-2 flex flex-wrap items-center justify-center gap-2">
                  <span>YourFlix IPTV Access</span>
                  <span className="flex items-center gap-1.5 opacity-60"><FaAndroid /><FaApple /><Tv /></span>
                </h5>
                <h3 className="text-2xl font-black mb-4 text-black leading-none">6 Month</h3>
                <div className="flex justify-center gap-1 mb-8">
                  <span className="text-2xl font-bold mt-2">€</span>
                  <span className="text-8xl font-black tracking-tighter text-black">{pricing[6][globalDeviceCount as 1 | 2 | 3]}</span>
                </div>
                <div className="h-px w-full bg-gray-100 mb-8" />
                <div className="flex-grow px-6 text-left text-sm text-gray-600 space-y-3 mb-8">
                  {[
                    '20,000+ YourFlix Premium Channels',
                    '60,000+ YourFlix 4K/8K Movies & Series',
                    'All Global Sports Packages on YourFlix',
                    'Free Updates & YourFlix EPG Guide',
                    'YourFlix Premium Anti-Freeze v4.0',
                    '7-Day Catch-up on YourFlix',
                    'Instant YourFlix Activation 24/7',
                    'YourFlix on All Devices Support'
                  ].map((feature, i) => (
                    <p key={i} className="flex items-center gap-3 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#FFC107] shrink-0" />
                      {feature}
                    </p>
                  ))}
                </div>
                <div className="mt-auto border-t border-gray-100 p-5 bg-gray-50">
                  <div className="w-full flex items-center justify-center gap-2 bg-[#FFC107] text-black font-bold text-sm py-3 rounded-lg group-hover:bg-[#E5AD06] transition-all uppercase tracking-wider">
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    Get YourFlix Now
                  </div>
                </div>
              </div>
            </a>

            {/* 12 Months Plan (Best Value) */}
            <a
              href={`https://wa.me/447549589503?text=I%20want%20the%2012%20Months%20YourFlix%20Plan%20for%20${globalDeviceCount}%20Device(s)%20paying%20%E2%82%AC${pricing[12][globalDeviceCount as 1 | 2 | 3]}`}
              target="_blank"
              rel="noreferrer"
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl overflow-hidden flex flex-col pt-8 relative border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                <div className="absolute top-0 right-0 bg-black text-white text-[10px] uppercase font-bold px-4 py-1 rounded-bl-lg tracking-widest shadow-lg z-20">Best Value</div>
                <h5 className="text-[#FFC107] text-xs font-bold uppercase tracking-wider mb-2 flex flex-wrap items-center justify-center gap-2">
                  <span>YourFlix IPTV Access</span>
                  <span className="flex items-center gap-1.5 opacity-60"><FaAndroid /><FaApple /><Tv /></span>
                </h5>
                <h3 className="text-2xl font-black mb-4 text-black leading-none">12 Month</h3>
                <div className="flex justify-center gap-1 mb-8">
                  <span className="text-2xl font-bold mt-2">€</span>
                  <span className="text-8xl font-black tracking-tighter text-black">{pricing[12][globalDeviceCount as 1 | 2 | 3]}</span>
                </div>
                <div className="h-px w-full bg-gray-100 mb-8" />
                <div className="flex-grow px-6 text-left text-sm text-gray-600 space-y-3 mb-8">
                  {[
                    '20,000+ YourFlix Premium Channels',
                    '60,000+ YourFlix 4K/8K Movies & Series',
                    'All Global Sports Packages on YourFlix',
                    'Free Updates & YourFlix EPG Guide',
                    'YourFlix Premium Anti-Freeze v4.0',
                    '7-Day Catch-up on YourFlix',
                    'Instant YourFlix Activation 24/7',
                    'YourFlix on All Devices Support'
                  ].map((feature, i) => (
                    <p key={i} className="flex items-center gap-3 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#FFC107] shrink-0" />
                      {feature}
                    </p>
                  ))}
                </div>
                <div className="mt-auto border-t border-gray-100 p-5 bg-gray-50">
                  <div className="w-full flex items-center justify-center gap-2 bg-[#FFC107] text-black font-bold text-sm py-3 rounded-lg group-hover:bg-[#E5AD06] transition-all uppercase tracking-wider">
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    Get YourFlix Now
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>


      {/* ==================== LIVE SPORTS SECTION ==================== */}
      {/* Image on RIGHT, Text on LEFT */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text - Left Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight leading-tight mb-6">
                <span className="text-[#FFC107]">Live Sports</span> and Premium 4K Channels on YourFlix
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Watch every Premier League match, UFC fight, NBA game, NFL Sunday, MLB, NHL, Formula 1, MotoGP,
                tennis Grand Slams, golf majors, boxing title fights, and international sports events including
                Champions League, Europa League, World Cup qualifiers, and Copa America — all in crystal-clear 4K
                with zero delay. <strong className="text-black">YourFlix</strong> delivers sports without buffering,
                so you never miss a goal, knockout, or photo finish. Whether you're a football fanatic, basketball
                enthusiast, or MMA lover, YourFlix brings every stadium directly to your screen with Anti-Freeze
                v4.0 technology ensuring smooth playback even during peak hours.
              </p>

              <div className="flex gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-black text-[#FFC107] mb-1">
                    4K <span className="text-black text-sm font-bold">Ultra HD Quality on YourFlix</span>
                  </h4>
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#FFC107] mb-1">
                    200+ <span className="text-black text-sm font-bold">YourFlix Online Channels</span>
                  </h4>
                </div>
              </div>

              <Link href="/pricing" className="inline-block bg-black text-white px-8 py-3.5 rounded-lg text-sm font-bold hover:bg-[#FFC107] hover:text-black transition-colors shadow-lg">
                Get YourFlix Sports
              </Link>
            </div>

            {/* Image - Right Side */}
            <div className="relative h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/img/image_1.webp"
                alt="YourFlix IPTV - Friends watching live sports in 4K on Firestick"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ==================== STATS SECTION ==================== */}
      <section className="py-16 bg-[#FFC107] text-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">
                <AnimatedCounter end={20000} suffix="+" />
              </h3>
              <p className="font-bold uppercase tracking-wider text-sm opacity-80">YourFlix Live Channels</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">
                <AnimatedCounter end={60000} suffix="+" />
              </h3>
              <p className="font-bold uppercase tracking-wider text-sm opacity-80">YourFlix Movies & VODs</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">
                <AnimatedCounter end={99} suffix=".9%" />
              </h3>
              <p className="font-bold uppercase tracking-wider text-sm opacity-80">YourFlix Server Uptime</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">
                <AnimatedCounter end={100} suffix="%" />
              </h3>
              <p className="font-bold uppercase tracking-wider text-sm opacity-80">YourFlix Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== ABOUT YOURFLIX SECTION ==================== */}
      {/* Image on LEFT, Text on RIGHT (Reflexed) */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFC107]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFC107]/5 rounded-full blur-[120px] -ml-64 -mb-64" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            {/* Image - Left Side */}
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image src="/img/image_2.jpg" alt="YourFlix UI on multiple devices" width={800} height={600} className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 md:right-10 bg-[#FFC107] p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4 border border-white/20">
                <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-black font-black text-2xl leading-none">99.9%</p>
                  <p className="text-black/70 text-[10px] font-bold uppercase tracking-widest mt-1">Uptime Guaranteed</p>
                </div>
              </div>
            </div>

            {/* Text - Right Side */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-[#FFC107]" />
                <span className="text-[#FFC107] text-sm font-black uppercase tracking-[0.2em]">The Future of TV</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
                What makes <span className="text-[#FFC107]">YourFlix</span> Different?
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                YourFlix isn&apos;t just another IPTV provider. We own and operate our own global server infrastructure, cutting out the middlemen to deliver a lag-free, high-definition experience that resellers simply can&apos;t match.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/pricing" className="bg-[#FFC107] text-black px-8 py-4 rounded-xl font-bold hover:bg-white transition-all flex items-center gap-2 group">
                  Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/setup" className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                  Setup Guide
                </Link>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <MonitorPlay className="w-7 h-7 text-[#FFC107]" />, title: "20k+ Channels", desc: "Live local and international news, sports, and entertainment." },
              { icon: <Zap className="w-7 h-7 text-[#FFC107]" />, title: "Anti-Freeze 4.0", desc: "Proprietary buffering prevention technology developed in-house." },
              { icon: <ShieldCheck className="w-7 h-7 text-[#FFC107]" />, title: "Secure Stream", desc: "End-to-end encryption to protect your privacy and data." },
              { icon: <Smartphone className="w-7 h-7 text-[#FFC107]" />, title: "Any Device", desc: "Optimized for iOS, Android, Firestick, and Smart TVs." },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFC107]/50 transition-all group">
                <div className="mb-4 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h4 className="text-[#FFC107] text-sm font-bold uppercase tracking-wider mb-2">Testimonials</h4>
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-6">YourFlix Customer Reviews</h2>
            <p className="text-gray-500 text-lg">Don&apos;t just take our word for it. Join thousands of happy YourFlix streamers globally.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Michael R.", role: "Verified YourFlix Buyer", text: "Best IPTV service I've ever used. YourFlix 4K streams for Premier League are incredible. Zero buffering during peak weekend times.", image: "https://picsum.photos/seed/user1/100/100" },
              { name: "Sarah L.", role: "Verified YourFlix Buyer", text: "YourFlix customer service is top notch. Got me set up on my Firestick in less than 5 minutes via WhatsApp. Very impressive.", image: "https://picsum.photos/seed/user2/100/100" },
              { name: "David K.", role: "Verified YourFlix Buyer", text: "I've tried 5 different providers this year and YourFlix is the only one that didn't freeze during the UFC pay-per-view.", image: "https://picsum.photos/seed/user3/100/100" },
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm relative pt-10 mt-6">
                <div className="absolute -top-6 left-6">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover shadow-lg border-2 border-white"
                  />
                </div>
                <div className="flex text-[#FFC107] mb-3">
                  {[1, 2, 3, 4, 5].map(star => <Heart key={star} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 font-medium italic">&quot;{t.text}&quot;</p>
                <div>
                  <h4 className="text-black font-black">{t.name}</h4>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h4 className="text-[#FFC107] text-sm font-bold uppercase tracking-wider mb-2">Have Questions?</h4>
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-6">YourFlix IPTV Questions & Support</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What devices does YourFlix support?",
                a: "YourFlix supports almost all devices including Smart TVs (Samsung, LG), Amazon Firestick, Android TV boxes, MAG boxes, Apple TV, iOS, Android smartphones, and web browsers. YourFlix works on any device with an internet connection."
              },
              {
                q: "Do I need a VPN to use YourFlix?",
                a: "No VPN is strictly required for YourFlix. However, if your ISP is known for heavily throttling IPTV traffic, using a VPN can help improve your YourFlix connection stability. YourFlix Anti-Freeze v4.0 tech bypasses most throttling automatically."
              },
              {
                q: "Can I use YourFlix subscription on multiple devices?",
                a: "Yes! YourFlix standard plan allows for 1 device connection at a time. You can upgrade your YourFlix plan to 2 or 3 simultaneous connections during checkout if you want to watch on multiple TVs at the exact same time."
              },
              {
                q: "How quickly do I get my YourFlix login details?",
                a: "Instantly. As soon as your YourFlix payment is confirmed, our automated system sends your YourFlix Xtream Codes API details directly to your WhatsApp and email. You can start streaming YourFlix in minutes."
              },
              {
                q: "Is YourFlix legal?",
                a: "YourFlix operates in a legal grey area as an IPTV provider. We strongly recommend using YourFlix with a VPN for privacy and checking your local laws regarding IPTV streaming."
              },
              {
                q: "How to install YourFlix on Firestick?",
                a: "Installing YourFlix on Firestick is easy. Go to Settings > My Fire TV > Developer Options > Apps from Unknown Sources > Turn On. Then download the Downloader app, enter your YourFlix portal URL, and install. Our YourFlix support team can help via WhatsApp."
              }
            ].map((faq, i) => (
              <div key={i} className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-[#FFC107] shadow-md' : 'border-gray-200'}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-5 font-bold text-black flex justify-between items-center bg-white"
                >
                  {faq.q}
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-[#FFC107]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                <div className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-[500px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INFRASTRUCTURE SECTION ==================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-[#FFC107] rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white">
                <Image
                  src="/img/image_3.png"
                  alt="YourFlix advanced streaming server infrastructure - global CDN network"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-black text-white p-6 rounded-xl shadow-2xl border-l-4 border-[#FFC107] max-w-xs hidden md:block z-20">
                <h4 className="font-black text-3xl mb-1 text-[#FFC107]">99.9%</h4>
                <p className="text-sm font-bold uppercase tracking-wider text-neutral-300">YourFlix Server Uptime Guaranteed</p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h4 className="text-[#FFC107] text-sm font-bold uppercase tracking-wider mb-2">About YourFlix</h4>
              <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-8">
                The Top-Rated YourFlix IPTV Infrastructure
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Unlike resellers using overloaded shared servers, <strong className="text-black">YourFlix</strong> operates its own massive datacenter network.
                This means zero bottlenecking during peak traffic events like PPV finals, and instant 4K channel delivery worldwide for YourFlix subscribers.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                    <Settings2 className="w-6 h-6 text-[#FFC107]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-2">YourFlix Anti-Freeze v4.0 Tech</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">YourFlix proprietary routing algorithm automatically switches you to the fastest server node if your ISP tries to throttle your connection.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-[#FFC107]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-2">YourFlix Automatic EPG Updates</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">YourFlix Electronic Program Guide (EPG) updates every 12 hours silently in the background so you always know what is airing on YourFlix.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                    <HeadphonesIcon className="w-6 h-6 text-[#FFC107]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-2">YourFlix Direct WhatsApp Support</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">No confusing support ticket systems. YourFlix gives you direct access to our tech team via WhatsApp for instant setup help or questions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== LATEST ARTICLES SECTION ==================== */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <h4 className="text-[#FFC107] text-sm font-bold uppercase tracking-wider mb-2">YourFlix Blog</h4>
              <h2 className="text-3xl md:text-4xl font-black text-black">Latest YourFlix IPTV News & Guides</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 font-bold text-black hover:text-[#FFC107] transition-colors">
              View All YourFlix Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article, i) => (
              <article key={i} className="bg-white border border-gray-200 shadow-md rounded-xl flex flex-col group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={`YourFlix blog: ${article.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#FFC107] text-black px-3 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-md">
                    {article.category}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">
                    <Calendar className="w-3 h-3 text-[#FFC107]" />
                    {article.date}
                  </div>

                  <h3 className="text-base font-black text-black mb-3 leading-tight group-hover:text-[#FFC107] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <Link href={`/blog/${article.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#FFC107] transition-colors mt-auto">
                    Read YourFlix Article <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}