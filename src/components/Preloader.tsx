import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import comifLogo from "../assets/images/comiflogo.png";

export function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds delay
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-blue"
                >
                    <div className="relative">
                        {/* Pulsting Circle behind logo */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: 0.3 }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                            className="absolute inset-0 bg-brand-mustard rounded-full blur-2xl"
                        />

                        {/* Animated Logo */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                            }}
                            className="relative w-48 h-48 md:w-64 md:h-64 bg-white/5 p-4 md:p-6 rounded-3xl shadow-2xl flex items-center justify-center"
                        >
                            <img
                                src={comifLogo}
                                alt="COMIF Loading"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>

                        {/* Loading dots under logo */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 text-center"
                        >
                            <div className="flex gap-1 justify-center">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                        }}
                                        className="w-2 h-2 bg-brand-mustard/90 rounded-full"
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
