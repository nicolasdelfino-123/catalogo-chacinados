import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard.jsx";

export default function HomeFeatured({
    store,
    productSearch,
    setProductSearch,
    allProductsLink,
}) {
    return (
        <section id="productos" className="py-10 md:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
                        Productos destacados
                    </h2>

                    <div className="flex flex-col md:flex-row md:items-center md:gap-4 md:justify-center w-full">
                        <input
                            type="text"
                            placeholder="Buscar por nombre o marca..."
                            value={productSearch}
                            onChange={(e) => setProductSearch(e.target.value)}
                            className="px-3 py-2 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm w-full md:w-96 border border-gray-300 bg-white"
                        />
                    </div>
                </div>

                {store.loading ? (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                        <p className="mt-2 text-gray-600">Cargando productos...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {(store.products || [])
                            .filter((p) => {
                                const q = productSearch.toLowerCase();
                                return (
                                    !q ||
                                    p.name?.toLowerCase().includes(q) ||
                                    p.brand?.toLowerCase().includes(q)
                                );
                            })
                            .slice(0, 12)
                            .map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                    </div>
                )}

                <div className="text-center mt-10">
                    <Link
                        to={allProductsLink}
                        className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                        Ver todo el catálogo
                    </Link>
                </div>
            </div>
        </section>
    );
}