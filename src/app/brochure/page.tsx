import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, WhatsappLogo, EnvelopeSimple, Globe, ArrowRight, DownloadSimple } from '@phosphor-icons/react/dist/ssr';
import PageHero from '@/components/PageHero';
import { Reveal, SplitText, Marquee } from '@/components/Motion';
import { Ornament, Corner, Sprig, Bloom, Jasmine } from '@/components/Floral';
import CTA from '@/components/CTA';
import { menu, menuTagline } from '@/lib/menu';
import { brand } from '@/lib/brand';
export const metadata: Metadata = { title: 'Brochure & Menu', description: 'The Elysian brochure — Malabar biriyanis, mandhi, breads, curries, salads and pickles catered for weddings, engagements, birthdays and corporate events across Kerala.' };
export default function Brochure() {
  return (<>
    <PageHero eyebrow="Our Brochure" title="A feast of" script="Malabar flavours" text="Every dish we serve at your celebration — biriyanis, breads, curries and pickles — gathered in one place." img="/img/g-thali.webp" />

    {/* Welcome — the centre panel of the trifold */}
    <section className="relative overflow-hidden bg-ivory px-6 py-28">
      <Jasmine className="absolute right-4 top-10 h-24 w-36 text-gold/60" />
      <Sprig className="absolute -left-6 bottom-0 h-72 text-forest/15" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <Reveal className="text-center lg:text-left">
          <p className="eyebrow text-gold-dark">Welcome to</p>
          <h2 className="mt-4 font-script text-7xl leading-tight text-forest md:text-8xl">Elysian</h2>
          <Ornament className="mx-auto mt-6 h-6 w-64 text-gold lg:mx-0" />
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-forest-ink/75">At Elysian Event Management, every event has a story, and we make yours extraordinary through elegant designs, seamless planning and memorable experiences.</p>
          <a href="/elysian-brochure.pdf" download="Elysian-Brochure.pdf" className="bg-gold-grad group mt-10 inline-flex items-center gap-3 px-8 py-4 font-medium text-forest-ink shadow-[0_24px_60px_-20px_rgba(201,162,75,.6)] transition hover:brightness-110">Download Brochure <DownloadSimple weight="light" size={18} className="transition group-hover:translate-y-0.5" /></a>
        </Reveal>
        <div className="relative">
          <Corner className="absolute -right-4 -top-4 z-10 h-24 w-24 rotate-90 text-gold" />
          <Reveal delay={0.15} className="border border-gold/30 bg-cream p-10 text-center md:p-14">
            <p className="font-display text-4xl leading-snug text-forest md:text-5xl">Elegance in Every Event.<br /><span className="font-script text-gold-grad text-4xl md:text-5xl">Excellence in Every Detail.</span></p>
            <p className="mt-8 leading-relaxed text-forest-ink/70">We bring your celebrations to life with creative ideas, thoughtful planning and flawless execution, making every moment truly special.</p>
            <p className="mt-8 font-script text-3xl text-gold-dark">Where Moments Become Memories.</p>
          </Reveal>
          <Bloom className="absolute -bottom-8 -left-6 h-24 w-24 text-gold" />
        </div>
      </div>
    </section>

    {/* The menu — styled like the dark-green menu card */}
    <section className="grain relative overflow-hidden bg-forest-deep px-6 py-28 text-ivory">
      <Sprig className="absolute -right-6 top-10 h-80 text-gold/25" flip />
      <Sprig className="absolute -left-6 bottom-10 h-80 text-gold/25" />
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <Reveal><p className="eyebrow text-gold-light">From our kitchen</p></Reveal>
          <h2 className="mt-5 font-display text-5xl text-ivory md:text-6xl"><SplitText text="The Elysian" /> <span className="font-script text-gold-grad text-6xl md:text-7xl">Menu</span></h2>
          <Ornament className="mx-auto mt-6 h-6 w-64 text-gold" />
        </div>
        <div className="mt-16 columns-1 gap-12 sm:columns-2 lg:columns-3 xl:columns-4">
          {menu.map((cat, i) => (
            <Reveal key={cat.name} delay={(i % 4) * 0.08} className="mb-12 break-inside-avoid">
              <h3 className="font-script text-4xl text-gold-light">{cat.name}</h3>
              <ul className="mt-5 space-y-2.5 border-l border-gold/25 pl-5">
                {cat.items.map((item) => <li key={item} className="text-[.95rem] leading-relaxed text-ivory/80">{item}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-8 max-w-3xl border-t border-gold/25 pt-10 text-center">
          <p className="font-script text-2xl leading-relaxed text-gold-light md:text-3xl">{menuTagline}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <Link href="/contact" className="bg-gold group inline-flex items-center gap-3 px-8 py-4 font-medium text-forest-ink transition hover:bg-gold-light">Plan Your Menu <ArrowRight weight="light" size={18} className="transition group-hover:translate-x-1" /></Link>
            <a href="/elysian-brochure.pdf" download="Elysian-Brochure.pdf" className="inline-flex items-center gap-2 border-b border-ivory/30 pb-1 text-ivory/85 transition hover:border-gold-light hover:text-gold-light">Download as PDF <DownloadSimple weight="light" size={16} /></a>
          </div>
        </Reveal>
      </div>
    </section>

    <Marquee items={menu.map((c) => c.name)} />

    {/* Visit Us — the back panel of the trifold */}
    <section className="relative overflow-hidden bg-cream px-6 py-28">
      <Sprig className="absolute -right-6 bottom-0 h-72 text-forest/15" flip />
      <div className="mx-auto max-w-4xl text-center">
        <Reveal><p className="font-script text-6xl text-forest md:text-7xl">Visit Us</p></Reveal>
        <Reveal delay={0.15}><p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-forest-ink/75">Join us for a journey of beautiful celebrations, creative experiences and memories that last a lifetime.</p></Reveal>
        <Ornament className="mx-auto mt-8 h-6 w-64 text-gold" />
        <Reveal delay={0.25} className="mx-auto mt-12 max-w-xl border border-gold/30 bg-ivory p-10">
          <ul className="space-y-5 text-left">
            <li className="flex items-center gap-4"><MapPin weight="thin" size={26} className="shrink-0 text-gold-dark" /><span className="text-forest">Malappuram, Kerala</span></li>
            {brand.contacts.map((c) => (
              <li key={c.tel} className="flex items-center gap-4">
                <Phone weight="thin" size={26} className="shrink-0 text-gold-dark" />
                <a href={`tel:${c.tel}`} className="text-forest hover:text-gold-dark">{c.phone}</a>
                <a href={c.wa} target="_blank" rel="noopener" aria-label={`WhatsApp ${c.name}`} className="text-forest hover:text-gold-dark"><WhatsappLogo weight="thin" size={24} /></a>
              </li>
            ))}
            <li className="flex items-center gap-4"><EnvelopeSimple weight="thin" size={26} className="shrink-0 text-gold-dark" /><a href="mailto:elysianevents.in@gmail.com" className="text-forest hover:text-gold-dark">elysianevents.in@gmail.com</a></li>
            <li className="flex items-center gap-4"><Globe weight="thin" size={26} className="shrink-0 text-gold-dark" /><a href={`https://${brand.site}`} className="text-forest hover:text-gold-dark">{brand.site}</a></li>
          </ul>
        </Reveal>
      </div>
    </section>

    <CTA />
  </>);
}
