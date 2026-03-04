import { motion } from 'motion/react';
import { Settings, ShieldAlert, Battery, Cpu, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Major & Minor Services",
    description: "Full oil and filter changes, spark plugs, and a comprehensive 50-point safety inspection.",
    icon: Settings,
    price: "From R1,200"
  },
  {
    title: "Brake Repairs",
    description: "Pad and disc replacement, brake fluid flush, and sensor resets for all makes and models.",
    icon: ShieldAlert,
    price: "From R850"
  },
  {
    title: "Battery Replacement",
    description: "On-site testing and replacement with high-quality batteries. We handle the disposal too.",
    icon: Battery,
    price: "From R1,500"
  },
  {
    title: "Computer Diagnostics",
    description: "Engine light on? We use advanced scanners to find and fix electronic faults instantly.",
    icon: Cpu,
    price: "From R450"
  }
];

export default function Services() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Professional Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Everything your car needs, delivered to your doorstep. Transparent pricing and expert execution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col group hover:border-safety-orange/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-safety-orange/10 rounded-xl flex items-center justify-center text-safety-orange mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-gray-400 mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-safety-orange font-bold">{service.price}</span>
                <a href="#booking" className="text-gray-500 hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
