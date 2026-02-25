import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, MessageCircle, Navigation, Building2, X, Phone, Clock } from "lucide-react";
import agenciaCentralImg from "../assets/images/AgenciaCentral.png";
import agenciaChajulImg from "../assets/images/AgenciaChajul.png";
import agenciaAculImg from "../assets/images/AgenciaAcul.png";

const agencies = [
    {
        id: "central",
        subtitle: "Sede Principal",
        name: "Agencia Central",
        address: "Cantón Vipila, Nebaj, Quiché, Guatemala",
        phone: "57481463",
        image: agenciaCentralImg,
        mapLink: "https://www.google.com/maps/place/15%C2%B024'32.7%22N+91%C2%B008'44.6%22W/@15.4090833,-91.1457222,17z/",
        mapEmbed: "https://maps.google.com/maps?q=15.4090833,-91.1457222&t=&z=17&ie=UTF8&iwloc=&output=embed",
        bg: "bg-blue-900",
        textColor: "text-white",
        iconBtnBg: "bg-white/10 text-yellow-500 hover:bg-white/20",
        delay: 0,
        schedule: "Lun - Vie: 8:00 AM - 5:00 PM, Sáb: 8:00 AM - 12:00 PM"
    },
    {
        id: "chajul",
        subtitle: "Punto de Servicio",
        name: "Agencia Chajul",
        address: "Cantón Ilom, Chajul, Quiché, Guatemala",
        phone: "30615489",
        image: agenciaChajulImg,
        mapLink: "https://www.google.com/maps/place/15%C2%B029'08.6%22N+91%C2%B002'13.2%22W/@15.4857222,-91.037,17z/",
        mapEmbed: "https://maps.google.com/maps?q=15.4857222,-91.037&t=&z=15&ie=UTF8&iwloc=&output=embed",
        bg: "bg-green-900",
        textColor: "text-white",
        iconBtnBg: "bg-white/10 text-yellow-500 hover:bg-white/20",
        delay: 0.1,
        schedule: "Lun - Vie: 8:00 AM - 5:00 PM, Sáb: 8:00 AM - 12:00 PM"
    },
    {
        id: "acul",
        subtitle: "Punto de Servicio",
        name: "Agencia Acul",
        address: "Aldea Acul, Nebaj, Quiché, Guatemala",
        phone: "30371080",
        image: agenciaAculImg,
        mapLink: "https://www.google.com/maps/place/15%C2%B024'21.1%22N+91%C2%B011'15.0%22W/@15.4058522,-91.1875071,17z/",
        mapEmbed: "https://maps.google.com/maps?q=15.4058522,-91.1875071&t=&z=15&ie=UTF8&iwloc=&output=embed",
        bg: "bg-yellow-500",
        textColor: "text-blue-900",
        iconBtnBg: "bg-blue-900/10 text-blue-900 hover:bg-blue-900/20",
        delay: 0.2,
        schedule: "Lun - Vie: 8:00 AM - 5:00 PM, Sáb: 8:00 AM - 12:00 PM"
    }
];

