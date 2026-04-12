import { useState, useRef, useCallback } from "react";
import { useGallery } from "../hooks/useGallery";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Users,
  ChevronRight,
  Calendar,
  MapPin,
  CheckCircle2,
  BarChart2,
  Banknote,
  Eye,
  Heart,
  Home,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { cn } from "../lib/utils";
import { PhotoLightbox } from "../components/PhotoLightbox";
import type { LightboxPhoto } from "../components/PhotoLightbox";
import { GalleryCard } from "../components/GalleryCard";

// ─── Images ───────────────────────────────────────────────────────────────────
import asamblea1 from "../assets/images/assembly/1.png";
import asamblea2 from "../assets/images/assembly/2.png";
import asamblea3 from "../assets/images/assembly/3.png";
import asamblea4 from "../assets/images/assembly/4.png";
import asamblea5 from "../assets/images/assembly/5.png";
import asamblea6 from "../assets/images/assembly/6.png";
import asamblea8 from "../assets/images/assembly/8.png";

// ─── Types ────────────────────────────────────────────────────────────────────
type Category = "all" | "general" | "directiva" | "participacion" | "gerente";

interface AssemblyPhoto extends LightboxPhoto {
  category: Exclude<Category, "all">;
}

// ─── Static data ──────────────────────────────────────────────────────────────
const PHOTOS: AssemblyPhoto[] = [
  {
    id: 1,
    src: asamblea1,
    alt: "Vista panorámica del salón de la asamblea general con más de 500 asociados presentes",
    caption: "Vista panorámica — Gran convocatoria de asociados",
    category: "general",
  },
  {
    id: 2,
    src: asamblea2,
    alt: "Mesa directiva de COMIF R.L. durante la presentación del informe anual",
    caption: "Mesa directiva presentando el informe anual 2026",
    category: "directiva",
  },
  {
    id: 3,
    src: asamblea3,
    alt: "Asociados de la cooperativa participando activamente en la asamblea",
    caption: "Participación activa de los asociados",
    category: "participacion",
  },
  {
    id: 4,
    src: asamblea4,
    alt: "Asamblea general en pleno durante la lectura y votación de resoluciones",
    caption: "Asamblea en pleno durante la lectura de resoluciones",
    category: "general",
  },
  {
    id: 5,
    src: asamblea5,
    alt: "Asociados atentos a la presentación de resultados financieros 2026",
    caption: "Presentación de resultados financieros 2026",
    category: "participacion",
  },
  {
    id: 6,
    src: asamblea6,
    alt: "Mesa directiva completa ante los asociados al cierre de la asamblea",
    caption: "Mesa directiva al cierre de la asamblea",
    category: "directiva",
  },
  {
    id: 8,
    src: asamblea8,
    alt: "Gerente General de FEDERURAL durante la Asamblea General de COMIF R.L.",
    caption: "Gerente General de FEDERURAL",
    category: "gerente",
  },
];

const FILTERS: { id: Category; label: string; icon: React.ElementType }[] = [
  { id: "all", label: "Todas las fotos", icon: Camera },
  { id: "general", label: "Vista General", icon: Eye },
  { id: "directiva", label: "Mesa Directiva", icon: Users },
  { id: "participacion", label: "Participación", icon: Heart },
  { id: "gerente", label: "Gerente FEDERURAL", icon: Briefcase },
];

const STATS = [
  {
    icon: Users,
    value: "500+",
    label: "Asociados presentes",
    color: "text-brand-mustard",
  },
  {
    icon: CheckCircle2,
    value: "8",
    label: "Resoluciones aprobadas",
    color: "text-yellow-400",
  },
  {
    icon: BarChart2,
    value: "3",
    label: "Nuevos proyectos",
    color: "text-brand-mustard",
  },
  {
    icon: Banknote,
    value: "Q1.2M",
    label: "Capital social",
    color: "text-yellow-400",
  },
];


// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" as const },
  }),
};

