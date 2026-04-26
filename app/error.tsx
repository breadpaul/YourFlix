'use client';

import Link from 'next/link';

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-white">
      <div className="max-w-md mx-auto">
        {/* Error Code */}
        <div className="text-[#FFC107] text-8xl md:text-9xl font-black mb-4 tracking-tighter">
          Oops!
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-black text-black mb-4">
          Something Went Wrong
        </h1>

        {/* Description */}
        <p className="text-gray-500 mb-8">
          We encountered an error while loading YourFlix. Please try again or contact our support team.
        </p>

        {/* Error Message (optional - only show in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-gray-50 rounded-lg p-4 mb-8 text-left border border-gray-200">
            <p className="text-xs text-gray-500 font-mono break-all">
              {error.message}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="bg-[#FFC107] text-black px-8 py-3.5 rounded-lg text-sm font-bold hover:bg-[#E5AD06] transition-all shadow-lg"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-black text-white px-8 py-3.5 rounded-lg text-sm font-bold hover:bg-[#FFC107] hover:text-black transition-all shadow-lg border border-white/10"
          >
            Return to YourFlix Home
          </Link>
        </div>

        {/* Help Text */}
        <p className="text-xs text-gray-400 mt-8">
          Still having issues? Contact YourFlix support via{' '}
          <a
            href="https://wa.me/447549589503"
            target="_blank"
            rel="noreferrer"
            className="text-[#FFC107] hover:underline"
          >
            WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
}