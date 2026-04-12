import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import asamblea1 from "../assets/asamblea/1.png";
import asamblea2 from "../assets/asamblea/2.png";
import asamblea3 from "../assets/asamblea/3.png";
import asamblea4 from "../assets/asamblea/4.png";
import asamblea5 from "../assets/asamblea/5.png";
import asamblea6 from "../assets/asamblea/6.png";

const ASAMBLEA_PHOTOS = [
    { src: asamblea1, title: "Apertura de Asamblea", desc: "Inauguración oficial con todos los socios y delegados de las 6 agencias presentes." },
    { src: asamblea2, title: "Informe de Gestión", desc: null },
    { src: asamblea3, title: "Mesa Directiva", desc: null },
    { src: asamblea4, title: "Participación de Socios", desc: "Representantes en plena participación democrática y debate cooperativo." },
    { src: asamblea5, title: "Votación Anual", desc: null },
    { src: asamblea6, title: "Cierre de Asamblea", desc: "Compromisos renovados para el próximo período cooperativo de COMIF R.L." },
];

export function Asamblea() {
    const [activeTab, setActiveTab] = useState<"all" | "featured">("all");
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    useEffect(() => {
        if (lightboxIndex === null) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightboxIndex(null);
            if (e.key === "ArrowLeft") setLightboxIndex((p) => p !== null ? (p - 1 + ASAMBLEA_PHOTOS.length) % ASAMBLEA_PHOTOS.length : null);
            if (e.key === "ArrowRight") setLightboxIndex((p) => p !== null ? (p + 1) % ASAMBLEA_PHOTOS.length : null);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [lightboxIndex]);

    const renderCard = (idx: number, extraClass: string, showDesc = false) => {
        const photo = ASAMBLEA_PHOTOS[idx];
        return (
            <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                whileHover={{ scale: 1.04 }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer border-2 border-transparent hover:border-brand-mustard transition-[border-color] duration-300 ${extraClass}`}
                onClick={() => setLightboxIndex(idx)}
            >
                <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E47]/85 via-[#0F0E47]/25 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
                        <Eye className="w-6 h-6 text-white" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="comif-sans text-brand-mustard font-bold text-sm leading-tight">{photo.title}</p>
                    {showDesc && photo.desc && (
                        <p className="comif-sans text-white/70 text-xs mt-1 leading-snug">{photo.desc}</p>
                    )}
                </div>
            </motion.div>
        );
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap');
                .comif-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
                .comif-sans  { font-family: 'DM Sans', system-ui, sans-serif; }
            `}</style>

            <section className="py-20 bg-brand-blue overflow-hidden relative min-h-screen">
                {/* Subtle mustard grid */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(191,153,3,0.08) 1px, transparent 1px)," +
                            "linear-gradient(90deg, rgba(191,153,3,0.08) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Decorative sparkles */}
                <div className="absolute top-16   left-[8%]    w-1.5 h-1.5 bg-brand-mustard rounded-full opacity-50" />
                <div className="absolute top-40   left-[22%]   w-1   h-1   bg-brand-mustard rounded-full opacity-30" />
                <div className="absolute top-24   right-[18%]  w-2   h-2   bg-brand-mustard rounded-full opacity-35" />
                <div className="absolute top-56   right-[7%]   w-1   h-1   bg-white         rounded-full opacity-20" />
                <div className="absolute bottom-40 left-[6%]   w-1   h-1   bg-brand-mustard rounded-full opacity-55" />
                <div className="absolute bottom-24 right-[10%] w-1.5 h-1.5 bg-brand-mustard rounded-full opacity-30" />
                <div className="absolute bottom-56 left-[35%]  w-2   h-2   bg-white         rounded-full opacity-10 blur-[1px]" />
                <div className="absolute top-[45%] right-[3%]  w-2.5 h-2.5 bg-brand-mustard rounded-full opacity-15 blur-[1px]" />

                <div className="container mx-auto px-4 relative z-10">

                    {/* ── Header ──────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <div className="flex items-center justify-center gap-4 mb-5">
                            <div className="h-px w-16 bg-brand-mustard" />
                            <span className="comif-sans text-brand-mustard text-xs tracking-[0.3em] uppercase font-bold">
                                Transparencia Cooperativa
                            </span>
                            <div className="h-px w-16 bg-brand-mustard" />
                        </div>

                        <h2 className="comif-serif font-bold text-5xl md:text-7xl text-white tracking-tight leading-none mb-6">
                            Asamblea /{" "}
                            <em className="text-brand-mustard not-italic">General</em>
                        </h2>

                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            {["300+ Socios presentes", "3 Agencias representadas", "100% Transparencia"].map((stat) => (
                                <span
                                    key={stat}
                                    className="comif-sans px-5 py-2 bg-white/10 border border-brand-mustard/30 text-white/90 text-sm rounded-full backdrop-blur-sm"
                                >
                                    {stat}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Tabs ────────────────────────────────────────────────────── */}
                    <div className="flex justify-center gap-3 mb-8">
                        {(["all", "featured"] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`comif-sans px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                                    activeTab === tab
                                        ? "bg-brand-mustard text-brand-blue shadow-lg shadow-brand-mustard/20"
                                        : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                                }`}
                            >
                                {tab === "all" ? "Galería completa" : "Destacadas"}
                            </button>
                        ))}
                    </div>

                    {/* ── Gallery ─────────────────────────────────────────────────── */}
                    <AnimatePresence mode="wait">
                        {activeTab === "all" ? (
                            <motion.div
                                key="all"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Row 1: photo 1 (col-span-4) + photo 4 (col-span-3) */}
                                <div className="grid grid-cols-7 gap-3">
                                    {renderCard(0, "col-span-4 h-[400px]", true)}
                                    {renderCard(3, "col-span-3 h-[400px]", false)}
                                </div>
                                {/* Row 2: photos 2, 3, 5, 6 in equal columns */}
                                <div className="grid grid-cols-4 gap-3 mt-3">
                                    {[1, 2, 4, 5].map((idx) => renderCard(idx, "h-52"))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="featured"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Asymmetric: photo 1 large left, photos 6 & 4 stacked right */}
                                <div className="grid grid-cols-12 grid-rows-2 gap-3 h-[600px]">
                                    {renderCard(0, "col-span-7 row-span-2 h-full", true)}
                                    {renderCard(5, "col-span-5 h-full", false)}
                                    {renderCard(3, "col-span-5 h-full", false)}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* ── Footer line ─────────────────────────────────────────────── */}
                    <div className="mt-16 pt-8 border-t border-brand-mustard/20 text-center">
                        <p className="comif-sans text-white/35 text-xs tracking-[0.25em] uppercase">
                            COMIF R.L. · Cooperativa de Ahorro y Crédito · Nebaj, Quiché
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Lightbox ─────────────────────────────────────────────────────── */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4"
                        onClick={() => setLightboxIndex(null)}
                    >
                        {/* Close */}
                        <button
                            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
                            onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Counter */}
                        <div className="absolute top-5 left-1/2 -translate-x-1/2">
                            <span className="comif-sans text-white/50 text-sm tabular-nums">
                                {lightboxIndex + 1} / {ASAMBLEA_PHOTOS.length}
                            </span>
                        </div>

                        {/* Image area */}
                        <div
                            className="relative w-full max-w-5xl flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Prev – desktop */}
                            <button
                                className="absolute -left-14 text-white/50 hover:text-white transition-colors z-10 hidden md:block"
                                onClick={() =>
                                    setLightboxIndex((p) =>
                                        p !== null ? (p - 1 + ASAMBLEA_PHOTOS.length) % ASAMBLEA_PHOTOS.length : null
                                    )
                                }
                            >
                                <ChevronLeft className="w-12 h-12" />
                            </button>

                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={lightboxIndex}
                                    initial={{ opacity: 0, scale: 0.94 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.94 }}
                                    transition={{ duration: 0.22 }}
                                    src={ASAMBLEA_PHOTOS[lightboxIndex].src}
                                    alt={ASAMBLEA_PHOTOS[lightboxIndex].title}
                                    className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl"
                                />
                            </AnimatePresence>

                            {/* Next – desktop */}
                            <button
                                className="absolute -right-14 text-white/50 hover:text-white transition-colors z-10 hidden md:block"
                                onClick={() =>
                                    setLightboxIndex((p) =>
                                        p !== null ? (p + 1) % ASAMBLEA_PHOTOS.length : null
                                    )
                                }
                            >
                                <ChevronRight className="w-12 h-12" />
                            </button>
                        </div>

                        {/* Mobile navigation row */}
                        <div
                            className="flex md:hidden items-center gap-8 mt-5"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="text-white/50 hover:text-white transition-colors"
                                onClick={() =>
                                    setLightboxIndex((p) =>
                                        p !== null ? (p - 1 + ASAMBLEA_PHOTOS.length) % ASAMBLEA_PHOTOS.length : null
                                    )
                                }
                            >
                                <ChevronLeft className="w-9 h-9" />
                            </button>
                            <button
                                className="text-white/50 hover:text-white transition-colors"
                                onClick={() =>
                                    setLightboxIndex((p) =>
                                        p !== null ? (p + 1) % ASAMBLEA_PHOTOS.length : null
                                    )
                                }
                            >
                                <ChevronRight className="w-9 h-9" />
                            </button>
                        </div>

                        {/* Caption */}
                        <div className="mt-5 text-center" onClick={(e) => e.stopPropagation()}>
                            <p className="comif-sans text-brand-mustard font-bold text-base">
                                {ASAMBLEA_PHOTOS[lightboxIndex].title}
                            </p>
                            {ASAMBLEA_PHOTOS[lightboxIndex].desc && (
                                <p className="comif-sans text-white/50 text-sm mt-1 max-w-md mx-auto">
                                    {ASAMBLEA_PHOTOS[lightboxIndex].desc}
                                </p>
                            )}
                        </div>

                        {/* Position dots */}
                        <div
                            className="flex items-center gap-2 mt-5"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {ASAMBLEA_PHOTOS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setLightboxIndex(i)}
                                    className={`rounded-full bg-brand-mustard transition-all duration-300 ${
                                        i === lightboxIndex
                                            ? "w-6 h-2 opacity-100"
                                            : "w-2 h-2 opacity-35 hover:opacity-60"
                                    }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
