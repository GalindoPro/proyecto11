import { motion } from "framer-motion";
import { PiggyBank, Wallet, Home, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
    {
        icon: <PiggyBank className="w-10 h-10" />,
        title: "Cuentas de Ahorro",
        subtitle: "Ahorro seguro y rentable",
        description: "Ahorra con confianza y obtén rendimientos competitivos.",
        benefits: [
            "Tasas de interés competitivas",
            "Sin comisiones de mantenimiento",
            "Retiros disponibles",
            "Seguridad garantizada"
        ],
        color: "bg-yellow-500 text-blue-900",
        iconColor: "text-blue-900",
        buttonText: "Abrir cuenta",
        buttonColor: "bg-blue-900 hover:bg-blue-800 text-white",
        delay: 0
    },
    {
        icon: <Wallet className="w-10 h-10" />,
        title: "Créditos Personales",
        subtitle: "Financiamiento flexible",
        description: "Apoyo inmediato para tus proyectos personales y familiares.",
        benefits: [
            "Atención inmediata",
            "Plazos flexibles hasta 60 meses",
            "Aprobación rápida",
            "Sin penalización por pago"
        ],
        color: "bg-white border-b text-blue-900",
        iconColor: "text-blue-900",
        buttonText: "Solicitar crédito",
        buttonColor: "bg-blue-900 hover:bg-blue-800 text-white",
        delay: 0.1
    },
    {
        icon: <Home className="w-10 h-10" />,
        title: "Créditos de Vivienda",
        subtitle: "Tu casa, tu futuro",
        description: "Haz realidad el sueño de tu hogar con nuestro financiamiento.",
        benefits: [
            "Financiamiento hasta el 80%",
            "Plazos hasta 20 años",
            "Tasas competitivas",
            "Asesoría personalizada"
        ],
        color: "bg-blue-900 text-white",
        iconColor: "text-yellow-500",
        buttonText: "Solicitar crédito",
        buttonColor: "bg-yellow-500 hover:bg-yellow-400 text-blue-900",
        delay: 0.2
    }
];

export function Services() {
    return (
        <section id="servicios" className="py-12 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    >
                        Nuestros Servicios
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-base text-gray-600"
                    >
                        Soluciones financieras para tu familia y comunidad.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: service.delay, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col h-full bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                        >
                            {/* Card Header */}
                            <div className={`p-5 ${service.color} transition-colors duration-300`}>
                                <div className={`mb-3 p-3 bg-white rounded-xl w-fit shadow-sm ${service.iconColor}`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                                <p className="text-sm font-medium opacity-90">{service.subtitle}</p>
                            </div>

                            {/* Card Body */}
                            <div className="p-5 flex-grow flex flex-col">
                                <p className="text-gray-600 mb-4 text-sm font-medium">
                                    {service.description}
                                </p>

                                <ul className="space-y-2 mb-6 flex-grow">
                                    {service.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-700">
                                            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${service.iconColor}`} />
                                            <span className="text-[13px] font-semibold">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="https://wa.me/50257481463"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-95 shadow-md hover:shadow-lg text-sm ${service.buttonColor}`}
                                >
                                    {service.buttonText}
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
