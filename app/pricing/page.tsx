'use client';

import { useState } from 'react';
import { FaAndroid, FaApple, FaWindows } from 'react-icons/fa';
import {
  Tv, CheckCircle2, MessageCircle, Star,
  Shield, Zap, Headphones, CreditCard, Gem,
  Globe, Smartphone, Monitor, Wifi, Settings2,
  HeartHandshake, Clock, ArrowRight, ChevronDown, ChevronUp
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Unique prices for each plan and device combination
const pricing = {
  3: { 1: 30, 2: 40, 3: 55 },
  6: { 1: 50, 2: 70, 3: 99 },
  12: { 1: 72, 2: 99, 3: 139 },
};
const PricingSchemaMarkup = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "name": "YourFlix IPTV Pricing Plans",
            "description": "Premium YourFlix IPTV subscription plans with 3, 6, and 12 month options. 20,000+ channels, 60,000+ VODs, anti-freeze technology.",
            "url": "https://yourflix.vip/pricing",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "YourFlix 3 Months Plan", "url": "https://yourflix.vip/pricing#3-months" },
                { "@type": "ListItem", "position": 2, "name": "YourFlix 6 Months Plan", "url": "https://yourflix.vip/pricing#6-months" },
                { "@type": "ListItem", "position": 3, "name": "YourFlix 12 Months Plan", "url": "https://yourflix.vip/pricing#12-months" }
              ]
            }
          },
          {
            "@type": "Product",
            "name": "YourFlix IPTV Subscription",
            "description": "Premium IPTV service with 20,000+ live channels, 60,000+ VODs in 4K/8K quality. Anti-freeze v4.0 technology.",
            "brand": { "@type": "Brand", "name": "YourFlix" },
            "url": "https://yourflix.vip/pricing",
            "offers": [
              { "@type": "Offer", "name": "YourFlix 3 Months Plan", "priceCurrency": "EUR", "price": "30.00", "availability": "https://schema.org/InStock" },
              { "@type": "Offer", "name": "YourFlix 6 Months Plan", "priceCurrency": "EUR", "price": "50.00", "availability": "https://schema.org/InStock" },
              { "@type": "Offer", "name": "YourFlix 12 Months Plan", "priceCurrency": "EUR", "price": "72.00", "availability": "https://schema.org/InStock" }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "1250",
              "bestRating": "5",
              "worstRating": "1"
            }
          }
        ]
      })
    }}
  />
);
export default function PricingPage() {
  const [globalDeviceCount, setGlobalDeviceCount] = useState<1 | 2 | 3>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <PricingSchemaMarkup />
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FFC107 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[#FFC107]/10 px-4 py-2 rounded-full border border-[#FFC107]/20 mb-6">
            <Gem className="w-4 h-4 text-[#FFC107]" />
            <span className="text-[#FFC107] text-xs font-bold uppercase tracking-wider">YourFlix — Save up to 74%</span>
          </div>
          <h4 className="text-[#FFC107] text-sm font-bold uppercase tracking-wider mb-2">YourFlix Plans</h4>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">YourFlix IPTV <span className="text-[#FFC107]">Subscription Plans</span></h1>
          <p className="text-neutral-400 text-lg mb-12">Select the best YourFlix plan for you and choose the number of devices you need to stream on simultaneously.</p>

          {/* Device Selector */}
          <div className="flex flex-col items-center justify-center relative z-50">
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
            <p className="text-[#FFC107] text-xs font-bold uppercase tracking-wider mt-6 bg-[#FFC107]/10 px-4 py-2 rounded-full border border-[#FFC107]/20">
              YourFlix Selected: {globalDeviceCount} Device{globalDeviceCount > 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-24 px-6 min-h-[50vh] bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center mb-24">
            <PricingCard months={3} deviceCount={globalDeviceCount} popular={false} bestValue={false} />
            <PricingCard months={6} deviceCount={globalDeviceCount} popular={true} bestValue={false} />
            <PricingCard months={12} deviceCount={globalDeviceCount} popular={false} bestValue={true} />
          </div>

          {/* Trust Badges */}
          <div className="max-w-3xl mx-auto text-center mb-24">
            <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-[#FFC107]" /> YourFlix 7-Day Money Back</div>
              <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#FFC107]" /> YourFlix Instant Activation</div>
              <div className="flex items-center gap-2"><Headphones className="w-4 h-4 text-[#FFC107]" /> YourFlix 24/7 Support</div>
              <div className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-[#FFC107]" /> Secure YourFlix Payment</div>
            </div>
          </div>

          {/* Why Choose YourFlix Section */}
          <div className="max-w-5xl mx-auto text-center mb-24">
            <h4 className="text-[#FFC107] text-sm font-bold uppercase tracking-wider mb-2">Why YourFlix</h4>
            <h2 className="text-3xl font-black text-black mb-12">Why Choose <span className="text-[#FFC107]">YourFlix IPTV</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#FFC107]/10 rounded-xl flex items-center justify-center mx-auto mb-4"><Globe className="w-6 h-6 text-[#FFC107]" /></div>
                <h3 className="text-lg font-bold text-black mb-2">YourFlix Global Content</h3>
                <p className="text-gray-500 text-sm">Access channels from 50+ countries with YourFlix premium IPTV service.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#FFC107]/10 rounded-xl flex items-center justify-center mx-auto mb-4"><Wifi className="w-6 h-6 text-[#FFC107]" /></div>
                <h3 className="text-lg font-bold text-black mb-2">YourFlix Anti-Freeze v4.0</h3>
                <p className="text-gray-500 text-sm">Proprietary technology eliminates buffering on YourFlix streams.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#FFC107]/10 rounded-xl flex items-center justify-center mx-auto mb-4"><HeartHandshake className="w-6 h-6 text-[#FFC107]" /></div>
                <h3 className="text-lg font-bold text-black mb-2">YourFlix Satisfaction</h3>
                <p className="text-gray-500 text-sm">150,000+ happy customers trust YourFlix for their entertainment.</p>
              </div>
            </div>
          </div>

          {/* Supported Devices Section */}
          <div className="max-w-5xl mx-auto text-center mb-24">
            <h4 className="text-[#FFC107] text-sm font-bold uppercase tracking-wider mb-2">YourFlix Compatibility</h4>
            <h2 className="text-3xl font-black text-black mb-12">YourFlix Works on <span className="text-[#FFC107]">All Devices</span></h2>
            <div className="flex flex-wrap justify-center gap-8 text-gray-500">
              <div className="flex flex-col items-center gap-2"><FaAndroid className="w-8 h-8" /><span className="text-xs">Android</span></div>
              <div className="flex flex-col items-center gap-2"><FaApple className="w-8 h-8" /><span className="text-xs">iOS</span></div>
              <div className="flex flex-col items-center gap-2"><Tv className="w-8 h-8" /><span className="text-xs">Smart TV</span></div>
              <div className="flex flex-col items-center gap-2"><Monitor className="w-8 h-8" /><span className="text-xs">Firestick</span></div>
              <div className="flex flex-col items-center gap-2"><Smartphone className="w-8 h-8" /><span className="text-xs">Windows/Mac</span></div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-24">
            <div className="p-8 md:p-12 text-center border-b border-gray-100">
              <h4 className="text-[#FFC107] text-sm font-bold uppercase tracking-wider mb-2">YourFlix Value</h4>
              <h2 className="text-3xl font-black text-black mb-4">YourFlix vs Traditional Cable</h2>
              <p className="text-gray-500">See why thousands are cutting the cord for YourFlix every day</p>
            </div>

            <div className="grid grid-cols-3 bg-gray-50 text-sm font-bold uppercase tracking-wider text-gray-400 p-6 border-b border-gray-100">
              <div className="col-span-1">Feature</div>
              <div className="text-center text-black">Traditional Cable</div>
              <div className="text-center text-[#FFC107]">YourFlix IPTV</div>
            </div>

            <div className="divide-y divide-gray-100">
              {[
                { feature: "Average Monthly Cost", cable: "€80 - €120", iptv: "€4 - €8" },
                { feature: "Live Channels", cable: "150 - 300", iptv: "20,000+" },
                { feature: "Premium Sports (PPV)", cable: "Extra €30-€60/event", iptv: "Included Free" },
                { feature: "VOD / Movie Library", cable: "Limited / Paid Rentals", iptv: "60,000+ Included" },
                { feature: "Installation", cable: "Technician required", iptv: "Instant via app" },
                { feature: "Contracts", cable: "12-24 Months locked", iptv: "None. Cancel anytime." }
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-3 p-6 items-center text-sm">
                  <div className="col-span-1 font-bold text-gray-700">{item.feature}</div>
                  <div className="text-center text-gray-500 font-medium">{item.cable}</div>
                  <div className="text-center text-black font-black flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFC107]" /> {item.iptv}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* YourFlix Features Grid */}
          <div className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <h4 className="text-[#FFC107] text-sm font-bold uppercase tracking-wider mb-2">YourFlix Premium Features</h4>
              <h2 className="text-3xl font-black text-black">Everything Included in <span className="text-[#FFC107]">YourFlix</span></h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Settings2 className="w-5 h-5" />, title: "YourFlix Anti-Freeze Technology", desc: "Proprietary routing algorithm eliminates buffering" },
                { icon: <Globe className="w-5 h-5" />, title: "YourFlix Global Channels", desc: "25,000+ channels from USA, UK, Canada, Germany, France, Italy, Spain, Arabic countries, and more" },
                { icon: <Tv className="w-5 h-5" />, title: "YourFlix Premium Sports", desc: "All PPV events included: UFC, Boxing, WWE, NFL, NBA, NHL, MLB, Soccer leagues" },
                { icon: <Smartphone className="w-5 h-5" />, title: "YourFlix Multi-Device", desc: "Watch on Firestick, Android TV, Smart TV, iOS, Android, Windows, Mac" },
                { icon: <Clock className="w-5 h-5" />, title: "YourFlix 7-Day Catch-Up", desc: "Never miss your favorite shows with YourFlix replay feature" },
                { icon: <Headphones className="w-5 h-5" />, title: "YourFlix 24/7 Support", desc: "Instant WhatsApp support for all YourFlix customers" },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-[#FFC107]/10 rounded-lg flex items-center justify-center shrink-0 text-[#FFC107]">{feature.icon}</div>
                  <div><h3 className="font-bold text-black mb-1">{feature.title}</h3><p className="text-gray-500 text-sm">{feature.desc}</p></div>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee Block */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-black to-gray-900 rounded-xl shadow-2xl p-8 mb-24 flex flex-col md:flex-row items-center gap-8 border-l-4 border-[#FFC107]">
            <div className="w-16 h-16 shrink-0 bg-[#FFC107] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,193,7,0.4)]">
              <Star className="w-8 h-8 text-black" fill="currentColor" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white mb-2">YourFlix 100% Satisfaction Guarantee</h3>
              <p className="text-neutral-300">We stand behind YourFlix service. If you experience persistent technical difficulties that our support team cannot resolve, we will provide a full refund within the first 7 days of your YourFlix subscription.</p>
            </div>
          </div>

          {/* Customer Testimonials */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="text-center mb-12">
              <h4 className="text-[#FFC107] text-sm font-bold uppercase tracking-wider mb-2">YourFlix Trusted Worldwide</h4>
              <h2 className="text-3xl lg:text-4xl font-black text-black">What Our YourFlix Premium Subscribers Say</h2>
              <p className="text-gray-500 mt-4">Join 150,000+ happy customers streaming with YourFlix</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Michael T.', location: 'London, UK', quote: 'I cancelled my £80/mo Sky subscription. YourFlix gives me literally every Premier League game in 4K without a single drop. Incredible value.', rating: 5 },
                { name: 'Sarah J.', location: 'Toronto, CA', quote: 'Setup took 2 minutes on my Firestick. The YourFlix VOD library is insane—it has movies that are still in theaters. Best IPTV I have ever used.', rating: 5 },
                { name: 'David L.', location: 'Sydney, AU', quote: 'The YourFlix Anti-Freeze technology is real. During the big PPV fights, when other services buffer, YourFlix stays perfectly crisp. Customer service is also 10/10.', rating: 5 }
              ].map((test, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col pt-10 relative">
                  <div className="absolute -top-6 left-8 bg-[#FFC107] w-12 h-12 rounded-full flex items-center justify-center text-black text-3xl font-serif font-black shadow-lg">"</div>
                  <div className="flex text-[#FFC107] mb-4">
                    {[...Array(test.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-gray-600 font-medium italic mb-6 leading-relaxed text-sm flex-grow">"{test.quote}"</p>
                  <div className="flex items-center gap-3 mt-auto pt-6 border-t border-gray-50">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                      <Image src={`https://picsum.photos/seed/${test.name.replace(/ /g, '')}/100/100`} fill alt={`YourFlix IPTV Reviewer: ${test.name}`} className="object-cover" />
                    </div>
                    <div>
                      <h5 className="font-bold text-black text-sm">{test.name}</h5>
                      <p className="text-xs text-gray-500">{test.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* YourFlix vs Competitors */}
          <div className="max-w-4xl mx-auto mb-24">
            <div className="text-center mb-12">
              <h4 className="text-[#FFC107] text-sm font-bold uppercase tracking-wider mb-2">YourFlix vs Others</h4>
              <h2 className="text-3xl font-black text-black">Why YourFlix is <span className="text-[#FFC107]">#1 IPTV Provider</span></h2>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="grid grid-cols-3 bg-black text-white p-4 text-sm font-bold">
                <div>Feature</div><div className="text-center">Other IPTV</div><div className="text-center text-[#FFC107]">YourFlix</div>
              </div>
              {[
                { feature: "Channel Lineup", other: "15,000+", yourflix: "25,000+" },
                { feature: "VOD Library", other: "30,000+", yourflix: "60,000+" },
                { feature: "Anti-Freeze Tech", other: "Basic", yourflix: "Premium v4.0" },
                { feature: "Support Response", other: "24-48 hours", yourflix: "< 5 minutes" },
                { feature: "Server Uptime", other: "97%", yourflix: "99.9%" },
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-3 p-4 text-sm border-b border-gray-100">
                  <div className="font-bold text-gray-700">{item.feature}</div>
                  <div className="text-center text-gray-500">{item.other}</div>
                  <div className="text-center text-black font-bold flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFC107]" /> {item.yourflix}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing FAQ */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="text-[#FFC107] text-sm font-bold uppercase tracking-wider mb-2">YourFlix FAQ</h4>
              <h2 className="text-3xl font-black text-black">YourFlix Billing & Subscription FAQ</h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "How fast is my YourFlix account activated?", a: "YourFlix activation is instant! Once you complete your purchase via WhatsApp, our team will immediately furnish your Xtream Codes API credentials." },
                { q: "What payment methods does YourFlix accept?", a: "YourFlix provides easy checkout options via PayPal, Credit/Debit Cards, Google Pay, Apple Pay via our secure WhatsApp checkout link." },
                { q: "Are there any hidden fees with YourFlix?", a: "Absolutely none. The YourFlix price you see is what you pay. We don't charge activation fees, setup fees, or cancellation fees." },
                { q: "Can I use YourFlix on multiple devices simultaneously?", a: `Yes! You can select ${globalDeviceCount} device${globalDeviceCount > 1 ? 's' : ''} YourFlix plan above. Switch between devices or upgrade anytime.` },
                { q: "Does YourFlix work with VPN?", a: "Yes! YourFlix works perfectly with major VPN providers. We recommend using a VPN for added privacy and to bypass ISP throttling." },
                { q: "What internet speed do I need for YourFlix?", a: "YourFlix requires minimum 15 Mbps for HD and 30 Mbps for 4K streaming. Most broadband connections work perfectly with YourFlix." }
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left p-6 font-black text-black flex justify-between items-center">
                    {faq.q}
                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-[#FFC107]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed text-sm pl-0">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <div className="bg-black rounded-2xl p-8 border border-[#FFC107]/20">
              <h3 className="text-2xl font-black text-white mb-4">Ready to Start YourFlix?</h3>
              <p className="text-neutral-400 mb-6">Join thousands of happy customers streaming with YourFlix today.</p>
              <a href="https://wa.me/447549589503" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#FFC107] text-black px-8 py-4 rounded-xl font-bold hover:bg-[#E5AD06] transition-all">
                <MessageCircle className="w-5 h-5" />
                Subscribe to YourFlix Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PricingCard({ months, deviceCount, popular, bestValue }: { months: number; deviceCount: 1 | 2 | 3; popular?: boolean; bestValue?: boolean }) {
  const price = pricing[months as keyof typeof pricing][deviceCount];
  const pricePerMonth = (price / months).toFixed(2);

  return (
    <div className={`relative rounded-xl flex flex-col bg-white overflow-hidden ${popular ? 'border-2 border-[#FFC107] shadow-2xl scale-100 md:scale-105 z-10' : 'border border-gray-200 shadow-lg'} pt-8`}>
      {popular && <div className="absolute top-0 right-0 bg-[#FFC107] text-black text-[10px] uppercase font-bold px-8 py-1.5 rotate-45 translate-x-[26%] translate-y-[50%] tracking-widest shadow-lg z-20">Popular</div>}
      {bestValue && <div className="absolute top-0 right-0 bg-black text-white text-[10px] uppercase font-bold px-8 py-1.5 rotate-45 translate-x-[26%] translate-y-[50%] tracking-widest shadow-lg z-20">Best Value</div>}

      <div className="mb-6 mt-4 text-center">
        <h5 className="text-[#FFC107] text-xs font-bold uppercase tracking-wider mb-2 flex flex-wrap items-center justify-center gap-2">
          <span>YourFlix IPTV Access</span>
          <span className="flex items-center gap-1.5 opacity-60"><FaAndroid /><FaApple /><Tv /></span>
        </h5>
        <h3 className="text-3xl font-black mb-4 text-black leading-none">{months} Months</h3>
        <div className="flex items-start justify-center gap-1 text-black">
          <span className="text-2xl font-bold mt-2">€</span>
          <span className="text-7xl font-black tracking-tighter text-black">{price}</span>
        </div>
        <p className="text-xs text-gray-500 mt-2">€{pricePerMonth}/month • {deviceCount} device{deviceCount > 1 ? 's' : ''}</p>
      </div>

      <div className="h-px w-full bg-gray-100 mb-8 mt-2" />

      <div className="flex-grow px-8 text-left text-sm text-gray-600 space-y-3 mb-8">
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
            <CheckCircle2 className="w-4 h-4 shrink-0 text-[#FFC107]" />
            {feature}
          </p>
        ))}
      </div>

      <div className="mt-auto p-6 bg-gray-50 border-t border-gray-100">
        <a href={`https://wa.me/447549589503?text=I%20want%20the%20YourFlix%20${months}%20Months%20Plan%20for%20${deviceCount}%20Device(s)%20paying%20%E2%82%AC${price}`} target="_blank" rel="noreferrer" className={`w-full py-4 rounded flex items-center justify-center gap-2 font-bold transition-colors text-sm uppercase tracking-wide border-b-4 active:border-b-0 active:translate-y-1 ${popular ? 'bg-[#FFC107] text-black border-[#D4A004] hover:bg-[#E5AD06]' : 'bg-black text-white border-black/20 hover:bg-[#FFC107] hover:text-black'}`}>
          <MessageCircle className="w-5 h-5 shrink-0" />
          Subscribe to YourFlix
        </a>
      </div>
    </div>
  );
}