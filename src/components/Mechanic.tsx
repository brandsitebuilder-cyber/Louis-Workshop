import { motion } from 'motion/react';
import { Award, Truck, CheckCircle } from 'lucide-react';

export default function Mechanic() {
  return (
    <section className="py-20 px-4 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10">
              <img 
                src="https://auto.edu/hubfs/shutterstock_2470156997.jpg" 
                alt="Louis working on a car" 
                className="w-full h-full object-cover opacity-90 transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-4 right-4 glass-card p-5 max-w-[260px] shadow-2xl bg-charcoal/90 backdrop-blur-xl border-white/10">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-safety-orange p-3 rounded-xl shadow-lg shadow-safety-orange/20">
                  <Award size={24} className="text-white" />
                </div>
                <span className="font-bold text-lg leading-tight">15+ Years Exp.</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">Qualified Master Technician specializing in European & Japanese models.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Your Mechanic</h2>
            <p className="text-gray-400 text-lg mb-8">
              Hi, I'm Louis. I've spent over a decade in high-end dealerships before realizing that customers hate the "workshop wait." 
              I built my <strong>Mobile Workshop Bakkie</strong> to bring dealership-quality tools and expertise directly to your driveway.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-safety-orange/10 rounded-xl flex items-center justify-center text-safety-orange">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">The Mobile Workshop</h4>
                  <p className="text-sm text-gray-500">My bakkie is fitted with industrial compressors, diagnostic computers, and a full set of professional tools.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-safety-orange/10 rounded-xl flex items-center justify-center text-safety-orange">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Guaranteed Workmanship</h4>
                  <p className="text-sm text-gray-500">I use only OEM-spec parts and provide a 6-month warranty on all labor and parts installed.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 glass-card border-l-4 border-l-safety-orange">
              <p className="italic text-gray-300">
                "My goal is simple: to provide the most transparent, convenient, and professional car service experience you've ever had."
              </p>
              <p className="mt-4 font-bold text-safety-orange">— Louis, Founder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
