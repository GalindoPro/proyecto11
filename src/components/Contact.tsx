import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Calendar, ArrowRight, MessageCircle } from "lucide-react";

export function Contact() {
    return (
        <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-6 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block p-2 bg-yellow-500 rounded-full mb-3"
                    >
                        <MessageCircle className="w-6 h-6 text-blue-900" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-xl md:text-2xl font-bold text-gray-900 mb-1"
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

                <div className="grid lg:grid-cols-3 gap-3 max-w-4xl mx-auto">

                    {/* Líneas Oficiales */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-blue-900 p-4 rounded-xl shadow-lg border border-blue-800 flex flex-col"
                    >
                        <div className="bg-white/10 w-9 h-9 rounded-lg flex items-center justify-center mb-3 text-yellow-500">
                            <Phone className="w-4 h-4" />
                        </div>
                        <h3 className="text-base font-bold text-white mb-3 uppercase tracking-wider">Líneas Oficiales</h3>

                        <ul className="space-y-3 flex-grow">
                            <li className="flex flex-col gap-0">
                                <span className="font-bold text-gray-100 text-[13px]">Agencia Central</span>
                                <span className="text-[10px] text-gray-300">Nebaj, Quiché</span>
                                <a href="tel:+50257481463" className="text-yellow-500 font-bold text-sm hover:text-yellow-400 transition-colors">5748-1463</a>
                            </li>
                            <li className="flex flex-col gap-0">
                                <span className="font-bold text-gray-100 text-[13px]">Agencia Chajul</span>
                                <span className="text-[10px] text-gray-300">Ilom, Chajul</span>
                                <a href="tel:+50230615489" className="text-yellow-500 font-bold text-sm hover:text-yellow-400 transition-colors">3061-5489</a>
                            </li>
                            <li className="flex flex-col gap-0">
                                <span className="font-bold text-gray-100 text-[13px]">Agencia Acul</span>
                                <span className="text-[10px] text-gray-300">Nebaj, Quiché</span>
                                <a href="tel:+50230371080" className="text-yellow-500 font-bold text-sm hover:text-yellow-400 transition-colors">3037-1080</a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Horario de Atención */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 flex flex-col"
                    >
                        <div className="bg-gray-50 w-9 h-9 rounded-lg flex items-center justify-center mb-3 text-yellow-500 border border-gray-100">
                            <Clock className="w-4 h-4" />
                        </div>
                        <h3 className="text-base font-bold text-blue-900 mb-3 uppercase tracking-wider">Horario de Atención</h3>

                        <ul className="space-y-3 flex-grow">
                            <li className="flex items-start gap-2">
                                <Calendar className="w-3.5 h-3.5 text-yellow-500 mt-0.5" />
                                <div>
                                    <span className="block font-bold text-gray-800 text-[13px]">Lunes a Viernes</span>
                                    <span className="text-[11px] text-gray-600">8:00 AM - 5:00 PM</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <Calendar className="w-3.5 h-3.5 text-yellow-500 mt-0.5" />
                                <div>
                                    <span className="block font-bold text-gray-800 text-[13px]">Sábado</span>
                                    <span className="text-[11px] text-gray-600">8:00 AM - 12:00 PM</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <Calendar className="w-3.5 h-3.5 text-red-500 mt-0.5" />
                                <div>
                                    <span className="block font-bold text-red-600 text-[13px]">Domingo</span>
                                    <span className="text-[11px] text-red-500">Cerrado</span>
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
                        className="bg-yellow-500 text-blue-900 p-4 rounded-xl shadow-lg border border-yellow-400 flex flex-col items-center text-center justify-center"
                    >
                        <div className="bg-blue-900/10 p-2 rounded-full mb-2">
                            <MapPin className="w-5 h-5 text-blue-900" />
                        </div>
                        <h3 className="text-base font-bold mb-1 uppercase tracking-wider">Nuestras Sedes</h3>
                        <p className="text-blue-900/80 mb-4 text-xs font-semibold">
                            Ubica la agencia más cercana a ti para atención personalizada.
                        </p>
                        <Link
                            to="/agencias"
                            className="inline-flex items-center gap-2 bg-blue-900 text-white font-bold py-2 px-3 rounded-lg hover:bg-blue-800 transition-colors duration-300 w-full justify-center text-[11px]"
                        >
                            Ver Ubicaciones
                            <ArrowRight className="w-3.5 h-3.5 text-yellow-500" />
                        </Link>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
