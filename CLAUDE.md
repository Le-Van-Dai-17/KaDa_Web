# CLAUDE.md — KaDa_CV Website

## Bối cảnh

Landing site cho **KaDa_CV** — nền tảng AI hỗ trợ sinh viên mới tốt nghiệp, người tìm việc ngành công nghệ và kỹ sư IT:

- Phân tích CV.
- So khớp CV với mô tả công việc.
- Xác định kỹ năng đã đáp ứng và kỹ năng còn thiếu.
- Giải thích mức độ phù hợp.
- Đề xuất hướng cải thiện CV có căn cứ.

Stack: **Next.js (App Router) + TypeScript**, deploy trên **Vercel**.

Nguồn thương hiệu nằm tại:

```text
/brand/brand.md
```

Nguồn nội dung của từng trang nằm tại:

```text
/content/home.md
/content/features.md
/content/solutions.md
/content/pricing.md
/content/waitlist.md
```

Các tài liệu trong `/brand` và `/content` là **nguồn sự thật** của website.

---

## Đối tượng người dùng

Website ưu tiên giao tiếp với:

1. Sinh viên IT sắp hoặc mới tốt nghiệp.
2. Thực tập sinh và người tìm việc ngành công nghệ.
3. Kỹ sư IT muốn chuyển vị trí hoặc chuyển hướng nghề nghiệp.
4. Nhà tuyển dụng công nghệ.

Nội dung phải rõ ràng, thực tế, khích lệ và không phán xét người dùng.

---

## Nguyên tắc

- Chỉ lấy nội dung từ `/content` — **KHÔNG tự bịa số liệu, tính năng, giá, lời chứng thực hoặc kết quả tuyển dụng**.
- Bám sát `/brand/brand.md` cho định vị, màu sắc, typography, tone giọng, CTA và cách gọi tên.
- Không được viết rằng KaDa_CV bảo đảm người dùng được tuyển dụng.
- Không được đánh đồng “chưa thể hiện trong CV” với “người dùng không có năng lực”.
- Khi đề cập điểm số hoặc mức độ phù hợp, phải thể hiện đây là thông tin hỗ trợ và cần có giải thích.
- Các câu chuyện mẫu phải được ghi rõ là tình huống minh họa, không phải khách hàng thật.
- Nếu tài liệu nguồn thiếu hoặc mâu thuẫn, phải báo lại; không tự suy diễn để lấp chỗ trống.
- Mỗi trang tương ứng với một route trong `app/`.
- Component dùng lại phải đặt trong `components/`.
- Không viết lại Header, Footer, Button, Card hoặc CTA giống nhau ở nhiều trang.
- Ưu tiên React Server Components; chỉ dùng Client Component khi cần tương tác.
- Mobile-first, responsive, accessible và có SEO metadata đầy đủ.
- Form phải có label, validation, trạng thái loading, thành công và lỗi.
- Không dùng màu làm tín hiệu duy nhất; trạng thái phải có thêm nhãn hoặc icon.
- Không cài thêm thư viện nặng khi React, CSS hoặc các thư viện sẵn có đã đủ.
- Không chỉnh sửa nội dung trong `/brand` hoặc `/content` trừ khi nhiệm vụ yêu cầu rõ ràng.

---

## Cấu trúc trang

```text
app/
├── layout.tsx
├── page.tsx
├── features/
│   └── page.tsx
├── solutions/
│   └── page.tsx
├── pricing/
│   └── page.tsx
└── waitlist/
    └── page.tsx
```

Ánh xạ nội dung:

```text
/content/home.md       → app/page.tsx
/content/features.md   → app/features/page.tsx
/content/solutions.md  → app/solutions/page.tsx
/content/pricing.md    → app/pricing/page.tsx
/content/waitlist.md   → app/waitlist/page.tsx
```

---

## Yêu cầu cho từng trang

### Home

- Giải thích KaDa_CV là gì trong phần đầu trang.
- Trình bày vấn đề người tìm việc đang gặp.
- Mô tả cách KaDa_CV hoạt động.
- Giới thiệu các khả năng chính.
- Dẫn người dùng đến Features, Solutions hoặc Waitlist.
- CTA chính phải rõ ràng.

### Features

- Mỗi tính năng phải theo cấu trúc:
  - Tên.
  - Vấn đề nó giải quyết.
  - Cách hoạt động.
  - Lợi ích đo được hoặc chỉ số cần kiểm chứng.
