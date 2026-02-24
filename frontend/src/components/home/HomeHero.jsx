import React from "react";
import heroBg from "@/assets/hero-final-1.png"; // por ahora reutilizamos tu imagen para no frenar

export default function HomeHero({ onScrollToProducts, isWholesale }) {
    return (
        <section className="bg-gray-900 text-white min-h-[60vh] flex flex-col justify-end relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Fondo"
                    className="w-full h-[70vh] md:h-[80vh] object-cover opacity-30"
                    loading="eager"
                    decoding="async"
                />
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-4 text-center relative z-10 pb-10">
                <span className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/80 mb-3">
                    {isWholesale ? "Catálogo Mayorista" : "Catálogo"}
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4">
                    Perfumes Árabes
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-white/80 mb-7">
                    Elegí tu fragancia y pedí por WhatsApp. Catálogo actualizado.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        onClick={onScrollToProducts}
                        className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                        Ver productos
                    </button>

                    <a
                        href="#contacto"
                        className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/15 transition-colors"
                    >
                        Contacto
                    </a>
                </div>
            </div>
        </section>
    );
}