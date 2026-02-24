import { motion } from "framer-motion";
import { MapPin, Users, Heart, Banknote, CheckCircle2, Building } from "lucide-react";

export function News() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    >
                        Noticias Destacadas
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="h-1 w-20 bg-primary mx-auto rounded-full"
                    />
                </div>

                {/* Feature Story: San Juan Acul */}
                <div className="bg-blue-900 rounded-2xl shadow-xl overflow-hidden mb-12 border border-blue-800">
                    <div className="grid lg:grid-cols-2">

                        {/* Content Side */}
                        <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-yellow-500 font-bold tracking-wider uppercase mb-2 text-xs"
                            >
                                Transformando Realidades
                            </motion.span>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-2xl font-bold text-white mb-4 leading-tight uppercase tracking-tight"
                            >
                                COMIF, R.L. impulsa el desarrollo en San Juan Acul
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-gray-100/90 mb-4 text-sm"
                            >
                                COMIF, R.L. lleva servicios financieros a comunidades sin acceso bancario formal, acercando soluciones y confianza.
                            </motion.p>

                            <motion.blockquote
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="border-l-4 border-yellow-500 pl-4 italic text-white/90 bg-white/10 py-3 rounded-r-lg mb-6 text-sm"
                            >
                                "Los residentes ahora gestionan remesas y servicios básicos sin viajar a la cabecera municipal."
                            </motion.blockquote>

                            <div className="space-y-3">
                                {[
                                    { icon: <Users className="w-4 h-4 text-yellow-500" />, text: "Asesoría personalizada" },
                                    { icon: <MapPin className="w-4 h-4 text-yellow-500" />, text: "Servicios financieros cercanos" },
                                    { icon: <Heart className="w-4 h-4 text-yellow-500" />, text: "Confianza con nuestros asociados" },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (index * 0.1) }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="bg-white/20 p-1.5 rounded-full">{item.icon}</div>
                                        <span className="font-bold text-white text-xs uppercase tracking-tight">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Images Side */}
                        <div className="grid grid-rows-2 h-full min-h-[400px] lg:min-h-auto">
                            {/* Image 1: Comunidad San Juan Acul */}
                            <div className="relative bg-gray-200 overflow-hidden group">
                                <img
                                    src="/src/assets/images/acul.jpg"
                                    alt="Comunidad San Juan Acul"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => e.currentTarget.style.display = 'none'}
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                            {/* Image 2: Agencia Acul */}
                            <div className="relative bg-gray-300 overflow-hidden group">
                                <img
                                    src="/src/assets/images/agencia_acul.jpg"
                                    alt="Agencia COMIF en Acul"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => e.currentTarget.style.display = 'none'}
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Milestones 2023 - 2024 */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-1 uppercase tracking-tight">Hitos 2023 – 2024</h3>
                        <p className="text-gray-500 uppercase tracking-widest font-bold text-[10px]">Logros Institucionales</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">

                        {/* Agente BI Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-green-900 p-6 rounded-2xl shadow-lg border border-green-800"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-white/10 p-2 rounded-lg text-yellow-500">
                                    <Building className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold text-white uppercase tracking-tight">Agente BI</h4>
                            </div>

                            <ul className="space-y-2">
                                {[
                                    "Pago de remesas",
                                    "Captación de ahorros",
                                    "Servicios de luz",
                                    "Pagos de convenios",
                                    "Pago de teléfonos",
                                    "Pago de transferencias",
                                    "Retiros monetarios"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-100">
                                        <CheckCircle2 className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                                        <span className="text-[11px] font-medium uppercase tracking-tight">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Social Support Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-yellow-500 p-6 rounded-2xl shadow-lg border border-yellow-400 flex flex-col"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-900/10 p-2 rounded-lg text-blue-900">
                                    <Banknote className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold text-blue-900 uppercase tracking-tight">Apoyo Social</h4>
                            </div>

                            <div className="flex-grow flex flex-col justify-center text-center p-4 bg-blue-900/10 rounded-xl">
                                <span className="text-4xl font-bold text-blue-900 mb-1">Q1,000</span>
                                <p className="text-blue-900 font-bold text-[11px] uppercase tracking-wide">Beneficio por fallecimiento</p>
                            </div>
                            <p className="mt-4 text-blue-900/70 text-[10px] text-center font-bold uppercase leading-tight">
                                Apoyo solidario entregado a la familia de cada asociado en momentos difíciles.
                            </p>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}
