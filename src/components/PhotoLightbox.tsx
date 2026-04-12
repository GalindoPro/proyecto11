import { useState, useEffect, useCallback, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
import type { PanInfo } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Image } from "lucide-react";
import { cn } from "../lib/utils";

// ─── Public types ─────────────────────────────────────────────────────────────
export interface LightboxPhoto {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

interface PhotoLightboxProps {
  photos: LightboxPhoto[];

  // ── Uncontrolled mode (default) ──────────────────────────────────────────
  /** Starting index — used only when `currentIndex` prop is NOT provided. */
  initialIndex?: number;

  // ── Controlled mode (via useGallery) ────────────────────────────────────
  /**
   * When provided, the component runs in controlled mode: navigation state
   * lives outside (in `useGallery`). Supply `onNext` / `onPrev` / `onGoTo`
   * to handle user interactions.
   */
  currentIndex?: number;
  onNext?: () => void;
  onPrev?: () => void;
  onGoTo?: (index: number) => void;

  // ── Behaviour flags ──────────────────────────────────────────────────────
  /**
   * Skip internal keyboard listener.
   * Pass `true` when using `useGallery({ keyboard: true })`.
   */
  disableKeyboard?: boolean;
  /**
   * Skip internal body scroll-lock.
   * Pass `true` when using `useGallery({ scrollLock: true })`.
   */
  disableScrollLock?: boolean;

