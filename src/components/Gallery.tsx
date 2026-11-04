import Image from 'next/image';
import { Reveal } from './Motion';
import { Corner, Bloom, Ornament, Jasmine } from './Floral';
import { alt } from '@/lib/alts';
type Tile = { src: string; cap: string; aspect: string; arch?: boolean };
const columns: { off: string; tiles: Tile[] }[] = [
  { off: '', tiles: [
    { src: '/img/g-ritual.webp', cap: 'Ceremony', aspect: 'aspect-[4/3]' },
    { src: '/img/g-desserts.webp', cap: 'Sweet tables', aspect: 'aspect-[3/4]' },
  ]},
  { off: 'pt-8 md:pt-16', tiles: [
    { src: '/img/g-thali.webp', cap: 'Kerala flavours', aspect: 'aspect-[3/4]' },
    { src: '/img/g-outdoor-stage.webp', cap: 'Garden stages', aspect: 'aspect-[4/3]' },
  ]},
  { off: 'md:pt-28', tiles: [
    { src: '/img/g-arch.webp', cap: 'Floral arches', aspect: 'aspect-[3/4]', arch: true },
    { src: '/img/g-longtable.webp', cap: 'Long-table feasts', aspect: 'aspect-[4/3]' },
  ]},
  { off: 'pt-8 md:pt-10', tiles: [
    { src: '/img/g-couple.webp', cap: 'Moments', aspect: 'aspect-[4/5]' },
    { src: '/img/g-table.webp', cap: 'Candlelit tables', aspect: 'aspect-[4/5]' },
  ]},
];
export default function Gallery() {
  return (
    <section className="relative overflow-hidden bg-ivory px-6 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,162,75,.08),transparent_60%)]" />
      <Jasmine className="absolute left-6 top-10 h-24 w-36 text-gold/60" />
      <Bloom className="absolute right-10 top-16 hidden h-20 w-20 text-gold/50 md:block" />
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="eyebrow flex items-center justify-center gap-4 text-gold-dark"><span className="h-px w-8 bg-gold-dark/60" aria-hidden="true" />A glimpse of the feeling<span className="h-px w-8 bg-gold-dark/60" aria-hidden="true" /></p>
          <h2 className="mt-5 font-display text-5xl text-forest md:text-6xl">You enjoy the <span className="font-script text-gold-grad text-6xl md:text-7xl">Moments</span></h2>
          <Ornament className="mx-auto mt-6 h-6 w-64 text-gold" />
        </div>
        <div className="relative mt-16">
          <Corner className="absolute -left-5 -top-5 z-10 h-24 w-24 text-gold" />
          <Corner className="absolute -bottom-5 -right-5 z-10 h-24 w-24 rotate-180 text-gold" />
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-4">
            {columns.map((col, ci) => (
              <div key={ci} className={`flex flex-col gap-8 md:gap-10 ${col.off}`}>
                {col.tiles.map((t, i) => (
                  <Reveal key={t.src} delay={(ci * 2 + i) * 0.07} y={50}>
                    <figure className="group">
                      <div className={`relative overflow-hidden ${t.aspect} ${t.arch ? 'rounded-t-[10rem]' : ''}`}>
                        <Image src={t.src} alt={alt(t.src)} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition duration-[1.6s] ease-out group-hover:scale-[1.06]" />
                        <div className="absolute inset-0 bg-forest-ink/0 transition duration-700 group-hover:bg-forest-ink/10" />
                        <div className="pointer-events-none absolute inset-3 border border-ivory/0 transition duration-700 group-hover:border-ivory/70" />
                      </div>
                      <figcaption className="mt-3 flex items-baseline justify-between gap-2">
                        <span className="font-script text-xl leading-none text-forest transition group-hover:text-gold-dark md:text-2xl">{t.cap}</span>
                        <span className="eyebrow text-[.6rem] text-gold-dark/70">{String(ci * 2 + i + 1).padStart(2, '0')}</span>
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
