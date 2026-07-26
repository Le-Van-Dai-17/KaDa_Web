# KaDa_CV MVP Scope

> **Phiên bản:** 1.0  
> **Loại tài liệu:** Phạm vi MVP / nguồn kiểm soát phạm vi sản phẩm  
> **Đối tượng sử dụng:** Product owner, UI/UX designer, frontend engineer, backend engineer, AI engineer, QA, Codex/Claude Code và các AI coding agent  
> **Vị trí đề xuất trong repository:** `docs/mvp-scope.md`

---

# 1. Mục đích tài liệu

Tài liệu này xác định rõ:

- KaDa_CV phiên bản MVP phải chứng minh điều gì.
- Những chức năng nào bắt buộc phải có.
- Những chức năng nào chưa thuộc MVP.
- Các luồng nghiệp vụ chính.
- Các điều kiện để một chức năng được xem là hoàn thành.
- Những giới hạn kỹ thuật và sản phẩm cần tuân thủ.
- Những giả định cần kiểm chứng trong giai đoạn thử nghiệm.

Mục tiêu quan trọng nhất của tài liệu là ngăn dự án bị mở rộng quá sớm và giúp toàn bộ đội ngũ, bao gồm AI coding agent, cùng hiểu một phạm vi thống nhất.

---

# 2. Định nghĩa MVP

MVP của KaDa_CV phải chứng minh được rằng hệ thống có thể:

1. Nhận một CV từ người dùng.
2. Trích xuất và chuẩn hóa nội dung CV.
3. Nhận một mô tả công việc.
4. Phân tích và cấu trúc hóa JD.
5. So khớp CV với JD.
6. Hiển thị mức độ phù hợp có giải thích.
7. Phân biệt:
   - Yêu cầu đã đáp ứng.
   - Bằng chứng còn yếu.
   - Kỹ năng liên quan.
   - Yêu cầu chưa thể hiện trong CV.
   - Điều kiện bắt buộc chưa đáp ứng.
8. Đưa ra gợi ý cải thiện có mức ưu tiên.
9. Cho phép người dùng quay lại sửa CV và chạy phân tích lại.

MVP không cần chứng minh rằng:

- KaDa_CV là một nền tảng tuyển dụng hoàn chỉnh.
- KaDa_CV có thể thay thế recruiter.
- KaDa_CV có thể bảo đảm người dùng được tuyển.
- KaDa_CV có thể phục vụ mọi ngành nghề ngay từ đầu.

---

# 3. Mục tiêu MVP

## 3.1. Mục tiêu sản phẩm

MVP phải trả lời được các câu hỏi:

- Người dùng có sẵn sàng tải CV để nhận phân tích không?
- Người dùng có hiểu báo cáo matching không?
- Người dùng có thấy phần giải thích hữu ích hơn điểm số đơn lẻ không?
- Người dùng có thực hiện hành động cải thiện sau khi xem báo cáo không?
- Người dùng có quay lại chạy matching với JD khác hoặc phiên bản CV mới không?

## 3.2. Mục tiêu kỹ thuật

MVP phải chứng minh:

- Hệ thống có thể đọc CV PDF/DOCX.
- Hệ thống có thể cấu trúc hóa CV.
- Hệ thống có thể cấu trúc hóa JD.
- Matching engine trả kết quả ổn định.
- Nhận xét có thể liên kết với bằng chứng.
- Pipeline AI có trạng thái rõ ràng và xử lý lỗi.
- Dữ liệu CV được bảo vệ ở mức cơ bản.

## 3.3. Mục tiêu trải nghiệm

Người dùng phải có thể hoàn thành luồng chính:

```text
Đăng ký
→ Tải CV
→ Xác nhận dữ liệu CV
→ Nhập JD
→ Xác nhận dữ liệu JD
→ Chạy matching
→ Xem báo cáo
→ Nhận gợi ý
→ Sửa CV hoặc thử JD khác
```

---

# 4. Đối tượng MVP

## 4.1. Người dùng ưu tiên

MVP ưu tiên:

- Sinh viên IT sắp hoặc mới tốt nghiệp.
- Thực tập sinh công nghệ.
- Fresher và Junior Developer.
- Người tìm việc ngành IT đang ứng tuyển chủ động.
- Kỹ sư IT muốn chuyển vị trí ở mức cơ bản.

