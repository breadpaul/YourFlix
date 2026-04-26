import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';
import type { Metadata } from 'next';
import { articles, getArticleBySlug } from '@/lib/data/articles';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    return {
      title: 'Article Not Found | YourFlix',
      description: 'The requested article could not be found on YourFlix blog.',
    };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.tags?.join(', ') || 'iptv, streaming, yourflix',
    alternates: {
      canonical: `https://yourflix.vip/blog/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: 'article',
      publishedTime: new Date(article.date).toISOString(),
      authors: [article.author || 'YourFlix Team'],
      tags: article.tags,
      url: `https://yourflix.vip/blog/${article.slug}`,
      siteName: 'YourFlix',
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.image],
      creator: '@yourflix',
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
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    url: `https://yourflix.vip/blog/${article.slug}`,
    datePublished: new Date(article.date).toISOString(),
    dateModified: new Date(article.date).toISOString(),
    author: {
      '@type': 'Organization',
      name: article.author || 'YourFlix Team',
      url: 'https://yourflix.vip',
    },
    publisher: {
      '@type': 'Organization',
      name: 'YourFlix',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yourflix.vip/img/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://yourflix.vip/blog/${article.slug}`,
    },
    keywords: article.tags?.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-white">
        {/* HERO SECTION */}
        <div className="relative w-full pt-32 pb-16 md:pb-24 overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="100vw"
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
            <div className="max-w-3xl lg:max-w-4xl">
              <div className="mb-6 md:mb-8">
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-white/60 hover:text-[#FFC107] transition-all"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  Back to Blog
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs font-bold tracking-wider uppercase mb-4 md:mb-6">
                <span className="bg-[#FFC107] text-black px-3 md:px-4 py-1 md:py-1.5 rounded-md text-[10px] md:text-xs">
                  {article.category}
                </span>
                <span className="flex items-center gap-1.5 text-white/70">
                  <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  {article.readTimeMin || 5} min read
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 md:mb-6 tracking-tighter leading-[1.1]">
                {article.title}
              </h1>

              {article.excerpt && (
                <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-2xl leading-relaxed">
                  {article.excerpt}
                </p>
              )}

              <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-8">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 overflow-hidden relative flex items-center justify-center">
                  <span className="text-white font-bold text-lg">YF</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm md:text-base">{article.author || 'YourFlix Team'}</p>
                  <div className="flex items-center gap-2 md:gap-3 text-white/50 text-xs">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BODY CONTENT */}
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
            {/* Main Content */}
            <div className="lg:w-2/3 xl:w-3/4">
              <div
                className="prose prose-sm sm:prose-base md:prose-lg max-w-none
                          prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-gray-900
                          prose-h1:text-2xl sm:prose-h1:text-3xl md:prose-h1:text-4xl
                          prose-h2:text-xl sm:prose-h2:text-2xl md:prose-h2:text-3xl
                          prose-h2:border-l-4 prose-h2:border-[#FFC107] prose-h2:pl-4
                          prose-h3:text-lg sm:prose-h3:text-xl
                          prose-p:text-gray-600 prose-p:leading-relaxed
                          prose-a:text-[#FFC107] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                          prose-strong:text-gray-900 prose-strong:font-black
                          prose-ul:list-disc prose-ul:pl-4 md:prose-ul:pl-6
                          prose-ol:list-decimal prose-ol:pl-4 md:prose-ol:pl-6
                          prose-li:text-gray-600 prose-li:my-1 md:prose-li:my-2
                          prose-img:rounded-xl prose-img:shadow-lg
                          prose-table:border-collapse prose-table:w-full
                          prose-th:bg-black prose-th:text-white prose-th:p-3 prose-th:text-left
                          prose-td:border prose-td:border-gray-200 prose-td:p-3
                          prose-blockquote:border-l-4 prose-blockquote:border-[#FFC107] prose-blockquote:bg-gray-50 prose-blockquote:p-4 prose-blockquote:rounded-r-xl
                          prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-[#FFC107]"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-12 md:my-16"></div>

              {/* Tags Section */}
              {article.tags && article.tags.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-black uppercase tracking-wider text-gray-900 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 pb-8 md:pb-12">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Share this article</span>
                  <div className="flex items-center gap-2">
                    <button className="text-gray-400 hover:text-[#1877F2] transition-colors"><Facebook className="w-4 h-4" /></button>
                    <button className="text-gray-400 hover:text-[#1DA1F2] transition-colors"><Twitter className="w-4 h-4" /></button>
                    <button className="text-gray-400 hover:text-[#0A66C2] transition-colors"><Linkedin className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 xl:w-1/4">
              <div className="sticky top-32 space-y-8 md:space-y-12">
                {/* CTA Box */}
                <div className="bg-black p-6 md:p-8 rounded-2xl text-center border border-white/10">
                  <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight">
                    Start Your 4K Journey
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    20,000+ channels, 60,000+ VODs. Instant activation.
                  </p>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center w-full py-3 bg-[#FFC107] text-black font-black uppercase tracking-wider text-sm rounded-xl hover:bg-[#E5AD06] transition-colors"
                  >
                    View YourFlix Plans
                  </Link>
                </div>

                {/* About Author */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-sm font-black uppercase tracking-wider text-gray-900 mb-3">Written by</h4>
                  <p className="font-bold text-black">{article.author || 'YourFlix Team'}</p>
                  <p className="text-xs text-gray-500 mt-1">YourFlix expert brings you the latest insights on IPTV streaming technology and setup guides.</p>
                </div>

                {/* Related Articles */}
                <div>
                  <h4 className="text-xs md:text-sm font-black uppercase tracking-wider text-gray-900 mb-4 md:mb-6 flex items-center gap-3">
                    Recommended Reading
                    <span className="hidden md:block h-px bg-gray-200 flex-grow"></span>
                  </h4>
                  <div className="space-y-4 md:space-y-6">
                    {articles
                      .filter(a => a.slug !== article.slug)
                      .slice(0, 3)
                      .map((related) => (
                        <Link
                          href={`/blog/${related.slug}`}
                          key={related.slug}
                          className="group block"
                        >
                          <div className="relative h-32 md:h-40 rounded-xl overflow-hidden mb-3">
                            <Image
                              src={related.image}
                              alt={related.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-wider text-[#FFC107] block mb-1">
                            {related.category}
                          </span>
                          <h5 className="text-sm md:text-base font-bold text-gray-800 leading-snug group-hover:text-[#FFC107] transition-colors line-clamp-2">
                            {related.title}
                          </h5>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}