'use client';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import Image from 'next/image';
const ease = [0.22, 1, 0.36, 1] as const;
export function Reveal({ children, delay = 0, className = '', y = 40 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay, ease }}>{children}</motion.div>;
}
export function SplitText({ text, className = '', delay = 0, as = 'span' }: { text: string; className?: string; delay?: number; as?: 'span' | 'h1' | 'h2' }) {
  const Tag = motion[as];
  return (
    <Tag className={className} initial="h" whileInView="s" viewport={{ once: true }} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom" aria-hidden="true">
          <motion.span className="inline-block" variants={{ h: { y: '110%' }, s: { y: 0, transition: { duration: 1.1, delay: delay + i * 0.08, ease } } }}>{w}&nbsp;</motion.span>
        </span>
      ))}
    </Tag>
  );
}
export function HeroBackdrop({ src, alt = '', position = 'object-center', quality = 90 }: { src: string; alt?: string; position?: string; quality?: number }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 150]);
  return (
    <motion.div className="absolute inset-0" style={{ y }}>
      <motion.div className="absolute inset-0" initial={{ scale: 1.14, opacity: 0.3 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2.8, ease }}>
        <Image src={src} alt={alt} fill priority sizes="100vw" quality={quality} className={`object-cover ${position}`} />
      </motion.div>
    </motion.div>
  );
}
export function ArchImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, -90]);
  return (
    <motion.div className={className} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, delay: 0.9, ease }}>
      <motion.div style={{ y }} className="h-full w-full">
        <div className="relative h-full w-full overflow-hidden rounded-t-full shadow-[0_60px_120px_-40px_rgba(0,0,0,.7)] ring-1 ring-gold/50">
          <Image src={src} alt={alt} fill sizes="(max-width:1024px) 0vw, 22vw" className="object-cover" />
          <div className="absolute inset-0 rounded-t-full ring-1 ring-inset ring-ivory/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-ink/35 via-transparent to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  );
}
export function RotatingBadge({ className = '', text = 'ELYSIAN EVENT MANAGEMENT · KERALA · EST 2025 ·' }: { className?: string; text?: string }) {
  const rm = useReducedMotion();
  return (
    <motion.div className={className} animate={rm ? undefined : { rotate: 360 }} transition={{ duration: 26, repeat: Infinity, ease: 'linear' }} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <defs><path id="badge-circ" d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0" fill="none" /></defs>
        <circle cx="60" cy="60" r="33" fill="none" stroke="currentColor" strokeWidth="0.6" opacity=".4" />
        <text className="fill-current text-[8px] font-semibold uppercase" style={{ letterSpacing: '0.18em' }}>
          <textPath href="#badge-circ" textLength="286" lengthAdjust="spacingAndGlyphs">{text}</textPath>
        </text>
        <path d="M60 50 C67 55 68 65 60 70 C52 65 53 55 60 50z" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    </motion.div>
  );
}
export function ParallaxImage({ src, alt, className = '', strength = 80, priority = false }: { src: string; alt: string; className?: string; strength?: number; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute -inset-y-[100px] inset-x-0">
        <Image src={src} alt={alt} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" priority={priority} />
      </motion.div>
    </div>
  );
}
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-gold/30 bg-forest-deep py-6 text-ivory" aria-label={items.join(', ')}>
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap" aria-hidden="true">
        {row.map((s, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-3xl italic md:text-4xl">
            {s}
            <svg viewBox="0 0 20 20" className="h-4 w-4 text-gold"><path d="M10 1 C15 6 15 14 10 19 C5 14 5 6 10 1z" fill="none" stroke="currentColor" /></svg>
          </span>
        ))}
      </div>
    </div>
  );
}
