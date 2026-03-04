import Header from './components/Header';
import Hero from './components/Hero';
import Mechanic from './components/Mechanic';
import Services from './components/Services';
import TrustBlock from './components/TrustBlock';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-safety-orange selection:text-white">
      <Header />
      <main>
        <Hero />
        <Mechanic />
        <Services />
        <TrustBlock />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
