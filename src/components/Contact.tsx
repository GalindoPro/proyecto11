import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Calendar, ArrowRight, MessageCircle } from "lucide-react";

export function Contact() {
    return (
        <div className="flex flex-col">
            <section className="py-12 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block p-2 bg-brand-mustard rounded-full mb-3"
                        >
                            <MessageCircle className="w-6 h-6 text-white" />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-xl md:text-2xl font-bold text-brand-blue mb-1"
                        >
                            Contáctanos
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-sm text-gray-600"
                        >
                            Estamos listos para atenderte. Comunícate con nuestras agencias o visítanos.
                        </motion.p>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-brand-blue text-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

                        {/* Líneas Oficiales */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-2xl shadow-xl flex flex-col relative z-10 hover:scale-105 transition-transform"
                        >
                            <div className="bg-brand-mustard/10 w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-brand-mustard border border-brand-mustard/20">
                                <Phone className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-black text-brand-blue mb-4 uppercase tracking-wider">Líneas Oficiales</h3>

                            <ul className="space-y-4 flex-grow text-brand-blue">
                                <li className="flex flex-col gap-0 border-b border-brand-mustard/10 pb-2">
                                    <span className="font-bold text-base">Agencia Central</span>
                                    <span className="text-xs font-medium text-gray-500 mb-1">Nebaj, Quiché</span>
                                    <a href="tel:+50257481463" className="text-brand-mustard font-black text-sm hover:text-brand-mustard/90 transition-colors">5748-1463</a>
                                </li>
                                <li className="flex flex-col gap-0 border-b border-brand-mustard/10 pb-2">
                                    <span className="font-bold text-base">Agencia Chajul</span>
                                    <span className="text-xs font-medium text-gray-500 mb-1">Ilom, Chajul</span>
                                    <a href="tel:+50230615489" className="text-brand-mustard font-black text-sm hover:text-brand-mustard/90 transition-colors">3061-5489</a>
                                </li>
                                <li className="flex flex-col gap-0">
                                    <span className="font-bold text-base">Agencia Acul</span>
                                    <span className="text-xs font-medium text-gray-500 mb-1">Nebaj, Quiché</span>
                                    <a href="tel:+50230371080" className="text-brand-mustard font-black text-sm hover:text-brand-mustard/90 transition-colors">3037-1080</a>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Horario de Atención */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-6 rounded-2xl shadow-xl flex flex-col relative z-10 hover:scale-105 transition-transform"
                        >
                            <div className="bg-brand-mustard/10 w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-brand-mustard border border-brand-mustard/20">
                                <Clock className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-black text-brand-blue mb-4 uppercase tracking-wider">Horario de Atención</h3>

                            <ul className="space-y-4 flex-grow text-brand-blue">
                                <li className="flex items-start gap-3 border-b border-brand-mustard/10 pb-3">
                                    <Calendar className="w-5 h-5 text-brand-mustard mt-1" />
                                    <div>
                                        <span className="block font-bold text-base">Lunes a Viernes</span>
                                        <span className="text-xs font-bold text-gray-500">8:00 AM - 5:00 PM</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 border-b border-brand-mustard/10 pb-3">
                                    <Calendar className="w-5 h-5 text-brand-mustard mt-1" />
                                    <div>
                                        <span className="block font-bold text-base">Sábado</span>
                                        <span className="text-xs font-bold text-gray-500">8:00 AM - 12:00 PM</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Calendar className="w-5 h-5 text-red-500 mt-1" />
                                    <div>
                                        <span className="block font-bold text-red-500 text-base">Domingo</span>
                                        <span className="text-xs font-bold text-red-400">Cerrado</span>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Nuestras Sedes */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-brand-mustard text-brand-blue p-6 rounded-2xl shadow-xl border border-brand-mustard flex flex-col items-center text-center justify-center relative z-10 hover:scale-105 transition-transform"
                        >
                            <div className="bg-white/30 p-3 rounded-full mb-4">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-black mb-2 uppercase tracking-wider">Nuestras Sedes</h3>
                            <p className="text-gray-800 mb-6 text-sm font-bold">
                                Ubica la agencia más cercana a ti para atención personalizada.
                            </p>
                            <Link
                                to="/agencias"
                                className="inline-flex items-center gap-2 bg-white text-brand-blue font-black py-3 px-6 rounded-xl hover:bg-white/90 transition-colors duration-300 w-full justify-center text-sm shadow-md"
                            >
                                Ver Ubicaciones
                                <ArrowRight className="w-4 h-4 text-brand-mustard" />
                            </Link>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}
