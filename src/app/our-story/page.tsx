import type { Metadata } from 'next';
import { ChatCircleText, PencilLine, CookingPot, Champagne, Leaf, HeartStraight, Handshake, Sparkle } from '@phosphor-icons/react/dist/ssr';
import PageHero from '@/components/PageHero';
import { Reveal, SplitText, ParallaxImage } from '@/components/Motion';
import { Ornament, Corner, Jasmine, Bloom, Sprig } from '@/components/Floral';
import { alt } from '@/lib/alts';
import CTA from '@/components/CTA';
export const metadata: Metadata = { title: 'Our Story', description: 'Elysian Event Management began in 2025 with a simple belief: celebrations should feel natural, generous and calm.' };
const steps = [
  { Icon: ChatCircleText, t: 'Consult', d: 'We sit with you, listen to the story of your day and understand your guests, your tastes and your budget.' },
  { Icon: PencilLine, t: 'Design', d: 'Menus, flowers, stage, light and sound come together in one plan you can see and shape before anything is booked.' },
  { Icon: CookingPot, t: 'Prepare', d: 'Ingredients are chosen fresh, décor is assembled with care and every team member knows their part.' },
  { Icon: Champagne, t: 'Celebrate', d: 'On the day we work quietly in the background, so you can be fully present with the people you love.' },
];
const values = [
  { Icon: Leaf, t: 'Natural', d: 'Fresh flowers, seasonal produce and settings that let the place breathe.' },
  { Icon: HeartStraight, t: 'Warm', d: 'Hospitality that feels personal, the way family would host.' },
  { Icon: Handshake, t: 'Honest', d: 'The best service at a lower cost, with clear plans and no surprises.' },
  { Icon: Sparkle, t: 'Graceful', d: 'Elegance in the small things: a folded napkin, a lit path, a perfect plate.' },
];
export default function OurStory() {
  return (<>
    <PageHero eyebrow="Our Story · Est 2025" title="Born from a love of" script="gathering" text="Elysian began in 2025 with one quiet promise: to make your dream day beautiful, and to make it simple." img="/img/hdr-story.webp" />
    <section className="relative overflow-hidden bg-ivory px-6 py-28">
      <Jasmine className="absolute left-4 top-12 h-24 w-36 text-gold/60" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <Reveal><p className="eyebrow text-gold-dark">Where it began</p></Reveal>
          <h2 className="mt-5 font-display text-5xl leading-tight text-forest"><SplitText text="A table, a garden, and the people around it" /></h2>
          <Ornament className="mt-8 h-6 w-60 text-gold" />
          <Reveal delay={0.2}><p className="mt-8 text-lg leading-relaxed text-forest-ink/75">We started Elysian in Kerala in 2025 because we kept seeing the same thing: families spending their celebration worrying instead of enjoying. So we brought catering, decoration, stage, lighting, sound and photography under one caring team.</p></Reveal>
          <Reveal delay={0.3}><p className="mt-5 text-lg leading-relaxed text-forest-ink/75">Our philosophy is simple. Cook with what is fresh and in season. Decorate with what grows. Light softly. Serve generously. And keep the cost fair, so more families can have the day they imagine.</p></Reveal>
        </div>
        <div className="relative">
          <Corner className="absolute -right-4 -top-4 z-10 h-24 w-24 rotate-90 text-gold" />
          <ParallaxImage src="/img/g-couple.webp" alt="Couple standing under a canopy of flowers" className="aspect-[4/5] rounded-b-[12rem]" />
          <Bloom className="absolute -bottom-8 -left-8 h-24 w-24 text-gold" />
        </div>
      </div>
    </section>
    <section className="relative bg-ivory px-6 pb-28">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {[['/img/story-setting.webp', 'Set with care', 'rounded-tl-[8rem]'], ['/img/story-thali.webp', 'Cooked with patience', ''], ['/img/story-dining.webp', 'Dressed with flowers', 'rounded-br-[8rem]']].map(([src, cap, r], i) => (
          <Reveal key={src} delay={i * 0.12} className="relative">
            <ParallaxImage src={src} alt={alt(src)} className={`aspect-[4/5] ${r}`} strength={40} />
            <p className="mt-4 text-center font-script text-3xl text-gold-dark">{cap}</p>
          </Reveal>
        ))}
      </div>
    </section>
    <section className="grain relative overflow-hidden bg-forest-deep px-6 py-28 text-ivory">
      <Sprig className="absolute -left-6 bottom-0 h-80 text-gold/30" />
      <div className="mx-auto max-w-6xl">
        <div className="text-center"><p className="eyebrow text-gold-light">How we work</p><h2 className="mt-5 font-display text-5xl md:text-6xl">Four <span className="font-script text-gold-grad">gentle</span> steps</h2><Ornament className="mx-auto mt-6 h-6 w-60 text-gold" /></div>
        <ol className="relative mt-20 grid gap-14 md:grid-cols-4 md:gap-8">
          <svg className="absolute left-0 top-9 hidden h-6 w-full md:block" viewBox="0 0 1000 24" preserveAspectRatio="none" aria-hidden="true"><path d="M0 12 C250 -4 500 28 1000 12" fill="none" stroke="#C9A24B" strokeOpacity=".5" strokeDasharray="4 6" /></svg>
          {steps.map(({ Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.15}><li className="relative list-none">
              <span className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-gold/60 bg-forest-deep"><Icon weight="thin" size={34} className="text-gold-light" /></span>
              <p className="mt-6 font-display text-sm tracking-[0.3em] text-gold">0{i + 1}</p>
              <h3 className="mt-2 font-display text-3xl">{t}</h3><p className="mt-3 leading-relaxed text-ivory/70">{d}</p>
            </li></Reveal>
          ))}
        </ol>
      </div>
    </section>
    <section className="relative bg-cream px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center"><p className="eyebrow text-gold-dark">What we hold dear</p><h2 className="mt-5 font-display text-5xl text-forest">Our values</h2><Ornament className="mx-auto mt-6 h-6 w-60 text-gold" /></div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.1} className="relative rounded-t-full border border-gold/30 bg-ivory px-8 pb-10 pt-16 text-center">
              <Icon weight="thin" size={44} className="mx-auto text-gold-dark" /><h3 className="mt-6 font-display text-3xl text-forest">{t}</h3><p className="mt-3 text-forest-ink/70">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    <CTA />
  </>);
}
