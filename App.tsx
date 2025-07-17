
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LogoCloud } from './components/LogoCloud';
import { StatsSection } from './components/StatsSection';
import { HowItWorks } from './components/HowItWorks';
import { DomainsSection } from './components/DomainsSection';
import { TaskExamples } from './components/TaskExamples';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <StatsSection />
        <HowItWorks />
        <DomainsSection />
        <TaskExamples />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
