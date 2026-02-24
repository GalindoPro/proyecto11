import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const advantages = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12L11 14L15 10" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "SEGURIDAD",
        description: "Responsabilidad que construye futuro. Respaldo institucional garantizado para tu tranquilidad.",
        color: "bg-blue-900",
        textColor: "text-white",
        iconContainer: "bg-white/10 border-white/20",
        iconColor: "text-yellow-500",
        accent: "bg-yellow-500"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" />
                <path d="M12 16V8M12 8L8 12M12 8L16 12" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "TASAS COMPETITIVAS",
        description: "Rendimiento superior en tus ahorros y condiciones justas en todos tus créditos.",
        color: "bg-yellow-500",
        textColor: "text-blue-950",
        iconContainer: "bg-white/40 border-white/60",
        iconColor: "text-blue-900",
        accent: "bg-blue-900"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H12M17 20V19C17 19.0666 17 19.1332 17 19.2M12 20H7L3 24V6C3 4.89543 3.89543 4 5 4H12M12 20V14M12 14V4M12 14C12 14 12 12 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12C20 14.2091 18.2091 16 16 16C15.9334 16 15.8668 16 15.8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="16" cy="12" r="3" stroke="#f59e0b" strokeWidth="2" />
                <path d="M8 12C8 12 9 13 10 13C11 13 12 12 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "ATENCIÓN PERSONALIZADA",
        description: "Honestidad que genera confianza. Asesores expertos siempre dispuestos a guiarte.",
        color: "bg-green-900",
        textColor: "text-white",
        iconContainer: "bg-white/10 border-white/20",
        iconColor: "text-yellow-500",
        accent: "bg-yellow-500"
    },
];

export function Advantages() {
    return (
        <section className="py-8 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-extrabold text-green-900 uppercase tracking-tight"
                    >
                        Nuestra Ventaja
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-16 bg-yellow-500 mx-auto mt-1 rounded-full"
                    />
                </div>

                <div className="grid lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
                    {advantages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative group h-full"
                        >
                            <div className={cn("rounded-2xl p-4 shadow-xl border flex flex-col h-full transition-all duration-500 group-hover:-translate-y-2", item.color, item.textColor)}>
                                {/* Icon with decorative bg */}
                                <div className="relative mb-3 flex justify-center lg:justify-start">
                                    <div className={cn("absolute inset-0 rounded-2xl -rotate-6 group-hover:rotate-0 transition-transform opacity-20", item.accent)} />
                                    <div className={cn("relative p-2 rounded-2xl border transition-transform group-hover:scale-110", item.iconContainer, item.iconColor)}>
                                        <div className="w-10 h-10 flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-grow text-center lg:text-left">
                                    <h3 className="text-lg font-black mb-1 uppercase tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="opacity-90 leading-relaxed text-sm md:text-base font-medium">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Bottom Accent */}
                                <div className={cn("mt-3 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full", item.accent)} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
