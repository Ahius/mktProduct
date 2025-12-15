'use client';

import Navigation from "../components/Navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "../data/products";

export default function SanPhamPage() {
  return (
    <div className="bg-gradient-to-b from-custom to-white min-h-screen">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Sản phẩm
          </h1>
          <p className="text-lg text-gray-600 font-light">
            Bộ sưu tập chăm sóc da dịu nhẹ từ sen Hậu Giang
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto mt-6"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/san-pham/${product.slug}`}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-96 overflow-hidden bg-gradient-to-br from-pink-50 to-white">
                  <Image
                    src={product.mainImage}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-wide">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-light italic">
                      {product.nameEn}
                    </p>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed font-light text-sm">
                    {product.shortDescription}
                  </p>

                  {/* Key Info */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500 mb-1 font-light">Dung tích</p>
                      <p className="text-sm text-gray-700 font-light">{product.volume}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 mb-1 font-light">Giá</p>
                      <p className="text-sm font-medium text-gray-900">{product.price}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <span className="inline-flex items-center text-sm text-gray-700 font-light group-hover:text-pink-600 transition-colors">
                      Xem chi tiết
                      <svg
                        className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