## 4.2. Người dùng chưa ưu tiên

MVP chưa tối ưu cho:

- Senior executive.
- Công việc ngoài lĩnh vực công nghệ.
- Doanh nghiệp có quy trình ATS phức tạp.
- Agency tuyển dụng quy mô lớn.
- Trường đại học cần dashboard phân tích hàng nghìn sinh viên.
- Nhà tuyển dụng cần tự động hóa toàn bộ pipeline.

---

# 5. Phạm vi chức năng trong MVP

# 5.1. Authentication

## Chức năng bắt buộc

- Đăng ký bằng email và mật khẩu.
- Đăng nhập.
- Đăng xuất.
- Quên mật khẩu.
- Đặt lại mật khẩu.
- Xác thực email nếu hạ tầng hỗ trợ.
- Lưu phiên đăng nhập an toàn.
- Bảo vệ route cần đăng nhập.

## Vai trò

MVP cần tối thiểu:

- `CANDIDATE`
- `ADMIN`

Vai trò `RECRUITER` có thể tồn tại ở mức chuẩn bị dữ liệu nhưng chưa cần có trải nghiệm đầy đủ trong MVP.

## Tiêu chí hoàn thành

- Người dùng không đăng nhập không truy cập được dashboard cá nhân.
- Người dùng chỉ xem được dữ liệu của chính mình.
- Mật khẩu không được lưu dạng plain text.
- Token hoặc session phải có thời hạn.
- Có xử lý lỗi đăng nhập rõ ràng.

---

# 5.2. Candidate Profile

## Chức năng bắt buộc

- Họ tên.
- Email.
- Vị trí nghề nghiệp mục tiêu.
- Cấp độ hiện tại:
  - Student.
  - Intern.
  - Fresher.
  - Junior.
  - Mid-level.
- Số năm kinh nghiệm.
- Địa điểm mong muốn.
- Hình thức làm việc mong muốn:
  - Onsite.
  - Hybrid.
  - Remote.
- Liên kết GitHub.
- Liên kết LinkedIn.
- Portfolio URL.

## Tiêu chí hoàn thành

- Người dùng có thể xem và sửa hồ sơ.
- Dữ liệu được validation.
- Trường không bắt buộc phải được ghi rõ.
- Hệ thống không dùng ảnh hoặc thuộc tính nhạy cảm để matching.

---

# 5.3. Resume Upload

## Định dạng hỗ trợ

- PDF.
- DOCX.

## Chức năng bắt buộc

- Chọn file.
- Kéo thả file.
- Kiểm tra phần mở rộng.
- Kiểm tra MIME type.
- Kiểm tra dung lượng.
- Hiển thị tên file.
- Hiển thị trạng thái upload.
- Cho phép hủy trước khi xử lý.
- Lưu file vào private storage.

## Giới hạn đề xuất

- Tối đa 10 MB/file.
- Mỗi file phải có ít nhất một trang nội dung.
- Không chấp nhận file bị mã hóa mật khẩu trong MVP.
- Không chấp nhận ZIP hoặc định dạng không xác định.

## Trạng thái

- `UPLOADING`
- `UPLOADED`
- `VALIDATING`
- `PROCESSING`
- `REVIEW_REQUIRED`
- `READY`
- `FAILED`

## Tiêu chí hoàn thành

- File không hợp lệ phải bị từ chối trước khi parsing.
- File hợp lệ phải có trạng thái xử lý.
- Khi lỗi, người dùng nhận được thông báo dễ hiểu.
- File không được tạo URL công khai.

---

# 5.4. Resume Parsing

## Dữ liệu cần trích xuất

- Thông tin cá nhân.
- Tóm tắt nghề nghiệp.
- Học vấn.
- Kinh nghiệm.
- Dự án.
- Kỹ năng kỹ thuật.
- Kỹ năng mềm.
- Chứng chỉ.
- Ngoại ngữ.
- Giải thưởng.
- GitHub.
- LinkedIn.
- Portfolio.

## Chức năng bắt buộc

- Trích xuất text.
- Xác định section.
- Chuẩn hóa dữ liệu.
- Gắn confidence nếu có.
- Đánh dấu trường không chắc chắn.
- Cho phép người dùng sửa dữ liệu.
- Lưu bản gốc và bản chuẩn hóa tách biệt.

