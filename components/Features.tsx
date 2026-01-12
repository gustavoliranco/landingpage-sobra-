import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

export const PricingPlans: React.FC = () => {
    return (
        <div className="py-24 bg-background relative overflow-hidden" id="pricing">
             <div className="text-center mb-16 px-6">
                 <h2 className="text-brand font-bold text-sm tracking-widest uppercase mb-3">Assinatura</h2>
                 <h3 className="text-3xl md:text-5xl text-white font-bold">Escolha o plano ideal</h3>
             </div>

             <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* Basic Plan */}
                 <div className="bg-[#09090b] border border-border rounded-2xl p-8 flex flex-col hover:border-neutral-600 transition-colors">
                      <div className="flex justify-between items-start mb-6">
                          <div>
                            <span className="bg-[#1c2e14] border border-brand/20 text-brand text-xs font-bold px-3 py-1 rounded-full">Atual</span>
                            <h3 className="text-xl font-medium text-white mt-4">Plano Básico</h3>
                          </div>
                      </div>
                      
                      <div className="flex items-baseline gap-1 mb-8">
                          <span className="text-4xl font-normal text-white">R$ 0</span>
                          <span className="text-neutral-500">/mês</span>
                      </div>
                      
                      <div className="flex-1 space-y-5 mb-8 border-t border-border pt-8">
                          <div className="flex items-center gap-3">
                              <Check size={18} className="text-brand" />
                              <span className="text-sm text-neutral-300">Apenas 10 transações por dia <span className="font-bold text-white">7/10</span></span>
                          </div>
                          <div className="flex items-center gap-3 opacity-50">
                              <X size={18} className="text-neutral-500" />
                              <span className="text-sm text-neutral-500">Relatórios de IA ilimitados</span>
                          </div>
                          <div className="flex items-center gap-3 opacity-50">
                              <X size={18} className="text-neutral-500" />
                              <span className="text-sm text-neutral-500">....</span>
                          </div>
                      </div>

                      <button className="w-full border border-brand text-brand font-medium py-3 rounded-full hover:bg-brand hover:text-white transition-all">
                          Fazer Upgrade
                      </button>
                 </div>

                 {/* Pro Plan */}
                 <div className="bg-[#09090b] border border-border rounded-2xl p-8 flex flex-col relative">
                      <div className="mb-6 relative z-10 pt-7">
                          <h3 className="text-xl font-medium text-white">Plano Pro</h3>
                      </div>
                      
                      <div className="flex items-baseline gap-1 mb-8 relative z-10">
                          <span className="text-4xl font-normal text-white">R$ 19</span>
                          <span className="text-neutral-500">/mês</span>
                      </div>
                      
                      <div className="flex-1 space-y-5 mb-8 relative z-10 border-t border-border pt-8">
                          <div className="flex items-center gap-3">
                              <Check size={18} className="text-brand" />
                              <span className="text-sm text-white">Transações ilimitadas</span>
                          </div>
                          <div className="flex items-center gap-3">
                              <Check size={18} className="text-brand" />
                              <span className="text-sm text-white">Relatórios de IA ilimitados</span>
                          </div>
                          <div className="flex items-center gap-3">
                              <Check size={18} className="text-brand" />
                              <span className="text-sm text-white">....</span>
                          </div>
                      </div>

                      <button className="w-full bg-brand text-[#09090b] font-bold py-3 rounded-full hover:bg-brandHover shadow-lg shadow-brand/20 transition-all relative z-10">
                          Adquirir plano
                      </button>
                 </div>
             </div>
        </div>
    )
}

export const AIReportFeature: React.FC = () => {
    return (
        <div className="py-24 border-t border-border/50">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-medium text-brand mb-6">
                        <Sparkles size={12} />
                        <span>Inteligência Artificial</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Relatórios Inteligentes
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                        Receba análises detalhadas sobre seus hábitos de consumo. A IA do Sobra+ identifica padrões e sugere economias reais.
                    </p>
                    <button className="text-white border-b border-brand pb-0.5 hover:text-brand transition-colors">
                        Saiba mais sobre a IA &rarr;
                    </button>
                </div>
                
                {/* Visual of the Report Modal from Screenshot */}
                <div className="flex-1 w-full max-w-md">
                    <div className="bg-[#18181b] rounded-2xl border border-[#27272a] p-6 shadow-2xl relative">
                        <div className="flex justify-between items-center mb-6">
                             <div className="flex items-center gap-2 text-brand font-medium">
                                 <div className="w-5 h-5 rounded bg-brand/20 flex items-center justify-center"><Sparkles size={12}/></div>
                                 Relatória IA
                             </div>
                             <X size={16} className="text-neutral-500" />
                        </div>
                        
                        <div className="space-y-4 text-sm">
                            <p className="text-[#4ade80]">Lorem ipsum <span className="text-neutral-400">dolor sit amet, consectetur adipiscing elit. Nullam convallis magna nec nisl commodo condimentum.</span></p>
                            <p className="text-neutral-400">Nullam non mauris <span className="text-[#4ade80]">vitae lorem</span> congue efficitur ac in neque. Nullam suscipit tempus rutrum.</p>
                            <p className="text-neutral-400"><span className="text-red-500">Nullam magna</span> felis, fringilla eu purus at, finibus pulvinar leo. Integer convallis consectetur odio.</p>
                        </div>

                        <button className="w-full bg-[#27272a] hover:bg-[#3f3f46] text-white py-2 rounded-lg mt-6 text-sm transition-colors border border-white/5">
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}