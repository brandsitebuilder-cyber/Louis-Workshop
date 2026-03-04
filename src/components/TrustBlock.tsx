import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function TrustBlock() {
  return (
    <section className="py-20 px-4 bg-safety-orange/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Built on Trust</h2>
            <p className="text-gray-400 text-lg mb-8">
              Louis’s Mobile Workshop isn't just a business; it's a neighborhood service. 
              Over 80% of our work comes from happy neighbors and referrals. We don't spend much on advertising because our work speaks for itself.
            </p>
            
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-safety-orange mb-1">500+</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Cars Serviced</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-safety-orange mb-1">4.9/5</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Google Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-safety-orange mb-1">100%</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Referral Rate</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 relative"
            >
              <Quote className="absolute top-4 right-4 text-safety-orange/20 w-12 h-12" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-safety-orange text-safety-orange" />)}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Louis is the only person I trust with my SUV. He's honest, professional, and the convenience of having him come to my house is a game-changer."
              </p>
              <div className="font-bold">— Sarah M., Paarl</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 relative"
            >
              <Quote className="absolute top-4 right-4 text-safety-orange/20 w-12 h-12" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-safety-orange text-safety-orange" />)}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Saved me a fortune on towing when my battery died. He was there within 2 hours and had me back on the road in 20 minutes."
              </p>
              <div className="font-bold">— David K., Wellington</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