- Không trình bày tính năng chưa có trong tài liệu nguồn.

### Solutions

- Trình bày theo từng nhóm người dùng.
- Mỗi giải pháp phải theo cấu trúc:
  - Nỗi đau.
  - KaDa_CV giải quyết như thế nào.
  - Tính năng liên quan.
  - Một câu chuyện mẫu.
- Câu chuyện mẫu phải ghi rõ là tình huống minh họa.

### Pricing

- Hiển thị đúng ba gói và đúng đối tượng phù hợp.
- Giá, giới hạn và tính năng phải lấy từ tài liệu nguồn.
- Có phần ROI theo luồng:
  - Đầu vào.
  - Giá trị thời gian hoặc chi phí tiết kiệm.
  - Lợi ích ròng.
  - Thời gian hoàn vốn.
- Không tự thay đổi công thức ROI.
- Không tự tạo mức giá mới.

### Waitlist

- Có form đăng ký trải nghiệm.
- Có validation.
- Có trạng thái loading, thành công và lỗi.
- Có thông báo cảm ơn sau khi gửi thành công.
- Có nội dung đồng ý sử dụng dữ liệu.
- Không gửi dữ liệu tới dịch vụ bên ngoài nếu chưa được chỉ định.

---

## Quy tắc thiết kế

- Dùng design token từ `/brand/brand.md` hoặc `/brand/tokens.css`.
- Không hard-code màu thương hiệu lặp lại ở nhiều file.
- Màu cam là màu CTA chính, không dùng tràn lan.
- Màu đỏ chỉ dùng cho lỗi hoặc điều kiện bắt buộc chưa đáp ứng.
- Giao diện kết quả không được tạo cảm giác “đậu/trượt”.
- Ưu tiên các nhãn:
  - Điểm mạnh.
  - Kỹ năng đã đáp ứng.
  - Cơ hội cải thiện.
  - Bước tiếp theo.
- Header và Footer phải nhất quán trên toàn site.
- Mỗi trang chỉ có một `H1`.
- Hình ảnh phải có `alt`.
- Độ tương phản phải đáp ứng mức cơ bản của WCAG AA.

---

## Lệnh

```bash
npm install
npm run dev
npm run lint
npm run build
```

Nếu dự án có các script sau thì phải chạy thêm:

```bash
npm run type-check
npm run test
```

Không coi nhiệm vụ hoàn thành nếu `npm run build` thất bại.

---

## Quy trình thực hiện mỗi trang

1. Đọc `brand/brand.md`.
2. Đọc đúng file nội dung tương ứng trong `/content`.
3. Kiểm tra các component có thể tái sử dụng.
4. Dựng khung trang.
5. Điền đúng nội dung nguồn.
6. Kiểm tra desktop và mobile.
7. Chạy lint và build.
8. Sửa lỗi.
9. Báo cáo:
   - File đã tạo hoặc thay đổi.
   - Nội dung đã triển khai.
   - Lệnh kiểm tra đã chạy.
   - Vấn đề còn tồn tại.

Mỗi nhiệm vụ chỉ nên tập trung vào một trang hoặc một nhóm component liên quan trực tiếp.

---

## Việc cần làm — đúng thứ tự

1. **Home**
2. **Features**
3. **Solutions**
4. **Pricing + ROI**
5. **Waitlist form**
6. Hoàn thiện Header, Footer và điều hướng.
7. Kiểm tra responsive và accessibility.
8. Bổ sung SEO metadata.
9. Chạy lint và production build.
10. Đẩy repository lên GitHub và deploy Vercel.

---

## Definition of Done

Website chỉ được xem là hoàn thành khi:

- Có đủ 5 trang: Home, Features, Solutions, Pricing và Waitlist.
- Nội dung bám đúng `/content`.
- Màu sắc, font, tone và CTA bám đúng `/brand/brand.md`.
- Không có số liệu, tính năng, giá hoặc lời chứng thực tự bịa.
- Hoạt động tốt trên mobile.
- Điều hướng nhất quán.
- Pricing hiển thị đúng công thức ROI.
- Waitlist có validation và thông báo thành công.
- Có metadata cho từng trang.
- `npm run lint` không có lỗi nghiêm trọng.
- `npm run build` thành công.
- Có URL Vercel có thể truy cập.
