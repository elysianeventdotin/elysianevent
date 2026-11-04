import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Great_Vibes, Manrope } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import WhatsAppChat from '@/components/WhatsAppChat';
const display = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], variable: '--f-display', display: 'swap' });
const script = Great_Vibes({ subsets: ['latin'], weight: '400', variable: '--f-script', display: 'swap' });
const sans = Manrope({ subsets: ['latin'], variable: '--f-sans', display: 'swap' });
export const metadata: Metadata = {
  metadataBase: new URL('https://www.elysianevent.in'),
  title: { default: 'Elysian Event Management | Event Catering Made Simple', template: '%s | Elysian Event Management' },
  description: 'Weddings, engagements, birthdays and corporate events in Kerala. Decoration, stage, lighting, sound, photography and catering, made simple.',
  openGraph: { title: 'Elysian Event Management', description: 'Delicious food and seamless catering for your most special moments.', images: ['/img/mandap.webp'], type: 'website' },
  icons: { icon: '/favicon.png' },
};
export const viewport: Viewport = { themeColor: '#10271C' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${script.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ivory focus:p-3">Skip to content</a>
        <SmoothScroll /><Nav />
        <main id="main">{children}</main>
        <Footer /><WhatsAppChat />
      </body>
    </html>
  );
}
