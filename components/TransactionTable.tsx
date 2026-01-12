import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Search, Filter, Download } from 'lucide-react';

export const TransactionTable: React.FC = () => {
  const transactions = [
    { name: 'Salário', type: 'Ganho', category: '-', method: 'Pix', date: '28 de Março 2023', value: 'R$ 1.750,00' },
    { name: 'Aluguel', type: 'Gasto', category: 'Moradia', method: 'Pix', date: '28 de Março 2023', value: 'R$ 1.750,00' },
    { name: 'Mercado', type: 'Gasto', category: 'Alimentação', method: 'Cartão', date: '28 de Março 2023', value: 'R$ 1.750,00' },
    { name: 'Bitcoin', type: 'Investimento', category: '-', method: 'Pix', date: '28 de Março 2023', value: 'R$ 1.750,00' },
    { name: 'Freelancing', type: 'Ganho', category: '-', method: 'Boleto', date: '28 de Março 2023', value: 'R$ 1.750,00' },
    { name: 'Uber', type: 'Gasto', category: 'Transporte', method: 'Pix', date: '28 de Março 2023', value: 'R$ 1.750,00' },
  ];

  return (
    <div className="w-full bg-[#09090b] border border-border rounded-xl overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <h3 className="text-xl font-bold text-white">Transações</h3>
        <div className="flex gap-2">
           <button className="bg-brand text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-brandHover transition-colors flex items-center gap-2">
              Adicionar Transação <ArrowUpRight size={16} />
           </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-neutral-500 font-medium bg-surface/50 border-b border-border">
            <tr>
              <th className="px-6 py-4 font-normal">Nome</th>
              <th className="px-6 py-4 font-normal">Tipo</th>
              <th className="px-6 py-4 font-normal">Categoria</th>
              <th className="px-6 py-4 font-normal">Método</th>
              <th className="px-6 py-4 font-normal">Data</th>
              <th className="px-6 py-4 font-normal text-right">Valor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {transactions.map((t, i) => (
              <tr key={i} className="group hover:bg-surface/50 transition-colors">
                <td className="px-6 py-4 text-white font-medium">{t.name}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border
                    ${t.type === 'Ganho' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
                      t.type === 'Gasto' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 
                      'bg-white/5 text-neutral-300 border-white/10'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                        t.type === 'Ganho' ? 'bg-green-400' : 
                        t.type === 'Gasto' ? 'bg-red-400' : 'bg-neutral-400'
                    }`}></span>
                    {t.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-neutral-400">{t.category}</td>
                <td className="px-6 py-4 text-neutral-400">{t.method}</td>
                <td className="px-6 py-4 text-neutral-400">{t.date}</td>
                <td className="px-6 py-4 text-white font-medium text-right">{t.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};