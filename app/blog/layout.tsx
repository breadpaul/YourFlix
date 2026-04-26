import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'YourFlix IPTV Blog — Setup Guides, News & Streaming Tips',
    description: 'Official YourFlix blog. Learn how to setup IPTV on Firestick, Android, Smart TV, iOS, and PC. Latest IPTV news, streaming tips, and 4K content updates.',
    keywords: [
        'yourflix blog',
        'iptv setup guide',
        'how to install iptv',
        'iptv on firestick',
        'iptv news 2026',
        '4k streaming tips',
        'yourflix tutorials'
    ].join(', '),
    alternates: {
        canonical: 'https://yourflix.vip/blog',
    },
    openGraph: {
        title: 'YourFlix IPTV Blog — Setup Guides, News & Streaming Tips',
        description: 'Official YourFlix blog. Setup guides for Firestick, Android, Smart TV, iOS, and PC. Latest IPTV news, streaming tips, and 4K content updates.',
        url: 'https://yourflix.vip/blog',
        siteName: 'YourFlix',
        images: [
            {
                url: 'https://yourflix.vip/img/logo.png',
                width: 1200,
                height: 630,
                alt: 'YourFlix IPTV Blog - Setup Guides and News',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'YourFlix IPTV Blog — Setup Guides & News',
        description: 'Official YourFlix blog. Setup guides for all devices. Latest IPTV news and streaming tips.',
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

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="blog-layout">{children}</div>;
}