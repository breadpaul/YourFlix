import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How to Setup IPTV on Firestick, Android, iOS, Smart TV & PC | YourFlix Setup Guide',
    description: 'Complete step-by-step IPTV setup guide for Firestick, Android TV, iOS, Smart TV, Windows, and Mac. Get your IPTV working in under 5 minutes.',
    keywords: ['iptv setup', 'how to install iptv', 'iptv firestick setup', 'iptv android setup', 'iptv smart tv', 'iptv on pc', 'iptv activation'],
    alternates: {
        canonical: 'https://yourflix.vip/setup',
    },
    openGraph: {
        title: 'IPTV Setup Guide 2026 — Install on Any Device in Minutes | YourFlix',
        description: 'Step-by-step tutorials for Firestick, Android, iOS, Smart TV, and PC. No technical skills needed. Instant activation support.',
        url: 'https://yourflix.vip/setup',
        siteName: 'YourFlix',
        images: [
            {
                url: 'https://yourflix.vip/img/setup-guide.jpg',
                width: 1200,
                height: 630,
                alt: 'IPTV setup guide for all devices',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'IPTV Setup Guide — Firestick, Android, iOS, Smart TV & PC',
        description: 'Complete IPTV installation tutorials for all devices. Start streaming in 5 minutes.',
        images: ['https://yourflix.vip/img/setup-guide.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function SetupLayout({ children }: { children: React.ReactNode }) {
    return <div className="setup-layout">{children}</div>;
}