export function Agencies() {
    const [selectedAgency, setSelectedAgency] = useState<typeof agencies[0] | null>(null);
    const [viewMode, setViewMode] = useState<'image' | 'map'>('image');

    const handleSelectAgency = (agency: typeof agencies[0]) => {
        setSelectedAgency(agency);
        setViewMode('image');
    };

    return (
        <section id="agencias" className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-10 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block p-2 bg-primary/10 rounded-full mb-3"
                    >
                        <MapPin className="w-6 h-6 text-primary" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    >
                        Nuestra Presencia
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-base text-gray-600"
                    >
                        Estamos cerca de ti para brindarte el respaldo financiero que mereces.
                    </motion.p>
                </div>

                {/* Agencies Grid */}
                <div className="grid lg:grid-cols-3 gap-4">
                    {agencies.map((agency) => (
                        <motion.div
                            key={agency.id}
                            layoutId={agency.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: agency.delay }}
                            onClick={() => handleSelectAgency(agency)}
                            className={`${agency.bg} rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
                        >
                            {/* Image Container */}
                            <div className="relative h-48 bg-black/5 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium p-4 text-center">
                                    <div className="flex flex-col items-center gap-2">
                                        <Building2 className="w-8 h-8 opacity-30" />
                                        <span className="text-xs">{agency.name}</span>
                                    </div>
                                </div>
                                <motion.img
                                    src={agency.image}
                                    alt={agency.name}
                                    className="relative w-full h-full object-contain p-2 z-20"
                                    onError={(e) => e.currentTarget.style.display = 'none'}
                                />

                                {/* Badge */}
                                <div className="absolute top-2 left-2 z-30 bg-white/90 backdrop-blur-sm px-3 py-0.5 rounded-full text-[10px] font-bold text-blue-900 shadow-sm border border-black/5 uppercase tracking-wider">
                                    {agency.subtitle}
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="p-4 flex-grow flex flex-col">
                                <h3 className={`text-lg font-bold mb-0.5 uppercase tracking-tight ${agency.textColor}`}>{agency.name}</h3>
                                <p className={`text-xs mb-3 line-clamp-2 font-medium leading-relaxed ${agency.textColor === 'text-white' ? 'text-white/80' : 'text-blue-900/80'}`}>
                                    {agency.address}
                                </p>

                                <div className="grid grid-cols-2 gap-2 mt-auto">
                                    <a
                                        href={`https://wa.me/502${agency.phone}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className={`flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg text-[11px] font-bold transition-all hover:scale-105 active:scale-95 ${agency.iconBtnBg}`}
                                    >
                                        <MessageCircle className="w-3.5 h-3.5" />
                                        WhatsApp
                                    </a>
                                    <a
                                        href={agency.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className={`flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg text-[11px] font-bold transition-all hover:scale-105 active:scale-95 ${agency.iconBtnBg}`}
                                    >
                                        <Navigation className="w-3.5 h-3.5" />
                                        Maps
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal for "Se muestra todo" */}
                <AnimatePresence>
                    {selectedAgency && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedAgency(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            />

                            <motion.div
                                layoutId={selectedAgency.id}
                                className={`${selectedAgency.bg} w-full max-w-5xl max-h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row`}
                            >
                                <button
                                    onClick={() => setSelectedAgency(null)}
                                    className="absolute top-4 right-4 z-[110] p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Modal Media (Map or Image) */}
                                <div className="w-full md:w-3/5 bg-black/10 flex flex-col p-4">
                                    {/* Tabs */}
                                    <div className="flex gap-2 mb-4 bg-black/20 p-1 rounded-xl w-fit self-center">
                                        <button
                                            onClick={() => setViewMode('image')}
                                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'image' ? 'bg-white text-blue-900 shadow-lg' : 'text-white/60 hover:text-white'}`}
                                        >
                                            Fotografía
                                        </button>
                                        <button
                                            onClick={() => setViewMode('map')}
                                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'map' ? 'bg-white text-blue-900 shadow-lg' : 'text-white/60 hover:text-white'}`}
                                        >
                                            Ubicación Exacta
                                        </button>
                                    </div>

                                    {/* Animation Area */}
                                    <div className="flex-grow relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden bg-black/5 flex items-center justify-center">
                                        <AnimatePresence mode="wait">
                                            {viewMode === 'image' ? (
                                                <motion.img
                                                    key="img"
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    transition={{ duration: 0.3 }}
                                                    src={selectedAgency.image}
                                                    alt={selectedAgency.name}
                                                    className="w-full h-full object-contain rounded-xl"
                                                />
                                            ) : (
                                                <motion.div
                                                    key="map"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="w-full h-full"
                                                >
                                                    <iframe
                                                        src={selectedAgency.mapEmbed}
                                                        width="100%"
                                                        height="100%"
                                                        style={{ border: 0 }}
                                                        allowFullScreen={true}
                                                        loading="lazy"
                                                        referrerPolicy="no-referrer-when-downgrade"
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Modal Content */}
                                <div className="w-full md:w-2/5 p-8 flex flex-col">
                                    <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-2">
                                        {selectedAgency.subtitle}
                                    </span>
                                    <h3 className={`text-3xl font-bold mb-6 ${selectedAgency.textColor}`}>
                                        {selectedAgency.name}
                                    </h3>

                                    <div className="space-y-6 flex-grow">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-white/10 p-2 rounded-lg text-yellow-500">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className={`font-bold ${selectedAgency.textColor}`}>Ubicación</h4>
                                                <p className={selectedAgency.textColor === 'text-white' ? 'text-white/70' : 'text-blue-900/70'}>
                                                    {selectedAgency.address}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-white/10 p-2 rounded-lg text-yellow-500">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className={`font-bold ${selectedAgency.textColor}`}>Teléfono</h4>
                                                <p className={selectedAgency.textColor === 'text-white' ? 'text-white/70' : 'text-blue-900/70'}>
                                                    +502 {selectedAgency.phone}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-white/10 p-2 rounded-lg text-yellow-500">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className={`font-bold ${selectedAgency.textColor}`}>Horario</h4>
                                                <p className={selectedAgency.textColor === 'text-white' ? 'text-white/70' : 'text-blue-900/70'}>
                                                    {selectedAgency.schedule}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mt-8">
                                        <a
                                            href={`https://wa.me/502${selectedAgency.phone}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 ${selectedAgency.iconBtnBg}`}
                                        >
                                            <MessageCircle className="w-6 h-6" />
                                            WhatsApp
                                        </a>
                                        <a
                                            href={selectedAgency.mapLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 ${selectedAgency.iconBtnBg}`}
                                        >
                                            <Navigation className="w-6 h-6" />
                                            Maps
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
