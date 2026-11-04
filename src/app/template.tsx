'use client';
import { motion } from 'framer-motion';
export default function Template({ children }: { children: React.ReactNode }) {
  return (<>
    <motion.div className="pointer-events-none fixed inset-0 z-[70] bg-forest-deep" initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }} style={{ originY: 0 }} aria-hidden="true" />
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
  </>);
}