  onClose: () => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const SWIPE_PX = 72;
const SWIPE_VEL = 180;
const ZOOM_LEVEL = 2.4;

// ─── Slide variants (defined outside component — stable reference) ─────────────
const slideVariants = {
  enter: (d: number) => ({
    x: d > 0 ? "68%" : "-68%",
    opacity: 0,
    scale: 0.88,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 290, damping: 34 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 },
    },
  },
  exit: (d: number) => ({
    x: d > 0 ? "-68%" : "68%",
    opacity: 0,
    scale: 0.88,
    transition: {
      x: { type: "spring" as const, stiffness: 290, damping: 34 },
      opacity: { duration: 0.17 },
    },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────
export function PhotoLightbox({
  photos,
  initialIndex = 0,
  currentIndex: controlledIndex,
  onNext,
  onPrev,
  onGoTo,
  disableKeyboard = false,
  disableScrollLock = false,
  onClose,
}: PhotoLightboxProps) {
  const isControlled = controlledIndex !== undefined;

  // Internal [[index, direction]] state — direction drives slide animation.
  // In controlled mode this is synced with the `controlledIndex` prop.
  const [[currentIndex, direction], setPage] = useState<[number, number]>([
    controlledIndex ?? initialIndex,
    0,
  ]);

  const [isZoomed, setIsZoomed] = useState(false);

  // Motion values for zoom / pan
  const imgScale = useMotionValue(1);
  const imgX = useMotionValue(0);
  const imgY = useMotionValue(0);

  const total = photos.length;
  const photo = photos[currentIndex] ?? photos[0];

  // ── Zoom helpers ─────────────────────────────────────────────────────────
  const resetZoom = useCallback(() => {
    setIsZoomed(false);
    animate(imgScale, 1, { type: "spring", stiffness: 300, damping: 30 });
    animate(imgX, 0, { type: "spring", stiffness: 300, damping: 30 });
    animate(imgY, 0, { type: "spring", stiffness: 300, damping: 30 });
  }, [imgScale, imgX, imgY]);

  const toggleZoom = useCallback(() => {
    if (!isZoomed) {
      animate(imgScale, ZOOM_LEVEL, { type: "spring", stiffness: 260, damping: 28 });
      setIsZoomed(true);
    } else {
      resetZoom();
    }
  }, [isZoomed, imgScale, resetZoom]);

  // ── Sync controlled index → internal [index, direction] state ────────────
  const prevControlledRef = useRef(controlledIndex ?? initialIndex);
  useEffect(() => {
    if (!isControlled || controlledIndex === undefined) return;
    if (controlledIndex === prevControlledRef.current) return;

    const dir = controlledIndex > prevControlledRef.current ? 1 : -1;
    resetZoom();
    setPage([controlledIndex, dir]);
    prevControlledRef.current = controlledIndex;
  }, [controlledIndex, isControlled, resetZoom]);

  // ── Navigation ───────────────────────────────────────────────────────────
  const navigate = useCallback(
    (dir: 1 | -1) => {
      resetZoom();
      if (isControlled) {
        if (dir === 1) onNext?.();
        else onPrev?.();
      } else {
        setPage(([idx]) => [(idx + dir + total) % total, dir]);
      }
    },
    [isControlled, onNext, onPrev, total, resetZoom],
  );

  const goTo = useCallback(
    (idx: number) => {
      if (idx === currentIndex) return;
      resetZoom();
      if (isControlled) {
        onGoTo?.(idx);
      } else {
        setPage(([curr]) => [idx, idx > curr ? 1 : -1]);
      }
    },
    [currentIndex, isControlled, onGoTo, resetZoom],
  );

  // ── Keyboard navigation (internal — skipped when hook handles it) ─────────
  useEffect(() => {
    if (disableKeyboard) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") navigate(1);
      else if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [disableKeyboard, navigate, onClose]);

  // ── Body scroll lock (internal — skipped when hook handles it) ───────────
  useEffect(() => {
    if (disableScrollLock) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [disableScrollLock]);

  // ── Swipe (touch / mouse drag) ────────────────────────────────────────────
  const handlePanEnd = useCallback(
    (_: PointerEvent, { offset, velocity }: PanInfo) => {
      if (isZoomed) return;
      const isSwipe =
        Math.abs(offset.x) > SWIPE_PX || Math.abs(velocity.x) > SWIPE_VEL;
      if (isSwipe) navigate(offset.x < 0 ? 1 : -1);
    },
    [isZoomed, navigate],
  );

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── BACKDROP ─────────────────────────────────────────────────────── */}
      <motion.div
        className="fixed inset-0 z-50 flex flex-col bg-black/93 backdrop-blur-md overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
        aria-modal="true"
        role="dialog"
        aria-label="Visor de fotografías"
      >
        {/* ── PANEL ──────────────────────────────────────────────────────── */}
        <motion.div
          className="relative flex flex-col w-full h-full max-w-6xl mx-auto px-4 pt-4 pb-5 md:pt-6 md:pb-6"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 36 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── TOP BAR ──────────────────────────────────────────────────── */}
          <div className="flex items-center justify-between mb-3 flex-shrink-0">
            {/* Context label */}
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex-shrink-0 w-0.5 h-7 bg-brand-mustard rounded-full" />
              <div className="min-w-0">
                <p className="text-white font-bold text-sm leading-tight truncate">
                  Asamblea General de Asociados
                </p>
                <p className="text-white/40 text-[11px] mt-0.5">2024 · Nebaj, Quiché</p>
              </div>
            </div>

            {/* Counter "n / total" + close */}
            <div className="flex items-center gap-2 flex-shrink-0 ml-3">
              <div
                className="flex items-center gap-1 bg-white/10 border border-white/10 rounded-full px-3 py-1.5"
                aria-live="polite"
                aria-atomic="true"
              >
                <Image className="w-3 h-3 text-brand-mustard flex-shrink-0" aria-hidden="true" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.15 }}
                    className="text-white font-bold text-sm leading-none tabular-nums"
                    aria-label={`Foto ${currentIndex + 1} de ${total}`}
                  >
                    {currentIndex + 1}
                  </motion.span>
                </AnimatePresence>
                <span className="text-white/30 text-xs leading-none" aria-hidden="true">/</span>
                <span className="text-white/50 text-xs leading-none tabular-nums" aria-hidden="true">
                  {total}
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Cerrar visor"
                className={cn(
                  "w-9 h-9 flex items-center justify-center rounded-full",
                  "bg-white/10 hover:bg-red-500/80 border border-white/10 hover:border-red-400/40",
                  "text-white active:scale-90 transition-all duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                )}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ── IMAGE STAGE ──────────────────────────────────────────────── */}
          <div className="flex-1 relative flex items-center justify-center min-h-0">
            {/* Prev */}
            <button
              onClick={() => navigate(-1)}
              aria-label="Foto anterior"
              className={cn(
                "absolute left-0 z-20 w-10 h-10 md:w-11 md:h-11",
                "flex items-center justify-center rounded-full",
                "bg-black/50 hover:bg-brand-blue border border-white/10 hover:border-brand-mustard/50",
                "text-white active:scale-90 transition-all duration-200 shadow-xl",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
              )}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slide container */}
            <div className="relative flex-1 h-full mx-12 md:mx-14 overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 flex items-center justify-center"
                  onPanEnd={!isZoomed ? handlePanEnd : undefined}
                >
                  {/* Zoomable / pannable image */}
                  <motion.img
                    src={photo.src}
                    alt={photo.alt}
                    draggable={false}
                    onClick={toggleZoom}
                    style={{ scale: imgScale, x: imgX, y: imgY }}
                    drag={isZoomed}
                    dragMomentum={false}
                    dragElastic={0.07}
                    dragConstraints={{ left: -460, right: 460, top: -280, bottom: 280 }}
                    className={cn(
                      "max-w-full max-h-full object-contain rounded-xl select-none",
                      "shadow-[0_24px_80px_rgba(0,0,0,0.6)]",
                      isZoomed ? "cursor-zoom-out" : "cursor-zoom-in",
                    )}
                  />

                  {/* Zoom status badge */}
                  <AnimatePresence>
                    <motion.div
                      key={`zoom-${isZoomed}`}
                      initial={{ opacity: 0, y: 6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                      className="absolute bottom-3 right-3 pointer-events-none"
                    >
                      <div
                        className={cn(
                          "flex items-center gap-1.5 text-[10px] font-medium px-2.5 py-1.5 rounded-full",
                          "bg-black/70 backdrop-blur-sm border border-white/10 text-white/65",
                        )}
                      >
                        {isZoomed ? (
                          <>
                            <ZoomOut className="w-3 h-3 text-brand-mustard flex-shrink-0" />
                            <span>Clic para alejar · Arrastra para mover</span>
                          </>
                        ) : (
                          <>
                            <ZoomIn className="w-3 h-3 text-brand-mustard flex-shrink-0" />
                            <span>Clic para ampliar</span>
                          </>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next */}
            <button
              onClick={() => navigate(1)}
              aria-label="Foto siguiente"
              className={cn(
                "absolute right-0 z-20 w-10 h-10 md:w-11 md:h-11",
                "flex items-center justify-center rounded-full",
                "bg-black/50 hover:bg-brand-blue border border-white/10 hover:border-brand-mustard/50",
                "text-white active:scale-90 transition-all duration-200 shadow-xl",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
              )}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* ── BOTTOM BAR ───────────────────────────────────────────────── */}
          <div className="flex-shrink-0 mt-4 flex flex-col items-center gap-3">
            {/* Caption */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`cap-${currentIndex}`}
                initial={{ opacity: 0, y: 7 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -7 }}
                transition={{ duration: 0.2 }}
                className="text-white/70 text-xs md:text-sm text-center max-w-lg px-4 leading-relaxed"
              >
                {photo.caption}
              </motion.p>
            </AnimatePresence>

            {/* Dot indicators */}
            <div
              className="flex items-center gap-1.5"
              role="tablist"
              aria-label="Navegación de fotos"
            >
              {photos.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === currentIndex}
                  aria-label={`Ir a foto ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mustard",
                    "focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                    i === currentIndex
                      ? "w-6 h-2 bg-brand-mustard"
                      : "w-2 h-2 bg-white/25 hover:bg-white/55",
                  )}
                />
              ))}
            </div>

            {/* Keyboard hint */}
            <p
              className="hidden md:block text-white/20 text-[10px] text-center tracking-wider"
              aria-hidden="true"
            >
              ← → para navegar · Esc para cerrar
            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
