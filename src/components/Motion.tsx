'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
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
