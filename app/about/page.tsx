import Navigation from "../components/Navigation";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-custom to-white min-h-screen">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-4 tracking-tight">
            <span className="font-serif italic">Về</span>{' '}
            <span className="font-bold uppercase tracking-tight">Cocoon</span>
          </h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Thương hiệu mỹ phẩm thuần chay Việt Nam - Dịu lành làn da Việt
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto mt-6"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* About Cocoon Section */}
          <section className="bg-white rounded-lg shadow-sm p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-6">
              Câu chuyện của chúng tôi
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed font-light text-lg">
              <p>
                Cocoon là thương hiệu mỹ phẩm thuần chay Việt Nam, nổi bật với các sản phẩm an toàn, 
                minh bạch và sử dụng nguyên liệu bản địa. Chúng tôi tin rằng làm đẹp không cần hy sinh 
                sự an toàn hay đạo đức.
              </p>
              <p>
                Bộ Sen Hậu Giang được phát triển dành cho da nhạy cảm, chú trọng tính dịu nhẹ và 
                phục hồi tự nhiên của làn da. Mỗi sản phẩm đều được nghiên cứu kỹ lưỡng để mang đến 
                trải nghiệm chăm sóc da tuyệt vời nhất.
              </p>
            </div>
          </section>

          {/* Bộ Sen Hậu Giang Section */}
          <section className="bg-white rounded-lg shadow-sm p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-6">
              Bộ Sen Hậu Giang
            </h2>
            <div className="text-gray-700 leading-relaxed font-light text-lg space-y-4">
              <p>
                Bộ sản phẩm được phát triển đặc biệt dành cho da nhạy cảm, với công thức dịu nhẹ 
                và khả năng phục hồi tự nhiên.
              </p>
              <p>
                Sử dụng nguyên liệu sen từ Hậu Giang - một trong những vùng nguyên liệu chất lượng cao 
                của Việt Nam, bộ sản phẩm mang đến trải nghiệm chăm sóc da an toàn và hiệu quả, 
                phù hợp với mọi loại da, kể cả da rất nhạy cảm.
              </p>
            </div>
          </section>

          {/* Giá trị cốt lõi Section */}
          <section className="bg-white rounded-lg shadow-sm p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-8">
              Giá trị cốt lõi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
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
                  <div>
                    <h3 className="text-xl font-serif text-gray-900 mb-2">Thuần chay</h3>
                    <p className="text-gray-700 leading-relaxed font-light">
                      Tất cả sản phẩm của chúng tôi đều thuần chay, không chứa bất kỳ thành phần nào 
                      có nguồn gốc động vật.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
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
                  <div>
                    <h3 className="text-xl font-serif text-gray-900 mb-2">Minh bạch thành phần</h3>
                    <p className="text-gray-700 leading-relaxed font-light">
                      Chúng tôi cam kết công khai đầy đủ và minh bạch về mọi thành phần trong sản phẩm.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
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
                  <div>
                    <h3 className="text-xl font-serif text-gray-900 mb-2">Không thử nghiệm trên động vật</h3>
                    <p className="text-gray-700 leading-relaxed font-light">
                      Tất cả sản phẩm của Cocoon đều không thử nghiệm trên động vật, cam kết bảo vệ 
                      môi trường và động vật.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
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
                  <div>
                    <h3 className="text-xl font-serif text-gray-900 mb-2">Ưu tiên nguyên liệu địa phương</h3>
                    <p className="text-gray-700 leading-relaxed font-light">
                      Chúng tôi ưu tiên sử dụng nguyên liệu bản địa Việt Nam, góp phần phát triển 
                      nông nghiệp địa phương và đảm bảo chất lượng tươi mới.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
