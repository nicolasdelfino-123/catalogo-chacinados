import React from "react";

export default function HomeContact({ address, hours, igUrl, waUrl, mapEmbed }) {
    return (
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="contacto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                <div className="md:col-span-1 text-center md:text-left">
                    <span className="inline-block text-sm tracking-wider font-semibold text-purple-600 bg-purple-50 border border-purple-100 rounded-full px-3 py-1">
                        Contacto
                    </span>

                    <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
                        {address.split(",")[0]}
                    </h2>
                    <p className="mt-2 text-lg text-gray-500">
                        {address.replace(address.split(",")[0] + ", ", "")}
                    </p>

                    <p className="mt-5 text-gray-600">{hours}</p>

                    <div className="mt-6 flex justify-center md:justify-start gap-4">
                        <a
                            href={igUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-lime-400 text-lime-600 hover:bg-lime-50 transition"
                            aria-label="Instagram"
                            title="Instagram"
                        >
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                            </svg>
                        </a>

                        <a
                            href={waUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-lime-400 text-lime-600 hover:bg-lime-50 transition"
                            aria-label="WhatsApp"
                            title="WhatsApp"
                        >
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                                <path d="M20.52 3.48A11.9 11.9 0 0012.06 0C5.5 0 .2 5.3.2 11.86c0 2.09.55 4.12 1.6 5.92L0 24l6.4-1.73a11.8 11.8 0 005.66 1.45h.01c6.56 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.14-3.38-8.28z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="hidden md:block h-full w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-auto" />

                <div className="md:col-span-1">
                    <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-200 bg-black">
                        <div className="aspect-video md:aspect-[4/3]">
                            <iframe
                                src={mapEmbed}
                                title="Ubicación en Google Maps"
                                className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            address
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-block text-sm text-purple-600 hover:text-purple-800"
                    >
                        Abrir en Google Maps →
                    </a>
                </div>
            </div>
        </section>
    );
}