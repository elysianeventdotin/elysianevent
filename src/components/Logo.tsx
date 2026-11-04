type V = 'green' | 'gold' | 'white';
const fills: Record<V, string> = { green: '#0F3D33', gold: 'url(#lg-gold)', white: '#FAF6EE' };
export function LogoMark({ variant = 'green', className = 'h-10 w-auto' }: { variant?: V; className?: string }) {
  return (
    <svg viewBox="0 0 64 84" className={className} aria-hidden="true">
      <defs><linearGradient id="lg-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#E6CB8A"/><stop offset=".5" stopColor="#C9A24B"/><stop offset="1" stopColor="#9C7A2E"/></linearGradient>
        <mask id="lg-cut"><rect width="64" height="84" fill="#fff"/>
          <ellipse cx="24" cy="50" rx="5" ry="7" fill="#000"/><rect x="22.6" y="55" width="2.8" height="20" rx="1.4" fill="#000"/>
          <path d="M35 42v10c0 2.5 2 4 4 4.3V75a1.6 1.6 0 0 0 3.2 0V56.3c2-.3 4-1.8 4-4.3V42h-1.8v9h-1.6v-9h-1.8v9h-1.6v-9h-1.8v9h-1.6v-9z" fill="#000"/>
        </mask></defs>
      <path mask="url(#lg-cut)" fill={fills[variant]} d="M32 2c4 9 2 15-2 21 6-3 9-8 9-13 9 9 21 24 21 41 0 17-12.5 31-28 31S4 68 4 51C4 33 20 23 26 12c2-3 4-6 6-10z"/>
    </svg>
  );
}
export function Logo({ variant = 'green', light = false }: { variant?: V; light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark variant={variant} className="h-11 w-auto" />
      <span className="leading-none">
        <span className={`block font-display text-2xl font-bold tracking-[0.14em] ${light ? 'text-ivory' : 'text-forest'}`}>ELYSIAN</span>
        <span className={`block text-[0.58rem] tracking-[0.3em] mt-1 ${light ? 'text-gold-light' : 'text-gold-dark'}`}>EVENT MANAGEMENT</span>
      </span>
    </span>
  );
}
