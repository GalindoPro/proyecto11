import { motion } from "framer-motion";

const communityHighlights = [
    {
        title: "Apoyo a la Producción Local",
        description: "Impulsamos a los pequeños productores conectándolos con mercados justos y financiamiento a medida.",
        tags: ["Agricultura", "Comercio"],
        imagePlaceholder: "bg-amber-100", // Placeholder color
    },
    {
        title: "Educación y Futuro",
        description: "Celebramos el talento de nuestros jóvenes con becas y programas de formación técnica.",
        tags: ["Jóvenes", "Educación"],
        imagePlaceholder: "bg-blue-100",
    },
    {
        title: "Tradición y Cultura",
        description: "Preservamos nuestras raíces apoyando las festividades y artes de nuestra comunidad.",
        tags: ["Cultura", "Arte"],
        imagePlaceholder: "bg-rose-100",
    },
];

export function CommunitySection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block"
                    >
                        Nuestra Esencia
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Compromiso con la Comunidad
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        La cooperativa es más que finanzas; es el motor que impulsa el bienestar compartido.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {communityHighlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            {/* Image Placeholder Container */}
                            <div className={`relative h-64 w-full rounded-2xl overflow-hidden mb-6 ${item.imagePlaceholder} transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-xl`}>
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:text-gray-500 transition-colors">
                                    {/* Placeholder Text/Icon */}
                                    <span className="font-medium">Imagen: {item.title}</span>
                                </div>
                                {/* Fallback image tag if user wants to replace src later */}
                                {/* <img src={`/src/assets/images/community-${index + 1}.jpg`} alt={item.title} className="w-full h-full object-cover" /> */}
                            </div>

                            <div className="space-y-3">
                                <div className="flex gap-2">
                                    {item.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
