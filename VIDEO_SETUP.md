# Hướng dẫn Setup Video cho Vercel Deployment

## Vấn đề
Video files quá lớn (126MB và 82MB) không thể deploy trực tiếp lên Vercel. Cần upload video lên dịch vụ lưu trữ bên ngoài.

## Giải pháp: Sử dụng Cloudinary (Khuyến nghị - Miễn phí)

### Bước 1: Đăng ký Cloudinary
1. Truy cập https://cloudinary.com
2. Đăng ký tài khoản miễn phí
3. Đăng nhập vào Dashboard

### Bước 2: Upload Video
1. Vào **Media Library** trong Cloudinary Dashboard
2. Click **Upload** → Chọn file video
3. Upload 2 video (đã upload sẵn):
   - Sản phẩm 1 (SỮA RỬA MẶT): `https://res.cloudinary.com/dufvzyvav/video/upload/v1765780934/1207_2_1_dqa8t2.mp4`
   - Sản phẩm 2 (TẨY TRANG): `https://res.cloudinary.com/dufvzyvav/video/upload/v1765782120/1215_jdxk0y.mov`

### Bước 3: Lấy URL Video
1. Sau khi upload xong, click vào video
2. Copy **URL** (ví dụ: `https://res.cloudinary.com/your-cloud/video/upload/v1234567/video.mp4`)
3. Lưu ý: Nên chọn format `.mp4` và có thể optimize video để giảm dung lượng

### Bước 4: Cấu hình trong Vercel
1. Vào Vercel Dashboard → Project → Settings → Environment Variables
2. Thêm các biến môi trường sau:

```
NEXT_PUBLIC_VIDEO_PRODUCT_1=https://res.cloudinary.com/dufvzyvav/video/upload/v1765780934/1207_2_1_dqa8t2.mp4
NEXT_PUBLIC_VIDEO_PRODUCT_2=https://res.cloudinary.com/dufvzyvav/video/upload/v1765782120/1215_jdxk0y.mov
NEXT_PUBLIC_VIDEO_HOMEPAGE_SHOWCASE=https://res.cloudinary.com/dufvzyvav/video/upload/v1765782120/1215_jdxk0y.mov
```

3. Redeploy project

## Giải pháp thay thế: Vercel Blob Storage

### Bước 1: Cài đặt
```bash
npm install @vercel/blob
```

### Bước 2: Upload video qua API hoặc Dashboard
- Xem hướng dẫn tại: https://vercel.com/docs/storage/vercel-blob

### Bước 3: Thêm URL vào Environment Variables
Tương tự như Cloudinary, thêm URL vào Vercel Environment Variables.

## Giải pháp thay thế: YouTube/Vimeo

1. Upload video lên YouTube hoặc Vimeo (unlisted)
2. Lấy embed URL hoặc direct link
3. Thêm vào Environment Variables

## Kiểm tra
- Code hiện đã trỏ mặc định tới các URL Cloudinary ở trên. Có thể override bằng env var nếu cần.
- Video local trong `public/video` đã được gỡ bỏ để tránh đẩy file lớn lên Vercel.

