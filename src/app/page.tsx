import Link from 'next/link';
import { ArrowRight, Phone, Leaf, Sun, Handshake, BookOpen } from '@phosphor-icons/react/dist/ssr';
import { Reveal, SplitText, ParallaxImage, Marquee, HeroBackdrop, ArchImage, RotatingBadge } from '@/components/Motion';
import { Sprig, Bloom, Jasmine, Ornament, Corner, Swoosh, Petals, Butterfly } from '@/components/Floral';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';
import { services, catering } from '@/lib/services';
import { brand, serviceNames } from '@/lib/brand';

export default function Home() {
  return (<>
    {/* HERO: cinematic dusk — full-bleed mandap, golden light bloom, arch portrait & editorial type */}
    <section className="grain relative min-h-[100svh] overflow-hidden bg-forest-deep text-ivory">
      <HeroBackdrop src="/img/hero-mandap.webp" position="object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-ink/95 via-forest-ink/50 to-forest-ink/15" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-ink/80 via-transparent to-forest-ink/55" />
      <div className="absolute inset-0 bg-[radial-gradient(110%_80%_at_75%_12%,rgba(230,203,138,.3),transparent_55%)] mix-blend-screen" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(112deg,transparent_38%,rgba(243,223,168,.12)_50%,transparent_64%)] mix-blend-screen" aria-hidden="true" />
      <Petals count={10} />
      <Butterfly className="left-[58%] top-[24%] hidden h-14 w-16 lg:block" />
      <p className="absolute right-7 top-[30%] hidden -translate-y-1/2 rotate-90 text-[.66rem] font-medium uppercase tracking-[.42em] text-ivory/50 lg:block" aria-hidden="true">Kerala · Est 2025</p>
      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl items-end px-6 pb-44 pt-40 md:pb-48">
        <div className="max-w-2xl">
          <Reveal><p className="eyebrow flex items-center gap-4 text-gold-light"><span className="h-px w-10 bg-gold-light/70" aria-hidden="true" />Elysian Event Management</p></Reveal>
          <h1 className="mt-8 font-display text-[3.7rem] font-medium leading-[0.95] [text-shadow:0_3px_44px_rgba(6,16,12,.5)] sm:text-7xl xl:text-[6.6rem]">
            <SplitText text="Event Catering" delay={0.25} />
            <span className="font-script text-gold-grad -mt-[0.18em] block pt-2 text-[4rem] font-normal sm:text-8xl xl:text-[6.9rem]">made simple</span>
          </h1>
          <svg viewBox="0 0 420 24" className="mt-3 h-5 w-72 text-gold-light" aria-hidden="true"><path d="M2 18 C120 2 300 2 418 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="460" strokeDashoffset="460"><animate attributeName="stroke-dashoffset" to="0" dur="2s" begin=".9s" fill="freeze" /></path></svg>
          <Reveal delay={0.7}><p className="mt-7 max-w-md text-lg leading-relaxed text-ivory/75">Delicious food and seamless catering for your most special moments — real flowers, warm light and the people you love.</p></Reveal>
          <Reveal delay={0.9} className="mt-10 flex flex-wrap items-center gap-6">
            <Link href="/contact" className="bg-gold-grad group inline-flex items-center gap-3 px-8 py-4 font-medium text-forest-ink shadow-[0_24px_60px_-20px_rgba(201,162,75,.6)] transition hover:brightness-110">Reserve Your Date <ArrowRight weight="light" size={18} className="transition group-hover:translate-x-1" /></Link>
            <a href={`tel:${brand.contacts[0].tel}`} className="inline-flex items-center gap-2 border-b border-ivory/30 pb-1 text-ivory/85 transition hover:border-gold-light hover:text-gold-light"><Phone weight="thin" size={20} /> {brand.contacts[0].phone}</a>
            <Link href="/brochure" className="inline-flex items-center gap-2 border-b border-ivory/30 pb-1 text-ivory/85 transition hover:border-gold-light hover:text-gold-light"><BookOpen weight="thin" size={20} /> Brochure & Menu</Link>
          </Reveal>
          <Reveal delay={1.1}><p className="mt-12 text-[.66rem] font-medium uppercase tracking-[.34em] text-ivory/55">Weddings &nbsp;·&nbsp; Engagements &nbsp;·&nbsp; Birthdays &nbsp;·&nbsp; Corporate</p></Reveal>
        </div>
      </div>
      <div className="absolute bottom-28 right-[6.5%] hidden lg:block">
        <ArchImage src="/img/g-table.webp" alt="Table dressed with white blooms, taper candles and crystal glassware" className="h-[52vh] w-[19vw] min-w-[240px] max-w-[320px]" />
        <RotatingBadge className="absolute -left-12 top-8 h-24 w-24 rounded-full bg-forest-ink/45 text-gold-light/90 backdrop-blur-sm" />
      </div>
      <div className="absolute bottom-40 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/60 md:flex" aria-hidden="true">
        <span className="eyebrow text-[.58rem]">Scroll</span>
        <svg viewBox="0 0 10 56" className="h-12 w-2.5"><line x1="5" y1="0" x2="5" y2="56" stroke="currentColor" strokeWidth="1" opacity=".5" /><circle cx="5" cy="6" r="2.2" fill="#E6CB8A"><animate attributeName="cy" values="4;50" dur="2.2s" repeatCount="indefinite" /></circle></svg>
      </div>
      <Swoosh className="absolute inset-x-0 bottom-0 h-20 w-full md:h-28" />
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
        <ParallaxImage src="/img/svc-catering.webp" alt="Chafing dishes of fresh food dressed with white flowers on a buffet" className="min-h-[420px]" strength={60} />
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
