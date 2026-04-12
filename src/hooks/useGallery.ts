import { useState, useCallback, useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

/** Minimum shape every gallery photo must satisfy */
export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

export interface UseGalleryOptions {
  /**
   * Register ArrowLeft / ArrowRight / Escape keyboard listeners
   * while the gallery is open. Pass `false` only when you want
   * to handle keyboard events yourself.
   * @default true
   */
  keyboard?: boolean;
  /**
   * Lock body scroll (`overflow: hidden`) while the gallery is open.
   * @default true
   */
  scrollLock?: boolean;
}

/** Props spread-ready for <PhotoLightbox> — use `{...gallery.lightboxProps}` */
export interface LightboxBindProps<T extends GalleryItem> {
  photos: T[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (index: number) => void;
  /** Tells PhotoLightbox not to register its own keyboard listeners */
  disableKeyboard: boolean;
  /** Tells PhotoLightbox not to lock body scroll (hook already does it) */
  disableScrollLock: boolean;
}

export interface UseGalleryReturn<T extends GalleryItem> {
  // ── State ────────────────────────────────────────────────────────────────
  /** Whether the lightbox is currently open */
  isOpen: boolean;
  /** Zero-based index of the visible photo */
  currentIndex: number;
  /** The photo at `currentIndex`, or `null` when closed */
  currentPhoto: T | null;
  /** The photos array passed in (convenient pass-through) */
  photos: T[];

  // ── Actions ──────────────────────────────────────────────────────────────
  /**
   * Open the lightbox, showing the photo at `index`.
   * Triggers AnimatePresence to mount the lightbox.
   */
  openAt: (index: number) => void;
  /** Close the lightbox */
  close: () => void;
  /** Advance to the next photo (wraps around) */
  next: () => void;
  /** Go back to the previous photo (wraps around) */
  prev: () => void;
  /** Jump directly to a specific index */
  goTo: (index: number) => void;

  // ── Integration helper ───────────────────────────────────────────────────
  /**
   * Spread these props directly onto `<PhotoLightbox>` to run it in
   * fully-controlled mode:
   *
   * ```tsx
   * <AnimatePresence>
   *   {gallery.isOpen && (
   *     <PhotoLightbox key="lb" {...gallery.lightboxProps} />
   *   )}
   * </AnimatePresence>
   * ```
   */
  lightboxProps: LightboxBindProps<T>;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

/**
 * Manages all state for a photo gallery lightbox.
 *
 * @example
 * ```tsx
 * const gallery = useGallery(PHOTOS);
 *
 * // In the grid:
 * <GalleryCard onClick={() => gallery.openAt(index)} />
 *
 * // At the bottom of the component:
 * <AnimatePresence>
 *   {gallery.isOpen && (
 *     <PhotoLightbox key="lb" {...gallery.lightboxProps} />
 *   )}
 * </AnimatePresence>
 * ```
 */
export function useGallery<T extends GalleryItem>(
  photos: T[],
  options: UseGalleryOptions = {},
): UseGalleryReturn<T> {
  const { keyboard = true, scrollLock = true } = options;

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Keep a stable count ref so navigation callbacks don't need to
  // re-create when `photos` is a new array reference with same length
  const totalRef = useRef(photos.length);
  totalRef.current = photos.length;

  // ── Core actions ──────────────────────────────────────────────────────────

  const openAt = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, totalRef.current - 1));
    setCurrentIndex(clamped);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalRef.current);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalRef.current) % totalRef.current);
  }, []);

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= totalRef.current) return;
    setCurrentIndex(index);
  }, []);

  // ── Keyboard navigation ───────────────────────────────────────────────────

  useEffect(() => {
    if (!keyboard || !isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      // Don't interfere with inputs / textareas
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    };

    window.addEventListener("keydown", handleKey, { passive: false });
    return () => window.removeEventListener("keydown", handleKey);
  }, [keyboard, isOpen, next, prev, close]);

  // ── Scroll lock ───────────────────────────────────────────────────────────

  useEffect(() => {
    if (!scrollLock || !isOpen) return;

    // Preserve current scroll position; prevent layout shift from scrollbar removal
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [scrollLock, isOpen]);

  // ── Return ────────────────────────────────────────────────────────────────

  const lightboxProps: LightboxBindProps<T> = {
    photos,
    currentIndex,
    onClose: close,
    onNext: next,
    onPrev: prev,
    onGoTo: goTo,
    disableKeyboard: keyboard,      // hook already handles it
    disableScrollLock: scrollLock,  // hook already handles it
  };

  return {
    isOpen,
    currentIndex,
    currentPhoto: isOpen ? (photos[currentIndex] ?? null) : null,
    photos,
    openAt,
    close,
    next,
    prev,
    goTo,
    lightboxProps,
  };
}
