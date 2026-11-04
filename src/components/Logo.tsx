import type { CSSProperties } from 'react';
type V = 'green' | 'gold' | 'white';
const fills: Record<V, string> = { green: 'bg-forest', gold: 'bg-gold-grad', white: 'bg-ivory' };
const mask = (img: string, ratio: string): CSSProperties => ({
  aspectRatio: ratio,
  WebkitMaskImage: `url('${img}')`, maskImage: `url('${img}')`,
  WebkitMaskSize: 'contain', maskSize: 'contain',
  WebkitMaskPosition: 'center', maskPosition: 'center',
  WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
});
export function LogoMark({ variant = 'green', className = 'h-10 w-auto' }: { variant?: V; className?: string }) {
  return <span aria-hidden="true" className={`inline-block ${fills[variant]} ${className}`} style={mask('/logo-mark.png', '326 / 437')} />;
}
export function Logo({ variant = 'green', className = 'h-16' }: { variant?: V; className?: string }) {
  return <span role="img" aria-label="Elysian Event Management" className={`inline-block ${fills[variant]} ${className}`} style={mask('/logo.png', '570 / 566')} />;
}
