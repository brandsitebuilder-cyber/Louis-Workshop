import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you'd send this to a backend
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 text-center"
      >
        <div className="w-16 h-16 bg-safety-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="text-safety-orange w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
        <p className="text-gray-400">Louis will contact you shortly to confirm your booking.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-safety-orange font-semibold hover:underline"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <section id="booking" className="py-20 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Service</h2>
          <p className="text-gray-400">Fill in the details below and Louis will get back to you with a quote and availability.</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Full Name</label>
            <input 
              required
              type="text" 
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-safety-orange transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Vehicle Model</label>
              <input 
                required
                type="text" 
                placeholder="Toyota Hilux 2020"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-safety-orange transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Service Type</label>
              <select 
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-safety-orange transition-colors appearance-none"
              >
                <option value="" className="bg-charcoal">Select a service</option>
                <option value="minor" className="bg-charcoal">Minor Service</option>
                <option value="major" className="bg-charcoal">Major Service</option>
                <option value="brakes" className="bg-charcoal">Brake Repairs</option>
                <option value="battery" className="bg-charcoal">Battery Replacement</option>
                <option value="diagnostics" className="bg-charcoal">Computer Diagnostics</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Phone Number</label>
            <input 
              required
              type="tel" 
              placeholder="012 345 6789"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-safety-orange transition-colors"
            />
          </div>

          <button 
            type="submit"
            className="w-full orange-gradient hover:opacity-90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <Send size={20} />
            Request Booking
          </button>
        </form>
      </div>
    </section>
  );
}
