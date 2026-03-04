import { motion } from 'motion/react';
import { Phone, Wrench } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-lg border-bottom border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-safety-orange rounded flex items-center justify-center">
            <Wrench size={18} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:block">
            LOUIS’S <span className="text-safety-orange">WORKSHOP</span>
          </span>
          <span className="font-bold text-lg tracking-tight sm:hidden">
            LMW
          </span>
        </div>

        <nav className="flex items-center gap-4">
          <a 
            href="tel:+27123456789" 
            className="flex items-center gap-2 bg-safety-orange hover:bg-safety-orange/90 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all active:scale-95 shadow-lg shadow-safety-orange/20"
          >
            <Phone size={16} />
            <span className="hidden xs:inline">Call Now</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
