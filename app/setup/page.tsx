'use client';

import { Tv, Smartphone, Globe, CheckCircle2, ChevronRight } from 'lucide-react';
import { FaAmazon, FaApple, FaWindows, FaAndroid } from 'react-icons/fa';

// JSON-LD Schema for Setup Page
const SchemaMarkup = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Setup IPTV on Any Device",
        "description": "Complete step-by-step guide to install and configure IPTV on Firestick, Android, iOS, Smart TV, and PC.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Choose Your Device",
            "text": "Select your device from the list below and follow the specific instructions."
          },
          {
            "@type": "HowToStep",
            "name": "Install the IPTV App",
            "text": "Download and install the recommended IPTV app for your device."
          },
          {
            "@type": "HowToStep",
            "name": "Enter Your Login Details",
            "text": "Use the Xtream Codes API credentials sent to your WhatsApp."
          },
          {
            "@type": "HowToStep",
            "name": "Start Watching",
            "text": "Your IPTV is now ready. Browse channels and enjoy streaming."
          }
        ]
      })
    }}
  />
);

export default function SetupPage() {
  return (
    <>
      <SchemaMarkup />

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FFC107 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto relative z-10 max-w-4xl">
          <h4 className="text-[#FFC107] text-sm font-bold uppercase tracking-wider mb-2">Tutorials</h4>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">IPTV Device Setup Guide</h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Our service works on practically any device. Select your platform below to see the 3-minute setup instructions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24 px-6 min-h-screen bg-gray-50">
        <div className="container mx-auto max-w-4xl">

          {/* Prerequisites Box */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FFC107]"></div>
            <h2 className="text-2xl font-black text-black mb-4">What you need before you start:</h2>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFC107] shrink-0 mt-0.5" />
                <span>An active internet connection with at least <strong className="text-black">15 Mbps</strong> download speed (50+ Mbps recommended for 4K streaming).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFC107] shrink-0 mt-0.5" />
                <span>Your <strong className="text-black">Xtream Codes API details</strong> (Username, Password, and Server URL). You will receive this immediately via WhatsApp after subscribing on the pricing page.</span>
              </li>
            </ul>
          </div>

          {/* Device Setup Cards */}
          <div className="grid gap-10">
            <DeviceSetupCard
              icon={<FaAmazon className="w-10 h-10 text-[#FFC107]" />}
              title="Amazon Firestick / Fire TV"
              description="The most popular and recommended device for IPTV. Setup via Downloader app."
              steps={[
                "Go to Find > Search on your Firestick home screen and search for 'Downloader'.",
                "Install the Downloader app and click Open.",
                "Go back to Home > Settings > My Fire TV > Developer Options and turn ON 'Apps from Unknown Sources'.",
                "Open Downloader, type 'iptvsmarters.com/smarters.apk' and click Go.",
                "Install the application, open it, and Login with Xtream Codes API."
              ]}
            />

            <DeviceSetupCard
              icon={<Tv className="w-10 h-10 text-[#FFC107]" />}
              title="Smart TVs (Samsung / LG / Android TV)"
              description="Use apps like IBO Player, TiviMate, or Smarters Pro."
              steps={[
                "Go to your TV's App Store and search for 'IPTV Smarters Pro' or 'TiviMate'.",
                "Install and open the application.",
                "Select 'Login with Xtream Codes API'.",
                "Enter the Username, Password, and Server URL we provided via WhatsApp."
              ]}
            />

            <DeviceSetupCard
              icon={<FaApple className="w-10 h-10 text-[#FFC107]" />}
              title="iOS & Apple TV"
              description="Setup using the official Smarters Player Lite or GSE Smart IPTV."
              steps={[
                "Open the Apple App Store.",
                "Search for and install 'Smarters Player Lite'.",
                "Open the app and input any name for the playlist.",
                "Enter the Xtream API details provided to you upon subscription."
              ]}
            />

            <DeviceSetupCard
              icon={<FaWindows className="w-10 h-10 text-[#FFC107]" />}
              title="Windows & Mac OS"
              description="Watch directly in your browser or use a desktop client."
              steps={[
                "We recommend downloading VLC Player or using IPTV Smarters Desktop.",
                "If using VLC: Open VLC, go to 'Media' > 'Open Network Stream'.",
                "Paste the M3U link we provided to you.",
                "Click 'Play' and wait a few moments for the channel list to load."
              ]}
            />
          </div>

          {/* Support Section */}
          <div className="mt-24 flex flex-col pt-12 md:pt-16 border-t border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4 text-center">
                Need Help? <span className="text-[#FFC107]">We've Got You Covered</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Our support infrastructure is built for speed. Browse our most common solutions or reach out to our dedicated 24/7 technical team.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1: Network Optimization */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC107]/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-[#FFC107]/20 transition-colors"></div>
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 border border-gray-100 shadow-sm">
                  <Globe className="w-7 h-7 text-[#FFC107]" />
                </div>
                <h2 className="text-xl font-bold text-black mb-3">Fix Buffering Fast</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Restart your router to clear ISP caching. If issues persist, your provider may be throttling streaming traffic—a quick VPN connection resolves this instantly.
                </p>
              </div>

              {/* Card 2: Configuration */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC107]/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-[#FFC107]/20 transition-colors"></div>
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 border border-gray-100 shadow-sm">
                  <Tv className="w-7 h-7 text-[#FFC107]" />
                </div>
                <h2 className="text-xl font-bold text-black mb-3">Audio & Codec Issues</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Experiencing no sound on VODs? Switch your media player setting from "Hardware Decoder" to "Software Decoder" (VLC/EXO) in your app settings.
                </p>
              </div>

              {/* Card 3: Activation */}
              <div className="bg-black rounded-2xl p-8 shadow-xl border border-gray-800 relative overflow-hidden group md:col-span-3 lg:col-span-1 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/10 to-transparent opacity-50"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/10">
                    <Smartphone className="w-7 h-7 text-[#FFC107]" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3">Live Engineering Support</h2>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-8 flex-grow">
                    Skip the ticket queues. Our engineers provide immediate, personalized setup assistance directly via WhatsApp. Over 99% of issues are resolved in under 5 minutes.
                  </p>
                  <a href="https://wa.me/447549589503" target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-[#FFC107] text-black px-6 py-3.5 rounded-lg text-sm font-bold hover:bg-[#E5AD06] transition-colors shadow-lg mt-auto hover:-translate-y-0.5">
                    Contact Tech Support <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Device Setup Card Component
function DeviceSetupCard({ icon, title, description, steps }: { icon: React.ReactNode; title: string; description: string; steps: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 md:p-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="lg:w-1/3">
          <div className="w-20 h-20 rounded bg-black flex items-center justify-center mb-6 shadow-md border-b-4 border-[#FFC107]">
            {icon}
          </div>
          <h2 className="text-2xl font-black mb-3 text-black leading-tight">{title}</h2>
          <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>

        <div className="lg:w-2/3 bg-gray-50 rounded-xl border border-gray-100 p-6 md:p-8">
          <ul className="space-y-6">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#FFC107] text-black text-sm font-black flex items-center justify-center shrink-0 shadow-md">
                  {i + 1}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-medium mt-1">{step}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}