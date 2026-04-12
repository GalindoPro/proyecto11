import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Users,
  ChevronRight,
  Calendar,
  MapPin,
} from "lucide-react";
import { cn } from "../lib/utils";
import { PhotoLightbox } from "./PhotoLightbox";
import type { LightboxPhoto } from "./PhotoLightbox";
import { GalleryCard } from "./GalleryCard";
import { useGallery } from "../hooks/useGallery";

// ─── Images ────────────────────────────────────────────────────────────────
// Coloca tus 6 fotos en:  src/assets/images/assembly/
// con los nombres:        asamblea-1.jpg … asamblea-6.jpg
import asamblea1 from "../assets/images/assembly/asamblea-1.jpg";
import asamblea2 from "../assets/images/assembly/asamblea-2.jpg";
import asamblea3 from "../assets/images/assembly/asamblea-3.jpg";
import asamblea4 from "../assets/images/assembly/asamblea-4.jpg";
import asamblea5 from "../assets/images/assembly/asamblea-5.jpg";
import asamblea6 from "../assets/images/assembly/asamblea-6.jpg";

// ─── Data ──────────────────────────────────────────────────────────────────
const galleryPhotos: LightboxPhoto[] = [
  {
    id: 1,
    src: asamblea1,
    alt: "Vista panorámica de la asamblea general",
    caption: "Vista panorámica — gran convocatoria de asociados",
  },
  {
    id: 2,
    src: asamblea2,
    alt: "Mesa directiva durante la asamblea",
    caption: "Mesa directiva presentando el informe anual",
  },
  {
    id: 3,
    src: asamblea3,
    alt: "Participación activa de los asociados",
    caption: "Participación activa de los asociados",
  },
  {
    id: 4,
    src: asamblea4,
    alt: "Asamblea en pleno",
    caption: "Asamblea en pleno durante la lectura de resoluciones",
  },
  {
    id: 5,
    src: asamblea5,
    alt: "Presentación de resultados financieros",
    caption: "Presentación de resultados financieros 2024",
  },
  {
    id: 6,
    src: asamblea6,
    alt: "Cierre de la asamblea",
    caption: "Presentación ante la asamblea de asociados",
  },
];

// ─── Grid animation variants ───────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// ─── Component ─────────────────────────────────────────────────────────────
export function AssemblyGallery() {
  const gallery = useGallery(galleryPhotos);

  return (
    <div className="flex flex-col">
      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <section className="py-14 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-mustard/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-green-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="container mx-auto px-4">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-green-600/10 text-green-700 border border-green-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
            >
              <Camera className="w-3.5 h-3.5" />
              Galería Oficial
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-blue mb-3 leading-tight"
            >
              Asamblea General de Asociados
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="h-1 w-24 bg-brand-mustard mx-auto rounded-full mb-5"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed"
            >
              Registro fotográfico de nuestra Asamblea General Ordinaria, donde
              la comunidad cooperativa se reúne para tomar decisiones
              trascendentales en beneficio de todos los asociados.
            </motion.p>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 mt-7"
            >
              {[
                { icon: <Calendar className="w-3.5 h-3.5 text-brand-mustard" />, label: "2024" },
                { icon: <MapPin className="w-3.5 h-3.5 text-brand-mustard" />, label: "Nebaj, Quiché" },
                { icon: <Users className="w-3.5 h-3.5 text-brand-mustard" />, label: "+500 Asociados" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 text-brand-blue/60 text-xs font-semibold"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GALLERY GRID ────────────────────────────────────────────────── */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4"
          >
            {galleryPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                variants={itemVariants}
                className={cn(index >= 4 && "xl:col-span-2")}
              >
                <GalleryCard
                  src={photo.src}
                  alt={photo.alt}
                  caption={photo.caption}
                  index={index}
                  accent={index % 2 === 0 ? "mustard" : "green"}
                  aspectRatio={index >= 4 ? "16/7" : "4/3"}
                  className="w-full"
                  onClick={() => gallery.openAt(index)}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-center text-gray-400 text-xs font-medium mt-5"
          >
            {galleryPhotos.length} fotografías · Haz clic para ampliar
          </motion.p>
        </div>
      </section>

      {/* ── FOOTER / CTA ────────────────────────────────────────────────── */}
      <section className="py-12 bg-brand-blue relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-brand-mustard/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-[11px] mb-2 uppercase tracking-widest font-semibold"
          >
            ¿Quieres ser parte?
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-xl md:text-2xl font-bold mb-7 leading-tight"
          >
            Únete a nuestra comunidad cooperativa
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <button className="inline-flex items-center gap-2 bg-brand-mustard hover:bg-brand-mustard/90 active:scale-95 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 shadow-lg shadow-brand-mustard/30">
              Ver más detalles
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 border border-white/20">
              <Users className="w-4 h-4" />
              Solicitar afiliación
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── LIGHTBOX (delegated to PhotoLightbox) ───────────────────────── */}
      <AnimatePresence>
        {gallery.isOpen && (
          <PhotoLightbox
            key="assembly-lightbox"
            {...gallery.lightboxProps}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
