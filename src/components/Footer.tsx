import { Wrench, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-16 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-safety-orange rounded flex items-center justify-center">
                <Wrench size={18} className="text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                LOUIS’S <span className="text-safety-orange">WORKSHOP</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              Professional mobile mechanic services delivering dealership-quality workmanship to your driveway. Serving Paarl and the Western Cape.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-safety-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-safety-orange transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-500">
                <Phone size={18} className="text-safety-orange" />
                <span>+27 12 345 6789</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Mail size={18} className="text-safety-orange" />
                <span>louis@mobileworkshop.co.za</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <MapPin size={18} className="text-safety-orange" />
                <span>Paarl, Western Cape</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Hours</h4>
            <ul className="space-y-2 text-gray-500">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white">08:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">08:00 - 13:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2024 Louis’s Mobile Workshop. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
