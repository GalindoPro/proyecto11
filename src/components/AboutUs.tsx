import { motion } from "framer-motion";
import { Users, Target, Scale, Award } from "lucide-react";

export function AboutUs() {
    return (
        <section id="nosotros" className="pt-16 pb-8 bg-gray-50">
            <div className="container mx-auto px-4 space-y-8">

                {/* Historia del Municipio */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-green-900 p-4 md:p-6 rounded-xl shadow-lg flex flex-col-reverse md:flex-row items-center gap-6"
                    >
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-center md:text-left">Nebaj, corazón ixil</h3>
                            <p className="text-white/80 leading-relaxed text-base text-center md:text-left font-medium">
                                Santa María Nebaj, "Na’b’a’" en idioma ixil, significa ‘lugar donde nace el agua’. Es un municipio cultural y económico clave del departamento de Quiché, donde nuestras raíces se entrelazan con la historia de un pueblo resiliente.
                            </p>
                        </div>
                        {/* Custom Icon: Mountain Heart */}
                        <div className="flex-shrink-0 bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20 shadow-2xl">
                            <img
                                src="/src/assets/images/corazon_ixil.png"
                                alt="Nebaj, Corazón Ixil"
                                className="w-24 h-24 md:w-32 md:h-32 object-contain"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Raíces ixiles y origen institucional */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-yellow-500 p-4 md:p-6 rounded-xl shadow-lg border border-yellow-600 flex flex-col md:flex-row items-center gap-6"
                    >
                        <div className="flex-shrink-0 bg-white p-2 rounded-xl shadow-xl border border-yellow-200">
                            <img
                                src="/src/assets/images/raiz_ixil.png"
                                alt="Raíces Ixiles"
                                className="w-24 h-24 md:w-32 md:h-32 object-contain"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-extrabold text-blue-900 mb-2 text-center md:text-left uppercase tracking-tight">Raíces ixiles y origen institucional</h3>
                            <p className="text-blue-900 leading-relaxed text-base md:text-lg text-center md:text-left italic font-bold">
                                "Desde <span className="text-yellow-600 font-black">2008</span>, 28 visionarios locales dieron vida a <span className="text-green-700 font-black not-italic">COMIF, R.L.</span>, hoy referente de <span className="text-blue-700 font-bold">confianza</span> en la región Ixil."
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* 3. Misión & 4. Visión */}
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-blue-900 text-white p-6 rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-5 shadow-lg"
                    >
                        <div className="flex-shrink-0 bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20 shadow-2xl">
                            <img
                                src="/src/assets/images/mision.png"
                                alt="Misión"
                                className="w-20 h-20 object-contain shadow-lg rounded-lg"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2 text-white uppercase tracking-wider">Misión</h3>
                            <p className="text-white/90 leading-relaxed text-base">
                                Fomentar el ahorro, facilitar financiamiento productivo y contribuir al desarrollo socioeconómico con honestidad, responsabilidad e igualdad.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-green-900 text-white p-6 rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-5 shadow-lg"
                    >
                        <div className="flex-shrink-0 bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20 shadow-2xl">
                            <img
                                src="/src/assets/images/vision.png"
                                alt="Visión"
                                className="w-20 h-20 object-contain shadow-lg rounded-lg"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2 text-white uppercase tracking-wider">Visión</h3>
                            <p className="text-white/90 leading-relaxed text-base">
                                Ser la cooperativa líder en financiamiento rural, con equidad de género y servicios que promuevan el desarrollo integral.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Gobierno y Principios */}
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <Award className="w-6 h-6 text-green-700" />
                            Autoridades y Estructura
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 p-3 bg-blue-900 rounded-xl">
                                <Users className="w-4 h-4 text-white mt-1" />
                                <div className="text-white">
                                    <strong className="block text-base">Asamblea General</strong>
                                    <span className="text-xs opacity-80 uppercase tracking-widest">Máxima autoridad</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-yellow-500 rounded-xl">
                                <Scale className="w-4 h-4 text-blue-900 mt-1" />
                                <div className="text-blue-900">
                                    <strong className="block text-base">Consejo de Administración</strong>
                                    <span className="text-xs opacity-80 uppercase tracking-widest">5 miembros electos</span>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <Target className="w-6 h-6 text-yellow-600" />
                            Principios
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                { title: "Responsabilidad", desc: "construye futuro", color: "bg-blue-900", textColor: "text-white", accent: "text-yellow-500" },
                                { title: "Honestidad", desc: "genera confianza", color: "bg-green-900", textColor: "text-white", accent: "text-yellow-500" },
                                { title: "Igualdad", desc: "para todos", color: "bg-yellow-500", textColor: "text-blue-900", accent: "text-blue-700" },
                                { title: "Integridad", desc: "en cada acción", color: "bg-blue-50", textColor: "text-green-900", accent: "text-green-700" }
                            ].map((val, idx) => (
                                <div key={idx} className={`${val.color} p-4 rounded-xl shadow-md flex flex-col items-center justify-center text-center transition-transform hover:scale-105 duration-300`}>
                                    <span className={`font-black uppercase tracking-widest text-base mb-0.5 ${val.textColor}`}>{val.title}</span>
                                    <span className={`text-[10px] italic font-medium opacity-80 ${val.textColor}`}>{val.desc}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
