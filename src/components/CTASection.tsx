import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, UserPlus, Building2 } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-12 relative overflow-hidden">
            {/* Artistic Background */}
            <div className="absolute inset-0 bg-green-900">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-500 rounded-full blur-[120px] opacity-20" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-6 md:p-8 shadow-2xl overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-6 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-3"
                        >
                            <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">
                                ¿Listo para <span className="text-yellow-500">hacer crecer</span> tu futuro?
                            </h2>
                            <p className="text-base text-white/70 leading-relaxed font-medium">
                                Únete a los más de miles de asociados que confían en COMIF, R.L. para asegurar su estabilidad financiera.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-2 pt-2">
                                <Link
                                    to="/afiliacion"
                                    className="group bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg font-black text-base flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-yellow-500/20"
                                >
                                    <UserPlus className="w-4 h-4" />
                                    Hazte Socio Ahora
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/agencias"
                                    className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-lg font-bold text-base flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
                                >
                                    <Building2 className="w-4 h-4" />
                                    Visítanos
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative z-10 bg-gradient-to-br from-yellow-400 to-yellow-600 p-0.5 rounded-[1.5rem] shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <div className="bg-blue-900 rounded-[1.3rem] p-4 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center font-black text-blue-900 text-sm">1</div>
                                        <p className="text-white font-bold text-sm">Acércate a una agencia</p>
                                    </div>
                                    <div className="w-px h-4 bg-white/10 ml-4" />
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center font-black text-yellow-500 text-sm">2</div>
                                        <p className="text-white/60 font-bold text-sm">Presenta documentos</p>
                                    </div>
                                    <div className="w-px h-4 bg-white/10 ml-4" />
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center font-black text-yellow-500 text-sm">3</div>
                                        <p className="text-white/60 font-bold text-sm">¡Eres parte!</p>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-500 rounded-full blur-2xl opacity-40 animate-pulse" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
