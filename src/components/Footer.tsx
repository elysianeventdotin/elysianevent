import Link from 'next/link';
import { Phone, WhatsappLogo, Globe } from '@phosphor-icons/react/dist/ssr';
import { Logo } from './Logo';
import { brand } from '@/lib/brand';
import { Sprig } from './Floral';
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-ink text-ivory/80">
      <Sprig className="absolute -left-6 bottom-0 h-72 text-gold/25" />
      <Sprig className="absolute -right-6 bottom-0 h-72 text-gold/25" flip />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo variant="white" className="h-20" />
          <p className="mt-6 max-w-sm leading-relaxed">Food, flowers and gentle hospitality for the days you will remember. We make your dream day beautiful, with the best service at a fair cost.</p>
          <p className="mt-6 font-script text-3xl text-gold-light">You enjoy the Moments.</p>
        </div>
        <div>
          <p className="eyebrow text-gold">Explore</p>
          <ul className="mt-5 space-y-3">{[['/', 'Home'], ['/our-story', 'Our Story'], ['/services', 'Services'], ['/contact', 'Contact']].map(([h, l]) => <li key={h}><Link href={h} className="hover:text-gold-light">{l}</Link></li>)}</ul>
        </div>
        <div>
          <p className="eyebrow text-gold">Reach us</p>
          <ul className="mt-5 space-y-4">
            {brand.contacts.map((c) => (
              <li key={c.tel}><p className="text-ivory">{c.name}</p>
                <div className="mt-1 flex items-center gap-4 text-sm">
                  <a href={`tel:${c.tel}`} className="flex items-center gap-1.5 hover:text-gold-light"><Phone weight="light" size={16} />{c.phone}</a>
                  <a href={c.wa} aria-label={`WhatsApp ${c.name}`} className="hover:text-gold-light"><WhatsappLogo weight="light" size={18} /></a>
                </div></li>
            ))}
            <li><a href={`https://${brand.site}`} className="flex items-center gap-1.5 text-sm hover:text-gold-light"><Globe weight="light" size={16} />{brand.site}</a></li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-ivory/10 py-6 text-center text-xs tracking-widest text-ivory/50">© {new Date().getFullYear()} ELYSIAN EVENT MANAGEMENT · EST 2025</div>
    </footer>
  );
}
