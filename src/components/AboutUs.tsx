import { motion } from "framer-motion";
import { Users, Target, Scale, Award } from "lucide-react";
import corazonIxilImg from "../assets/images/corazon_ixil.png";
import raizIxilImg from "../assets/images/raiz_ixil.png";
import misionImg from "../assets/images/mision.png";
import visionImg from "../assets/images/vision.png";

export function AboutUs() {
    return (
        <div className="flex flex-col">
            {/* Historia del Municipio - White Section */}
            <section id="nosotros" className="py-16 bg-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-6 md:p-8 rounded-2xl shadow-xl flex flex-col-reverse md:flex-row items-center gap-8 border border-brand-mustard/20"
                        >
                            <div className="flex-1">
                                <h3 className="text-xl md:text-3xl font-black text-brand-blue mb-4 text-center md:text-left">Nebaj, corazón ixil</h3>
                                <p className="text-gray-700 leading-relaxed text-base text-center md:text-left font-medium">
                                    Santa María Nebaj, "Na’b’a’" en idioma ixil, significa ‘lugar donde nace el agua’. Es un municipio cultural y económico clave del departamento de Quiché, donde nuestras raíces se entrelazan con la historia de un pueblo resiliente.
                                </p>
                            </div>
                            <div className="flex-shrink-0 bg-brand-mustard/10 p-3 rounded-2xl border border-brand-mustard/20 shadow-lg">
                                <img
                                    src={corazonIxilImg}
                                    alt="Nebaj, Corazón Ixil"
                                    className="w-32 h-32 md:w-44 md:h-44 object-contain"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Raíces ixiles y origen institucional - Dark Section */}
            <section className="py-16 bg-brand-blue overflow-hidden relative">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-brand-blue p-6 md:p-8 flex flex-col md:flex-row items-center gap-8"
                        >
                            <div className="flex-shrink-0 bg-brand-mustard p-3 rounded-2xl shadow-xl border border-brand-mustard">
                                <img
                                    src={raizIxilImg}
                                    alt="Raíces Ixiles"
                                    className="w-32 h-32 md:w-44 md:h-44 object-contain"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl md:text-3xl font-black text-white mb-4 text-center md:text-left uppercase tracking-tight">Raíces ixiles y origen institucional</h3>
                                <p className="text-white/90 leading-relaxed text-base md:text-lg text-center md:text-left italic font-medium">
                                    "Desde <span className="text-brand-mustard font-black">2008</span>, 28 visionarios locales dieron vida a <span className="font-black not-italic text-brand-mustard">COMIF, R.L.</span>, hoy referente de confianza en la región Ixil."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Misión & Visión - White Section */}
            <section className="py-16 bg-white overflow-hidden relative">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white text-brand-blue p-8 rounded-3xl relative flex flex-col md:flex-row items-center gap-6 shadow-xl border border-brand-mustard/20 hover:shadow-2xl transition-shadow"
                        >
                            <div className="flex-shrink-0 bg-brand-mustard/10 p-3 rounded-2xl border border-brand-mustard/20 shadow-lg">
                                <img
                                    src={misionImg}
                                    alt="Misión"
                                    className="w-16 h-16 md:w-24 md:h-24 object-contain rounded-lg"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black mb-3 text-brand-blue uppercase tracking-wider">Misión</h3>
                                <p className="text-gray-700 leading-relaxed text-base font-medium">
                                    Fomentar el ahorro, facilitar financiamiento productivo y contribuir al desarrollo socioeconómico con honestidad y responsabilidad.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white text-brand-blue p-8 rounded-3xl relative flex flex-col md:flex-row items-center gap-6 shadow-xl border border-brand-mustard/20 hover:shadow-2xl transition-shadow"
                        >
                            <div className="flex-shrink-0 bg-brand-mustard/10 p-3 rounded-2xl border border-brand-mustard/20 shadow-lg">
                                <img
                                    src={visionImg}
                                    alt="Visión"
                                    className="w-16 h-16 md:w-24 md:h-24 object-contain rounded-lg"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black mb-3 text-brand-blue uppercase tracking-wider">Visión</h3>
                                <p className="text-gray-700 leading-relaxed text-base font-medium">
                                    Ser la cooperativa líder en financiamiento rural, con equidad de género y servicios que promuevan el desarrollo integral.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gobierno y Principios - Dark Section */}
            <section className="py-16 bg-brand-blue overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                                <Award className="w-8 h-8 text-brand-mustard" />
                                Autoridades y Estructura
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 p-5 bg-white/5 border border-brand-mustard/20 rounded-2xl">
                                    <Users className="w-5 h-5 text-brand-mustard mt-1 flex-shrink-0" />
                                    <div className="text-white">
                                        <strong className="block text-lg font-bold">Asamblea General</strong>
                                        <span className="text-xs text-brand-mustard uppercase tracking-widest font-bold">Máxima autoridad</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-5 bg-brand-mustard rounded-2xl shadow-lg border border-brand-mustard">
                                    <Scale className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                                    <div className="text-brand-blue">
                                        <strong className="block text-lg font-black">Consejo de Administración</strong>
                                        <span className="text-xs uppercase tracking-widest font-black opacity-80">5 miembros electos</span>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                                <Target className="w-8 h-8 text-brand-mustard" />
                                Principios
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { title: "Responsabilidad", desc: "construye futuro", color: "bg-white", textColor: "text-brand-blue", accent: "text-brand-mustard" },
                                    { title: "Honestidad", desc: "genera confianza", color: "bg-white", textColor: "text-brand-blue", accent: "text-brand-mustard" },
                                    { title: "Igualdad", desc: "para todos", color: "bg-brand-mustard", textColor: "text-brand-blue", accent: "text-brand-blue/70" },
                                    { title: "Integridad", desc: "en cada acción", color: "bg-white/5 border border-brand-mustard/20", textColor: "text-white", accent: "text-brand-mustard" }
                                ].map((val, idx) => (
                                    <div key={idx} className={`${val.color} p-5 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 duration-300`}>
                                        <span className={`font-black uppercase tracking-widest text-sm md:text-base mb-1 ${val.textColor}`}>{val.title}</span>
                                        <span className={`text-[10px] md:text-xs font-bold opacity-80 ${val.textColor}`}>{val.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
