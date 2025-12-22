import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-light mb-4">Đặt hàng & Hỗ trợ</h3>
            <ul className="space-y-2 text-sm font-light text-gray-300">
              <li><Link href="/lien-he" className="hover:text-white transition-colors">Liên hệ chúng tôi</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-light mb-4">Shop</h3>
            <ul className="space-y-2 text-sm font-light text-gray-300">
              <li><Link href="/san-pham" className="hover:text-white transition-colors">Sản Phẩm</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-light mb-4">Về Cocoon</h3>
            <ul className="space-y-2 text-sm font-light text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">Câu chuyện thương hiệu</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400 font-light">
          <p>© 2025 Cocoon Vietnam x Vy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

