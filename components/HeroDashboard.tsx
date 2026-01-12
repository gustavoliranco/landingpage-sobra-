import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Eye, TrendingUp, TrendingDown, Wallet, Plus, MoreHorizontal, Activity, ArrowUp, ArrowDown, PiggyBank } from 'lucide-react';

const pieData = [
  { name: 'Investimentos', value: 18, color: '#FFFFFF' }, // White
  { name: 'Gastos', value: 22, color: '#ef4444' },      // Red
  { name: 'Ganhos', value: 60, color: '#55B02E' },      // Brand Green
];

export const HeroDashboard: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-12 relative z-10 perspective-1000 px-4">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand/10 blur-[120px] -z-10 rounded-full" />
      
      {/* Main Container simulating the app window with FLOAT animation */}
      <div className="bg-[#09090b] border border-border rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/5 transform rotate-x-1 flex flex-col lg:flex-row h-auto lg:h-[800px] animate-float hover:shadow-[0_0_50px_rgba(85,176,46,0.15)] transition-shadow duration-500">
        
        {/* LEFT PANEL - DASHBOARD */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col gap-6 overflow-y-auto no-scrollbar">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold text-white">Dashboard</h2>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 text-sm text-neutral-400 bg-surface border border-border px-3 py-1.5 rounded-lg hover:text-white transition-colors">
                        <span>Relatório IA</span>
                        <Activity size={14} />
                    </button>
                    <button className="text-sm text-neutral-400 bg-surface border border-border px-3 py-1.5 rounded-lg hover:text-white transition-colors flex items-center gap-2">
                        Novembro
                        <MoreHorizontal size={14} />
                    </button>
                </div>
            </div>

            {/* Saldo Card */}
            <div className="bg-surface border border-border rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                     <button className="bg-brand text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg hover:bg-brandHover">
                        Adicionar Transação <ArrowUp size={16} />
                     </button>
                </div>
                <div className="flex items-center gap-2 text-neutral-400 mb-2">
                    <div className="p-1.5 bg-neutral-800 rounded-md"><Wallet size={16} /></div>
                    <span className="text-sm font-medium">Saldo</span>
                </div>
                <div className="flex items-center gap-4">
                    <h3 className="text-4xl font-bold text-white">R$ 2.700</h3>
                    <Eye size={20} className="text-neutral-500 cursor-pointer hover:text-white" />
                </div>
            </div>

            {/* 3 Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface border border-border rounded-2xl p-5 hover:border-neutral-600 transition-colors">
                    <div className="flex items-center gap-2 text-neutral-400 mb-2">
                        <div className="p-1.5 bg-neutral-800 rounded-md"><PiggyBank size={16} /></div>
                        <span className="text-xs font-medium">Investido</span>
                    </div>
                    <p className="text-xl font-bold text-white">R$ 3.500</p>
                </div>
                <div className="bg-surface border border-border rounded-2xl p-5 hover:border-neutral-600 transition-colors">
                    <div className="flex items-center gap-2 text-green-500 mb-2">
                        <div className="p-1.5 bg-green-500/10 rounded-md"><TrendingUp size={16} /></div>
                        <span className="text-xs font-medium">Receita</span>
                    </div>
                    <p className="text-xl font-bold text-white">R$ 8.150</p>
                </div>
                <div className="bg-surface border border-border rounded-2xl p-5 hover:border-neutral-600 transition-colors">
                    <div className="flex items-center gap-2 text-red-500 mb-2">
                        <div className="p-1.5 bg-red-500/10 rounded-md"><TrendingDown size={16} /></div>
                        <span className="text-xs font-medium">Despesas</span>
                    </div>
                    <p className="text-xl font-bold text-white">R$ 2.950</p>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 min-h-[300px]">
                {/* Donut Chart */}
                <div className="bg-surface border border-border rounded-2xl p-6 flex flex-col justify-between">
                     <div className="h-[200px] w-full relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center Icon */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                             <Wallet className="text-neutral-500 opacity-20" size={48} />
                        </div>
                     </div>
                     
                     <div className="space-y-3 mt-4">
                        <div className="flex justify-between items-center text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-brand"></div>
                                <span className="text-neutral-400">Ganhos</span>
                            </div>
                            <span className="font-bold text-white">60%</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <span className="text-neutral-400">Gastos</span>
                            </div>
                            <span className="font-bold text-white">22%</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                             <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                                <span className="text-neutral-400">Investimentos</span>
                            </div>
                            <span className="font-bold text-white">18%</span>
                        </div>
                     </div>
                </div>

                {/* Progress Bars */}
                <div className="bg-surface border border-border rounded-2xl p-6 flex flex-col">
                    <h3 className="text-white font-medium mb-6">Gastos por categoria</h3>
                    <div className="space-y-6">
                        {[
                            { label: 'Moradia', val: 50, amount: 'R$ 2.500' },
                            { label: 'Alimentação', val: 40, amount: 'R$ 1.200' },
                            { label: 'Saúde', val: 30, amount: 'R$ 320,00' },
                            { label: 'Transporte', val: 20, amount: 'R$ 150,00' },
                        ].map((item, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-white font-medium">{item.label}</span>
                                    <span className="text-white font-bold">{item.val}%</span>
                                </div>
                                <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden mb-1">
                                    <div style={{width: `${item.val}%`}} className="h-full bg-neutral-600 rounded-full"></div>
                                </div>
                                <span className="text-xs text-neutral-500">{item.amount}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* RIGHT PANEL - TRANSACTIONS */}
        <div className="w-full lg:w-[380px] border-l border-border bg-[#0c0c0e] p-6 lg:p-8 flex flex-col">
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-bold text-white">Transações</h3>
                <button className="text-xs text-neutral-400 hover:text-brand transition-colors border border-neutral-800 rounded px-2 py-1">Ver mais</button>
            </div>
            
            <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                {[
                    { title: 'Salário', date: '15 Nov, 2024', val: '+R$ 3.900', type: 'income', icon: 'S' },
                    { title: 'Bitcoin', date: '15 Nov, 2024', val: '-R$ 2.500', type: 'expense', icon: 'B' },
                    { title: 'Academia', date: '15 Nov, 2024', val: '-R$ 120,90', type: 'expense', icon: 'A' },
                    { title: 'Aluguel', date: '15 Nov, 2024', val: '-R$ 297,90', type: 'expense', icon: 'A' },
                    { title: 'Freelancing', date: '15 Nov, 2024', val: '+R$ 1.750', type: 'income', icon: 'F' },
                    { title: 'Freelancing', date: '15 Nov, 2023', val: '+R$ 2.500', type: 'income', icon: 'F' },
                    { title: 'Salário', date: '15 Nov, 2024', val: '+R$ 3.900', type: 'income', icon: 'S' },
                    { title: 'Bitcoin', date: '15 Nov, 2024', val: '-R$ 2.500', type: 'expense', icon: 'B' },
                ].map((t, i) => (
                    <div key={i} className="flex items-center justify-between group cursor-pointer hover:bg-white/5 p-2 rounded-lg -mx-2 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-neutral-400 font-bold group-hover:border-neutral-600 transition-colors">
                                {t.icon}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white group-hover:text-brand transition-colors">{t.title}</p>
                                <p className="text-xs text-neutral-500">{t.date}</p>
                            </div>
                        </div>
                        <span className={`text-sm font-bold ${t.type === 'income' ? 'text-brand' : 'text-red-500'}`}>
                            {t.val}
                        </span>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};