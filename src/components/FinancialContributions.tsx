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
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 space-y-8">
                <div className="text-center">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold text-blue-900 tracking-tight"
                    >
                        Tu aporte, nuestra fuerza
                    </motion.h3>
                </div>

                <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {[
                        { val: 100, label: "Aportación Externa", icon: <Wallet className="w-8 h-8 text-blue-900" />, color: "text-blue-900", bg: "bg-yellow-500" },
                        { val: 50, label: "Cuota de Ingreso", icon: <PiggyBank className="w-8 h-8 text-blue-900" />, color: "text-blue-900", bg: "bg-white" },
                        { val: 25, label: "Infanto-Juvenil", icon: <Users className="w-8 h-8 text-yellow-500" />, color: "text-white", bg: "bg-blue-900" },
                    ].map((item, idx) => (
                        <div key={idx} className={`${item.bg || 'bg-white'} p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden`}>
                            <div className="mb-3 bg-gray-50/10 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <div className="flex flex-col items-center justify-center mb-1">
                                <span className={`text-lg font-bold mb-[-2px] ${item.bg === 'bg-yellow-500' ? 'text-blue-900/70' : 'text-white/70'}`}>Q</span>
                                <span className={`text-3xl font-black ${item.color} tracking-tight`}>
                                    <Counter from={0} to={item.val} duration={2.5} />
                                </span>
                            </div>
                            <h4 className={`text-[10px] font-black uppercase tracking-wider ${item.bg === 'bg-yellow-500' ? 'text-blue-900' : 'text-white'}`}>{item.label}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
