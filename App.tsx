import React from 'react';
import { Navbar, Footer } from './components/Layout';
import { HeroDashboard } from './components/HeroDashboard';
import { PricingPlans, AIReportFeature } from './components/Features';
import { TransactionTable } from './components/TransactionTable';
import { ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-brand/30 selection:text-white font-sans overflow-x-hidden">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative px-6 max-w-7xl mx-auto text-center mb-24">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border text-xs font-bold text-brand mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            Finanças Pessoais + IA
          </div>
          
          {/* Main Title with Animated Text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            Bem-vindo ao <br />
            <span className="text-gradient-animated cursor-default selection:text-transparent">Sobra+</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
            A Sobra+ é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e oferecer insights personalizados.
          </p>

          {/* CTA Button - Single Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
            <button className="px-8 py-4 bg-brand text-white font-bold rounded-full hover:bg-brandHover transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(85,176,46,0.4)] transform hover:scale-105 active:scale-95 text-lg">
              Comece a economizar
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dashboard Preview with entrance animation */}
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
             <HeroDashboard />
          </div>
        </section>

        {/* Transaction Table Showcase */}
        <section className="py-24 bg-surfaceHighlight/10 border-y border-white/5 relative">
            <div className="absolute inset-0 bg-glow-gradient opacity-20 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Controle Total</h2>
                    <p className="text-neutral-400">Visualize todas as suas movimentações em uma interface limpa e intuitiva.</p>
                </div>
                <TransactionTable />
            </div>
        </section>

        {/* AI Reports */}
        <AIReportFeature />

        {/* Pricing */}
        <PricingPlans />

      </main>

      <Footer />
    </div>
  );
}

export default App;