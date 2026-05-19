/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Timeline } from './components/Timeline';
import { About } from './components/About';
import { Differential } from './components/Differential';
import { Testimonials } from './components/Testimonials';
import { Content } from './components/Content';
import { Locations } from './components/Locations';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased text-brand-olive selection:bg-brand-ochre/20 relative">
      {/* Global paper texture overlay */}
      <div 
        className="fixed inset-0 z-[5] pointer-events-none opacity-[0.35] mix-blend-multiply" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px' // helps with scaling on mobile
        }}
      ></div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Timeline />
        <About />
        <Differential />
        <Testimonials />
        <Content />
        <Locations />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