## Tiêu chí hoàn thành

- Người dùng có thể xem dữ liệu đã trích xuất.
- Người dùng có thể sửa trường sai.
- Chỉ CV đã xác nhận mới được dùng để matching.
- Hệ thống không tự tạo thêm kinh nghiệm hoặc kỹ năng.

---

# 5.5. Resume Quality Analysis

## Nhóm tiêu chí

- Mức độ đầy đủ.
- Cấu trúc.
- Tính rõ ràng.
- Tính cụ thể.
- Bằng chứng.
- Mức độ liên quan.
- Khả năng đọc bởi hệ thống tuyển dụng.

## Kết quả bắt buộc

- Điểm mạnh.
- Cơ hội cải thiện.
- Cảnh báo.
- Nhận xét có bằng chứng.
- Gợi ý cải thiện cơ bản.

## Quy tắc

- Không dùng từ “CV yếu”.
- Không dùng pass/fail.
- Không dùng một điểm số duy nhất mà không giải thích.
- Mỗi nhận xét quan trọng phải liên kết với section hoặc đoạn CV.

---

# 5.6. Job Description Input

## Cách nhập

- Dán nội dung JD.
- Nhập thủ công.
- Chọn JD đã lưu trước đó.

## Chức năng bắt buộc

- Nhập tiêu đề công việc.
- Nhập nội dung mô tả.
- Lưu nháp.
- Chạy phân tích.
- Xem dữ liệu cấu trúc.
- Sửa dữ liệu trước matching.

## Dữ liệu JD cần trích xuất

- Chức danh.
- Cấp độ.
- Kỹ năng bắt buộc.
- Kỹ năng ưu tiên.
- Trách nhiệm.
- Kinh nghiệm tối thiểu.
- Học vấn.
- Ngoại ngữ.
- Địa điểm.
- Hình thức làm việc.
- Hard constraint.
- Benefit.
- Giới thiệu doanh nghiệp.

## Quy tắc

- Benefit không được dùng để tính matching.
- Company description không được dùng để tính matching.
- Required và preferred phải được tách riêng.
- Hard constraint phải được hiển thị riêng.

---

# 5.7. Skill Normalization

## Chức năng bắt buộc

- Chuẩn hóa alias.
- Chuẩn hóa viết tắt.
- Nhận diện skill liên quan.
- Nhóm skill theo category.

## Ví dụ

```text
JS → JavaScript
Postgres → PostgreSQL
CV → Computer Vision
Node → Node.js
```

## Trạng thái matching skill

- `EXACT_MATCH`
- `ALIAS_MATCH`
- `RELATED_SKILL`
- `NO_MATCH`

## Tiêu chí hoàn thành

- Hệ thống không xem alias là skill khác hoàn toàn.
- Skill liên quan không được tính như exact match.
- Kết quả phải giữ được tên skill gốc và tên chuẩn hóa.

---

# 5.8. CV–JD Matching

## Đầu vào

- CV đã xác nhận.
- JD đã xác nhận.
- Skill taxonomy.
- Scoring version.

## Thành phần điểm tối thiểu

- Skill score.
- Experience score.
- Project score.
- Education score.
- Evidence quality score.

## Kết quả bắt buộc

- Overall score.
- Score breakdown.
- Matched requirements.
- Weak evidence.
- Related skills.
- Not shown in CV.
- Hard constraint violations.
- Evidence links.
- Recommendations.
- Scoring version.

## Quy tắc

- Hard constraint không được ẩn trong điểm tổng.
- Score phải có breakdown.
- Kết quả cùng input và cùng scoring version phải ổn định.
- Không dùng thuộc tính nhạy cảm.
- Không dùng ảnh chân dung.

---

# 5.9. Skill Gap Analysis

## Trạng thái yêu cầu

Mỗi yêu cầu phải thuộc một trong các trạng thái:

1. `MATCHED_STRONG_EVIDENCE`
2. `MATCHED_WEAK_EVIDENCE`
3. `RELATED_SKILL_ONLY`
4. `NOT_SHOWN_IN_RESUME`
5. `HARD_CONSTRAINT_VIOLATION`

## Hiển thị bắt buộc

- Tên yêu cầu.
- Loại yêu cầu.
- Trạng thái.
- Bằng chứng.
- Giải thích.
- Gợi ý hành động.

