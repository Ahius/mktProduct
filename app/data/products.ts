import { getVideoUrl } from "../config/videos";

export interface Product {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  shortDescription: string;
  benefits: string[];
  keyIngredients: { name: string; description: string }[];
  usage: string[];
  volume: string;
  price: string;
  safetyCommitments: string[];
  mainImage: string;
  additionalImages: string[];
  video: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "sua-rua-mat-sen-hau-giang",
    name: "SỮA RỬA MẶT SEN HẬU GIANG",
    nameEn: "Soothing Cleanser",
    shortDescription: "Sữa rửa mặt dịu nhẹ từ chiết xuất sen Hậu Giang, giúp làm sạch đa nhiệm mà vẫn giữ ẩm, giảm kích ứng và phục hồi da nhạy cảm.",
    benefits: [
      "Làm sạch bụi bẩn & dầu thừa",
      "Giảm kích ứng, làm dịu da tức thì",
      "Giữ ẩm và không gây căng khô",
      "Hỗ trợ phục hồi hàng rào bảo vệ da"
    ],
    keyIngredients: [
      { name: "Chiết xuất sen Hậu Giang", description: "làm dịu & dưỡng ẩm" },
      { name: "Beta-glucan", description: "phục hồi, chống kích ứng" },
      { name: "PCA Sodium", description: "dưỡng ẩm tự nhiên" },
      { name: "Vitamin B5", description: "làm dịu và phục hồi" }
    ],
    usage: [
      "Làm ướt mặt",
      "Lấy lượng vừa đủ, tạo bọt nhẹ",
      "Massage 30–45 giây",
      "Rửa lại với nước"
    ],
    volume: "Tuýp 140ml",
    price: "165.000 – 185.000đ",
    safetyCommitments: [
      "Không cồn",
      "Không sulfate",
      "Không hương liệu",
      "Thuần chay – không thử nghiệm trên động vật"
    ],
    mainImage: "/images/products/srm00.jpg",
    additionalImages: [
      "/images/products/product01.JPG",
      "/images/products/product02.JPG",
      "/images/products/product06.jpg"
    ],
    video: getVideoUrl('product1')
  },
  {
    id: "2",
    slug: "tay-trang-sen-hau-giang",
    name: "TẨY TRANG SEN HẬU GIANG",
    nameEn: "Soothing Micellar Water",
    shortDescription: "Nước tẩy trang dịu nhẹ dành cho da nhạy cảm, kết hợp micellar + chiết xuất sen giúp làm sạch sâu mà vẫn giữ ẩm và cân bằng da.",
    benefits: [
      "Làm sạch lớp trang điểm & bụi bẩn",
      "Giảm sưng, giảm đỏ cho da nhạy cảm",
      "Duy trì độ ẩm tự nhiên của da",
      "Không gây cay mắt, không nhờn dính"
    ],
    keyIngredients: [
      { name: "Chiết xuất sen Hậu Giang", description: "làm dịu & cân bằng" },
      { name: "Prebiotics complex", description: "củng cố hệ vi sinh da" },
      { name: "Beta-glucan", description: "giảm kích ứng" },
      { name: "NatraGem™ S150", description: "tăng hiệu quả làm sạch dịu nhẹ" }
    ],
    usage: [
      "Thấm dung dịch vào bông tẩy trang",
      "Lau nhẹ toàn mặt",
      "Không cần rửa lại (nếu skincare ngay sau đó)",
      "Dùng sáng – tối"
    ],
    volume: "140ml / 250ml",
    price: "145.000 – 220.000đ",
    safetyCommitments: [
      "Không cồn",
      "Không paraben",
      "Không dầu khoáng",
      "Thuần chay – không thử nghiệm động vật"
    ],
    mainImage: "/images/products/tc00.jpg",
    additionalImages: [
      "/images/products/tc01.jpg",
      "/images/products/product07.jpg",
      "/images/products/product02.JPG",
      "/images/products/product03.JPG",
      "/images/Vy/vy01.JPG",
      "/images/Vy/vy02.JPG",
      "/images/Vy/vy10.jpg",
      "/images/Vy/vy11.jpg"
    ],
    video: getVideoUrl('product2')
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}


