export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black transition-opacity duration-300">
      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <div className="text-3xl font-black tracking-tight text-white flex items-center mb-6">
          Your<span className="text-[#FFC107]">Flix</span>
        </div>

        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-white/10 border-t-[#FFC107] rounded-full animate-spin"></div>

        {/* Loading Text */}
        <p className="text-neutral-500 text-xs font-bold mt-4 tracking-widest uppercase animate-pulse">
          Loading YourFlix...
        </p>
      </div>
    </div>
  );
}