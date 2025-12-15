'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navigation from "../../components/Navigation";
import Link from "next/link";
import Image from "next/image";
import { getProductBySlug, products } from "../../data/products";

export default function ProductDetailPage() {
  const params = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);

  const slug = params?.slug as string;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="bg-custom min-h-screen">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-light text-gray-900 mb-4">Sản phẩm không tìm thấy</h1>
          <Link href="/san-pham" className="text-pink-600 hover:text-pink-700 font-light">
            Quay lại danh sách sản phẩm
          </Link>
        </main>
      </div>
    );
  }

  const allImages = [product.mainImage, ...product.additionalImages];
  
  // Extended content based on product
  const idealFor = product.id === "1" 
    ? [
        "Da nhạy cảm tới rất nhạy cảm",
        "Da thường tới da khô",
        "Da bị mẩn đỏ và ngứa do khô",
        "Da bị tổn thương",
        "Da đang điều trị hoặc vừa thực hiện thủ thuật thẩm mỹ"
      ]
    : [
        "Da nhạy cảm tới rất nhạy cảm",
        "Da thường tới da khô",
        "Da bị mẩn đỏ và ngứa do thời tiết",
        "Da đang điều trị hoặc vừa thực hiện thủ thuật thẩm mỹ",
        "Phụ nữ mang thai"
      ];

  const detailedBenefits = product.id === "1"
    ? "Làm sạch sâu bụi bẩn, dầu thừa, bã nhờn một cách hiệu quả. Dành cho da rất nhạy cảm, không gây căng khô, duy trì độ ẩm tự nhiên của da, bảo vệ hàng rào độ ẩm, ngăn ngừa & giảm mất nước qua da. Giúp dưỡng ẩm, làm dịu da, và làm cho da mềm mại, mịn màng sau khi sử dụng. Hỗ trợ cân bằng hệ vi sinh da, giảm kích ứng da."
    : "Làm sạch sâu lớp trang điểm, bụi bẩn, bã nhờn, dầu thừa... một cách hiệu quả. Dành cho da rất nhạy cảm, không cần rửa lại với nước, duy trì độ ẩm tự nhiên của da, bảo vệ hàng rào độ ẩm, ngăn ngừa & giảm mất nước qua da. Giúp dưỡng ẩm, làm dịu da, và làm cho da mềm mại, mịn màng sau khi sử dụng. Hỗ trợ cân bằng hệ vi sinh da, giảm kích ứng da.";

  const ingredientDetails = product.id === "1"
    ? [
        {
          name: "Chiết xuất hoa sen",
          description: "Chiết xuất hoa sen với hàm lượng flavonoid cao giúp hạn chế các gốc tự do từ tia UV và stress môi trường. Chiết xuất sen chứa các loại đường như fructose và glucose, mang lại khả năng dưỡng ẩm cao, làm mềm và làm dịu da nhạy cảm."
        },
        {
          name: "Beta-glucan",
          description: "Beta-glucan là một polysaccharide tự nhiên có khả năng phục hồi và bảo vệ da. Giúp giảm kích ứng, làm dịu da, và hỗ trợ phục hồi hàng rào bảo vệ da tự nhiên."
        },
        {
          name: "PCA Sodium",
          description: "PCA Sodium là một thành phần dưỡng ẩm tự nhiên, giúp duy trì độ ẩm của da và ngăn ngừa mất nước qua da."
        },
        {
          name: "Vitamin B5",
          description: "Vitamin B5 (Panthenol) có khả năng làm dịu và phục hồi da, giúp da mềm mại và mịn màng hơn."
        }
      ]
    : [
        {
          name: "Chiết xuất hoa sen",
          description: "Chiết xuất hoa sen với hàm lượng flavonoid cao giúp hạn chế các gốc tự do từ tia UV và stress môi trường. Chiết xuất sen chứa các loại đường như fructose và glucose, mang lại khả năng dưỡng ẩm cao, làm mềm và làm dịu da nhạy cảm."
        },
        {
          name: "NatraGem™ S150",
          description: "NatraGem™ S150 là phức hợp của Polyglyceryl-4 Laurate/Sebacate và Polyglyceryl-4 Caprylate/Caprate. Ưu điểm vượt trội: 100% nguồn gốc thực vật, được chứng nhận hữu cơ Ecocert, khả năng hòa tan mạnh các chất ưa dầu trong sản phẩm trang điểm, hiệu quả trong việc làm sạch và nhanh chóng loại bỏ lớp trang điểm, bã nhờn và bụi bẩn trên da. So với các chất tẩy rửa khác, phức hợp này đã được chứng minh hạn chế mất nước qua da và rất an toàn cho da, được chứng minh qua các thử nghiệm in-vivo."
        },
        {
          name: "Phức hợp prebiotics",
          description: "Phức hợp prebiotics với tính chọn lọc sinh học cao từ Bioecolia và các prebiotics tự nhiên bao gồm Xylitol, Inulin, Trehalose và Beta-glucan, giúp duy trì cân bằng vi sinh sau khi tẩy trang, đồng thời làm dịu da, cân bằng pH và củng cố hàng rào bảo vệ da."
        }
      ];

  const lotusStory = "Sen có mặt ở khắp mọi miền đất nước Việt Nam, từ núi rừng đến đồng bằng. Từ Ninh Bình, Huế, Hậu Giang đến Đồng Tháp, sen đã trở thành một phần không thể thiếu của văn hóa và thiên nhiên Việt Nam. Cocoon đã kết nối với những bông sen tươi đẹp từ Hậu Giang - vùng đất nổi tiếng với chất lượng sen hàng đầu, để tạo nên những sản phẩm chăm sóc da dịu nhẹ và hiệu quả.";

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxImageIndex === null) return;

      if (e.key === 'ArrowLeft' && lightboxImageIndex > 0) {
        setLightboxImageIndex(lightboxImageIndex - 1);
      } else if (e.key === 'ArrowRight' && lightboxImageIndex < allImages.length - 1) {
        setLightboxImageIndex(lightboxImageIndex + 1);
      } else if (e.key === 'Escape') {
        setLightboxImageIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImageIndex, allImages.length]);

  return (
    <div className="bg-custom min-h-screen">
      <Navigation />

      <main className="w-full">
        {/* Breadcrumb */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600 font-light">
            <li>
              <Link href="/" className="hover:text-gray-900 transition-colors">
                Trang chủ
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/san-pham" className="hover:text-gray-900 transition-colors">
                Sản phẩm
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        {/* Hero Section - Product Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Images */}
            <div className="space-y-4">
              {/* Main Image/Video */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-pink-50 to-white">
                {!isVideoPlaying ? (
                  <>
                    <Image
                      src={allImages[selectedImageIndex]}
                      alt={product.name}
                      fill
                      className="object-cover cursor-pointer"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      onClick={() => {
                        if (selectedImageIndex === 0) {
                          setIsVideoPlaying(true);
                        } else {
                          setLightboxImageIndex(selectedImageIndex);
                        }
                      }}
                    />
                    {/* Video Play Button Overlay - chỉ hiển thị khi là ảnh đầu tiên */}
                    {selectedImageIndex === 0 && (
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                      >
                        <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                          <svg
                            className="w-8 h-8 text-gray-900 ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>
                    )}
                  </>
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      src={product.video}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                      onEnded={() => setIsVideoPlaying(false)}
                    />
                    <button
                      onClick={() => setIsVideoPlaying(false)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {allImages.slice(0, 4).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedImageIndex(index);
                      setIsVideoPlaying(false);
                    }}
                    className={`relative aspect-square overflow-hidden transition-all cursor-pointer ${
                      selectedImageIndex === index
                        ? 'opacity-100 scale-105'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - Hình ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 25vw, 12.5vw"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            {/* <div className="space-y-8 flex flex-col justify-center"> */}
            <div className="md:max-w-xl mx-auto mt-10">
              {/* Title */}
              <div>
                <h1 className="text-5xl font-serif text-gray-900 mb-3 tracking-tight">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-500 font-light italic mb-6">
                  {product.nameEn}
                </p>
                {/* Price & Volume */}
                <div className="flex items-center justify-between py-6 border-y border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 mb-1 font-light uppercase tracking-wide">Dung tích</p>
                    <p className="text-lg text-gray-900 font-light">{product.volume}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1 font-light uppercase tracking-wide">Giá</p>
                    <p className="text-2xl font-medium text-gray-900">{product.price}</p>
                  </div>
                </div>
              </div>

              {/* Short Description */}
              <div className="pt-4">
                <p className="text-gray-700 leading-relaxed font-light text-lg">
                  {product.shortDescription}
                </p>
              </div>

              {/* Safety Commitments */}
              <div className="bg-white/50 backdrop-blur-sm p-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wide">Cam kết an toàn</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.safetyCommitments.map((commitment, index) => (
                    <div key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm font-light">{commitment}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Ideal For & Benefits - Image Left, Text Right */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Image */}
              <div className="relative h-[600px] overflow-hidden">
                <Image
                  src={product.id === "1" ? "/images/products/product06.jpg" : "/images/Vy/vy04.jpg"}
                  alt="Lotus flower"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Right - Text Content */}
              <div className="space-y-12">
                {/* Ideal For */}
                <div>
                  <h2 className="text-4xl font-serif text-gray-900 mb-8">
                    Lý tưởng cho
                  </h2>
                  <ul className="space-y-4">
                    {idealFor.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-pink-400 mr-4 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 font-light text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h2 className="text-4xl font-serif text-gray-900 mb-6">
                    Công dụng
                  </h2>
                  <p className="text-gray-700 leading-relaxed font-light text-lg">
                    {detailedBenefits}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Lotus Story - Text Left, Image Right */}
        <section className="bg-gradient-to-b from-custom to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Text Content */}
              <div className="space-y-6">
                <h2 className="text-4xl font-serif text-gray-900 mb-6">
                  Câu chuyện về Sen
                </h2>
                <p className="text-gray-700 leading-relaxed font-light text-lg">
                  {lotusStory}
                </p>
              </div>

              {/* Right - Image */}
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src={product.id === "1" ? "/images/products/product02.JPG" : "/images/Vy/vy11.jpg"}
                  alt="Lotus in nature"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Key Ingredients - Full Width with Image Background */}
        <section className="bg-gradient-to-br from-green-50 via-pink-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-serif text-gray-900 mb-16 text-center">
              Thành phần chính
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left - Text Content */}
              <div className="space-y-8">
                {ingredientDetails.map((ingredient, index) => (
                  <div key={index} className="bg-white/60 backdrop-blur-sm p-6">
                    <h3 className="text-2xl font-serif text-gray-900 mb-3">
                      {ingredient.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-light">
                      {ingredient.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right - Image */}
              <div className="relative h-[700px] overflow-hidden">
                <Image
                  src={product.id === "1" ? "/images/products/product01.JPG" : "/images/Vy/vy02.JPG"}
                  alt="Product ingredients"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Usage Instructions - Image Left, Text Right */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Image */}
              <div className="relative h-[600px] overflow-hidden">
                <Image
                  src={product.id === "1" ? "/images/products/product02.JPG" : "/images/Vy/vy01.JPG"}
                  alt="Product usage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Right - Text Content */}
              <div className="space-y-8">
                <h2 className="text-4xl font-serif text-gray-900 mb-8">
                  Cách sử dụng
                </h2>
                <ol className="space-y-5">
                  {product.usage.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-2xl font-serif text-pink-400 mr-4 mt-1">
                        {index + 1}.
                      </span>
                      <span className="text-gray-700 font-light text-lg leading-relaxed flex-1">{step}</span>
                    </li>
                  ))}
                </ol>

                {/* Additional Info */}
                <div className="pt-8 border-t border-gray-100 space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Hướng dẫn bảo quản</h4>
                    <p className="text-gray-600 font-light">
                      Đậy kín nắp sau khi sử dụng. Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nhiệt độ cao.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Lưu ý</h4>
                    <p className="text-gray-600 font-light">
                      Sản phẩm không mùi, phù hợp cho da nhạy cảm. Nếu có phản ứng bất thường, ngưng sử dụng và tham khảo ý kiến bác sĩ da liễu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Gallery - Multiple Images */}
        <section className="bg-gradient-to-b from-white to-custom py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif text-gray-900 mb-12 text-center">
              Hình ảnh sản phẩm
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allImages.slice(0, 8).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxImageIndex(index)}
                  className="relative aspect-square overflow-hidden cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`${product.name} - Hình ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif text-gray-900 mb-12 text-center">
              Sản phẩm khác
            </h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-8 max-w-md w-full">
                {products
                  .filter((p) => p.id !== product.id)
                  .map((relatedProduct) => (
                    <Link
                      key={relatedProduct.id}
                      href={`/san-pham/${relatedProduct.slug}`}
                      className="group"
                    >
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                        <div className="relative h-80 overflow-hidden">
                          <Image
                            src={relatedProduct.mainImage}
                            alt={relatedProduct.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-light text-gray-900 mb-2">
                            {relatedProduct.name}
                          </h3>
                          <p className="text-sm text-gray-500 font-light italic mb-4">
                            {relatedProduct.nameEn}
                          </p>
                          <p className="text-sm text-gray-600 font-light line-clamp-2">
                            {relatedProduct.shortDescription}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {lightboxImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightboxImageIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxImageIndex(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous Button */}
          {lightboxImageIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImageIndex(lightboxImageIndex - 1);
              }}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Next Button */}
          {lightboxImageIndex < allImages.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImageIndex(lightboxImageIndex + 1);
              }}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
            >
              <svg
                className="w-6 h-6 text-white"
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
            </button>
          )}

          {/* Image */}
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full mx-4 flex items-center justify-center">
            <Image
              src={allImages[lightboxImageIndex]}
              alt={product.name}
              fill
              className="object-contain"
              sizes="90vw"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm z-10">
            {lightboxImageIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
