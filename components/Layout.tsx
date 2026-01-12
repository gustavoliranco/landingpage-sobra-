import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Wallet } from 'lucide-react';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                        <Wallet className="text-white w-5 h-5" />
                    </div>
                    <span className="text-white font-bold tracking-tight text-xl">Sobra+</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
                    <a href="#" className="hover:text-brand transition-colors">Dashboard</a>
                    <a href="#" className="hover:text-brand transition-colors">Transações</a>
                    <a href="#" className="hover:text-brand transition-colors">Planos</a>
                </div>

                <div className="flex items-center gap-4">
                    <a href="#" className="hidden md:block text-sm text-neutral-300 hover:text-white">Login</a>
                    <a href="#" className="bg-brand text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brandHover transition-colors shadow-lg shadow-brand/20">
                        Começar agora
                    </a>
                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-surface border-b border-white/10 p-6 flex flex-col gap-4 text-neutral-300 shadow-2xl">
                    <a href="#" className="hover:text-brand">Dashboard</a>
                    <a href="#" className="hover:text-brand">Transações</a>
                    <a href="#" className="hover:text-brand">Login</a>
                </div>
            )}
        </nav>
    );
};

export const Footer: React.FC = () => {
    return (
        <footer className="bg-background text-white pt-24 pb-12 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Assuma o controle do <br/>seu dinheiro hoje.</h2>
                    <button className="bg-brand text-white px-8 py-4 rounded-full font-bold hover:bg-brandHover transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-[0_0_40px_rgba(85,176,46,0.3)]">
                        Criar conta grátis
                        <ArrowUpRight size={20} />
                    </button>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8 gap-6">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                         <div className="w-6 h-6 bg-brand rounded-md flex items-center justify-center">
                            <Wallet className="text-white w-3 h-3" />
                        </div>
                        <span className="font-bold text-lg tracking-tight">Sobra+</span>
                    </div>
                    
                    <div className="flex gap-6 text-sm text-neutral-400">
                        <a href="#" className="hover:text-brand">Privacidade</a>
                        <a href="#" className="hover:text-brand">Termos de Uso</a>
                        <a href="#" className="hover:text-brand">Instagram</a>
                    </div>

                    <div className="text-neutral-600 text-xs">
                        © 2025 Sobra+ Finance.
                    </div>
                </div>
            </div>
        </footer>
    );
};