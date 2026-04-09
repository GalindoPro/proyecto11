import { Facebook, Building2, UserPlus, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MessengerIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.47715 2 2 6.13401 2 11.2381C2 14.1205 3.44853 16.6661 5.71963 18.2571V22.1381L9.26425 20.1884C10.1343 20.43 11.051 20.57 12 20.57C17.5228 20.57 22 16.436 22 11.3319C22 6.22778 17.5228 2.09375 12 2.09375V2ZM13.1118 14.2818L10.2526 11.2423L4.65961 14.2818L10.7412 7.82845L13.6288 10.868L19.3404 7.82845L13.1118 14.2818Z" />
    </svg>
);

export function Footer() {
    return (
        <footer className="relative bg-brand-blue text-gray-100 pt-4 pb-1" id="contacto">
            {/* Wave SVG at the top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    className="relative block w-full h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill="#ffffff"
                        initial={{ y: 0 }}
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 border-b border-white/20/50 pb-4 mt-2">
                    {/* Colon 1: Identidad */}
                    <div className="space-y-1">
                        <h4 className="text-lg font-bold text-brand-mustard tracking-tight">COMIF, R.L.</h4>
                        <p className="text-xs text-gray-300 leading-relaxed max-w-xs">
                            Desde 2008, impulsando el bienestar financiero de nuestra comunidad con honestidad y transparencia.
                        </p>
                    </div>

                    {/* Colon 2: Contacto */}
                    <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest">Contacto</h4>
                        <div className="space-y-1">
                            <p className="flex items-start gap-2 text-xs text-gray-300">
                                <Building2 className="w-4 h-4 text-brand-mustard flex-shrink-0" />
                                Cantón Vipila, Nebaj, Quiché
                            </p>
                            <a href="mailto:comifrl@gmail.com" className="flex items-center gap-2 text-xs text-gray-300 hover:text-brand-mustard/90 transition-colors">
                                <Mail className="w-4 h-4 text-brand-mustard" />
                                comifrl@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Colon 3: Acciones Rápidas */}
                    <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest">Únete</h4>
                        <div className="flex flex-col sm:flex-row md:flex-col gap-1.5">
                            <Link
                                to="/afiliacion"
                                className="inline-flex items-center justify-center gap-2 bg-brand-mustard text-white px-3 py-1.5 rounded-lg font-bold text-xs hover:bg-brand-mustard/90 transition-all shadow-md hover:scale-105 active:scale-95"
                            >
                                <UserPlus className="w-4 h-4" />
                                Hazte socio
                            </Link>
                            <Link
                                to="/agencias"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-3 py-1.5 rounded-lg font-bold text-xs hover:bg-white/20 transition-all border border-white/10"
                            >
                                <Building2 className="w-4 h-4 text-brand-mustard" />
                                Nuestras Agencias
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright and Social Media */}
                <div className="pb-1">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        {/* Social Media Icons */}
                        <div className="flex gap-2 order-1">
                            <motion.a
                                href="https://www.facebook.com/share/1CCDUELZy9/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 p-1.5 rounded-full hover:bg-brand-mustard transition-colors text-gray-100 shadow-sm border border-white/5"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                                href="https://m.me/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 p-1.5 rounded-full hover:bg-brand-mustard transition-colors text-gray-100 shadow-sm border border-white/5"
                                aria-label="Messenger"
                            >
                                <MessengerIcon className="w-4 h-4" />
                            </motion.a>
                        </div>

                        {/* Copyright */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-400 text-[10px] text-left order-2"
                        >
                            &copy; 2026 COMIF, R.L. Responsabilidad que construye futuro.
                        </motion.p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