## Quy tắc ngôn ngữ

Đúng:

> CV chưa thể hiện kinh nghiệm với Docker.

Sai:

> Bạn không biết Docker.

---

# 5.10. Evidence-based Explanation

## Chức năng bắt buộc

- Hiển thị bằng chứng từ CV.
- Hiển thị yêu cầu tương ứng từ JD.
- Giải thích vì sao được đánh giá khớp hoặc chưa khớp.
- Cho phép mở rộng/xem chi tiết.

## Tiêu chí hoàn thành

- Nhận xét quan trọng không được thiếu bằng chứng.
- Bằng chứng phải liên kết đúng section.
- Không được tạo citation giả.
- Nếu không đủ bằng chứng, phải nói rõ.

---

# 5.11. Improvement Recommendations

## Nhóm gợi ý

- Cần sửa ngay.
- Quick win.
- Cần bổ sung bằng chứng.
- Cần học thêm kỹ năng.
- Cần xác nhận điều kiện.
- Cần điều chỉnh mục tiêu.

## Thuộc tính mỗi gợi ý

- Tiêu đề.
- Lý do.
- Mức ưu tiên.
- Mức tác động.
- Công sức ước tính.
- Bằng chứng liên quan.
- Hành động đề xuất.

## Mức ưu tiên

- `HIGH`
- `MEDIUM`
- `LOW`

## Tiêu chí hoàn thành

- Gợi ý phải cụ thể.
- Gợi ý không được khuyên bịa kinh nghiệm.
- Gợi ý không được đề xuất thêm kỹ năng vào CV nếu chưa có bằng chứng.
- Gợi ý phải dẫn đến hành động có thể thực hiện.

---

# 5.12. Resume Versioning

## Chức năng bắt buộc

- Tạo phiên bản mới từ CV hiện tại.
- Đặt tên phiên bản.
- Lưu ngày tạo.
- Xem lịch sử.
- Chọn phiên bản để matching.
- So sánh điểm cơ bản giữa các phiên bản.

## Giới hạn MVP

- Không cần diff trực quan từng câu.
- Không cần collaborative editing.
- Không cần rich-text CV builder.

## Tiêu chí hoàn thành

- Phiên bản cũ không bị ghi đè.
- Kết quả matching phải liên kết đúng CV version.
- Người dùng có thể biết phiên bản nào được dùng cho báo cáo.

---

# 5.13. Analysis History

## Chức năng bắt buộc

- Danh sách lần matching.
- CV version.
- JD.
- Overall score.
- Trạng thái.
- Ngày tạo.
- Link đến báo cáo.
- Cho phép chạy lại nếu dữ liệu thay đổi.

## Trạng thái

- `PENDING`
- `PROCESSING`
- `COMPLETED`
- `FAILED`
- `OUTDATED`

---

# 5.14. Candidate Dashboard

## Thành phần tối thiểu

- CV gần nhất.
- Trạng thái CV.
- Số lượt matching.
- Báo cáo gần nhất.
- Gợi ý ưu tiên.
- Nút upload CV.
- Nút nhập JD.
- Lịch sử phân tích.

## Không bắt buộc trong MVP

- Biểu đồ phức tạp.
- Job feed đầy đủ.
- Social activity.
- Gamification.

---

# 5.15. Admin

## Chức năng tối thiểu

- Xem danh sách người dùng.
- Xem trạng thái parsing.
- Xem lỗi parsing.
- Xem lỗi matching.
- Quản lý skill taxonomy cơ bản.
- Vô hiệu hóa nội dung hoặc tài khoản khi cần.
- Xem audit log cơ bản.

## Không bắt buộc trong MVP

- Dashboard BI đầy đủ.
- Quản lý thanh toán.
- Quản lý recruiter marketplace.
- Workflow moderation phức tạp.

---

# 6. Các màn hình bắt buộc

## Public

- Home.
- Features.
- Solutions.
- Pricing.
- Waitlist.
- Login.
- Register.
- Forgot password.

## Candidate App

- Dashboard.
- Resume list.
- Upload resume.
- Resume review.
- JD input.
- JD review.
- Matching processing.
- Matching result.
- Recommendation detail.
- Analysis history.
- Profile.
- Settings.

## Admin

