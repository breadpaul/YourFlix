import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'YourFlix IPTV Pricing Plans 2026 — Best Subscription Deals',
    description: 'Choose from 3, 6, or 12 month YourFlix IPTV plans. 20,000+ live channels, 60,000+ VODs in 4K/8K. Multi-device support. Instant activation. Save up to 74%.',
    keywords: 'yourflix, yourflix iptv, yourflix pricing, iptv subscription, best iptv 2026, yourflix plans, cheap iptv, 4k iptv, yourflix subscription',
    alternates: {
        canonical: 'https://yourflix.vip/pricing',
    },
    openGraph: {
        title: 'YourFlix IPTV Pricing — 3, 6 & 12 Month Plans | Save Up to 74%',
        description: 'YourFlix offers premium IPTV with 20,000+ channels, 60,000+ VODs, and anti-freeze technology. Choose your plan and number of devices. Instant WhatsApp activation.',
        url: 'https://yourflix.vip/pricing',
        siteName: 'YourFlix',
        images: [
            {
                url: 'https://yourflix.vip/img/logo.png',
                width: 1200,
                height: 630,
                alt: 'YourFlix IPTV Pricing Plans',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'YourFlix IPTV Pricing Plans 2026',
        description: 'Premium YourFlix IPTV subscription. 3, 6, or 12 month plans. Multi-device support. Instant activation.',
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
};

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="pricing-layout">{children}</div>;
}