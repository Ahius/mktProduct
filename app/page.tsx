'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import Navigation from "./components/Navigation";
import { products } from "./data/products";
import { getVideoUrl } from "./config/videos";

export default function Home() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const quotes = [
    {
      text: "Cocoon Vietnam – Từ mầm xanh làm đẹp đến giải thưởng danh giá tại ELLE Beauty Awards 2021",
      source: "ELLE VIETNAM"
    },
    {
      text: "Cocoon – Mỹ phẩm thuần chay cho nét đẹp thuần Việt",
      source: "ELLE VIETNAM"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000); // Auto change every 5 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

  const goToNext = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  const goToPrev = () => {
    setCurrentQuoteIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-gray-900 text-white text-center py-2 text-sm font-light">
        <p>Tận hưởng giao hàng miễn phí toàn quốc với hoá đơn từ 99.000 ₫</p>
      </div>

      <Navigation />

      <main className="w-full">
        {/* Hero Video Section */}
        <section className="relative h-screen max-h-[800px] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={products[0].video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-3xl">
              <h1 className="text-5xl lg:text-7xl font-serif mb-6">
                {products[0].name}
          </h1>
              <p className="text-xl lg:text-2xl font-light italic mb-8">
                {products[0].nameEn}
          </p>
            <Link
                href={`/san-pham/${products[0].slug}`}
                className="inline-block bg-white text-gray-900 px-10 py-4 font-light hover:bg-gray-100 transition-colors text-lg"
            >
                KHÁM PHÁ NGAY
            </Link>
            </div>
          </div>
        </section>

        {/* Marquee Text */}
        <div className="bg-custom border-y border-gray-200 overflow-hidden py-4">
          <div className="marquee-container">
            <div className="marquee-content">
              <span className="text-gray-900 font-bold text-xl lg:text-2xl uppercase tracking-tight">
                Mỹ phẩm 100% thuần chay cho nét đẹp thuần Việt
              </span>
              <span className="text-gray-900 font-bold text-xl lg:text-2xl uppercase ml-24 tracking-tight">
                Mỹ phẩm 100% thuần chay cho nét đẹp thuần Việt
              </span>
              <span className="text-gray-900 font-bold text-xl lg:text-2xl uppercase ml-24 tracking-tight">
                Mỹ phẩm 100% thuần chay cho nét đẹp thuần Việt
              </span>
              <span className="text-gray-900 font-bold text-xl lg:text-2xl uppercase ml-24 tracking-tight">
                Mỹ phẩm 100% thuần chay cho nét đẹp thuần Việt
              </span>
            </div>
          </div>
        </div>

        {/* Second Product Section */}
        <section className="bg-white pt-20 lg:pt-32 pb-0 lg:pb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
                <Image
                  src={products[1].mainImage}
                  alt={products[1].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="text-sm text-gray-500 font-light uppercase tracking-wide">
                  Ra mắt sản phẩm mới
                </div>
                <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight">
                  {products[1].name}
          </h2>
                <p className="text-xl text-gray-500 font-light italic">
                  {products[1].nameEn}
                </p>
                <p className="text-gray-700 leading-relaxed font-light text-lg">
                  Cocoon x Phương Mỹ Chi ra mắt nước tẩy trang thế hệ mới: {products[1].name} - làm sạch sâu lớp trang điểm và bụi siêu mịn PM1.0 nhờ công nghệ độc quyền NatraGem™ S150, hỗ trợ cân bằng hệ vi sinh trên da với phức hợp prebiotics, phù hợp cho mọi loại da, kể cả da rất nhạy cảm.
                </p>
                <div className="pt-4">
                  <Link
                    href={`/san-pham/${products[1].slug}`}
                    className="inline-block bg-gray-900 text-white px-8 py-3 font-light hover:bg-gray-800 transition-colors"
                  >
                    XEM NGAY
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third Product Section - Cleanser */}
        <section className="bg-white pt-0 pb-20 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:-mt-32">
              <div className="space-y-6 order-1 lg:order-1 lg:mt-32">
                <div className="text-sm text-gray-500 font-light uppercase tracking-wide">
                  Ra mắt sản phẩm mới
                </div>
                <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight">
                  {products[0].name}
          </h2>
                <p className="text-xl text-gray-500 font-light italic">
                  {products[0].nameEn}
                </p>
                <p className="text-gray-700 leading-relaxed font-light text-lg">
                  Sữa rửa mặt dịu nhẹ từ chiết xuất sen Hậu Giang, kết hợp với Madecassoside, Vitamin B5, Beta-glucan & Sodium PCA, giúp làm sạch đa nhiệm mà vẫn giữ ẩm, giảm kích ứng và phục hồi da nhạy cảm. Giải pháp làm sạch đa nhiệm dành cho da rất nhạy cảm.
                </p>
                <div className="pt-4">
                  <Link
                    href={`/san-pham/${products[0].slug}`}
                    className="inline-block bg-gray-900 text-white px-8 py-3 font-light hover:bg-gray-800 transition-colors"
                  >
                    XEM NGAY
                  </Link>
                </div>
              </div>
              <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-2">
                <Image
                  src={products[0].mainImage}
                  alt={products[0].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase Section with Model Images */}
        <section className="bg-gradient-to-br from-green-50 via-pink-50 to-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Left Image */}
              <div className="relative h-[500px] lg:h-[600px] overflow-hidden group rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 rounded-lg"></div>
                <div className="absolute inset-0 border border-white/40 z-10 rounded-lg pointer-events-none"></div>
                <Image
                  src="/images/Vy/vy01.JPG"
                  alt={products[1].name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              
              {/* Center Video */}
              <div className="relative h-[500px] lg:h-[600px] overflow-hidden group rounded-lg shadow-md hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 rounded-lg"></div>
                <div className="absolute inset-0 border-2 border-white/50 z-10 rounded-lg pointer-events-none shadow-inner"></div>
                <video
                  src={getVideoUrl('homepageShowcase')}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-lg"
                />
              </div>
              
              {/* Right Image */}
              <div className="relative h-[500px] lg:h-[600px] overflow-hidden group rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 rounded-lg"></div>
                <div className="absolute inset-0 border border-white/40 z-10 rounded-lg pointer-events-none"></div>
                <Image
                  src="/images/Vy/vy03.JPG"
                  alt={products[1].name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
            
            {/* Brand Message Below Images */}
            <div className="mt-12 text-center max-w-3xl mx-auto">
              <div className="flex flex-col items-center">
                <h2 className="text-5xl lg:text-6xl text-gray-900 font-bold leading-tight uppercase tracking-wider" style={{ letterSpacing: '0.15em' }}>
                  Cocoon
                </h2>
                <span className="text-xs text-gray-500 font-light mt-2 tracking-wider">
                  dịu lành làn da việt
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ELLE Quotes Carousel Section */}
        <section className="bg-custom py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Quote Content */}
              <div className="text-center space-y-8 min-h-[300px] flex flex-col justify-center">
                <div className="relative overflow-hidden">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentQuoteIndex * 100}%)` }}
                  >
                    {quotes.map((quote, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <p 
                          className="text-amber-700 font-serif text-2xl lg:text-3xl italic leading-relaxed mb-8"
                          style={{ fontFamily: 'var(--font-serif)', color: '#92400e' }}
                        >
                          {quote.text}
                        </p>
                        <p className="text-gray-900 font-bold text-sm uppercase tracking-widest">
                          {quote.source}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2">
                  {quotes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentQuoteIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentQuoteIndex
                          ? 'bg-amber-700 w-8'
                          : 'bg-amber-200 w-2'
                      }`}
                      aria-label={`Go to quote ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center gap-4 mt-6">
                  <button
                    onClick={goToPrev}
                    className="w-12 h-12 flex items-center justify-center border border-gray-300 hover:border-gray-900 hover:bg-gray-50 transition-all"
                    aria-label="Previous quote"
                  >
                    <svg
                      className="w-6 h-6 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={goToNext}
                    className="w-12 h-12 flex items-center justify-center border border-gray-300 hover:border-gray-900 hover:bg-gray-50 transition-all"
                    aria-label="Next quote"
                  >
                    <svg
                      className="w-6 h-6 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="bg-gradient-to-b from-white to-custom py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl text-gray-900 mb-4 text-center">
                <span className="font-serif italic">Sản phẩm</span>{' '}
                <span className="font-bold uppercase tracking-tight">NỔI BẬT</span>
              </h2>
              <p className="text-gray-600 font-light">
                Bộ sưu tập chăm sóc da dịu nhẹ từ sen Hậu Giang
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/san-pham/${product.slug}`}
                  className="group"
                >
                  <div className="bg-white overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={product.mainImage}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-wide">
                        {product.name}
              </h3>
                      <p className="text-sm text-gray-500 font-light italic mb-4">
                        {product.nameEn}
                      </p>
                      <p className="text-gray-600 mb-6 leading-relaxed font-light text-sm line-clamp-2">
                        {product.shortDescription}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-500 font-light">{product.volume}</span>
                        <span className="text-sm font-medium text-gray-900">{product.price}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/san-pham"
                className="inline-block text-gray-700 hover:text-gray-900 font-light underline underline-offset-4"
              >
                Xem tất cả sản phẩm
              </Link>
            </div>
          </div>
        </section>

        {/* Green Living Banner Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <a
              href="https://cocoonvietnam.com/bai-viet/cung-cocoon-song-xanh-moi-ngay-diem-xanh-online"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                <Image
                  src="/images/products/bannerCC.jpg"
                  alt="Cùng Cocoon sống xanh mỗi ngày - Điểm Xanh Online"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 100vw"
                />
              </div>
            </a>
        </div>
        </section>

        {/* Instagram Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <a
              href="https://www.instagram.com/cocoon.vietnam/"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative w-full overflow-hidden">
                <Image
                  src="/images/ins.png"
                  alt="Follow Cocoon on Instagram"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain group-hover:opacity-90 transition-opacity duration-300"
                  sizes="(max-width: 1024px) 100vw, 100vw"
                />
              </div>
            </a>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl text-gray-900 mb-6">
              <span className="font-serif italic">Câu chuyện</span>{' '}
              <span className="font-bold uppercase tracking-tight">THƯƠNG HIỆU</span>
          </h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-8">
              Cocoon là thương hiệu mỹ phẩm thuần chay Việt Nam, nổi bật với các sản phẩm an toàn, 
              minh bạch và sử dụng nguyên liệu bản địa. Bộ Sen Hậu Giang được phát triển dành cho da nhạy cảm, 
              chú trọng tính dịu nhẹ và phục hồi tự nhiên của làn da.
          </p>
          <Link
              href="/about"
              className="inline-block text-gray-700 hover:text-gray-900 font-light underline underline-offset-4"
          >
              Tìm hiểu thêm
          </Link>
        </div>
        </section>

        {/* Image Gallery Section */}
        <section className="bg-gradient-to-b from-white to-custom py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl text-gray-900 mb-12 text-center">
              <span className="font-serif italic">Khoảnh khắc</span>{' '}
              <span className="font-bold uppercase tracking-tight">COCOON</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.flatMap(p => [p.mainImage, ...p.additionalImages.slice(0, 2)]).slice(0, 4).map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden">
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-br from-pink-50 to-green-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] hidden lg:block">
                <Image
                  src="/images/Vy/vy02.JPG"
                  alt="Newsletter"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0vw, 50vw"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-serif text-gray-900">
                  Đăng ký để nhận thông tin khuyến mãi sớm nhất từ Cocoon
                </h2>
                <p className="text-gray-600 font-light">
                  Đăng ký để nhận thông tin liên lạc về các sản phẩm, dịch vụ, cửa hàng, sự kiện và các vấn đề đáng quan tâm của Cocoon.
                </p>
                <form className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Nhập địa chỉ email"
                    className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 font-light"
                  />
                  <button
                    type="submit"
                    className="bg-gray-900 text-white px-6 py-3 font-light hover:bg-gray-800 transition-colors"
                  >
                    Đăng ký
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
