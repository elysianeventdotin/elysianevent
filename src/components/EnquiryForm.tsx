'use client';
import { useState } from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';
import { brand } from '@/lib/brand';
const types = ['Wedding', 'Engagement', 'Birthday', 'Corporate Event', 'Private Dining', 'Other'];
const field = 'w-full border-0 border-b border-forest/25 bg-transparent px-0 py-3 text-forest-ink placeholder:text-forest-ink/40 focus:border-gold focus:outline-none focus:ring-0';
export default function EnquiryForm() {
  const [to, setTo] = useState(brand.contacts[0].wa);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget); const g = (k: string) => String(f.get(k) || '').trim();
    const msg = [`Hello Elysian, I would like to reserve a date.`, `Name: ${g('name')}`, `Phone: ${g('phone')}`, `Event: ${g('type')}`, `Date: ${g('date')}`, `Guests: ${g('guests')}`, g('message') && `Message: ${g('message')}`].filter(Boolean).join('\n');
    window.open(`${to}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  }
  return (
    <form onSubmit={submit} className="grid gap-8 sm:grid-cols-2">
      <label className="block"><span className="eyebrow text-gold-dark">Name</span><input required name="name" autoComplete="name" className={field} placeholder="Your full name" /></label>
      <label className="block"><span className="eyebrow text-gold-dark">Phone</span><input required name="phone" type="tel" autoComplete="tel" className={field} placeholder="+91" /></label>
      <label className="block"><span className="eyebrow text-gold-dark">Event type</span><select required name="type" className={field} defaultValue=""><option value="" disabled>Select an event</option>{types.map((t) => <option key={t}>{t}</option>)}</select></label>
      <label className="block"><span className="eyebrow text-gold-dark">Date</span><input required name="date" type="date" className={field} /></label>
      <label className="block"><span className="eyebrow text-gold-dark">Guests</span><input name="guests" type="number" min={1} className={field} placeholder="Approximate count" /></label>
      <label className="block"><span className="eyebrow text-gold-dark">Send to</span><select value={to} onChange={(e) => setTo(e.target.value)} className={field}>{brand.contacts.map((c) => <option key={c.wa} value={c.wa}>{c.name}</option>)}</select></label>
      <label className="block sm:col-span-2"><span className="eyebrow text-gold-dark">Message</span><textarea name="message" rows={4} className={field} placeholder="Tell us about the day you imagine" /></label>
      <button className="bg-gold-grad inline-flex items-center justify-center gap-3 px-8 py-4 font-medium text-forest-ink transition hover:brightness-110 sm:col-span-2 sm:justify-self-start"><WhatsappLogo weight="light" size={20} /> Reserve Your Date Today</button>
    </form>
  );
}