- Admin login hoặc route được bảo vệ.
- User list.
- Parsing error list.
- Matching error list.
- Skill taxonomy list.

---

# 7. Các trạng thái UI bắt buộc

Mỗi chức năng phải có:

- Loading.
- Empty.
- Success.
- Validation error.
- Server error.
- Permission denied.
- Processing.
- Retry state.

Ví dụ matching:

```text
PENDING
→ PROCESSING
→ COMPLETED
```

Hoặc:

```text
PROCESSING
→ FAILED
→ RETRY
```

---

# 8. Phạm vi AI trong MVP

## 8.1. AI được phép làm

- Trích xuất dữ liệu.
- Phân loại section.
- Phân loại yêu cầu JD.
- Chuẩn hóa skill.
- Đánh giá tương đồng.
- Sinh giải thích dựa trên bằng chứng.
- Sinh gợi ý dựa trên dữ liệu.

## 8.2. AI không được phép làm

- Tự tạo kỹ năng không có trong CV.
- Tự tăng số năm kinh nghiệm.
- Tự tạo chứng chỉ.
- Tự khẳng định ứng viên đủ hoặc không đủ năng lực.
- Tự động loại ứng viên.
- Dùng thuộc tính nhạy cảm để scoring.
- Cam kết kết quả tuyển dụng.
- Thay đổi dữ liệu người dùng mà không cho xác nhận.

---

# 9. Out of Scope

Các chức năng sau không thuộc MVP:

## 9.1. Recruitment Marketplace

- Job board đầy đủ.
- Ứng tuyển trực tiếp.
- Theo dõi toàn bộ pipeline tuyển dụng.
- Messaging recruiter–candidate.
- Company review.
- Employer branding.

## 9.2. Thanh toán sản xuất

- Cổng thanh toán thật.
- Hóa đơn.
- Subscription billing.
- Refund workflow.
- Coupon.
- Tax calculation.

Trang Pricing có thể tồn tại ở mức marketing, nhưng payment không thuộc MVP.

## 9.3. AI Interview

- Phỏng vấn thử.
- Voice interview.
- Chấm giọng nói.
- Phân tích cảm xúc.
- Video interview.

## 9.4. Content Generation nâng cao

- Tạo CV hoàn chỉnh tự động.
- Tạo cover letter.
- Tự viết kinh nghiệm giả.
- Tạo portfolio.
- Tạo LinkedIn profile.

## 9.5. Learning Platform

- Gợi ý khóa học có tích hợp mua bán.
- LMS.
- Tracking bài học.
- Chứng chỉ.
- Skill assessment chuyên sâu.

## 9.6. Mobile Application

- Native iOS.
- Native Android.
- Push notification mobile.

## 9.7. Recruiter ATS đầy đủ

- Interview scheduling.
- Offer management.
- Hiring pipeline đầy đủ.
- Team permission phức tạp.
- Bulk import quy mô lớn.
- External ATS integration.

## 9.8. Multi-language đầy đủ

MVP có thể ưu tiên:

- Giao diện tiếng Việt.
- CV/JD tiếng Việt hoặc tiếng Anh ở mức thử nghiệm.

Chưa cần:

- Hệ thống localization hoàn chỉnh.
- Hỗ trợ mọi ngôn ngữ.

---

# 10. Giới hạn kỹ thuật đề xuất

## Frontend

- Next.js App Router.
- TypeScript.
- Responsive.
- Accessible.
- SEO cho public pages.

## Backend

- FastAPI hoặc backend tương đương.
- REST API.
- Schema validation.
- Background job cho parsing/matching.

## Database

- PostgreSQL.
- Dữ liệu có migration.
- Có timestamp.
- Có ownership.
- Có soft delete nếu cần.

## Storage

- Private object storage.
- Signed URL.
- Không public file CV.

## Queue

- Redis + worker hoặc cơ chế tương đương.
- Không xử lý parsing dài trong request đồng bộ.

---

# 11. Yêu cầu phi chức năng

## 11.1. Bảo mật

- HTTPS.
- Password hashing.
- Authorization.
- Private file access.
- Input validation.
- Rate limiting cơ bản.
- Logging.
- Không log nội dung CV nhạy cảm ở plaintext nếu không cần.

## 11.2. Hiệu năng

Mục tiêu đề xuất:

