'use client';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PaperPlaneRight, WhatsappLogo, X } from '@phosphor-icons/react';
import { brand } from '@/lib/brand';
const wa = brand.contacts[0].wa;
const stamp = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const input = 'w-full rounded-full bg-white px-4 py-2.5 text-sm text-forest-ink placeholder:text-forest-ink/40 focus:outline-none focus:ring-1 focus:ring-[#25D366]';
export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [msgs, setMsgs] = useState<{ me: boolean; text: string; at: string }[]>([]);
  const log = useRef<HTMLDivElement>(null);
  useEffect(() => { if (log.current) log.current.scrollTop = log.current.scrollHeight; }, [msgs, open]);
  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    addEventListener('keydown', esc);
    return () => removeEventListener('keydown', esc);
  }, [open]);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const t = text.trim(), n = name.trim();
    if (!t) return;
    setMsgs((m) => [...m, { me: true, text: t, at: stamp() }]);
    setText('');
    const msg = ['Hello Elysian!', n && `Name: ${n}`, `Message: ${t}`].filter(Boolean).join('\n');
    window.open(`${wa}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  }
  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-4 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel" role="dialog" aria-label="WhatsApp chat"
            className="flex h-[480px] max-h-[70vh] w-[min(92vw,380px)] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-forest/10 bg-[#ECE5DD] shadow-2xl shadow-forest-ink/40"
            initial={{ opacity: 0, y: 24, scale: 0.92 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.92 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 bg-forest-deep px-4 py-3 text-ivory">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white"><WhatsappLogo weight="fill" size={22} /></span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-lg leading-tight">{brand.full}</p>
                <p className="text-xs text-ivory/60">online · replies on WhatsApp</p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-ivory/70 transition hover:text-ivory"><X size={20} weight="light" /></button>
            </div>
            <div ref={log} className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-5" aria-live="polite">
              <div className="max-w-[85%] self-start rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 text-sm leading-relaxed text-forest-ink shadow-sm">
                Hello! Planning a wedding, catering or decor? Tell us about it and we will continue the conversation on WhatsApp.
                <span className="mt-1 block text-right text-[10px] text-forest-ink/40">{stamp()}</span>
              </div>
              {msgs.map((m, i) => (
                <div key={i} className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed text-forest-ink shadow-sm ${m.me ? 'self-end rounded-br-sm bg-[#DCF8C6]' : 'self-start rounded-tl-sm bg-white'}`}>
                  {m.text}
                  <span className="mt-1 block text-right text-[10px] text-forest-ink/40">{m.at}</span>
                </div>
              ))}
            </div>
            <form onSubmit={submit} className="space-y-2 border-t border-forest/10 bg-[#F0F0F0] p-3">
              <input value={name} onChange={(e) => setName(e.target.value)} aria-label="Your name (optional)" className={input} placeholder="Your name (optional)" />
              <div className="flex items-center gap-2">
                <input required value={text} onChange={(e) => setText(e.target.value)} aria-label="Type a message" className={input} placeholder="Type a message" />
                <button type="submit" aria-label="Send on WhatsApp" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:brightness-105"><PaperPlaneRight weight="fill" size={20} /></button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label={open ? 'Close WhatsApp chat' : 'Chat with us on WhatsApp'}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-forest-ink/30 transition hover:scale-105"
      >
        {open ? <X size={26} weight="light" /> : <WhatsappLogo weight="fill" size={30} />}
      </button>
    </div>
  );
}
