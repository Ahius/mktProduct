/**
 * Video Configuration
 * 
 * Để video hiển thị trên Vercel, bạn cần upload video lên một dịch vụ lưu trữ bên ngoài:
 * 
 * Option 1: Cloudinary (Khuyến nghị - Miễn phí)
 * 1. Đăng ký tại https://cloudinary.com
 * 2. Upload video vào Media Library
 * 3. Copy URL video và paste vào đây
 * 
 * Option 2: Vercel Blob Storage
 * 1. Cài đặt: npm install @vercel/blob
 * 2. Upload video qua Vercel Dashboard hoặc API
 * 3. Copy URL và paste vào đây
 * 
 * Option 3: YouTube/Vimeo
 * 1. Upload video lên YouTube/Vimeo (unlisted)
 * 2. Sử dụng embed URL hoặc direct link
 */

export const videoConfig = {
  // Video cho sản phẩm 1: SỮA RỬA MẶT SEN HẬU GIANG
  product1:
    process.env.NEXT_PUBLIC_VIDEO_PRODUCT_1 ||
    "https://res.cloudinary.com/dufvzyvav/video/upload/v1765780934/1207_2_1_dqa8t2.mp4",

  // Video cho sản phẩm 2: TẨY TRANG SEN HẬU GIANG
  product2:
    process.env.NEXT_PUBLIC_VIDEO_PRODUCT_2 ||
    "https://res.cloudinary.com/dufvzyvav/video/upload/v1765782120/1215_jdxk0y.mov",

  // Video cho homepage showcase section (dùng lại video sản phẩm 2)
  homepageShowcase:
    process.env.NEXT_PUBLIC_VIDEO_HOMEPAGE_SHOWCASE ||
    "https://res.cloudinary.com/dufvzyvav/video/upload/v1765782120/1215_jdxk0y.mov",
};

// Fallback: Nếu không có URL từ env, sử dụng local path (chỉ hoạt động khi dev local)
export const getVideoUrl = (videoType: 'product1' | 'product2' | 'homepageShowcase'): string => {
  return videoConfig[videoType];
};