- Public page load nhanh.
- API thông thường phản hồi dưới 2 giây.
- Parsing CV hoàn thành trong thời gian hợp lý.
- Matching có progress hoặc polling nếu mất nhiều thời gian.

Không dùng các con số này làm marketing claim nếu chưa đo thực tế.

## 11.3. Reliability

- Job thất bại phải có retry.
- Không mất dữ liệu CV đã upload.
- Không tạo duplicate record ngoài ý muốn.
- Có trạng thái rõ ràng.

## 11.4. Accessibility

- Keyboard navigation.
- Focus state.
- Label form.
- Error text.
- Contrast.
- Không chỉ dùng màu để báo trạng thái.
- Semantic heading.

---

# 12. Chỉ số MVP

## 12.1. Activation

Người dùng được xem là activated khi hoàn thành:

```text
Đăng ký
→ Upload CV
→ Xác nhận CV
→ Nhập JD
→ Hoàn thành matching đầu tiên
```

## 12.2. Product Metrics

- Registration completion rate.
- Resume upload success rate.
- Resume review completion rate.
- First matching completion rate.
- Recommendation click rate.
- Resume version creation rate.
- Return rate trong 7 ngày.

## 12.3. AI Quality Metrics

- Section extraction accuracy.
- Skill extraction precision/recall.
- Required/preferred classification accuracy.
- Evidence coverage.
- Hallucination rate.
- Score stability.
- User-rated usefulness.

## 12.4. Operational Metrics

- Parsing failure rate.
- Matching failure rate.
- Average processing time.
- Retry success rate.
- Support issue rate.

---

# 13. Giả định cần kiểm chứng

MVP phải giúp kiểm chứng:

1. Người dùng sẵn sàng tải CV.
2. Người dùng hiểu báo cáo matching.
3. Người dùng tin phần giải thích có bằng chứng.
4. Người dùng thấy skill gap hữu ích.
5. Người dùng thực hiện ít nhất một cải thiện.
6. Người dùng quay lại matching với JD khác.
7. Người dùng chấp nhận quy trình review dữ liệu.
8. Career Pro có giá trị đủ để thử nghiệm trả phí sau MVP.
9. Recruiter có nhu cầu shortlist có giải thích.

---

# 14. Rủi ro MVP

## 14.1. Scope creep

Biểu hiện:

- Thêm job board.
- Thêm chatbot.
- Thêm AI interview.
- Thêm payment.
- Thêm mobile.

Cách xử lý:

- Đối chiếu Out of Scope.
- Yêu cầu thay đổi phải có lý do và tác động.
- Không để AI coding agent tự thêm.

## 14.2. Parsing không ổn định

Cách xử lý:

- Review-required state.
- Cho phép sửa dữ liệu.
- Confidence.
- Bộ test CV đa dạng.

## 14.3. Điểm matching gây hiểu nhầm

Cách xử lý:

- Breakdown.
- Explanation.
- Hard constraint riêng.
- Disclaimer.
- Không dùng pass/fail.

## 14.4. Hallucination

Cách xử lý:

- Structured output.
- Schema.
- Evidence requirement.
- Guardrail.
- Logging.
- Human review.

## 14.5. Dữ liệu cá nhân

Cách xử lý:

- Private storage.
- Access control.
- Delete.
- Consent.
- Audit log.

---

# 15. Definition of Done cấp MVP

MVP được xem là đạt khi:

## Product

- Người dùng hoàn thành được luồng cốt lõi.
- Có báo cáo matching có giải thích.
- Có recommendation.
- Có lịch sử.
- Có versioning cơ bản.

## Frontend

- Các màn hình bắt buộc tồn tại.
- Responsive.
- Có loading, empty, error.
- Có accessibility cơ bản.
- Không có route chết.

## Backend

- API validation.
- Authentication.
- Authorization.
- Parsing và matching chạy được.
- Job state rõ ràng.
- Database migration.

## AI

- Không bịa dữ liệu.
- Có evidence.
- Phân biệt not shown và no skill.
- Hard constraint riêng.
- Kết quả ổn định ở mức chấp nhận.

## QA

- Có test luồng chính.
- Có test lỗi upload.
- Có test permission.
- Có test retry.
- Có test dữ liệu mẫu.
- Build thành công.

## Deployment

- Có môi trường staging.
- Có production URL.
- Có database backup cơ bản.
- Có log lỗi.
- Có cách rollback cơ bản.

