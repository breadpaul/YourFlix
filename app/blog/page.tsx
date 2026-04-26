import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Eye } from 'lucide-react';
import { Metadata } from 'next';
import { articles } from '@/lib/data/articles';

export const metadata: Metadata = {
  title: 'YourFlix IPTV Blog — Setup Guides, News & Streaming Tips 2026',
  description: 'Official YourFlix blog. Learn how to setup IPTV on Firestick, Android, Smart TV, iOS, and PC. Latest IPTV news, streaming tips, and 4K content updates.',
  keywords: 'yourflix blog, iptv setup guide, how to install iptv, iptv on firestick, iptv news 2026, 4k streaming tips, yourflix tutorials',
  alternates: {
    canonical: 'https://yourflix.vip/blog',
  },
  openGraph: {
    title: 'YourFlix IPTV Blog — Setup Guides, News & Streaming Tips',
    description: 'Official YourFlix blog with IPTV setup guides, tutorials, and streaming news for Firestick, Android, Smart TV, and more.',
    url: 'https://yourflix.vip/blog',
    siteName: 'YourFlix',
    images: [
      {
        url: 'https://yourflix.vip/img/articles/image_1.png',
        width: 1200,
        height: 630,
        alt: 'YourFlix IPTV Blog',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YourFlix IPTV Blog — Setup Guides & News',
    description: 'Official YourFlix blog. Setup guides for all devices. Latest IPTV news and streaming tips.',
    images: ['https://yourflix.vip/img/articles/image_1.png'],
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

// Blog List JSON-LD Schema
const BlogListSchema = () => (
  <script
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "YourFlix IPTV Blog",
        "description": "Official YourFlix blog with IPTV setup guides, tutorials, and streaming news.",
        "url": "https://yourflix.vip/blog",
        "publisher": {
          "@type": "Organization",
          "name": "YourFlix",
          "logo": {
            "@type": "ImageObject",
            "url": "https://yourflix.vip/img/logo.png"
          }
        },
        "blogPost": articles.map(article => ({
          "@type": "BlogPosting",
          "headline": article.title,
          "description": article.excerpt,
          "datePublished": new Date(article.date).toISOString(),
          "url": `https://yourflix.vip/blog/${article.slug}`,
          "mainEntityOfPage": `https://yourflix.vip/blog/${article.slug}`,
          "author": {
            "@type": "Organization",
            "name": article.author || "YourFlix"
          }
        }))
      })
    }}
  />
);

export default function BlogPage() {
  // Get featured articles (first one for featured section)
  const featuredArticle = articles[0];
  const recentArticles = articles.slice(0, 6);

  return (
    <>
      <BlogListSchema />

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FFC107 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto relative z-10 max-w-4xl">
          <h4 className="text-[#FFC107] text-sm font-bold uppercase tracking-wider mb-2">YourFlix Blog</h4>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">YourFlix IPTV <span className="text-[#FFC107]">News &amp; Guides</span></h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Official YourFlix blog with setup guides, tutorials, and streaming news for Firestick, Android, Smart TV, and more.
          </p>
        </div>
      </div>

      {/* Featured Article Section */}
      {featuredArticle && (
        <div className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-black">Featured <span className="text-[#FFC107]">Article</span></h2>
              <div className="w-12 h-0.5 bg-[#FFC107] mx-auto mt-3"></div>
            </div>
            <div className="max-w-5xl mx-auto">
              <Link href={`/blog/${featuredArticle.slug}`} className="group block">
                <div className="grid md:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500 cursor-pointer">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8 flex flex-col justify-center bg-white">
                    <span className="inline-block bg-[#FFC107]/10 text-[#FFC107] text-xs font-bold uppercase tracking-wider mb-3 px-3 py-1 rounded-full w-fit">
                      {featuredArticle.category}
                    </span>
                    <h3 className="text-2xl font-black text-black mb-3 group-hover:text-[#FFC107] transition-colors line-clamp-2">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{featuredArticle.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {featuredArticle.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featuredArticle.readTimeMin || 5} min read</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[#FFC107] font-bold text-sm group-hover:gap-3 transition-all">
                      Read Article
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Modern Card Grid Design - Entire Card Clickable */}
      <div className="py-24 px-6 min-h-[50vh] bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black">Latest <span className="text-[#FFC107]">Articles</span></h2>
            <div className="w-16 h-1 bg-[#FFC107] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Discover the latest guides, tips, and news about IPTV streaming</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {recentArticles.map((article, i) => (
              <Link key={i} href={`/blog/${article.slug}`} className="group">
                <article className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col">

                  {/* Image Container with Overlay */}
                  <div className="relative h-56 w-full overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-[#FFC107] text-black px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider shadow-lg z-10">
                      {article.category}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-grow">

                    {/* Meta Info */}
                    <div className="flex items-center gap-3 text-gray-500 text-xs font-medium mb-4 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#FFC107]" />
                        <span>{article.date}</span>
                      </div>
                      <div className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#FFC107]" />
                        <span>{article.readTimeMin || 5} min read</span>
                      </div>
                      <div className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></div>
                      <div className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-[#FFC107]" />
                        <span>1.2k views</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-black text-black mb-3 leading-tight group-hover:text-[#FFC107] transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Read More Indicator */}
                    <div className="inline-flex items-center gap-2 text-sm font-bold text-black group-hover:text-[#FFC107] transition-colors duration-300 mt-auto pt-4 border-t border-gray-100">
                      <span>Continue Reading</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-[#FFC107] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-[#FFC107] hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg">
              Load More Articles
            </button>
          </div>
        </div>
      </div>
    </>
  );
}