import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import hero1 from "../assets/images/hero-1.png";
import hero2 from "../assets/images/hero-2.jpg";
import hero3 from "../assets/images/hero-3.jpg";

const slides = [
    {
        id: 1,
        buttonText: "Hazte socio",
        link: "/afiliacion",
        image: hero1,
        btnClass: "bg-brand-mustard/20 border-brand-mustard/60 text-brand-mustard hover:bg-brand-mustard hover:text-white",
        shadowClass: "hover:shadow-brand-mustard/40",
        objectPosition: "center 30%",
        scale: 1.15,
    },
    {
        id: 2,
        buttonText: "Nuestros servicios",
        link: "/servicios",
        image: hero2,
        btnClass: "bg-brand-mustard/20 border-brand-mustard/60 text-white hover:bg-brand-mustard hover:text-white",
        shadowClass: "hover:shadow-brand-mustard/40",
        objectPosition: "center center",
        scale: 1,
    },
    {
        id: 3,
        buttonText: "Encuentra tu agencia",
        link: "/agencias",
        image: hero3,
        btnClass: "bg-brand-mustard/20 border-brand-mustard/60 text-white hover:bg-brand-mustard hover:text-white",
        shadowClass: "hover:shadow-brand-mustard/40",
        objectPosition: "center 40%",
        scale: 1.05,
    },
];

export function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div 
            className="relative w-full overflow-hidden bg-gray-900 flex items-center justify-center" 
            id="inicio"
            style={{ 
                height: window.innerWidth < 768 ? '40vh' : (window.innerWidth < 1024 ? '55vh' : '65vh'),
                minHeight: window.innerWidth < 768 ? '300px' : '500px'
            }}
        >
            {/* Slides Background */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    <img
                        src={`${slides[current].image}?v=${Date.now()}`}
                        alt="Hero Slide"
                        className="w-full h-full object-cover"
                        style={{
                            objectPosition: slides[current].objectPosition,
                            transform: `scale(${slides[current].scale})`,
                        }}
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-black/20" />
                </motion.div>
            </AnimatePresence>

            {/* Content Container */}
            <div className="absolute bottom-16 left-0 right-0 z-10 flex flex-col items-center pointer-events-none">
                {/* CTA Button */}
                <motion.div
                    key={`btn-${current}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="pointer-events-auto"
                >
                    <Link
                        to={slides[current].link}
                        className={cn(
                            "group relative inline-flex items-center gap-2 backdrop-blur-sm border-2 px-4 py-2 md:px-6 md:py-3 rounded-full text-base md:text-lg font-bold transition-all duration-300 shadow-2xl hover:-translate-y-1 overflow-hidden",
                            slides[current].btnClass,
                            slides[current].shadowClass
                        )}
                        style={{ textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}
                    >
                        <span className="relative z-10">{slides[current].buttonText}</span>
                        <ChevronRight className="w-4 h-4 md:w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            {/* Navigation Arrows */}
            {/* Left Box */}
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-brand-mustard/90 transition-all duration-300 group z-30 pointer-events-auto"
            >
                <div className="bg-white/5 backdrop-blur-md p-2 md:p-3 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-brand-mustard/50 transition-all duration-500">
                    <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-active:scale-90 transition-transform" />
                </div>
            </motion.button>

            {/* Right Box */}
            <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-brand-mustard/90 transition-all duration-300 group z-30 pointer-events-auto"
            >
                <div className="bg-white/5 backdrop-blur-md p-2 md:p-3 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-brand-mustard/50 transition-all duration-500">
                    <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-active:scale-95 transition-transform" />
                </div>
            </motion.button>

            {/* Navigation Indicators */}
            <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 rounded-full transition-all duration-500 ${index === current ? "bg-white/5 w-12" : "bg-white/30 w-3 hover:bg-white/60"
                            }`}
                        aria-label={`Ir a la diapositiva ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
