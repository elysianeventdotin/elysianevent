import Image from 'next/image';
import { Reveal } from './Motion';
import { Corner, Bloom, Ornament, Jasmine } from './Floral';
import { alt } from '@/lib/alts';
const items = [
  { src: '/img/g-ritual.webp', cls: 'md:col-span-2 md:row-span-2', cap: 'Ceremony' },
  { src: '/img/g-thali.webp', cls: '', cap: 'Kerala flavours' },
  { src: '/img/g-arch.webp', cls: 'md:row-span-2', cap: 'Floral arches' },
  { src: '/img/g-desserts.webp', cls: '', cap: 'Sweet tables' },
  { src: '/img/g-outdoor-stage.webp', cls: 'md:col-span-2', cap: 'Garden stages' },
  { src: '/img/g-couple.webp', cls: 'md:row-span-2', cap: 'Moments' },
  { src: '/img/g-table.webp', cls: 'md:row-span-2', cap: 'Candlelit tables' },
  { src: '/img/g-longtable.webp', cls: 'md:col-span-2', cap: 'Long-table feasts' },
];
export default function Gallery() {
  return (
    <section className="relative overflow-hidden bg-ivory px-6 py-28">
      <Jasmine className="absolute left-6 top-10 h-24 w-36 text-gold/60" />
      <Bloom className="absolute right-10 top-16 hidden h-20 w-20 text-gold/50 md:block" />
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="eyebrow text-gold-dark">A glimpse of the feeling</p>
          <h2 className="mt-5 font-display text-5xl text-forest md:text-6xl">You enjoy the <span className="font-script text-gold-grad text-6xl md:text-7xl">Moments</span></h2>
          <Ornament className="mx-auto mt-6 h-6 w-64 text-gold" />
        </div>
        <div className="relative mt-16">
          <Corner className="absolute -left-5 -top-5 z-10 h-24 w-24 text-gold" />
          <Corner className="absolute -bottom-5 -right-5 z-10 h-24 w-24 rotate-180 text-gold" />
          <div className="grid auto-rows-[220px] grid-flow-dense grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[240px]">
            {items.map((it, i) => (
              <Reveal key={it.src} delay={(i % 4) * 0.08} y={60} className={`group relative overflow-hidden ${it.cls} ${i === 0 ? 'col-span-2' : ''}`}>
                <Image src={it.src} alt={alt(it.src)} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover transition duration-[1.6s] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-ink/60 via-transparent opacity-80 transition group-hover:opacity-100" />
                <p className="absolute bottom-4 left-5 font-script text-2xl text-ivory md:text-3xl">{it.cap}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
