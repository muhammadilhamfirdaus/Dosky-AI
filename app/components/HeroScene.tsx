
import Image from "next/image";

export default function HeroScene() {
  return (
    <div className="relative h-full min-h-0 w-full overflow-hidden bg-[#e9e6dd]">
      {/* AI laboratory image */}
      <Image
        src="/images/ai-automation-lab.png"
        alt="AI automation laboratory dengan robot otonom, robotic arms, dan intelligent systems"
        fill
        priority
        sizes="(max-width: 767px) 100vw, 60vw"
        className="object-contain object-center"
      />

      {/* Top labels */}
      <div className="pointer-events-none absolute inset-x-4 top-4 z-10 flex justify-between gap-3 text-[8px] tracking-[0.13em] text-[#55574f] sm:inset-x-6 sm:top-6">
        <span>INTELLIGENT SYSTEMS / 001</span>
        <span>AI × OPERATIONS</span>
      </div>

      {/* Bottom labels */}
      <div className="pointer-events-none absolute inset-x-3 bottom-4 z-10 flex flex-wrap items-center justify-center gap-2 text-[8px] tracking-[0.1em] text-[#55574f] sm:bottom-6">
        <span>PERCEPTION</span>
        <span className="h-1 w-1 rounded-full bg-[#244bd2]" />
        <span>INTELLIGENCE</span>
        <span className="h-1 w-1 rounded-full bg-[#244bd2]" />
        <span>AUTOMATION</span>
      </div>
    </div>
  );
}
