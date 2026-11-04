import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Leaf, Sun, Handshake } from '@phosphor-icons/react/dist/ssr';
import Hero3D from '@/components/Hero3D';
import { Reveal, SplitText, ParallaxImage, Marquee } from '@/components/Motion';
import { Sprig, Bloom, Jasmine, Ornament, Corner, Swoosh, Petals } from '@/components/Floral';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';
import { services, catering } from '@/lib/services';
import { brand, serviceNames } from '@/lib/brand';

export default function Home() {
  return (<>
    {/* HERO: no pills, no badges */}
    <section className="grain relative min-h-[100svh] overflow-hidden bg-forest-deep text-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(201,162,75,.18),transparent_55%),radial-gradient(ellipse_at_10%_90%,rgba(143,168,154,.18),transparent_50%)]" />
      <Sprig className="absolute -left-16 bottom-24 h-[22rem] text-gold/20" />
      <Bloom className="absolute right-[8%] top-28 hidden h-24 w-24 text-gold/40 lg:block" />
      <div className="absolute inset-y-0 right-0 hidden w-[64%] lg:block"><Hero3D /></div>
      <div className="pointer-events-none relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-6 px-6 pb-32 pt-32 lg:grid-cols-[1.05fr_1fr]">
        <div className="pointer-events-auto relative z-10">
          <Reveal><p className="eyebrow text-gold-light">Elysian Event Management &nbsp;·&nbsp; Est 2025</p></Reveal>
          <h1 className="mt-8 font-display text-[3.6rem] font-medium leading-[0.92] sm:text-7xl xl:text-[6.4rem]">
            <SplitText text="Event Catering" delay={0.2} />
            <span className="font-script text-gold-grad block pt-3 text-[3.8rem] font-normal sm:text-7xl xl:text-[6rem]">Made Simple</span>
          </h1>
          <svg viewBox="0 0 420 24" className="mt-2 h-5 w-72 text-gold" aria-hidden="true"><path d="M2 18 C120 2 300 2 418 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="460" strokeDashoffset="460"><animate attributeName="stroke-dashoffset" to="0" dur="2s" begin=".9s" fill="freeze" /></path></svg>
          <Reveal delay={0.6}><p className="mt-6 max-w-md text-lg leading-relaxed text-ivory/75">Delicious food and seamless catering for your most special moments, set among flowers, warm light and the people you love.</p></Reveal>
          <Reveal delay={0.8} className="mt-10 flex flex-wrap items-center gap-6">
            <Link href="/contact" className="bg-gold-grad group inline-flex items-center gap-3 px-8 py-4 font-medium text-forest-ink transition hover:brightness-110">Reserve Your Date Today <ArrowRight weight="light" size={18} className="transition group-hover:translate-x-1" /></Link>
            <a href={`tel:${brand.contacts[0].tel}`} className="inline-flex items-center gap-2 border-b border-gold/50 pb-1 text-ivory/85 hover:text-gold-light"><Phone weight="thin" size={20} /> {brand.contacts[0].phone}</a>
          </Reveal>
        </div>
        <div className="relative h-[42vh] lg:hidden"><Hero3D staticOnly /></div>
      </div>
      <Swoosh className="absolute inset-x-0 bottom-0 h-20 w-full md:h-32" />
    </section>

    {/* Intro */}
    <section className="relative overflow-hidden bg-ivory px-6 py-28">
      <Jasmine className="absolute right-4 top-10 h-28 w-40 text-gold/60" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <Corner className="absolute -left-4 -top-4 z-10 h-24 w-24 text-gold" />
          <Corner className="absolute -bottom-4 -right-4 z-10 h-24 w-24 rotate-180 text-gold" />
          <ParallaxImage src="/img/garden-buffet.webp" alt="Copper chafing dishes on a garden buffet under string lights" className="aspect-[4/5] rounded-t-[12rem]" />
        </div>
        <div>
          <Reveal><p className="eyebrow text-gold-dark">Rooted in hospitality</p></Reveal>
          <h2 className="mt-5 font-display text-5xl leading-tight text-forest md:text-6xl"><SplitText text="Food that tastes of the season," /> <span className="font-script text-gold-grad text-5xl md:text-6xl">gatherings that feel like home</span></h2>
          <Ornament className="mt-8 h-6 w-64 text-gold" />
          <Reveal delay={0.2}><p className="mt-8 text-lg leading-relaxed text-forest-ink/75">We are a young Kerala team who believe the best celebrations are unhurried. Fresh produce, fragrant spices and recipes cooked with patience, served in gardens, halls and courtyards dressed with real flowers and soft light. You enjoy the moments; we take care of everything around them.</p></Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[[Leaf, 'Seasonal & fresh'], [Sun, 'Garden-inspired'], [Handshake, 'Fair, honest cost']].map(([I, t], i) => { const Icon = I as typeof Leaf; return (
              <Reveal key={i} delay={0.1 * i}><Icon weight="thin" size={36} className="text-gold-dark" /><p className="mt-3 font-display text-xl text-forest">{t as string}</p></Reveal>); })}
          </div>
        </div>
      </div>
    </section>

    <Marquee items={serviceNames} />

    {/* Services preview */}
    <section className="relative overflow-hidden bg-cream px-6 py-28">
      <Sprig className="absolute -right-6 top-10 h-80 text-forest/15" flip />
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <Reveal><p className="eyebrow text-gold-dark">What we do</p></Reveal>
          <h2 className="mt-5 font-display text-5xl text-forest md:text-6xl"><SplitText text="Every detail, one gentle hand" /></h2>
          <Ornament className="mx-auto mt-6 h-6 w-64 text-gold" />
        </div>
        <div className="mt-16 grid gap-px overflow-hidden border border-gold/25 bg-gold/25 sm:grid-cols-2 lg:grid-cols-5">
          {services.map(({ name, Icon, text }, i) => (
            <Reveal key={name} delay={(i % 5) * 0.06} className="group h-full bg-cream p-8 transition duration-500 hover:bg-forest hover:text-ivory">
              <Icon weight="thin" size={42} className="text-gold-dark transition group-hover:text-gold-light" />
              <h3 className="mt-6 font-display text-2xl">{name}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-70">{text}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center"><Link href="/services" className="inline-flex items-center gap-2 border-b border-forest pb-1 text-forest hover:text-gold-dark">Explore all services <ArrowRight weight="light" /></Link></div>
      </div>
    </section>

    {/* Catering */}
    <section className="grain relative overflow-hidden bg-forest text-ivory">
      <Petals count={6} />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <ParallaxImage src="/img/cat-wedding.webp" alt="Traditional meal served on banana leaves" className="min-h-[420px]" strength={60} />
        <div className="relative px-6 py-24 lg:px-16">
          <Bloom className="absolute right-8 top-8 h-20 w-20 text-gold/40" />
          <Reveal><p className="eyebrow text-gold-light">Catering</p></Reveal>
          <h2 className="mt-5 font-display text-5xl leading-tight md:text-6xl">Delicious food, <span className="font-script text-gold-grad">beautifully served</span></h2>
          <div className="mt-12 space-y-8">
            {catering.map(({ name, Icon, text }, i) => (
              <Reveal key={name} delay={i * 0.1} className="flex gap-5 border-b border-ivory/10 pb-8 last:border-0">
                <Icon weight="thin" size={38} className="shrink-0 text-gold-light" />
                <div><h3 className="font-display text-2xl">{name}</h3><p className="mt-1 text-ivory/70">{text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    <Gallery />
    <CTA />
  </>);
}