---

# 16. Điều kiện không được tuyên bố “MVP hoàn thành”

Không được tuyên bố hoàn thành nếu:

- Chỉ có landing page.
- Chỉ có mock UI.
- Matching chưa chạy thật.
- Kết quả không có bằng chứng.
- Upload CV không an toàn.
- Người dùng không sửa được parsing sai.
- Hard constraint bị ẩn.
- Build lỗi.
- Không có xử lý trạng thái thất bại.
- Dữ liệu người dùng bị public.
- AI tự bịa kỹ năng.

---

# 17. Thứ tự triển khai MVP

## Giai đoạn 1 — Foundation

- Repository.
- Environment.
- Authentication.
- Database.
- File storage.
- Design system.

## Giai đoạn 2 — Resume

- Upload.
- Validation.
- Parsing.
- Review.
- Resume management.

## Giai đoạn 3 — JD

- JD input.
- Parsing.
- Review.
- JD management.

## Giai đoạn 4 — Matching

- Skill normalization.
- Scoring.
- Skill gap.
- Explanation.
- Report.

## Giai đoạn 5 — Improvement

- Recommendation.
- Versioning.
- History.
- Dashboard.

## Giai đoạn 6 — QA & Deploy

- Test.
- Security.
- Performance.
- Staging.
- Production.

---

# 18. Phụ thuộc giữa các module

```text
Authentication
    ↓
Candidate Profile
    ↓
Resume Upload
    ↓
Resume Parser
    ↓
Resume Review
    ↓
JD Input
    ↓
JD Parser
    ↓
JD Review
    ↓
Skill Normalization
    ↓
Matching Engine
    ↓
Skill Gap
    ↓
Evidence Explanation
    ↓
Recommendations
    ↓
Versioning & History
```

Không xây report hoàn chỉnh trước khi dữ liệu parser và matching được định nghĩa rõ.

---

# 19. Quy tắc cho AI Coding Agent

AI coding agent phải:

1. Đọc `CODEX.md`.
2. Đọc `product-overview.md`.
3. Đọc `mvp-scope.md`.
4. Đọc `core-user-flow.md`.
5. Tóm tắt module.
6. Lập plan.
7. Chờ xác nhận.
8. Chỉ làm đúng module.
9. Chạy lint/test/build.
10. Báo cáo file thay đổi.

AI coding agent không được:

- Tự mở rộng scope.
- Tự thêm page.
- Tự thêm field.
- Tự thay đổi business rule.
- Tự thay đổi pricing.
- Tự tạo claim.
- Tự thay đổi trạng thái nghiệp vụ.

---

# 20. Tóm tắt phạm vi

## In Scope

```text
Authentication
Candidate Profile
Resume Upload
Resume Parsing
Resume Review
Resume Quality Analysis
JD Input
JD Parsing
JD Review
Skill Normalization
CV–JD Matching
Skill Gap Analysis
Evidence-based Explanation
Improvement Recommendations
Resume Versioning
Analysis History
Candidate Dashboard
Basic Admin
```

## Out of Scope

```text
Full Job Marketplace
Production Payment
AI Interview
Cover Letter Generator
Full CV Builder
LMS
Native Mobile App
Full Recruiter ATS
Automatic Candidate Rejection
Guaranteed Hiring Outcomes
```

---

# 21. Checklist trước khi bắt đầu một module

- [ ] Module thuộc In Scope.
- [ ] Đã có input/output.
- [ ] Đã có trạng thái.
- [ ] Đã có error cases.
- [ ] Đã có permission.
- [ ] Đã có UI states.
- [ ] Đã có test criteria.
- [ ] Không xung đột với Out of Scope.
- [ ] Không cần bịa dữ liệu.
- [ ] Có Definition of Done.

---

# 22. Kết luận

MVP của KaDa_CV không phải là một landing page và cũng không phải một nền tảng tuyển dụng hoàn chỉnh.

MVP là một hệ thống có thể:

> **Đọc CV, đọc JD, so khớp hai nguồn dữ liệu, giải thích kết quả bằng bằng chứng và đề xuất bước cải thiện tiếp theo.**

Mọi tính năng, màn hình và quyết định kỹ thuật trong giai đoạn MVP phải phục vụ trực tiếp cho luồng này.
