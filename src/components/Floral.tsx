'use client';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
const draw: Variants = { hidden: { pathLength: 0, opacity: 0 }, show: (i: number) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { duration: 2.2, delay: i * 0.12, ease: [0.65, 0, 0.35, 1] as const }, opacity: { duration: 0.3, delay: i * 0.12 } } }) };
type P = { className?: string; color?: string };
function Draw({ d, i, w = 1.2 }: { d: string; i: number; w?: number }) {
  return <motion.path d={d} custom={i} variants={draw} fill="none" stroke="currentColor" strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />;
}
/** Eucalyptus / vine sprig drawn in on view, gentle sway */
export function Sprig({ className = '', flip = false }: P & { flip?: boolean }) {
  const rm = useReducedMotion();
  const leaves = [[40, 250], [58, 210], [70, 168], [86, 128], [96, 90], [110, 52]].map(([x, y], i) => {
    const s = i % 2 ? 1 : -1;
    return `M${x} ${y} c${s * 10} -6 ${s * 26} -6 ${s * 34} 4 c${-s * 10} 8 ${-s * 26} 6 ${-s * 34} -4z`;
  });
  return (
    <motion.svg viewBox="0 0 160 280" className={className} style={{ transform: flip ? 'scaleX(-1)' : undefined, transformOrigin: 'bottom center' }}
      initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
      animate={rm ? undefined : { rotate: [0, 1.6, 0, -1.2, 0] }} transition={{ rotate: { duration: 9, repeat: Infinity, ease: 'easeInOut' } }} aria-hidden="true">
      <Draw i={0} d="M30 278 C40 220 60 170 80 130 S108 60 120 20" w={1.4} />
      {leaves.map((d, i) => <Draw key={i} i={i + 1} d={d} />)}
      <Draw i={8} d="M120 20 c6 -6 14 -6 18 0 c-4 6 -12 6 -18 0z" />
    </motion.svg>
  );
}
/** Rose / hydrangea bloom line-art */
export function Bloom({ className = '' }: P) {
  const petals = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2, x = 60 + Math.cos(a) * 22, y = 60 + Math.sin(a) * 22;
    return `M60 60 Q${60 + Math.cos(a - 0.5) * 40} ${60 + Math.sin(a - 0.5) * 40} ${x + Math.cos(a) * 14} ${y + Math.sin(a) * 14} Q${60 + Math.cos(a + 0.5) * 40} ${60 + Math.sin(a + 0.5) * 40} 60 60`;
  });
  return (
    <motion.svg viewBox="0 0 120 120" className={className} initial="hidden" whileInView="show" viewport={{ once: true }} aria-hidden="true">
      {petals.map((d, i) => <Draw key={i} i={i} d={d} w={1} />)}
      <Draw i={9} d="M60 50 c8 0 12 6 10 12 c-2 6 -12 8 -16 2 c-4 -6 0 -12 6 -10" w={1} />
      <circle cx="60" cy="60" r="2" fill="currentColor" />
    </motion.svg>
  );
}
/** Jasmine cluster */
export function Jasmine({ className = '' }: P) {
  const flower = (cx: number, cy: number) => Array.from({ length: 5 }, (_, i) => { const a = (i / 5) * Math.PI * 2 - Math.PI / 2; return `M${cx} ${cy} q${Math.cos(a - .6) * 12} ${Math.sin(a - .6) * 12} ${Math.cos(a) * 11} ${Math.sin(a) * 11} q${Math.cos(a + .6) * 1} ${Math.sin(a + .6) * 1} ${-Math.cos(a) * 11} ${-Math.sin(a) * 11}`; }).join(' ');
  return (
    <motion.svg viewBox="0 0 140 100" className={className} initial="hidden" whileInView="show" viewport={{ once: true }} aria-hidden="true">
      <Draw i={0} d="M10 90 C40 70 70 60 130 30" w={1.1} />
      <Draw i={1} d={flower(50, 58)} w={0.9} /><Draw i={2} d={flower(92, 40)} w={0.9} /><Draw i={3} d={flower(122, 22)} w={0.9} />
      <Draw i={4} d="M30 80 c4 -10 12 -14 20 -12 c-4 8 -12 12 -20 12z" w={0.9} />
    </motion.svg>
  );
}
/** Ornamental divider with central bloom */
export function Ornament({ className = '' }: P) {
  return (
    <motion.svg viewBox="0 0 320 30" className={className} initial="hidden" whileInView="show" viewport={{ once: true }} aria-hidden="true">
      <Draw i={0} d="M4 15 H120 C130 15 134 6 144 8" w={1} />
      <Draw i={0} d="M316 15 H200 C190 15 186 6 176 8" w={1} />
      <Draw i={1} d="M160 4 C168 10 168 20 160 26 C152 20 152 10 160 4z" w={1} />
      <Draw i={2} d="M144 8 c4 6 10 8 16 7 M176 8 c-4 6 -10 8 -16 7 M140 22 c8 0 14 -4 20 -7 M180 22 c-8 0 -14 -4 -20 -7" w={0.9} />
      <circle cx="120" cy="15" r="1.6" fill="currentColor" /><circle cx="200" cy="15" r="1.6" fill="currentColor" />
    </motion.svg>
  );
}
/** Corner flourish */
export function Corner({ className = '' }: P) {
  return (
    <motion.svg viewBox="0 0 120 120" className={className} initial="hidden" whileInView="show" viewport={{ once: true }} aria-hidden="true">
      <Draw i={0} d="M4 116 V40 C4 18 18 4 40 4 H116" w={1} />
      <Draw i={1} d="M14 100 V46 C14 26 26 14 46 14 H100" w={0.6} />
      <Draw i={2} d="M30 30 c10 -2 18 4 18 14 c-10 2 -18 -4 -18 -14z M30 30 c-2 10 4 18 14 18" w={0.9} />
      <Draw i={3} d="M48 22 c6 -8 16 -8 22 -2 M22 48 c-8 6 -8 16 -2 22" w={0.9} />
    </motion.svg>
  );
}
/** Gold swoosh like the posters */
export function Swoosh({ className = '', fill = '#FAF6EE' }: P & { fill?: string }) {
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={className} aria-hidden="true">
      <defs><linearGradient id="sw" x1="0" x2="1"><stop offset="0" stopColor="#9C7A2E" /><stop offset=".45" stopColor="#F3DFA8" /><stop offset="1" stopColor="#C9A24B" /></linearGradient></defs>
      <path d="M0 120 V70 C360 120 900 10 1440 40 V120z" fill={fill} />
      <motion.path d="M0 66 C360 118 900 6 1440 36" fill="none" stroke="url(#sw)" strokeWidth="3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2.4, ease: [0.65, 0, 0.35, 1] }} />
    </svg>
  );
}
/** Petals drifting (CSS-free, framer) */
export function Petals({ count = 10, className = '' }: { count?: number; className?: string }) {
  const rm = useReducedMotion();
  if (rm) return null;
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => {
        const left = (i * 37) % 100, dur = 14 + (i % 5) * 3, delay = (i * 1.7) % 10, size = 10 + (i % 4) * 4;
        return (
          <motion.svg key={i} viewBox="0 0 20 20" width={size} height={size} className="absolute -top-8" style={{ left: `${left}%` }}
            animate={{ y: ['0vh', '115vh'], x: [0, 40, -20, 30], rotate: [0, 180, 320] }} transition={{ duration: dur, delay, repeat: Infinity, ease: 'linear' }}>
            <path d="M10 1 C16 5 17 13 10 19 C3 13 4 5 10 1z" fill={i % 3 ? '#E9C9B5' : '#E6CB8A'} opacity=".75" />
          </motion.svg>
        );
      })}
    </div>
  );
}
