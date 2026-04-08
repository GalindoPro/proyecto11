import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, ArrowRight, ChevronLeft, Percent, Table as TableIcon, RefreshCw, AlertCircle } from "lucide-react";
import { cn } from "../lib/utils";

type CalculatorType = 'selection' | 'loan' | 'investment';

export function Quote() {
    const [view, setView] = useState<CalculatorType>('selection');

    return (
        <section className="py-12 bg-gray-50 min-h-[600px]">
            <div className="container mx-auto px-4">
                <AnimatePresence mode="wait">
                    {view === 'selection' && (
                        <motion.div
                            key="selection"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            {/* Header */}
                            <div className="text-center mb-10">
                                <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                    Simulador Financiero
                                </motion.h2>
                                <motion.p className="text-base text-gray-600">
                                    Simula tus proyectos con nuestras tasas competitivas y transparentes.
                                </motion.p>
                            </div>

                            {/* Selection Grid */}
                            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                {/* Card 1: Proyección de Pagos */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => setView('loan')}
                                    className="bg-blue-900 p-8 rounded-3xl shadow-xl border border-blue-800 cursor-pointer group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                        <TableIcon className="w-24 h-24" />
                                    </div>
                                    <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-yellow-500">
                                        <Calculator className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight">
                                        Proyección de Pagos
                                    </h3>
                                    <p className="text-blue-100/80 mb-8 text-sm leading-relaxed">
                                        Simula un préstamo con tasa del 24% anual y genera tu tabla de amortización detallada.
                                    </p>
                                    <div className="flex items-center gap-2 text-yellow-500 font-bold uppercase text-xs tracking-widest">
                                        Generar Tabla <ArrowRight className="w-4 h-4" />
                                    </div>
                                </motion.div>

                                {/* Card 2: Interés Plazo Fijo */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => setView('investment')}
                                    className="bg-white p-8 rounded-3xl shadow-xl border border-blue-100 cursor-pointer group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                        <TrendingUp className="w-24 h-24" />
                                    </div>
                                    <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-yellow-500">
                                        <TrendingUp className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-blue-900 mb-3 uppercase tracking-tight">
                                        Inversión Plazo Fijo
                                    </h3>
                                    <p className="text-blue-900/80 mb-8 text-sm leading-relaxed">
                                        Calcula tu rendimiento con un 14% de interés anual garantizado para tu capital.
                                    </p>
                                    <div className="flex items-center gap-2 text-yellow-500 font-bold uppercase text-xs tracking-widest">
                                        Calcular Rendimiento <ArrowRight className="w-4 h-4" />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}

                    {view === 'loan' && (
                        <LoanCalculator onBack={() => setView('selection')} />
                    )}

                    {view === 'investment' && (
                        <InvestmentCalculator onBack={() => setView('selection')} />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

function LoanCalculator({ onBack }: { onBack: () => void }) {
    const [amount, setAmount] = useState<number | ''>('');
    const [years, setYears] = useState<number | ''>('');
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
    const [isCalculated, setIsCalculated] = useState(false);

    // Fixed rate as requested
    const FIXED_RATE = 24;

    const handleCalculate = () => {
        if (amount && years) {
            setIsCalculated(true);
        }
    };

    const calculateAmortization = () => {
        if (!amount || !years) return [];

        const schedule = [];
        let balance = Number(amount);
        const totalPayments = Number(years) * 12;
        // Fixed capital payment rounded down to match typical spreadsheet logic
        const monthlyPrincipal = Math.floor((balance / totalPayments) * 100) / 100;
        let currentDate = new Date(startDate);

        schedule.push({
            no: 0,
            initDate: '',
            date: currentDate.toLocaleDateString('es-GT'),
            payment: 0,
            interest: 0,
            principal: 0,
            balance: balance,
            days: 0
        });

        for (let i = 1; i <= totalPayments; i++) {
            const prevDateStr = currentDate.toLocaleDateString('es-GT');
            const prevDate = new Date(currentDate);
            currentDate.setMonth(currentDate.getMonth() + 1);

            const diffTime = Math.abs(currentDate.getTime() - prevDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            // Formula: (Balance * Rate * Days) / 365
            const interest = Math.round((balance * (FIXED_RATE / 100) * diffDays) / 365 * 100) / 100;
            const principal = i === totalPayments ? balance : monthlyPrincipal;
            const payment = Math.round((principal + interest) * 100) / 100;

            const nextBalance = Math.round((balance - principal) * 100) / 100;

            schedule.push({
                no: i,
                initDate: prevDateStr,
                date: currentDate.toLocaleDateString('es-GT'),
                payment: payment,
                interest: interest,
                principal: principal,
                balance: Math.max(0, nextBalance),
                days: diffDays
            });
            balance = nextBalance;
        }
        return schedule;
    };

    const schedule = calculateAmortization();

    return (
        <motion.div
            key="loan"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-6xl mx-auto"
        >
            <button onClick={onBack} className="flex items-center gap-2 text-blue-900 font-bold mb-6 hover:translate-x-1 transition-transform uppercase text-xs">
                <ChevronLeft className="w-4 h-4" /> Volver a selección
            </button>

            <div className="grid lg:grid-cols-4 gap-6">
                {/* Inputs Sidebar */}
                <div className="lg:col-span-1 space-y-4">
                    <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                        <div className="flex items-center gap-2 mb-6 text-blue-900 border-b border-gray-50 pb-4">
                            <h3 className="text-sm font-bold uppercase tracking-tight">Ingreso de Datos</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Fecha de Inicio</label>
                                <input type="date" value={startDate} onChange={(e) => { setStartDate(e.target.value); setIsCalculated(false); }} className="w-full bg-gray-50 border-none rounded-xl p-3 font-bold text-blue-900 text-sm focus:ring-2 focus:ring-blue-900" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Monto solicitado (Q)</label>
                                <input placeholder="50000" type="number" min="0" value={amount} onChange={(e) => { setAmount(e.target.value === '' ? '' : Math.max(0, Number(e.target.value))); setIsCalculated(false); }} className="w-full bg-gray-50 border-none rounded-xl p-3 font-bold text-blue-900 text-sm focus:ring-2 focus:ring-blue-900" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Plazo del Crédito (Años)</label>
                                <input placeholder="1" type="number" min="0" value={years} onChange={(e) => { setYears(e.target.value === '' ? '' : Math.max(0, Number(e.target.value))); setIsCalculated(false); }} className="w-full bg-gray-50 border-none rounded-xl p-3 font-bold text-blue-900 text-sm focus:ring-2 focus:ring-blue-900" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-blue-900 uppercase mb-1 opacity-50 text-nowrap">Tasa de Interés Anual (Fija)</label>
                                <div className="w-full bg-blue-50 border border-blue-100 rounded-xl p-3 font-black text-blue-900 text-sm flex items-center justify-between">
                                    <span>{FIXED_RATE}%</span>
                                    <Percent className="w-4 h-4 opacity-30" />
                                </div>
                            </div>
                            <div className="relative pt-2">
                                <label className="block text-[10px] font-bold text-blue-900 uppercase mb-1 opacity-50 text-nowrap">Cuotas Estimadas</label>
                                <div className="w-full bg-blue-50/50 border border-blue-100/50 rounded-xl p-3 font-black text-blue-900 text-sm">
                                    {years ? Number(years) * 12 : 0} Cuotas
                                </div>
                            </div>

                            <button
                                onClick={handleCalculate}
                                disabled={!amount || !years}
                                className="w-full py-4 bg-yellow-500 text-blue-950 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg hover:bg-yellow-400 disabled:opacity-50 disabled:grayscale transition-all mt-6 flex items-center justify-center gap-2"
                            >
                                <RefreshCw className={cn("w-4 h-4", isCalculated ? "animate-spin-once" : "")} />
                                Generar Proyección
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-3">
                    <AnimatePresence mode="wait">
                        {!isCalculated ? (
                            <motion.div
                                key="placeholder"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="h-full min-h-[400px] bg-white rounded-3xl border border-dashed border-gray-200 flex flex-col items-center justify-center p-12 text-center"
                            >
                                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                                    <TableIcon className="w-10 h-10 text-gray-300" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Tabla de Proyección</h4>
                                <p className="text-gray-500 text-sm max-w-sm leading-relaxed uppercase font-bold text-[10px] tracking-wider">
                                    Ingresa el monto y el plazo deseado para generar tu plan de pagos personalizado.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="table"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                {/* Summary Metrics */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Cuotas Totales</p>
                                        <p className="text-xl font-black text-blue-900">{Number(years) * 12}</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase mb-1 text-nowrap">Cuota de Capital</p>
                                        <p className="text-xl font-black text-blue-900">Q {(Number(amount) / (Number(years) * 12)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Interés Total</p>
                                        <p className="text-xl font-black text-red-600">Q {schedule.reduce((acc, row) => acc + row.interest, 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                    </div>
                                    <div className="bg-blue-600 p-4 rounded-2xl shadow-md border border-blue-500">
                                        <p className="text-[10px] font-bold text-white/70 uppercase mb-1 text-nowrap">Total Estimado</p>
                                        <p className="text-xl font-black text-white">Q {(Number(amount) + schedule.reduce((acc, row) => acc + row.interest, 0)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                                    <div className="px-6 py-5 bg-blue-950 text-white flex justify-between items-center border-b border-white/10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                                            <h3 className="font-black uppercase tracking-widest text-[11px]">Proyección de Pagos (Detalle)</h3>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto max-h-[500px] overflow-y-auto custom-scrollbar">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="sticky top-0 bg-white z-20 border-b border-gray-100 shadow-sm">
                                                <tr>
                                                    <th className="p-4 text-[10px] font-black text-gray-400 uppercase text-center">Pago No.</th>
                                                    <th className="p-4 text-[10px] font-black text-gray-400 uppercase text-center">Fecha de Pago</th>
                                                    <th className="p-4 text-[10px] font-black text-gray-400 uppercase text-center">Pagos Mensuales</th>
                                                    <th className="p-4 text-[10px] font-black text-gray-400 uppercase text-center">Intereses</th>
                                                    <th className="p-4 text-[10px] font-black text-gray-400 uppercase text-center">Abonos a Capital</th>
                                                    <th className="p-4 text-[10px] font-black text-blue-900 uppercase text-center bg-blue-50/30">Saldo de Préstamo</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {schedule.map((row) => (
                                                    <tr key={row.no} className={cn("hover:bg-blue-50/40 transition-colors group border-b border-gray-50 last:border-0", row.no === 0 && "bg-gray-50/50")}>
                                                        <td className="p-4 text-[11px] font-bold text-gray-400 text-center">{row.no}</td>
                                                        <td className="p-4 text-[11px] font-black text-blue-900 text-center">{row.date}</td>
                                                        <td className="p-4 text-[11px] font-black text-blue-950 text-center">
                                                            {row.no > 0 ? `Q ${row.payment.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '--'}
                                                        </td>
                                                        <td className="p-4 text-[11px] font-bold text-gray-600 text-center">
                                                            {row.no > 0 ? `Q ${row.interest.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '--'}
                                                        </td>
                                                        <td className="p-4 text-[11px] font-bold text-gray-600 text-center">
                                                            {row.no > 0 ? `Q ${row.principal.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '--'}
                                                        </td>
                                                        <td className="p-4 text-[11px] font-black text-blue-700 text-center bg-blue-50/10 group-hover:bg-blue-50/20">
                                                            Q {row.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}

function InvestmentCalculator({ onBack }: { onBack: () => void }) {
    const [amount, setAmount] = useState<number | ''>('');
    const [months, setMonths] = useState<number | ''>('');
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
    const [isCalculated, setIsCalculated] = useState(false);

    const FIXED_RATE = 14;

    const handleCalculate = () => {
        if (amount && months) {
            setIsCalculated(true);
        }
    };

    const dueDate = new Date(startDate);
    if (months) dueDate.setMonth(dueDate.getMonth() + Number(months));

    const grossInterest = amount && months ? Number(amount) * (FIXED_RATE / 100) * (Number(months) / 12) : 0;
    const tax = grossInterest * 0.10;
    const netInterest = grossInterest - tax;

    return (
        <motion.div
            key="investment"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="max-w-2xl mx-auto"
        >
            <button onClick={onBack} className="flex items-center gap-2 text-blue-900 font-bold mb-6 hover:translate-x-1 transition-transform uppercase text-xs">
                <ChevronLeft className="w-4 h-4" /> Volver a selección
            </button>

            <div className="grid md:grid-cols-5 gap-4">
                <div className="md:col-span-2 space-y-4">
                    <div className="bg-white p-5 rounded-3xl shadow-lg border border-gray-100">
                        <h3 className="text-base font-bold text-blue-900 mb-5 uppercase tracking-tight">Plan de Inversión</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">Capital (Q)</label>
                                <input placeholder="500000" type="number" min="0" value={amount} onChange={(e) => { setAmount(e.target.value === '' ? '' : Math.max(0, Number(e.target.value))); setIsCalculated(false); }} className="w-full bg-gray-50 border-none rounded-xl p-3 font-bold text-blue-900 text-base focus:ring-2 focus:ring-blue-600" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">Plazo (Meses)</label>
                                <input placeholder="12" type="number" min="0" max="100" value={months} onChange={(e) => { setMonths(e.target.value === '' ? '' : Math.min(100, Math.max(0, Number(e.target.value)))); setIsCalculated(false); }} className="w-full bg-gray-50 border-none rounded-xl p-3 font-bold text-blue-900 text-base focus:ring-2 focus:ring-blue-600" />
                                <p className="text-[9px] text-gray-400 mt-1 uppercase font-bold">* Máximo 100 meses</p>
                            </div>
                            <div className="pt-2">
                                <label className="block text-[10px] font-bold text-blue-900 uppercase mb-2 opacity-50">Tasa Anual</label>
                                <div className="w-full bg-blue-50 border border-blue-100 rounded-xl p-3 font-bold text-blue-900 text-base flex items-center justify-between">
                                    <span>{FIXED_RATE}%</span>
                                    <TrendingUp className="w-4 h-4 opacity-30" />
                                </div>
                            </div>

                            <button
                                onClick={handleCalculate}
                                disabled={!amount || !months}
                                className="w-full py-4 bg-blue-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg hover:bg-blue-800 disabled:opacity-50 transition-all mt-4 flex items-center justify-center gap-2"
                            >
                                <RefreshCw className={cn("w-4 h-4", isCalculated ? "animate-spin-once" : "")} />
                                Calcular Rendimiento
                            </button>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <AnimatePresence mode="wait">
                        {!isCalculated ? (
                            <motion.div
                                key="placeholder-inv"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="h-full bg-white rounded-3xl border border-dashed border-gray-200 flex flex-col items-center justify-center p-12 text-center"
                            >
                                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                                    <TrendingUp className="w-10 h-10 text-blue-200" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Proyección de Inversión</h4>
                                <p className="text-gray-500 text-sm max-w-sm leading-relaxed uppercase font-bold text-[10px] tracking-wider">
                                    Define el capital y el tiempo para visualizar el crecimiento de tus ahorros con nuestra tasa preferencial.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="results-inv"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl h-full relative overflow-hidden"
                            >
                                <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
                                <div className="absolute bottom-10 -left-10 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl" />

                                <div className="relative z-10">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-yellow-500 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                                        Rendimiento Estimado
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4 bg-black/20 p-3 rounded-xl border border-white/5">
                                            <div>
                                                <label className="block text-[9px] font-bold text-blue-100/50 uppercase mb-1 tracking-widest">Apertura</label>
                                                <input type="date" value={startDate} onChange={(e) => { setStartDate(e.target.value); setIsCalculated(false); }} className="bg-transparent border-none p-0 text-white font-black text-xs w-full focus:ring-0" />
                                            </div>
                                            <div>
                                                <label className="block text-[9px] font-bold text-blue-100/50 uppercase mb-1 tracking-widest">Vencimiento</label>
                                                <div className="text-yellow-500 font-black text-xs">{dueDate.toLocaleDateString()}</div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                                <p className="text-[9px] font-bold uppercase text-blue-100/60 tracking-widest">Interés Bruto</p>
                                                <p className="text-lg font-black">Q {grossInterest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                            </div>
                                            <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                                <div className="flex items-center gap-2" title="Impuesto sobre la renta según ley">
                                                    <p className="text-[9px] font-bold uppercase text-blue-100/60 tracking-widest">Impuesto (10% ISR)</p>
                                                    <AlertCircle className="w-2.5 h-2.5 text-red-400" />
                                                </div>
                                                <p className="text-base font-bold text-red-300">- Q {tax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                            </div>
                                            <div className="pt-2">
                                                <div className="bg-white/10 p-5 rounded-[2rem] border border-white/10 relative overflow-hidden group">
                                                    <p className="text-[9px] font-black uppercase text-yellow-500 tracking-[0.2em] mb-2 text-center">Interés Líquido</p>
                                                    <p className="text-3xl font-black text-white text-center">
                                                        Q {netInterest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
