import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Users, CheckCircle2, ArrowRight, UserPlus, Lightbulb } from "lucide-react";

export function Affiliation() {
    return (
        <div className="flex flex-col">
            <section className="py-12 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-10 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block p-2 bg-brand-mustard rounded-full mb-3"
                    >
                        <Users className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-3xl font-bold text-brand-blue mb-2"
                    >
                        Únete a la Familia COMIF, R.L.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-base text-gray-600 font-medium"
                    >
                        Afiliarte es fácil: el primer paso hacia tu bienestar financiero y el desarrollo de tu comunidad.
                    </motion.p>
                </div>
                </div>
            </section>

            <section className="py-12 bg-brand-blue relative overflow-hidden flex-grow">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">

                    {/* Requisitos de Afiliación */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-brand-mustard/20 relative z-10 hover:shadow-xl transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-brand-mustard/10 p-2 rounded-xl text-brand-mustard">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue uppercase tracking-tight">Documentación necesaria</h3>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "Certificado de nacimiento y DPI del beneficiario (menores de edad)",
                                "DPI vigente (adultos)",
                                "Comprobante de domicilio reciente",
                                "Aporte inicial de Q100.00",
                                "Solicitud de afiliación llena"
                            ].map((req, i) => (
                                <li key={i} className="flex items-start gap-3 p-3 bg-brand-blue/5 border border-brand-blue/10 rounded-xl hover:bg-brand-blue/10 transition-colors group">
                                    <div className="bg-brand-mustard p-1 rounded-full text-white mt-0.5 shadow-sm flex-shrink-0">
                                        <span className="font-bold text-xs w-4 h-4 flex items-center justify-center">{i + 1}</span>
                                    </div>
                                    <span className="text-brand-blue font-bold text-[11px] uppercase tracking-tight leading-tight">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Proceso y Beneficios Column */}
                    <div className="space-y-6">

                        {/* Proceso */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-brand-mustard/20 relative z-10 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-brand-mustard/10 p-2 rounded-xl text-brand-mustard">
                                    <UserPlus className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-blue uppercase tracking-tight">Pasos Simples</h3>
                            </div>

                            <div className="relative">
                                {/* Connector Line */}
                                <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-brand-mustard/20"></div>

                                <div className="space-y-6 relative">
                                    {[
                                        { title: "Contacta", desc: "WhatsApp o visita nuestras agencias" },
                                        { title: "Documenta", desc: "Entrega DPI, recibo de luz y formulario" },
                                        { title: "¡Listo!", desc: "Realiza tu aporte y recibe tu libreta" },
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="w-10 h-10 rounded-full bg-brand-mustard text-white flex items-center justify-center font-bold text-base shadow-md z-10 flex-shrink-0">
                                                {i + 1}
                                            </div>
                                            <div className="pt-0.5">
                                                <h4 className="text-base font-bold text-brand-blue uppercase tracking-tight">{step.title}</h4>
                                                <p className="text-gray-600 text-xs font-medium">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Beneficios */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-brand-mustard rounded-2xl p-5 text-white shadow-xl border border-brand-mustard/90"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Lightbulb className="w-5 h-5 text-white" />
                                <h3 className="text-lg font-bold uppercase tracking-tight">Beneficios de ser Socio</h3>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-2">
                                {[
                                    "Tasas preferenciales",
                                    "Asesoría personalizada",
                                    "Voz y voto en Asambleas",
                                    "Seguridad y respaldo"
                                ].map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white/30 p-2 rounded-lg">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-white flex-shrink-0" />
                                        <span className="text-[10px] font-bold uppercase tracking-tight text-white">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>

                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-10"
                >
                    <Link
                        to="/agencias"
                        className="inline-flex items-center gap-2 bg-brand-blue text-white font-bold py-2.5 px-6 rounded-full shadow-lg hover:bg-brand-blue/80 hover:scale-105 transition-all duration-300 border-2 border-brand-mustard text-sm uppercase tracking-tight"
                    >
                        Visitar una agencia
                        <ArrowRight className="w-4 h-4 text-brand-mustard" />
                    </Link>
                </motion.div>

                </div>
            </section>
        </div>
    );
}
