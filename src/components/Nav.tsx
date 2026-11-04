'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, ArrowUpRight } from '@phosphor-icons/react';
import { Logo } from './Logo';
const links = [['/', 'Home'], ['/our-story', 'Our Story'], ['/services', 'Services'], ['/contact', 'Contact']];
export default function Nav() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const f = () => setScrolled(scrollY > 40); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
  useEffect(() => setOpen(false), [path]);
  const dark = !scrolled;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ivory/85 py-3 shadow-[0_10px_40px_-20px_rgba(11,46,39,.35)] backdrop-blur-xl' : 'py-6'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6" aria-label="Main">
        <Link href="/" aria-label="Elysian home"><Logo variant={dark ? 'white' : 'green'} /></Link>
        <ul className="hidden items-center gap-10 md:flex">
          {links.map(([h, l]) => (
            <li key={h}><Link href={h} className={`group relative text-sm tracking-wide ${dark ? 'text-ivory/90' : 'text-forest'}`}>
              {l}<span className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-500 ${path === h ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link></li>
          ))}
        </ul>
        <Link href="/contact" className="hidden items-center gap-2 border border-gold px-5 py-2.5 text-sm text-gold-dark transition hover:bg-gold hover:text-forest-ink md:flex" style={{ color: dark ? '#E6CB8A' : undefined }}>
          Reserve Your Date <ArrowUpRight weight="light" size={16} />
        </Link>
        <button className={`md:hidden ${dark ? 'text-ivory' : 'text-forest'}`} onClick={() => setOpen(true)} aria-label="Open menu"><List size={30} weight="thin" /></button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 flex flex-col bg-forest-deep px-8 py-6 text-ivory" initial={{ clipPath: 'circle(0% at 100% 0%)' }} animate={{ clipPath: 'circle(150% at 100% 0%)' }} exit={{ clipPath: 'circle(0% at 100% 0%)' }} transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}>
            <div className="flex items-center justify-between"><Logo variant="white" /><button onClick={() => setOpen(false)} aria-label="Close menu"><X size={30} weight="thin" /></button></div>
            <ul className="mt-16 space-y-6">{links.map(([h, l], i) => (
              <motion.li key={h} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.08 }}><Link href={h} className="font-display text-5xl">{l}</Link></motion.li>
            ))}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
