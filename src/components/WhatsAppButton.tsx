import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/50257481463"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 2
            }}
            className="fixed bottom-6 right-6 z-[60] bg-blue-950 text-white pl-4 pr-6 py-3 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.4)] border border-white/10 flex items-center gap-3 group backdrop-blur-sm"
            aria-label="Contactar por WhatsApp"
        >
            <div className="relative">
                <MessageCircle className="w-6 h-6 text-[#25D366] drop-shadow-[0_0_8px_rgba(37,211,102,0.4)]" />
                {/* Notification Pulse */}
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#25D366] rounded-full border-2 border-blue-950 animate-pulse" />
            </div>

            <span className="text-sm font-bold tracking-tight">
                Chatea con nosotros
            </span>
        </motion.a>
    );
}
