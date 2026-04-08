import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Wallet, PiggyBank, Users } from "lucide-react";

const Counter = ({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-10px" });

    useEffect(() => {
        const node = nodeRef.current;
        if (!node || !inView) return;

        const controls = animate(from, to, {
            duration,
            onUpdate(value) {
                node.textContent = value.toFixed(0);
            },
            ease: "easeOut"
        });

        return () => controls.stop();
    }, [from, to, duration, inView]);

    return <span ref={nodeRef}>{from}</span>;
};

export function FinancialContributions() {
    return (
        <section className="py-16 bg-brand-blue relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-mustard/10 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
            <div className="container mx-auto px-4 space-y-8">
                <div className="text-center">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold text-white tracking-tight"
                    >
                        Tu aporte, nuestra fuerza
                    </motion.h3>
                </div>

                <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {[
                        { val: 100, label: "Aportación Externa", icon: <Wallet className="w-8 h-8 text-brand-blue" />, color: "text-brand-blue", bg: "bg-brand-mustard" },
                        { val: 50, label: "Cuota de Ingreso", icon: <PiggyBank className="w-8 h-8 text-brand-mustard" />, color: "text-brand-blue", bg: "bg-white border-2 border-brand-mustard/20" },
                        { val: 25, label: "Infanto-Juvenil", icon: <Users className="w-8 h-8 text-brand-mustard" />, color: "text-brand-blue", bg: "bg-white border-2 border-brand-mustard/20" },
                    ].map((item, idx) => (
                        <div key={idx} className={`${item.bg || 'bg-white'} p-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden z-10`}>
                            <div className="mb-3 bg-brand-mustard/10 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <div className="flex flex-col items-center justify-center mb-1">
                                <span className={`text-lg font-bold mb-[-2px] ${item.bg === 'bg-brand-mustard' ? 'text-brand-blue/70' : 'text-brand-blue/70'}`}>Q</span>
                                <span className={`text-3xl font-black ${item.color} tracking-tight`}>
                                    <Counter from={0} to={item.val} duration={2.5} />
                                </span>
                            </div>
                            <h4 className={`text-[10px] font-black uppercase tracking-wider ${item.bg === 'bg-brand-mustard' ? 'text-brand-blue' : 'text-brand-blue'}`}>{item.label}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
