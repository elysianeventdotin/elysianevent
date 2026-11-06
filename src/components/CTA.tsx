import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { Reveal } from './Motion';
import { Corner, Petals, Swoosh } from './Floral';
export default function CTA() {
  return (
    <section className="grain relative overflow-hidden bg-forest px-6 py-32 text-center text-ivory">
      <Swoosh className="absolute inset-x-0 top-0 h-16 w-full rotate-180" fill="#FFF9E5" />
      <Petals count={8} />
      <Corner className="absolute left-6 top-24 h-24 w-24 text-gold/60 md:left-16" />
      <Corner className="absolute bottom-10 right-6 h-24 w-24 rotate-180 text-gold/60 md:right-16" />
      <Reveal className="relative mx-auto max-w-3xl">
        <p className="eyebrow text-gold-light">Your date, held with care</p>
        <h2 className="mt-6 font-display text-5xl leading-tight md:text-7xl">Reserve Your Date <span className="font-script text-gold-grad text-6xl md:text-8xl">Today</span></h2>
        <p className="mx-auto mt-6 max-w-xl text-ivory/75">Tell us about your gathering. We will listen first, then shape the food, flowers and light around it.</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          <Link href="/contact" className="bg-gold group inline-flex items-center gap-3 px-9 py-4 font-medium text-forest-ink shadow-[0_20px_50px_-20px_rgba(201,162,75,.8)] transition hover:bg-gold-light">
            Reserve Your Date Today <ArrowRight weight="light" size={18} className="transition group-hover:translate-x-1" />
          </Link>
          <Link href="/brochure" className="inline-flex items-center gap-2 border-b border-ivory/30 pb-1 text-ivory/85 transition hover:border-gold-light hover:text-gold-light">Browse the Brochure <ArrowRight weight="light" size={16} /></Link>
        </div>
      </Reveal>
    </section>
  );
}
