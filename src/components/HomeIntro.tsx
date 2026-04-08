import { motion } from "framer-motion";
import raizIxilImg from "../assets/images/raiz_ixil.png";

export function HomeIntro() {
    return (
        <section className="py-8 bg-white" id="historia">
            <div className="container mx-auto px-4">
                {/* Main Header */}
                <div className="max-w-4xl mx-auto text-center mb-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-1 uppercase tracking-tight"
                    >
                        Cooperativa Maya Inversiones Futuras
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-20 bg-yellow-500 mx-auto mb-2 rounded-full"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed"
                    >
                        Con más de 18 años de trayectoria, COMIF, R.L. impulsa el desarrollo económico y comunitario en Nebaj, Quiché.
                    </motion.p>
                </div>

                {/* History Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-4 md:p-6 shadow-2xl border border-yellow-400/50 flex flex-col md:flex-row items-center gap-4 relative overflow-hidden"
                >
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

                    <div className="flex-shrink-0 bg-white p-3 rounded-2xl shadow-2xl border-2 border-yellow-400 group-hover:rotate-3 transition-transform duration-500 relative z-10">
                        <img
                            src={raizIxilImg}
                            alt="Raíces Ixiles"
                            className="w-20 h-20 md:w-24 md:h-24 object-contain"
                        />
                    </div>
                    <div className="flex-1 relative z-10 text-center md:text-left">
                        <h3 className="text-xl md:text-3xl font-black text-blue-950 mb-2 leading-tight">
                            Raíces Ixiles y Origen Institucional
                        </h3>
                        <p className="text-blue-900 leading-relaxed text-base md:text-lg italic font-semibold">
                            "Desde <span className="bg-white/40 px-2 py-0.5 rounded text-blue-950 not-italic font-black">2008</span>, 28 visionarios locales dieron vida a <span className="text-blue-900 font-black not-italic">COMIF, R.L.</span>, hoy referente de <span className="underline decoration-blue-900 decoration-2 underline-offset-2">confianza</span> en la región Ixil."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
