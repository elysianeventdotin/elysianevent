import Image from 'next/image';
import { SplitText, Reveal } from './Motion';
import { Corner, Petals, Swoosh, Sprig } from './Floral';
export default function PageHero({ eyebrow, title, script, text, img }: { eyebrow: string; title: string; script: string; text: string; img: string }) {
  return (
    <section className="grain relative flex min-h-[78vh] items-end overflow-hidden bg-forest-deep pb-32 pt-40 text-ivory">
      <Image src={img} alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-ink/70 via-forest-deep/50 to-forest-deep" />
      <Petals count={7} />
      <Corner className="absolute left-6 top-28 hidden h-28 w-28 text-gold/50 md:block" />
      <Sprig className="absolute -right-4 bottom-10 h-80 text-gold/40" flip />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <Reveal><p className="eyebrow text-gold-light">{eyebrow}</p></Reveal>
        <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[0.95] md:text-8xl">
          <SplitText text={title} /> <span className="font-script text-gold-grad block pt-2 text-6xl md:text-8xl">{script}</span>
        </h1>
        <Reveal delay={0.4}><p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/75">{text}</p></Reveal>
      </div>
      <Swoosh className="absolute inset-x-0 bottom-0 h-20 w-full md:h-28" />
    </section>
  );
}
