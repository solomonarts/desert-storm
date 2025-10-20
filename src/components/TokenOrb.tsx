import mainlogo from '@/assets/logomain.png';
export default function TokenOrb() {
  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 blur-3xl bg-[conic-gradient(at_50%_50%,rgba(16,185,129,.25),rgba(6,182,212,.2),rgba(2,132,199,.2),transparent_30%)] rounded-full"/>
      {/* Coin */}
      {/* <svg viewBox="0 0 400 400" className="relative z-10 w-full h-full">
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#34d399"/>
            <stop offset="60%" stopColor="#06b6d4"/>
            <stop offset="100%" stopColor="#0ea5e9"/>
          </radialGradient>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e2e8f0"/>
            <stop offset="100%" stopColor="#94a3b8"/>
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="155" fill="url(#g1)"/>
        <circle cx="200" cy="200" r="170" fill="none" stroke="url(#edge)" strokeWidth="10" opacity=".6"/>
        <circle cx="200" cy="200" r="185" fill="none" stroke="url(#edge)" strokeWidth="6" opacity=".25"/>
    
        <g transform="translate(200,200)">
          <circle r="72" fill="rgba(2,6,23,.45)" stroke="#a7f3d0" strokeWidth="2"/>
          <text x="0" y="10" textAnchor="middle" fontSize="78" fontWeight="800" fill="#ecfeff">C</text>
        </g>
      </svg> */}
      <img src={mainlogo} className="rounded-full" />
      {/* Floating chips */}
      <div className="absolute -top-2 left-2"><span className="text-[11px] rounded-full bg-white/10 border border-white/15 px-2 py-1">BNB Chain</span></div>
      <div className="absolute top-4 right-4"><span className="text-[11px] rounded-full bg-white/10 border border-white/15 px-2 py-1">3% → Donation</span></div>
      <div className="absolute -bottom-2 left-6"><span className="text-[11px] rounded-full bg-white/10 border border-white/15 px-2 py-1">Supply: 1,000,000,000</span></div>
    </div>
  );
}
