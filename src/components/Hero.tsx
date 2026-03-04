import { motion } from 'motion/react';
import { ShieldCheck, Calendar, MapPin, Wrench } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-safety-orange/10 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-safety-orange text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck size={14} />
            Qualified & Insured
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-balance">
            Expert Car Servicing <br />
            <span className="text-safety-orange">That Comes To You.</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 text-balance">
            Qualified mechanic, professional tools, zero hassle. We service your car in your driveway while you relax at home.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="#booking"
              className="w-full sm:w-auto orange-gradient text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-safety-orange/20 transition-all hover:scale-105 active:scale-95"
            >
              Book Your Service
            </a>
            <a 
              href="tel:+27123456789"
              className="w-full sm:w-auto glass-card px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/10"
            >
              Get a Free Quote
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50"
          >
            <img 
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200" 
              alt="Mechanic working on a car engine" 
              className="w-full h-[300px] md:h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
          </motion.div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-12">
            <div className="flex flex-col items-center gap-2">
              <div className="text-safety-orange mb-2"><MapPin size={24} /></div>
              <h3 className="font-bold">We Come To You</h3>
              <p className="text-sm text-gray-500">Service at home or work</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-safety-orange mb-2"><Calendar size={24} /></div>
              <h3 className="font-bold">Flexible Booking</h3>
              <p className="text-sm text-gray-500">Same-day availability</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-safety-orange mb-2"><Wrench size={24} /></div>
              <h3 className="font-bold">Expert Tools</h3>
              <p className="text-sm text-gray-500">Fully equipped mobile unit</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


