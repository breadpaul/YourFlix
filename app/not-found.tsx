// app/not-found.tsx
import Link from 'next/link';

export default function GlobalNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
      <div className="max-w-md mx-auto">
        <div className="text-[#FFC107] text-8xl md:text-9xl font-black mb-4 tracking-tighter">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-black mb-4">
          YourFlix - Page Not Found
        </h1>
        <p className="text-gray-500 mb-8">
          We couldn&apos;t find the YourFlix page you were looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-[#FFC107] text-black px-8 py-3.5 rounded-lg text-sm font-bold hover:bg-[#E5AD06] transition-all">
            Go to YourFlix Home
          </Link>
          <Link href="/pricing" className="bg-black text-white px-8 py-3.5 rounded-lg text-sm font-bold hover:bg-[#FFC107] hover:text-black transition-all">
            View Plans
          </Link>
        </div>
        <a href="https://wa.me/447549589503" target="_blank" rel="noreferrer" className="inline-block mt-6 text-sm text-[#FFC107] hover:underline">
          Contact YourFlix Support
        </a>
      </div>
    </div>
  );
}