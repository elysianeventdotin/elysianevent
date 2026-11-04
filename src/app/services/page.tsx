import type { Metadata } from 'next';
import { services, catering } from '@/lib/services';
import PageHero from '@/components/PageHero';
import { Reveal, SplitText, ParallaxImage, Marquee } from '@/components/Motion';
import { Ornament, Bloom, Corner, Jasmine } from '@/components/Floral';
import Image from 'next/image';
import { alt } from '@/lib/alts';
import CTA from '@/components/CTA';
import { serviceNames } from '@/lib/brand';
export const metadata: Metadata = { title: 'Services', description: 'Decoration, stage, lighting, sound, catering, photography, weddings, engagements, birthdays and corporate events.' };
export default function Services() {
  return (<>
    <PageHero eyebrow="Services" title="Everything your day needs," script="beautifully together" text="One team for the flowers, the stage, the light, the sound, the photographs and the food." img="/img/hdr-services.webp" />
    <section className="relative overflow-hidden bg-ivory px-6 py-28">
      <Jasmine className="absolute right-6 top-10 h-24 w-36 text-gold/60" />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl"><p className="eyebrow text-gold-dark">Our services</p><h2 className="mt-5 font-display text-5xl text-forest"><SplitText text="Ten ways we care for your celebration" /></h2><Ornament className="mt-6 h-6 w-60 text-gold" /></div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ name, Icon, text, img }, i) => (
            <Reveal key={name} delay={(i % 3) * 0.1} className={`group relative overflow-hidden border border-gold/25 bg-cream ${i === 0 || i === 9 ? "sm:col-span-2" : ""}`}>
              <div className={`relative aspect-[4/3] overflow-hidden ${i === 0 || i === 9 ? "sm:aspect-[8/3]" : ""}`}>
                <Image src={img} alt={alt(img)} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover transition duration-[1.4s] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-ink/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-5 font-display text-sm tracking-[0.3em] text-gold-light">{String(i + 1).padStart(2, '0')}</span>
                <span className="absolute -bottom-7 right-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-ivory transition duration-500 group-hover:bg-forest"><Icon weight="thin" size={28} className="text-gold-dark transition group-hover:text-gold-light" /></span>
              </div>
              <div className="p-7 pt-9"><h3 className="font-display text-3xl text-forest">{name}</h3><p className="mt-2 leading-relaxed text-forest-ink/70">{text}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    <Marquee items={serviceNames} />
    <section id="catering" className="relative overflow-hidden bg-cream px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div className="relative">
          <Corner className="absolute -left-4 -top-4 z-10 h-24 w-24 text-gold" />
          <ParallaxImage src="/img/buffet-light.webp" alt="Copper chafing dishes on a bright buffet with hydrangeas" className="aspect-[4/5] rounded-tr-[10rem]" />
          <Bloom className="absolute -bottom-8 -right-6 h-24 w-24 text-gold" />
        </div>
        <div>
          <p className="eyebrow text-gold-dark">Catering</p>
          <h2 className="mt-5 font-display text-5xl text-forest md:text-6xl">Event Catering <span className="font-script text-gold-grad">Made Simple</span></h2>
          <p className="mt-6 text-lg text-forest-ink/75">Delicious food and seamless catering for your most special moments.</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {catering.map(({ name, Icon, text, img }, i) => (
              <Reveal key={name} delay={i * 0.1} className="group overflow-hidden border border-gold/30 bg-ivory transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(11,46,39,.4)]">
                <div className="relative aspect-[16/10] overflow-hidden"><Image src={img} alt={alt(img)} fill sizes="(max-width:640px) 100vw, 25vw" className="object-cover transition duration-[1.4s] group-hover:scale-110" /></div>
                <div className="p-6"><Icon weight="thin" size={38} className="text-gold-dark" /><h3 className="mt-5 font-display text-2xl text-forest">{name}</h3><p className="mt-2 text-sm leading-relaxed text-forest-ink/70">{text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
    <CTA />
  </>);
}
