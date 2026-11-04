import type { Metadata } from 'next';
import { Phone, WhatsappLogo, Globe } from '@phosphor-icons/react/dist/ssr';
import PageHero from '@/components/PageHero';
import { Reveal } from '@/components/Motion';
import { Ornament, Corner, Sprig, Bloom } from '@/components/Floral';
import Image from 'next/image';
import EnquiryForm from '@/components/EnquiryForm';
import { brand } from '@/lib/brand';
export const metadata: Metadata = { title: 'Contact', description: 'Reserve your date with Elysian Event Management. Call or WhatsApp Al Sabith or Kunhava.' };
export default function Contact() {
  return (<>
    <PageHero eyebrow="Contact" title="Let us begin with" script="your story" text="Call, message on WhatsApp or send an enquiry. We will reply with care." img="/img/hdr-contact.webp" />
    <section className="relative overflow-hidden bg-ivory px-6 py-28">
      <Sprig className="absolute -right-6 bottom-0 h-80 text-forest/15" flip />
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          {brand.contacts.map((c, i) => (
            <Reveal key={c.tel} delay={i * 0.1} className="relative border border-gold/30 bg-cream p-8">
              <Corner className="absolute right-3 top-3 h-12 w-12 rotate-90 text-gold/70" />
              <p className="eyebrow text-gold-dark">Speak with</p>
              <h2 className="mt-2 font-display text-4xl text-forest">{c.name}</h2>
              <div className="mt-6 flex flex-wrap gap-6">
                <a href={`tel:${c.tel}`} className="flex items-center gap-2 text-forest hover:text-gold-dark"><Phone weight="thin" size={24} />{c.phone}</a>
                <a href={c.wa} target="_blank" rel="noopener" className="flex items-center gap-2 text-forest hover:text-gold-dark"><WhatsappLogo weight="thin" size={24} />WhatsApp</a>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.2} className="flex items-center gap-3 p-2 text-forest"><Globe weight="thin" size={26} className="text-gold-dark" /><a href={`https://${brand.site}`} className="hover:text-gold-dark">{brand.site}</a></Reveal>
          <Reveal delay={0.25} className="relative">
            <Corner className="absolute -left-3 -top-3 z-10 h-20 w-20 text-gold" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-tr-[7rem]"><Image src="/img/contact-roses.webp" alt="Vase of pink roses and baby's breath" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" /></div>
            <Bloom className="absolute -bottom-6 -right-4 h-20 w-20 text-gold" />
          </Reveal>
        </div>
        <div className="relative border border-gold/25 bg-white/60 p-8 shadow-[0_40px_80px_-50px_rgba(11,46,39,.4)] md:p-12">
          <h2 className="font-display text-5xl text-forest">Reserve Your Date <span className="font-script text-gold-grad">Today</span></h2>
          <Ornament className="mt-4 h-6 w-56 text-gold" />
          <p className="mb-10 mt-4 text-forest-ink/70">Submitting opens WhatsApp with your details filled in, ready to send.</p>
          <EnquiryForm />
        </div>
      </div>
    </section>
  </>);
}
