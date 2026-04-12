import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { ZoomIn, Eye } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// ─── Types ────────────────────────────────────────────────────────────────────
export type CardAccent = "mustard" | "green" | "yellow" | "blue";
export type CardIcon = "zoom" | "eye";

export interface GalleryCardProps {
  /** Image source URL */
  src: string;
  /** Accessible image description */
  alt: string;
  /** Caption shown on hover overlay */
  caption: string;
  /** Sequential number shown as badge on hover */
  index: number;
  /** Color accent for the ring border and number badge */
  accent?: CardAccent;
  /** Icon shown in the center on hover */
  icon?: CardIcon;
  /** CSS aspect-ratio value (e.g. "4/3", "16/9", "16/7") */
  aspectRatio?: string;
  /** Extra Tailwind classes for the wrapper (e.g. col-span) */
  className?: string;
  /** Called when the card is activated (click or Enter) */
  onClick?: () => void;
}

// ─── Accent maps ──────────────────────────────────────────────────────────────
const RING_CLASS: Record<CardAccent, string> = {
  mustard: "ring-brand-mustard/70",
  green:   "ring-green-500/65",
  yellow:  "ring-yellow-400/70",
  blue:    "ring-brand-blue/65",
};

const BADGE_CLASS: Record<CardAccent, string> = {
  mustard: "bg-brand-mustard",
  green:   "bg-green-600",
  yellow:  "bg-yellow-500",
  blue:    "bg-brand-blue",
};

const OVERLAY_CLASS: Record<CardAccent, string> = {
  mustard: "bg-brand-blue/55",
  green:   "bg-gray-900/55",
  yellow:  "bg-gray-900/55",
  blue:    "bg-brand-blue/60",
};

// ─── Sub-components (stable references, no re-render on parent change) ─────────

/** Animated icon shown in the center of the card on hover */
const HoverIcon = memo(({ icon }: { icon: CardIcon }) => (
  <motion.div
    initial={false}
    whileHover={{ scale: 1.12 }}
    transition={{ type: "spring", stiffness: 380, damping: 22 }}
    className="bg-white/95 rounded-full p-2.5 shadow-2xl"
    aria-hidden="true"
  >
    {icon === "eye" ? (
      <Eye className="w-5 h-5 text-gray-900" />
    ) : (
      <ZoomIn className="w-5 h-5 text-gray-900" />
    )}
  </motion.div>
));
HoverIcon.displayName = "HoverIcon";

// ─── Framer Motion variants (defined outside component — stable references) ──
const imageVariants = {
  rest:  { scale: 1 },
  hover: { scale: 1.06, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const overlayVariants = {
  rest:  { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.28 } },
};

const iconVariants = {
  rest:  { opacity: 0, scale: 0.78 },
  hover: { opacity: 1, scale: 1, transition: { duration: 0.24, ease: "easeOut" as const } },
};

const captionVariants = {
  rest:  { y: "100%", opacity: 0 },
  hover: { y: "0%",   opacity: 1, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const badgeVariants = {
  rest:  { opacity: 0, scale: 0.7 },
  hover: { opacity: 1, scale: 1, transition: { duration: 0.22, delay: 0.05 } },
};

const cardVariants = {
  rest:  { boxShadow: "0 2px 8px rgba(0,0,0,0.10)" },
  hover: { boxShadow: "0 16px 40px rgba(0,0,0,0.22)", transition: { duration: 0.3 } },
};

// ─── GalleryCard ──────────────────────────────────────────────────────────────
export const GalleryCard = memo(function GalleryCard({
  src,
  alt,
  caption,
  index,
  accent = "green",
  icon = "zoom",
  aspectRatio = "4/3",
  className,
  onClick,
}: GalleryCardProps) {

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick?.();
      }
    },
    [onClick],
  );

  return (
    <motion.article
      className={twMerge(
        clsx(
          // Layout
          "relative overflow-hidden rounded-2xl cursor-pointer",
          // Focus ring (keyboard navigation — WCAG 2.1)
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "focus-visible:ring-brand-blue",
        ),
        className,
      )}
      style={{ aspectRatio }}
      /* Framer Motion hover state drives all child animations */
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardVariants}
      /* Interaction */
      tabIndex={0}
      role="button"
      aria-label={`Ver en pantalla completa: ${caption}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      {/* ── Image (zoom on hover) ───────────────────────────────────────── */}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        variants={imageVariants}
        className="absolute inset-0 w-full h-full object-cover select-none"
      />

      {/* ── Dark overlay ────────────────────────────────────────────────── */}
      <motion.div
        variants={overlayVariants}
        className={clsx("absolute inset-0", OVERLAY_CLASS[accent])}
        aria-hidden="true"
      />

      {/* ── Ring border accent ──────────────────────────────────────────── */}
      <motion.div
        variants={{
          rest:  { opacity: 0 },
          hover: { opacity: 1, transition: { duration: 0.25 } },
        }}
        className={clsx(
          "absolute inset-0 rounded-2xl ring-2 pointer-events-none",
          RING_CLASS[accent],
        )}
        aria-hidden="true"
      />

      {/* ── Center icon ─────────────────────────────────────────────────── */}
      <motion.div
        variants={iconVariants}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <HoverIcon icon={icon} />
      </motion.div>

      {/* ── Caption bar (slides up from bottom) ────────────────────────── */}
      <motion.div
        variants={captionVariants}
        className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-10 bg-gradient-to-t from-black/85 via-black/60 to-transparent pointer-events-none"
        aria-hidden="true"
      >
        <p className="text-white text-xs font-medium leading-snug line-clamp-2 drop-shadow-sm">
          {caption}
        </p>
      </motion.div>

      {/* ── Number badge (top-left) ─────────────────────────────────────── */}
      <motion.div
        variants={badgeVariants}
        className={clsx(
          "absolute top-2 left-2 w-5 h-5 rounded-full flex items-center justify-center",
          "text-[10px] font-bold text-white shadow-md pointer-events-none",
          BADGE_CLASS[accent],
        )}
        aria-hidden="true"
      >
        {index + 1}
      </motion.div>
    </motion.article>
  );
});

GalleryCard.displayName = "GalleryCard";
