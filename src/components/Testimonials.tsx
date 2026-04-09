import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "María Xitumul",
        role: "Comerciante Local",
        content: "Gracias a COMIF logré ampliar mi negocio de artesanías. Su atención es humana y cercana.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
    },
    {
        name: "Juan Guzmán",
        role: "Agricultor",
        content: "El crédito agrícola de la cooperativa me permitió renovar mis herramientas. Son gente de confianza.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan"
    },
    {
        name: "Elena Bernal",
        role: "Emprendedora",
        content: "He ahorrado con ellos por años y siempre he sentido que mi capital está seguro. Recomendados al 100%.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
    }
];

export function Testimonials() {
    return (
        <section className="py-8 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block p-1.5 bg-brand-blue/10 rounded-full mb-2"
                    >
                        <Quote className="w-4 h-4 text-brand-mustard" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-3xl font-extrabold text-brand-blue mb-1"
                    >
                        Voces de Nuestra Comunidad
                    </motion.h2>
                    <p className="text-gray-600 text-base max-w-xl mx-auto">
                        Más que clientes, somos una familia que crece unida. Conoce lo que dicen nuestros asociados.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-3 max-w-4xl mx-auto">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-4 rounded-2xl border border-brand-mustard/20 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:border-brand-mustard/50 transition-all"
                        >
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-4 border-4 border-brand-mustard/30 shadow-lg bg-white object-cover"
                            />
                            <div className="mb-3 flex-grow">
                                <p className="text-gray-700 italic text-base leading-relaxed">
                                    "{t.content}"
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-brand-blue text-lg">{t.name}</h4>
                                <span className="text-brand-mustard font-bold text-[10px] uppercase tracking-widest">{t.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
