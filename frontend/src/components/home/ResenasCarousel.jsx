import { useState } from "react";
import { resenas } from "../../config/configResenas";

export default function ResenasCarousel() {
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prev) => (prev + 1) % resenas.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + resenas.length) % resenas.length);
    };

    const visible = resenas.slice(index, index + 3);
    if (visible.length < 3) {
        visible.push(...resenas.slice(0, 3 - visible.length));
    }

    return (
        <section className="bg-white py-12">
            <div className="max-w-6xl mx-auto px-4 relative">

                <h2 className="text-center text-2xl md:text-3xl font-serif font-semibold mb-10">
                    Testimonios de compras
                </h2>

                {/* Flecha izquierda */}
                <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl px-3 py-2 hover:scale-110 transition"
                >
                    ←
                </button>

                {/* Flecha derecha */}
                <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl px-3 py-2 hover:scale-110 transition"
                >
                    →
                </button>

                <div className="grid md:grid-cols-3 gap-6">
                    {visible.map((r) => (
                        <div
                            key={r.id}
                            className="bg-gray-50 p-6 rounded-xl shadow-sm text-center"
                        >
                            <h4 className="font-semibold">{r.nombre}</h4>

                            {/* estrellas */}
                            <div className="text-yellow-500 my-2">
                                {"★".repeat(r.estrellas)}
                            </div>

                            <h3 className="font-semibold mt-2">{r.titulo}</h3>

                            <p className="text-sm text-gray-600 mt-2">{r.texto}</p>
                        </div>
                    ))}
                </div>

                {/* dots */}
                <div className="flex justify-center mt-6 gap-2">
                    {resenas.map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${i === index ? "bg-black" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}