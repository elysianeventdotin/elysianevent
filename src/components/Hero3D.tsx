'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Image from 'next/image';
const Scene = dynamic(() => import('./Scene3D'), { ssr: false });
export default function Hero3D({ staticOnly = false }: { staticOnly?: boolean }) {
  const [ok, setOk] = useState<boolean | null>(null);
  useEffect(() => {
    const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const low = (navigator.hardwareConcurrency || 4) < 4 || ('deviceMemory' in navigator && (navigator as unknown as { deviceMemory: number }).deviceMemory < 3);
    let gl = false; try { gl = !!document.createElement('canvas').getContext('webgl2'); } catch {}
    setOk(!rm && !low && gl && innerWidth >= 1024 && !staticOnly);
  }, []);
  if (ok === false || staticOnly) return (
    <div className="relative h-full w-full"><Image src="/img/cloche.svg" alt="" fill className="object-contain p-10 opacity-90" /></div>
  );
  return ok ? <Scene /> : null;
}
