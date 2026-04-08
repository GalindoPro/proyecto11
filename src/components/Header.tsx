import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import logoImg from '../assets/images/logotiporl.png';

const navItems = [
    { name: 'Inicio', href: '/', color: 'text-yellow-400', hColor: 'hover:text-yellow-300', bgColor: 'bg-yellow-500' },
    { name: 'Nosotros', href: '/nosotros', color: 'text-yellow-400', hColor: 'hover:text-yellow-300', bgColor: 'bg-yellow-500' },
    { name: 'Servicios', href: '/servicios', color: 'text-yellow-400', hColor: 'hover:text-yellow-300', bgColor: 'bg-yellow-500' },
    { name: 'Contacto', href: '/contacto', color: 'text-yellow-400', hColor: 'hover:text-yellow-300', bgColor: 'bg-yellow-500' },
    { name: 'Cotizar', href: '/cotizar', color: 'text-yellow-400', hColor: 'hover:text-yellow-300', bgColor: 'bg-yellow-500' },
    { name: 'Agencias', href: '/agencias', color: 'text-yellow-400', hColor: 'hover:text-yellow-300', bgColor: 'bg-yellow-500' },
    { name: 'Noticias', href: '/noticias', color: 'text-yellow-400', hColor: 'hover:text-yellow-300', bgColor: 'bg-yellow-500' },
    { name: 'Asóciate', href: '/afiliacion', color: 'text-yellow-400', hColor: 'hover:text-yellow-300', bgColor: 'bg-yellow-500' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const { scrollY } = useScroll();
    const location = useLocation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setVisible(false);
            setIsOpen(false);
        } else {
            setVisible(true);
        }
        setScrolled(latest > 50);
    });

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        if (href === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: visible ? 0 : -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled
                    ? 'py-2 bg-blue-900/95 backdrop-blur-md shadow-xl border-b border-blue-800/20'
                    : 'py-4 bg-blue-900 shadow-lg'
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo and Name */}
                <Link
                    to="/"
                    className="flex items-center gap-3 group"
                    onClick={() => handleNavClick('/')}
                >
                    <div className="relative w-64 h-16 md:w-72 md:h-20 overflow-hidden rounded-xl bg-white flex items-center justify-center shadow-xl p-1.5 group-hover:scale-105 transition-transform duration-300">
                        <img
                            src={logoImg}
                            alt="COMIF Logo"
                            className="w-full h-full object-contain"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement?.classList.add('bg-primary');
                                e.currentTarget.parentElement!.innerHTML = '<span class="text-white font-bold text-xs uppercase">COMIF</span>';
                            }}
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                                "text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all duration-300 relative group",
                                location.pathname === item.href
                                    ? `${item.color} bg-white/5`
                                    : `text-gray-100 ${item.hColor} hover:bg-white/5`
                            )}
                            onClick={() => item.href === '/' && window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            {item.name}
                            <motion.span
                                className={cn(
                                    "absolute bottom-1 left-4 right-4 h-0.5 rounded-full origin-left bg-current",
                                    location.pathname === item.href ? "scale-x-100" : "scale-x-0"
                                )}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </Link>
                    ))}
                </nav>



                {/* Mobile Menu Button */}
                <button
                    className="xl:hidden p-2 rounded-xl bg-white/10 text-gray-100 hover:bg-white/20 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                <X className="w-6 h-6" />
                            </motion.div>
                        ) : (
                            <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                <Menu className="w-6 h-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="xl:hidden absolute top-full left-0 right-0 bg-blue-900 border-t border-blue-800 shadow-2xl overflow-hidden"
                        >
                            <nav className="flex flex-col p-3 gap-1">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            to={item.href}
                                            className={cn(
                                                "flex items-center justify-between font-bold py-3 px-4 rounded-xl transition-all group",
                                                location.pathname === item.href
                                                    ? `${item.bgColor} text-blue-900`
                                                    : "text-gray-100 hover:bg-white/10"
                                            )}
                                            onClick={() => handleNavClick(item.href)}
                                        >
                                            <span className="uppercase tracking-widest text-sm">{item.name}</span>
                                            <ArrowRight className={cn("w-4 h-4 opacity-0 transition-opacity", location.pathname === item.href ? "opacity-0" : "group-hover:opacity-100")} />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </motion.div>
                    )
                }
            </AnimatePresence>

            {/* Wave Effect */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[99%] pointer-events-none">
                <svg
                    className="relative block w-full h-4 sm:h-6 md:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill="#1e3a8a"
                        initial={{ y: 2 }}
                        animate={{ y: [0, 2, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </svg>
            </div>
        </motion.header>
    );
}

// Helper icons for mobile menu
const ArrowRight = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

