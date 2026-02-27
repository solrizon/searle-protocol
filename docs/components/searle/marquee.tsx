export function Marquee() {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 h-8 flex items-center overflow-hidden"
      style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-dim)' }}
    >
      <div className="overflow-hidden whitespace-nowrap w-full">
        <div
          className="inline-block font-mono text-xs font-bold uppercase tracking-widest whitespace-nowrap"
          style={{ animation: 'marquee 20s linear infinite', color: '#000000' }}
        >
          {'Searle Protocol v1.0 \u2022 Define your AI Rights \u2022 The Chinese Room Argument \u2022 Training \u2022 Reading \u2022 Commerce \u2022 Your Content Your Rules \u2022 Searle Protocol v1.0 \u2022 Define your AI Rights \u2022 The Chinese Room Argument \u2022 Training \u2022 Reading \u2022 Commerce \u2022 Your Content Your Rules \u2022\u00a0\u00a0\u00a0Searle Protocol v1.0 \u2022 Define your AI Rights \u2022 The Chinese Room Argument \u2022 Training \u2022 Reading \u2022 Commerce \u2022 Your Content Your Rules \u2022 Searle Protocol v1.0 \u2022 Define your AI Rights \u2022 The Chinese Room Argument \u2022 Training \u2022 Reading \u2022 Commerce \u2022 Your Content Your Rules \u2022'}
        </div>
      </div>
    </div>
  )
}
