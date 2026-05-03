import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  metadataBase: new URL('https://yourflix.vip'),
  icons: {
    icon: [
      { url: '/img/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicons/favicon-48x48.png', sizes: '48x48' },
      { url: '/img/favicons/favicon-64x64.png', sizes: '64x64' },
      { url: '/img/favicons/favicon-96x96.png', sizes: '96x96' },
      { url: '/img/favicons/favicon-128x128.png', sizes: '128x128' },
      { url: '/img/favicons/favicon-256x256.png', sizes: '256x256' },
      { url: '/img/favicons/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/img/favicons/apple-touch-icon-57x57.png', sizes: '57x57' },
      { url: '/img/favicons/apple-touch-icon-72x72.png', sizes: '72x72' },
      { url: '/img/favicons/apple-touch-icon-114x114.png', sizes: '114x114' },
      { url: '/img/favicons/apple-touch-icon-120x120.png', sizes: '120x120' },
      { url: '/img/favicons/apple-touch-icon-144x144.png', sizes: '144x144' },
      { url: '/img/favicons/apple-touch-icon-152x152.png', sizes: '152x152' },
      { url: '/img/favicons/apple-touch-icon-180x180.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'android-chrome-48x48', url: '/img/favicons/android-chrome-48x48.png' },
      { rel: 'android-chrome-72x72', url: '/img/favicons/android-chrome-72x72.png' },
      { rel: 'android-chrome-96x96', url: '/img/favicons/android-chrome-96x96.png' },
      { rel: 'android-chrome-144x144', url: '/img/favicons/android-chrome-144x144.png' },
      { rel: 'android-chrome-192x192', url: '/img/favicons/android-chrome-192x192.png' },
      { rel: 'android-chrome-256x256', url: '/img/favicons/android-chrome-256x256.png' },
      { rel: 'android-chrome-384x384', url: '/img/favicons/android-chrome-384x384.png' },
      { rel: 'android-chrome-512x512', url: '/img/favicons/android-chrome-512x512.png' },
      { rel: 'mask-icon', url: '/img/favicons/safari-pinned-tab.svg', color: '#FFC107' },
    ],
  },
  manifest: '/img/favicons/site.webmanifest',
  title: {
    default: 'YourFlix – Premium IPTV Subscription 2026 | 20K+ Channels',
    template: '%s | YourFlix IPTV'
  },
  description: 'Premium YourFlix IPTV service with 20,000+ live channels, 60,000+ VODs in 4K/8K quality. Anti-Freeze v4.0 technology. Instant WhatsApp activation. Best IPTV 2026.',
  keywords: [
    'yourflix',
    'yourflix iptv',
    'iptv subscription',
    'best iptv 2026',
    'buy iptv',
    '4k iptv',
    'live tv streaming',
    'iptv firestick',
    'premium iptv'
  ].join(', '),
  authors: [{ name: 'YourFlix' }],
  creator: 'YourFlix',
  publisher: 'YourFlix',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://yourflix.vip/',
  },
  openGraph: {
    title: 'YourFlix – Premium IPTV Subscription 2026 | 4K Streaming',
    description: 'Stream 20,000+ live channels and 60,000+ VODs on YourFlix. 4K/8K quality, anti-freeze technology, instant WhatsApp activation.',
    url: 'https://yourflix.vip/',
    siteName: 'YourFlix',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://yourflix.vip/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'YourFlix IPTV - Premium Streaming Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YourFlix – Premium IPTV Subscription 2026',
    description: '20,000+ live channels, 60,000+ VODs in 4K/8K. Anti-Freeze technology. Instant activation.',
    images: ['https://yourflix.vip/img/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '479DOt9EJRRVQlW8NivvFvmhJiBo7RpMhpwQ0GpqNlw',
  },
  category: 'technology',
};

// JSON-LD Schema for Organization - FIXED with missing image field
const OrganizationSchema = () => {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "YourFlix",
          "url": "https://yourflix.vip",
          "logo": "https://yourflix.vip/img/logo.png",
          "image": "https://yourflix.vip/img/logo.png", // ✅ FIXED: Added missing image field
          "description": "Premium IPTV subscription service with 20,000+ live channels and 60,000+ VODs.",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "url": "https://wa.me/447549589503",
            "availableLanguage": ["English"]
          }
        })
      }}
    />
  );
};

// ✅ NEW: Complete Product Schema with all required fields
const ProductSchema = () => {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "YourFlix IPTV Subscription",
          "description": "Premium IPTV subscription with 20,000+ live channels and 60,000+ VODs in 4K/8K quality. Anti-Freeze v4.0 technology eliminates buffering.",
          "brand": {
            "@type": "Brand",
            "name": "YourFlix"
          },
          "url": "https://yourflix.vip/",
          "image": "https://yourflix.vip/img/logo.png",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1250",
            "bestRating": "5",
            "worstRating": "1"
          },
          "offers": [
            {
              "@type": "Offer",
              "name": "3 Month Plan",
              "priceCurrency": "EUR",
              "price": "30.00",
              "availability": "https://schema.org/InStock",
              "url": "https://yourflix.vip/pricing",
              "priceValidUntil": "2026-12-31",
              "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingRate": {
                  "@type": "MonetaryAmount",
                  "value": "0",
                  "currency": "EUR"
                },
                "shippingDestination": {
                  "@type": "DefinedRegion",
                  "addressCountry": "WW"
                }
              },
              "hasMerchantReturnPolicy": {
                "@type": "MerchantReturnPolicy",
                "applicableCountry": "WW",
                "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                "returnDays": "7",
                "returnMethod": "https://schema.org/ReturnByMail",
                "returnFees": "https://schema.org/FreeReturn"
              }
            },
            {
              "@type": "Offer",
              "name": "6 Month Plan",
              "priceCurrency": "EUR",
              "price": "50.00",
              "availability": "https://schema.org/InStock",
              "url": "https://yourflix.vip/pricing",
              "priceValidUntil": "2026-12-31",
              "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingRate": {
                  "@type": "MonetaryAmount",
                  "value": "0",
                  "currency": "EUR"
                },
                "shippingDestination": {
                  "@type": "DefinedRegion",
                  "addressCountry": "WW"
                }
              },
              "hasMerchantReturnPolicy": {
                "@type": "MerchantReturnPolicy",
                "applicableCountry": "WW",
                "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                "returnDays": "7",
                "returnMethod": "https://schema.org/ReturnByMail",
                "returnFees": "https://schema.org/FreeReturn"
              }
            },
            {
              "@type": "Offer",
              "name": "12 Month Plan",
              "priceCurrency": "EUR",
              "price": "72.00",
              "availability": "https://schema.org/InStock",
              "url": "https://yourflix.vip/pricing",
              "priceValidUntil": "2026-12-31",
              "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingRate": {
                  "@type": "MonetaryAmount",
                  "value": "0",
                  "currency": "EUR"
                },
                "shippingDestination": {
                  "@type": "DefinedRegion",
                  "addressCountry": "WW"
                }
              },
              "hasMerchantReturnPolicy": {
                "@type": "MerchantReturnPolicy",
                "applicableCountry": "WW",
                "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                "returnDays": "7",
                "returnMethod": "https://schema.org/ReturnByMail",
                "returnFees": "https://schema.org/FreeReturn"
              }
            }
          ]
        })
      }}
    />
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <GoogleAnalytics gaId="G-PKFJKYR585" />
        <OrganizationSchema />
        <ProductSchema /> {/* ✅ Added Product Schema */}
      </head>
      <body
        className="bg-white text-gray-900 antialiased selection:bg-[#FFC107]/30 flex flex-col min-h-screen"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}