const staggerGrid = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const photoCard = {
  hidden: { opacity: 0, scale: 0.9, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    scale: 0.88,
    transition: { duration: 0.22 },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
export function AssemblyGalleryPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const gallerySectionRef = useRef<HTMLElement>(null);

  const filteredPhotos = activeFilter === "all"
    ? PHOTOS
    : PHOTOS.filter((p) => p.category === activeFilter);

  // useGallery receives the current filtered set so navigation inside
  // the lightbox stays within the visible photos.
  const gallery = useGallery(filteredPhotos);

  const handleFilterChange = useCallback((cat: Category) => {
    gallery.close();        // close lightbox before swapping the photo set
    setActiveFilter(cat);
  }, [gallery]);

  const scrollToGallery = () => {
    gallerySectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── SEO / Document metadata (React 19) ─────────────────────────── */}
      <title>Asamblea General de Asociados 2026 | COMIF R.L.</title>
      <meta
        name="description"
        content="Galería fotográfica oficial de la Asamblea General Ordinaria de COMIF R.L. 2026. Más de 500 asociados reunidos en Nebaj, Quiché para aprobar resoluciones y proyectos estratégicos."
      />
      <meta
        name="keywords"
        content="asamblea general, COMIF, cooperativa Ixil, nebaj, Quiché, galería fotográfica, resoluciones 2026"
      />
      <meta property="og:title" content="Asamblea General COMIF R.L. 2026" />
      <meta
        property="og:description"
        content="Registro fotográfico de la Asamblea General Ordinaria 2026 de COMIF R.L."
      />
      <meta property="og:type" content="article" />

      {/* ── Skip navigation (WCAG 2.1 — 2.4.1) ──────────────────────────── */}
      <a
        href="#galeria"
        className={cn(
          "sr-only focus:not-sr-only",
          "focus:fixed focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-[100]",
          "focus:bg-brand-blue focus:text-white focus:px-5 focus:py-2.5",
          "focus:rounded-full focus:text-sm focus:font-bold focus:shadow-xl",
          "focus:outline-none focus:ring-2 focus:ring-brand-mustard",
        )}
      >
        Saltar a la galería
      </a>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 1. HERO SECTION                                                   */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative h-[62vh] sm:h-[68vh] lg:h-[75vh] overflow-hidden"
        aria-label="Portada de la Asamblea General 2026"
      >
        {/* Background image */}
        <img
          src={asamblea1}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/65 to-brand-blue/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/70 via-transparent to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 max-w-6xl mx-auto left-0 right-0">
          {/* Breadcrumb */}
          <motion.nav
            aria-label="Ruta de navegación"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ol className="flex items-center gap-1.5 text-xs text-white/60 font-medium">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-1 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mustard rounded"
                >
                  <Home className="w-3 h-3" />
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3 h-3 text-white/30" />
              </li>
              <li>
                <Link
                  to="/noticias"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mustard rounded"
                >
                  Noticias
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3 h-3 text-white/30" />
              </li>
              <li className="text-white/90" aria-current="page">
                Asamblea General 2026
              </li>
            </ol>
          </motion.nav>

          {/* Main hero content */}
          <div className="max-w-2xl">
            {/* Event badge */}
            <motion.div
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-brand-mustard/90 text-brand-blue px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-lg"
            >
              <Camera className="w-3 h-3" aria-hidden="true" />
              Galería Oficial · 2026
            </motion.div>

            {/* H1 */}
            <motion.h1
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            >
              Asamblea General
              <span className="block text-brand-mustard">de Asociados 2026</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={0.45}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-white/75 text-sm sm:text-base leading-relaxed mb-7 max-w-xl"
            >
              Registro fotográfico de nuestra Asamblea General Ordinaria celebrada
              en Nebaj, Quiché. Más de 500 asociados reunidos para definir el
              rumbo institucional y aprobar las resoluciones del ejercicio 2026.
            </motion.p>

            {/* CTA + meta row */}
            <motion.div
              custom={0.58}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={scrollToGallery}
                className={cn(
                  "inline-flex items-center gap-2 bg-brand-mustard hover:bg-brand-mustard/85",
                  "text-brand-blue font-bold px-5 py-2.5 rounded-xl text-sm",
                  "transition-all duration-200 active:scale-95 shadow-lg shadow-brand-mustard/30",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                )}
              >
                Ver galería
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-4 text-white/55 text-xs font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-mustard" aria-hidden="true" />
                  Abril 2026
                </span>
                <span className="w-px h-4 bg-white/20" aria-hidden="true" />
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-mustard" aria-hidden="true" />
                  Nebaj, Quiché
                </span>
                <span className="w-px h-4 bg-white/20 hidden sm:block" aria-hidden="true" />
                <span className="hidden sm:flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-brand-mustard" aria-hidden="true" />
                  500+ asociados
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade-into-white */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 2 + 3. FILTERS + GALLERY GRID                                     */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section
        id="galeria"
        ref={gallerySectionRef}
        className="bg-white py-10 sm:py-14"
        aria-label="Galería fotográfica"
      >
        <div className="container mx-auto px-4">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
              Galería Fotográfica
            </h2>
            <div className="h-0.5 w-16 bg-brand-mustard mx-auto rounded-full" />
          </motion.div>

          {/* ── Filter tabs ───────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            role="tablist"
            aria-label="Filtrar fotografías por categoría"
            className="flex flex-wrap items-center justify-center gap-2 mb-8"
          >
            {FILTERS.map(({ id, label, icon: Icon }) => {
              const count =
                id === "all" ? PHOTOS.length : PHOTOS.filter((p) => p.category === id).length;
              const isActive = activeFilter === id;

              return (
                <button
                  key={id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="gallery-grid"
                  onClick={() => handleFilterChange(id)}
                  className={cn(
                    "relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold",
                    "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-brand-blue focus-visible:ring-offset-2",
                    isActive
                      ? "bg-brand-blue text-white shadow-md shadow-brand-blue/30 active:scale-95"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800 active:scale-95",
                  )}
                >
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                  <span>{label}</span>
                  <span
                    className={cn(
                      "text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center",
                      isActive
                        ? "bg-brand-mustard/40 text-white"
                        : "bg-gray-300 text-gray-600",
                    )}
                    aria-label={`${count} fotos`}
                  >
                    {count}
                  </span>

                  {/* Active underline */}
                  {isActive && (
                    <motion.span
                      layoutId="filter-indicator"
                      className="absolute -bottom-0.5 left-4 right-4 h-0.5 bg-brand-mustard rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Live count for screen readers */}
          <p
            className="sr-only"
            aria-live="polite"
            aria-atomic="true"
          >
            Mostrando {filteredPhotos.length} de {PHOTOS.length} fotografías
          </p>

          {/* Visible count */}
          <motion.p
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 text-xs font-medium mb-6"
          >
            Mostrando{" "}
            <span className="text-brand-blue font-bold">{filteredPhotos.length}</span>
            {" "}de {PHOTOS.length} fotografías
          </motion.p>

          {/* ── Photo grid ────────────────────────────────────────────── */}
          <div
            id="gallery-grid"
            role="tabpanel"
            aria-label={`Fotos de ${FILTERS.find((f) => f.id === activeFilter)?.label ?? "todas las categorías"}`}
          >
            <motion.div
              variants={staggerGrid}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredPhotos.map((photo, idx) => (
                  <motion.div
                    key={photo.id}
                    layout
                    variants={photoCard}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={cn(
                      activeFilter === "all" && idx >= 4 && "xl:col-span-2",
                    )}
                  >
                    <GalleryCard
                      src={photo.src}
                      alt={photo.alt}
                      caption={photo.caption}
                      index={idx}
                      accent={idx % 2 === 0 ? "mustard" : "blue"}
                      icon="eye"
                      aspectRatio={
                        activeFilter === "all" && idx >= 4 ? "16/7" : "4/3"
                      }
                      className="w-full"
                      onClick={() => gallery.openAt(idx)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Click hint */}
          <p className="text-center text-gray-400 text-xs mt-5" aria-hidden="true">
            Haz clic en cualquier foto para verla en pantalla completa
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 4. ASSEMBLY INFO SECTION                                          */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section
        className="bg-brand-blue py-14 sm:py-20 relative overflow-hidden"
        aria-label="Información sobre la asamblea"
      >
        {/* Decorative shapes */}
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-brand-mustard/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-72 h-72 bg-brand-mustard/6 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-brand-mustard/20 text-brand-mustard text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 border border-brand-mustard/30">
              Datos de la Sesión
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Asamblea General Ordinaria 2026
            </h2>
            <div className="h-0.5 w-20 bg-brand-mustard mx-auto rounded-full" />
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
          >
            {STATS.map(({ icon: Icon, value, label, color }, i) => (
              <motion.div
                key={i}
                custom={i * 0.08}
                variants={fadeUp}
                className="bg-white/5 border border-white/8 rounded-2xl p-6 text-center hover:bg-white/8 transition-colors duration-200"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                    <Icon className={cn("w-5 h-5", color)} aria-hidden="true" />
                  </div>
                </div>
                <p className={cn("text-3xl font-bold mb-1 tabular-nums", color)}>
                  {value}
                </p>
                <p className="text-white/55 text-xs font-medium uppercase tracking-wide leading-snug">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Detail cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* About the assembly */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-7"
            >
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-brand-mustard rounded-full flex-shrink-0" aria-hidden="true" />
                Sobre la Asamblea
              </h3>
              <ul className="space-y-3" role="list">
                {[
                  "Convocatoria ordinaria conforme estatutos vigentes",
                  "Quórum alcanzado con +500 asociados presentes",
                  "Presentación de memoria anual y estados financieros",
                  "Elección de nuevos miembros del Consejo de Administración",
                  "Aprobación del presupuesto y plan operativo 2025",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                    <CheckCircle2
                      className="w-4 h-4 text-brand-mustard flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Event details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-7"
            >
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-brand-mustard rounded-full flex-shrink-0" aria-hidden="true" />
                Detalles del Evento
              </h3>
              <dl className="space-y-4">
                {[
                  { label: "Fecha", value: "Abril 2026" },
                  { label: "Lugar", value: "Salón Municipal, Nebaj, Quiché" },
                  { label: "Tipo de sesión", value: "Asamblea General Ordinaria" },
                  { label: "Duración", value: "Jornada completa" },
                  { label: "Resoluciones aprobadas", value: "8 resoluciones" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center gap-4">
                    <dt className="text-white/45 text-xs uppercase tracking-wide font-semibold flex-shrink-0">
                      {label}
                    </dt>
                    <dd className="text-white/85 text-sm font-medium text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </section>



      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {gallery.isOpen && (
          <PhotoLightbox key="page-lightbox" {...gallery.lightboxProps} />
        )}
      </AnimatePresence>
    </>
  );
}
