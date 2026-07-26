# KaDa_CV Core User Flow

> **Phiên bản:** 1.0  
> **Loại tài liệu:** Đặc tả luồng người dùng cốt lõi  
> **Đối tượng sử dụng:** Product owner, UI/UX designer, frontend engineer, backend engineer, AI engineer, QA, Codex/Claude Code và các AI coding agent  
> **Vị trí đề xuất trong repository:** `docs/core-user-flow.md`

---

# 1. Mục đích tài liệu

Tài liệu này mô tả chi tiết cách người dùng tương tác với KaDa_CV từ lúc truy cập hệ thống đến khi hoàn thành báo cáo CV–JD matching và thực hiện hành động cải thiện tiếp theo.

Tài liệu dùng để:

- Thống nhất luồng nghiệp vụ giữa Product, UI/UX, Frontend, Backend và AI.
- Xác định màn hình, trạng thái, hành động và điều kiện chuyển bước.
- Ngăn AI coding agent tự suy diễn hoặc bỏ sót bước nghiệp vụ.
- Làm cơ sở xây wireframe, API, database, test case và acceptance criteria.
- Phân biệt rõ luồng MVP với các luồng mở rộng.

Luồng cốt lõi của KaDa_CV là:

```text
Đăng ký
→ Tạo hồ sơ
→ Tải CV
→ Hệ thống phân tích CV
→ Người dùng xác nhận dữ liệu
→ Nhập JD
→ Hệ thống phân tích JD
→ Người dùng xác nhận yêu cầu
→ Chạy matching
→ Xem báo cáo
→ Nhận gợi ý cải thiện
→ Sửa CV hoặc thử JD khác
```

---

# 2. Nguyên tắc thiết kế luồng

Mọi luồng phải tuân thủ các nguyên tắc sau:

## 2.1. Không phán xét người dùng

Hệ thống đánh giá nội dung CV và mức độ phù hợp với JD, không đánh giá toàn diện năng lực hoặc giá trị của con người.

Nên dùng:

- “CV chưa thể hiện kinh nghiệm Docker.”
- “Bằng chứng cho kỹ năng Python còn yếu.”
- “Điều kiện làm việc chưa được xác nhận.”
- “Mức độ phù hợp hiện tại là 72%.”

Không nên dùng:

- “Bạn không biết Docker.”
- “CV của bạn yếu.”
- “Bạn không đủ năng lực.”
- “Bạn chắc chắn bị loại.”

## 2.2. Mỗi phát hiện phải dẫn đến hành động

Mỗi cảnh báo hoặc skill gap nên đi kèm:

- Lý do.
- Bằng chứng.
- Mức độ ưu tiên.
- Hành động đề xuất.

## 2.3. Người dùng giữ quyền kiểm soát

Người dùng phải có thể:

- Kiểm tra dữ liệu CV đã trích xuất.
- Sửa dữ liệu hệ thống đọc sai.
- Xác nhận trước khi matching.
- Chọn CV version.
- Chọn hoặc sửa JD.
- Xóa CV.
- Chạy lại matching.

## 2.4. Không ẩn trạng thái xử lý

Các tác vụ AI dài phải có trạng thái rõ ràng:

- Đang tải lên.
- Đang kiểm tra.
- Đang phân tích.
- Cần xác nhận.
- Hoàn thành.
- Thất bại.
- Có thể thử lại.

## 2.5. Không dùng điểm số như kết luận cuối cùng

Điểm số phải đi kèm:

- Breakdown.
- Evidence.
- Hard constraint.
- Skill gap.
- Recommendation.

---

# 3. Vai trò người dùng

## 3.1. Guest

Có thể:

- Xem Home.
- Xem Features.
- Xem Solutions.
- Xem Pricing.
- Đăng ký Waitlist.
- Đăng ký tài khoản.
- Đăng nhập.

Không thể:

- Upload CV.
- Xem dashboard.
- Chạy matching.
- Xem báo cáo cá nhân.

## 3.2. Candidate

Có thể:

- Quản lý hồ sơ cá nhân.
- Upload CV.
- Xem và sửa dữ liệu CV.
- Nhập JD.
- Xem và sửa dữ liệu JD.
- Chạy matching.
- Xem lịch sử.
- Tạo CV version mới.
- Xóa dữ liệu của mình.

## 3.3. Admin

Có thể:

- Xem danh sách người dùng.
- Theo dõi lỗi parsing.
- Theo dõi lỗi matching.
- Quản lý skill taxonomy cơ bản.
- Xem audit log.
- Vô hiệu hóa nội dung hoặc tài khoản khi cần.

Admin không được sửa nội dung CV của người dùng tùy ý nếu không có quy trình hỗ trợ rõ ràng.

---

# 4. Tổng quan hành trình chính

```text
Public Website
    ↓
Register / Login
    ↓
Candidate Onboarding
    ↓
Candidate Dashboard
    ↓
Resume Upload
    ↓
Resume Processing
    ↓
Resume Review
    ↓
JD Input
    ↓
JD Processing
    ↓
JD Review
    ↓
Matching Processing
    ↓
Matching Report
    ↓
Recommendations
    ↓
Resume Versioning / Retry
```

---

# 5. Luồng 1 — Truy cập website công khai

## 5.1. Mục tiêu

Giúp người dùng hiểu KaDa_CV là gì và dẫn đến đăng ký hoặc dùng thử.

## 5.2. Điểm bắt đầu

Người dùng truy cập:

```text
/
```

## 5.3. Nội dung chính

- Hero.
- Vấn đề người dùng.
- Cách hoạt động.
- Tính năng.
- Giải pháp theo đối tượng.
- Pricing preview.
- Responsible AI.
- Waitlist CTA.
- FAQ.

## 5.4. Hành động

- Nhấn “Đăng ký trải nghiệm sớm”.
- Nhấn “Bắt đầu với CV của bạn”.
- Nhấn “Đăng nhập”.
- Nhấn “Xem tính năng”.
- Nhấn “Xem giải pháp”.

## 5.5. Kết quả

- Guest được chuyển đến Waitlist hoặc Register.
- User đã đăng nhập được chuyển đến Dashboard.

---

# 6. Luồng 2 — Đăng ký tài khoản

## 6.1. Điểm bắt đầu

Người dùng chọn:

```text
Đăng ký
```

## 6.2. Màn hình

```text
/register
```

## 6.3. Trường dữ liệu

- Họ và tên.
- Email.
- Mật khẩu.
- Xác nhận mật khẩu.
- Checkbox đồng ý Điều khoản sử dụng.
- Checkbox đồng ý Chính sách quyền riêng tư.

## 6.4. Validation

### Email

- Bắt buộc.
- Đúng định dạng.
- Chưa tồn tại.

### Mật khẩu

- Bắt buộc.
- Tối thiểu 8 ký tự.
- Có thể yêu cầu chữ và số.
- Không trùng email.

### Xác nhận mật khẩu

- Phải trùng mật khẩu.

### Consent

- Phải đồng ý điều khoản bắt buộc.

## 6.5. Trạng thái

- Idle.
- Validating.
- Submitting.
- Success.
- Error.

## 6.6. Kết quả thành công

Tạo tài khoản với vai trò:

```text
CANDIDATE
```

Sau đó:

- Nếu xác thực email bắt buộc: chuyển đến màn hình kiểm tra email.
- Nếu không bắt buộc: đăng nhập tự động và chuyển đến onboarding.

## 6.7. Lỗi

- Email đã tồn tại.
- Email không hợp lệ.
- Mật khẩu yếu.
- Lỗi máy chủ.
- Mất kết nối.

## 6.8. Acceptance criteria

- Không tạo tài khoản trùng email.
- Không lưu mật khẩu dạng plaintext.
- Hiển thị lỗi gần trường liên quan.
- Không xóa dữ liệu đã nhập khi lỗi không cần thiết.

---

# 7. Luồng 3 — Đăng nhập

## 7.1. Màn hình

```text
/login
```

## 7.2. Trường dữ liệu

- Email.
- Mật khẩu.
- Ghi nhớ đăng nhập, nếu có.
- Quên mật khẩu.

## 7.3. Kết quả

- Candidate → `/dashboard`
- Admin → `/admin`

## 7.4. Lỗi

- Sai email hoặc mật khẩu.
- Tài khoản bị vô hiệu hóa.
- Email chưa xác thực.
- Quá nhiều lần thử.
- Lỗi hệ thống.

## 7.5. Quy tắc bảo mật

- Không cho biết rõ email có tồn tại hay không trong thông báo lỗi nhạy cảm.
- Có rate limit.
- Session/token có thời hạn.
- Route được bảo vệ.

---

# 8. Luồng 4 — Candidate Onboarding

## 8.1. Mục tiêu

Thu thập thông tin tối thiểu để cá nhân hóa trải nghiệm.

## 8.2. Màn hình

```text
/onboarding
```

## 8.3. Các bước

### Bước 1 — Vai trò hiện tại

Chọn một:

- Student.
- Intern.
- Fresher.
- Junior.
- Mid-level.
- Khác.

### Bước 2 — Mục tiêu nghề nghiệp

Ví dụ:

- Backend Developer.
- Frontend Developer.
- AI Engineer.
- Data Analyst.
- DevOps Engineer.
- QA Engineer.

### Bước 3 — Kinh nghiệm

- Chưa có kinh nghiệm.
- Dưới 1 năm.
- 1–2 năm.
- 2–5 năm.
- Trên 5 năm.

### Bước 4 — Hình thức làm việc

- Onsite.
- Hybrid.
- Remote.

### Bước 5 — Liên kết nghề nghiệp

- GitHub.
- LinkedIn.
- Portfolio.

## 8.4. Quy tắc

- Có thể bỏ qua các trường không bắt buộc.
- Không bắt buộc upload ảnh.
- Không thu thập giới tính, tuổi hoặc thông tin nhạy cảm để matching.
- Có progress indicator.
- Có thể quay lại bước trước.

## 8.5. Kết quả

Chuyển đến Dashboard.

---

# 9. Luồng 5 — Candidate Dashboard

## 9.1. Mục tiêu

Giúp người dùng nhanh chóng biết trạng thái hiện tại và bước tiếp theo.

## 9.2. Màn hình

```text
/dashboard
```

## 9.3. Trường hợp chưa có CV

Hiển thị:

- Tiêu đề chào mừng.
- Giải thích ngắn.
- CTA “Tải CV đầu tiên”.
- Checklist 3 bước:
  1. Tải CV.
  2. Thêm JD.
  3. Nhận báo cáo matching.

## 9.4. Trường hợp đã có CV

Hiển thị:

- CV gần nhất.
- Trạng thái CV.
- Nút “Phân tích với JD”.
- Báo cáo gần nhất.
- Recommendation ưu tiên cao.
- Lịch sử gần đây.
- Nút “Tải CV mới”.
- Nút “Tạo phiên bản”.

## 9.5. Trường hợp CV đang xử lý

Hiển thị:

- Progress.
- Trạng thái.
- Thông báo không cần tải lại trang.
- Nút xem chi tiết.
- Nút thử lại nếu thất bại.

---

# 10. Luồng 6 — Upload CV

## 10.1. Điểm bắt đầu

Từ Dashboard hoặc Resume List.

## 10.2. Màn hình

```text
/resumes/new
```

## 10.3. Hành động

- Kéo thả file.
- Chọn file.
- Xem tên file.
- Xóa file trước khi upload.
- Nhấn “Tải lên và phân tích”.

## 10.4. Validation phía client

- Chỉ PDF/DOCX.
- Dung lượng tối đa 10 MB.
- Không chấp nhận file trống.
- Không chấp nhận nhiều file cùng lúc trong MVP.

## 10.5. Validation phía server

- MIME type.
- File signature.
- Dung lượng.
- Virus/malware scan nếu hạ tầng hỗ trợ.
- File có đọc được không.
- File có mã hóa mật khẩu không.

## 10.6. Trạng thái

```text
UPLOADING
→ UPLOADED
→ VALIDATING
→ PROCESSING
```

## 10.7. Lỗi

- Sai định dạng.
- File quá lớn.
- File bị hỏng.
- File có mật khẩu.
- Không đọc được nội dung.
- Mất kết nối.
- Hết hạn session.

## 10.8. Kết quả

Nếu thành công:

```text
PROCESSING
```

Người dùng được chuyển đến:

```text
/resumes/{resumeId}/processing
```

---

# 11. Luồng 7 — Resume Processing

## 11.1. Mục tiêu

Cho người dùng biết hệ thống đang xử lý gì.

## 11.2. Các bước hiển thị

1. Đang kiểm tra file.
2. Đang trích xuất nội dung.
3. Đang nhận diện các section.
4. Đang chuẩn hóa kỹ năng và kinh nghiệm.
5. Đang chuẩn bị bản xem lại.

## 11.3. Cơ chế cập nhật

Có thể dùng:

- Polling.
- Server-Sent Events.
- WebSocket.

## 11.4. Kết quả

### Thành công

```text
REVIEW_REQUIRED
```

Chuyển đến Resume Review.

### Thất bại

```text
FAILED
```

Hiển thị:

- Lý do dễ hiểu.
- Mã lỗi nội bộ nếu cần.
- Nút thử lại.
- Nút upload file khác.
- Nút liên hệ hỗ trợ.

---

# 12. Luồng 8 — Resume Review

## 12.1. Mục tiêu

Cho phép người dùng xác nhận và sửa dữ liệu parser.

## 12.2. Màn hình

```text
/resumes/{resumeId}/review
```

## 12.3. Các section

- Thông tin cá nhân.
- Tóm tắt nghề nghiệp.
- Học vấn.
- Kinh nghiệm.
- Dự án.
- Kỹ năng.
- Chứng chỉ.
- Ngoại ngữ.
- Liên kết nghề nghiệp.

## 12.4. Tương tác

- Xem dữ liệu trích xuất.
- Mở CV gốc ở panel bên cạnh.
- Sửa từng trường.
- Thêm mục bị thiếu.
- Xóa mục đọc sai.
- Xác nhận dữ liệu.
- Lưu nháp.

## 12.5. Confidence

Trường có confidence thấp cần:

- Được đánh dấu.
- Có tooltip giải thích.
- Được ưu tiên review.

## 12.6. Quy tắc

- Không cho matching trước khi xác nhận.
- Không tự thêm dữ liệu.
- Mọi thay đổi phải được lưu.
- Bản gốc không bị ghi đè.

## 12.7. Kết quả

Khi xác nhận:

```text
READY
```

Chuyển đến:

- Resume Detail.
- Hoặc CTA “Thêm JD để matching”.

---

# 13. Luồng 9 — Resume Quality Analysis

## 13.1. Điểm bắt đầu

CV ở trạng thái READY.

## 13.2. Màn hình

```text
/resumes/{resumeId}/analysis
```

## 13.3. Nội dung

- Tổng quan chất lượng.
- Điểm mạnh.
- Cơ hội cải thiện.
- Cảnh báo.
- Section coverage.
- Evidence quality.
- ATS readability ở mức tham khảo.
- Recommendation cơ bản.

## 13.4. Quy tắc

- Không dùng pass/fail.
- Không dùng ngôn ngữ phán xét.
- Mỗi nhận xét quan trọng phải có evidence.
- Không hứa tăng tỷ lệ tuyển dụng.

## 13.5. Hành động

- Sửa CV.
- Tạo version mới.
- Thêm JD.
- Bỏ qua và quay lại Dashboard.

---

# 14. Luồng 10 — Nhập JD

## 14.1. Điểm bắt đầu

- Từ Resume Detail.
- Từ Dashboard.
- Từ nút “Phân tích với JD”.
- Từ Job Description List.

## 14.2. Màn hình

```text
/jobs/new
```

## 14.3. Trường dữ liệu

- Job title.
- Company name, không bắt buộc.
- Nội dung JD.
- Nguồn URL, không bắt buộc.
- Ghi chú cá nhân, không bắt buộc.

## 14.4. Hành động

- Dán JD.
- Nhập thủ công.
- Lưu nháp.
- Nhấn “Phân tích JD”.

## 14.5. Validation

- Nội dung JD bắt buộc.
- Có độ dài tối thiểu hợp lý.
- Không chấp nhận nội dung trống.
- URL phải hợp lệ nếu có.

## 14.6. Kết quả

```text
DRAFT
→ PROCESSING
```

Chuyển đến:

```text
/jobs/{jobId}/processing
```

---

# 15. Luồng 11 — JD Processing

## 15.1. Các bước

1. Nhận diện chức danh.
2. Tách required skills.
3. Tách preferred skills.
4. Tách responsibilities.
5. Tách experience.
6. Tách education.
7. Tách hard constraints.
8. Tách benefit khỏi matching criteria.

## 15.2. Kết quả

### Thành công

```text
REVIEW_REQUIRED
```

### Thất bại

```text
FAILED
```

## 15.3. Lỗi

- Nội dung quá ngắn.
- Nội dung không giống JD.
- Không xác định được yêu cầu.
- Lỗi AI service.
- Timeout.

---

# 16. Luồng 12 — JD Review

## 16.1. Màn hình

```text
/jobs/{jobId}/review
```

## 16.2. Các section

- Chức danh.
- Cấp độ.
- Required skills.
- Preferred skills.
- Responsibilities.
- Experience.
- Education.
- Language.
- Work type.
- Location.
- Hard constraints.
- Benefits.
- Company description.

## 16.3. Tương tác

- Sửa tiêu chí.
- Chuyển skill từ required sang preferred.
- Xóa benefit khỏi matching.
- Thêm hard constraint.
- Xác nhận JD.
- Lưu nháp.

## 16.4. Quy tắc

- Benefit không được tính điểm.
- Company description không được tính điểm.
- Hard constraint hiển thị riêng.
- Người dùng phải xác nhận trước matching.

## 16.5. Kết quả

```text
READY
```

Sau đó chuyển đến màn hình chọn CV.

---

# 17. Luồng 13 — Chọn CV và JD để matching

## 17.1. Màn hình

```text
/matches/new
```

## 17.2. Thành phần

- Chọn CV.
- Chọn CV version.
- Chọn JD.
- Xem tóm tắt CV.
- Xem tóm tắt JD.
- Hiển thị cảnh báo nếu dữ liệu chưa READY.
- Nút “Bắt đầu matching”.

## 17.3. Điều kiện

Matching chỉ được chạy khi:

- User có quyền sở hữu CV.
- CV trạng thái READY.
- JD trạng thái READY.
- CV version hợp lệ.
- Không có job tương tự đang PROCESSING ngoài ý muốn.

## 17.4. Kết quả

Tạo matching record:

```text
PENDING
```

Sau đó:

```text
PROCESSING
```

---

# 18. Luồng 14 — Matching Processing

## 18.1. Màn hình

```text
/matches/{matchId}/processing
```

## 18.2. Các bước hiển thị

1. Chuẩn hóa kỹ năng.
2. So sánh required skills.
3. So sánh preferred skills.
4. Phân tích kinh nghiệm và dự án.
5. Kiểm tra hard constraints.
6. Tổng hợp điểm.
7. Tạo giải thích.
8. Tạo gợi ý cải thiện.

## 18.3. Kết quả

### Thành công

```text
COMPLETED
```

### Thất bại

```text
FAILED
```

### Lỗi một phần

Nếu scoring hoàn thành nhưng explanation thất bại:

- Không nên hiển thị báo cáo thiếu evidence như hoàn chỉnh.
- Có thể đánh dấu `PARTIAL` nếu hệ thống hỗ trợ.
- Hoặc retry explanation trước khi hoàn thành.

## 18.4. Retry

- Cho phép retry.
- Không tạo trùng dữ liệu nếu cùng matchId.
- Lưu error code.

---

# 19. Luồng 15 — Xem báo cáo matching

## 19.1. Màn hình

```text
/matches/{matchId}
```

## 19.2. Mục tiêu

Giúp người dùng hiểu:

- Mức độ phù hợp.
- Vì sao có kết quả.
- Đâu là điểm mạnh.
- Đâu là khoảng cách.
- Nên làm gì tiếp theo.

## 19.3. Thứ tự nội dung

### 1. Header

- Job title.
- Company.
- CV version.
- Ngày phân tích.
- Scoring version.
- Trạng thái.

### 2. Overall Match

- Mức độ phù hợp.
- Disclaimer.
- Không dùng pass/fail.

### 3. Score Breakdown

- Skills.
- Experience.
- Projects.
- Education.
- Evidence quality.

### 4. Matched Requirements

Mỗi item gồm:

- Requirement.
- Trạng thái.
- Evidence.
- Explanation.
- Nguồn CV.
- Nguồn JD.

### 5. Weak Evidence

Hiển thị:

- Kỹ năng.
- Bằng chứng hiện tại.
- Vì sao chưa đủ mạnh.
- Cách làm rõ.

### 6. Related Skills

Ví dụ:

- JD yêu cầu FastAPI.
- CV có Flask.
- Trạng thái: Related Skill Only.

### 7. Not Shown in CV

Hiển thị:

- Yêu cầu.
- Loại required/preferred.
- Không khẳng định người dùng không có.
- Gợi ý xác nhận hoặc học thêm.

### 8. Hard Constraints

Phải hiển thị riêng và nổi bật.

Ví dụ:

- Yêu cầu 2 năm kinh nghiệm.
- CV hiện thể hiện 6 tháng.
- Yêu cầu tiếng Anh B2.
- CV chưa thể hiện chứng chỉ hoặc bằng chứng tương đương.

### 9. Recommendations

- High.
- Medium.
- Low.
- Quick win.
- Long-term.

### 10. Evidence Viewer

Cho phép xem:

- Đoạn CV nguồn.
- Đoạn JD nguồn.
- Section tương ứng.

## 19.4. Hành động

- Tạo CV version mới.
- Sửa CV.
- Chạy lại matching.
- Chọn JD khác.
- Lưu báo cáo.
- Quay lại lịch sử.

## 19.5. Quy tắc

- Không bảo đảm tuyển dụng.
- Không dùng AI score làm kết luận cuối.
- Không ẩn hard constraint.
- Không hiển thị nhận xét thiếu evidence.

---

# 20. Luồng 16 — Xem recommendation

## 20.1. Mục tiêu

Biến báo cáo thành danh sách hành động.

## 20.2. Mỗi recommendation gồm

- Tiêu đề.
- Mức ưu tiên.
- Lý do.
- Evidence.
- Tác động dự kiến.
- Công sức ước tính.
- Hành động cụ thể.
- Trạng thái.

## 20.3. Trạng thái recommendation

- `OPEN`
- `IN_PROGRESS`
- `DONE`
- `DISMISSED`

## 20.4. Ví dụ

### Recommendation

**Bổ sung vai trò cá nhân trong dự án ForecastAI**

Lý do:

> JD yêu cầu kinh nghiệm xây dựng REST API. CV có dự án ForecastAI nhưng chưa thể hiện rõ phần bạn trực tiếp phụ trách.

Hành động:

> Bổ sung một bullet mô tả API đã xây dựng, công nghệ sử dụng và đầu ra đạt được.

## 20.5. Hành động người dùng

- Đánh dấu đang thực hiện.
- Đánh dấu hoàn thành.
- Bỏ qua.
- Mở CV editor ngoài hệ thống.
- Tạo version mới.

---

# 21. Luồng 17 — Tạo CV version mới

## 21.1. Điểm bắt đầu

- Từ báo cáo.
- Từ resume detail.
- Từ recommendation.

## 21.2. Màn hình

```text
/resumes/{resumeId}/versions/new
```

## 21.3. Trường dữ liệu

- Tên phiên bản.
- Mục tiêu công việc.
- Ghi chú.
- Copy dữ liệu từ version hiện tại.

## 21.4. Quy tắc

- Version cũ không bị ghi đè.
- Có `parentVersionId`.
- Có ngày tạo.
- Có trạng thái.
- Báo cáo cũ giữ nguyên liên kết với version cũ.

## 21.5. Kết quả

- Người dùng sửa dữ liệu.
- Xác nhận version.
- Chạy matching lại.

---

# 22. Luồng 18 — Chạy matching lại

## 22.1. Trường hợp

- CV version thay đổi.
- JD thay đổi.
- Scoring version thay đổi.
- Người dùng muốn kiểm tra cải thiện.

## 22.2. Hành động

- Chọn “Chạy lại”.
- Hệ thống tạo match record mới.
- Không ghi đè báo cáo cũ.

## 22.3. Kết quả

Cho phép so sánh:

- Score tổng.
- Breakdown.
- Skill gap.
- Hard constraint.
- Recommendation.

## 22.4. Quy tắc

- Báo cáo cũ có thể đánh dấu `OUTDATED`.
- Không xóa lịch sử.
- Phải biết dữ liệu nào tạo ra báo cáo.

---

# 23. Luồng 19 — Analysis History

## 23.1. Màn hình

```text
/history
```

## 23.2. Thông tin mỗi record

- Job title.
- Company.
- CV version.
- Overall score.
- Trạng thái.
- Ngày tạo.
- Scoring version.
- Link báo cáo.

## 23.3. Bộ lọc

- Theo CV.
- Theo JD.
- Theo trạng thái.
- Theo thời gian.

## 23.4. Hành động

- Xem báo cáo.
- Chạy lại.
- So sánh.
- Xóa record nếu chính sách cho phép.

---

# 24. Luồng 20 — Quản lý CV

## 24.1. Màn hình

```text
/resumes
```

## 24.2. Thông tin

- Tên CV.
- Version gần nhất.
- Trạng thái.
- Ngày cập nhật.
- Số lần matching.
- Job mục tiêu.

## 24.3. Hành động

- Xem.
- Đổi tên.
- Tạo version.
- Archive.
- Xóa.
- Chạy matching.

## 24.4. Xóa CV

Khi xóa:

- Phải xác nhận.
- Giải thích ảnh hưởng.
- Có thể soft delete trước.
- File storage phải được xóa theo chính sách.
- Báo cáo liên quan cần xử lý rõ.

---

# 25. Luồng 21 — Quản lý JD

## 25.1. Màn hình

```text
/jobs
```

## 25.2. Thông tin

- Job title.
- Company.
- Trạng thái.
- Ngày tạo.
- Số lần matching.

## 25.3. Hành động

- Xem.
- Sửa.
- Duplicate.
- Archive.
- Xóa.
- Match với CV.

---

# 26. Luồng 22 — Profile và Settings

## 26.1. Profile

- Họ tên.
- Email.
- Vai trò hiện tại.
- Job target.
- Experience level.
- Location.
- Work preference.
- GitHub.
- LinkedIn.
- Portfolio.

## 26.2. Settings

- Đổi mật khẩu.
- Notification preference.
- Data privacy.
- Download data nếu hỗ trợ.
- Delete account.

## 26.3. Xóa tài khoản

Yêu cầu:

- Xác nhận mật khẩu hoặc re-authentication.
- Giải thích dữ liệu bị xóa.
- Có thời gian chờ nếu cần.
- Không giữ CV trái với chính sách.

---

# 27. Luồng 23 — Waitlist

## 27.1. Màn hình

```text
/waitlist
```

## 27.2. Trường dữ liệu

- Họ tên.
- Email.
- Vai trò.
- Mục tiêu sử dụng.
- Mức độ sẵn sàng thử nghiệm.
- Consent.

## 27.3. Trạng thái

- Idle.
- Submitting.
- Success.
- Duplicate email.
- Error.

## 27.4. Kết quả

- Hiển thị xác nhận.
- Có thể gửi email.
- Không tự đăng ký tài khoản nếu chưa thông báo rõ.

---

# 28. Luồng 24 — Admin theo dõi lỗi AI

## 28.1. Màn hình

```text
/admin/ai-errors
```

## 28.2. Thông tin

- Job ID.
- Loại tác vụ.
- User ID hoặc masked identifier.
- Error code.
- Timestamp.
- Retry count.
- Trạng thái.

## 28.3. Hành động

- Xem log an toàn.
- Retry job.
- Mark resolved.
- Gắn nhãn lỗi.
- Không xem nội dung CV nếu không cần thiết.

---

# 29. Luồng lỗi toàn hệ thống

## 29.1. Session hết hạn

- Hiển thị thông báo.
- Chuyển đến login.
- Giữ destination để quay lại.
- Không mất dữ liệu form nếu có thể.

## 29.2. Network error

- Hiển thị retry.
- Không submit trùng.
- Giữ dữ liệu đã nhập.

## 29.3. Permission denied

- Trả 403.
- Không tiết lộ dữ liệu.
- Chuyển đến trang an toàn.

## 29.4. Resource not found

- Trả 404.
- Có CTA quay lại Dashboard.

## 29.5. AI timeout

- Đánh dấu FAILED.
- Cho retry.
- Không hiển thị báo cáo không hoàn chỉnh như thành công.

---

# 30. Ma trận trạng thái và chuyển đổi

## 30.1. Resume

```text
UPLOADING
→ UPLOADED
→ VALIDATING
→ PROCESSING
→ REVIEW_REQUIRED
→ READY
```

Nhánh lỗi:

```text
VALIDATING
→ FAILED
```

Hoặc:

```text
PROCESSING
→ FAILED
```

Sau chỉnh sửa:

```text
READY
→ REVIEW_REQUIRED
→ READY
```

## 30.2. JD

```text
DRAFT
→ PROCESSING
→ REVIEW_REQUIRED
→ READY
```

## 30.3. Match

```text
PENDING
→ PROCESSING
→ COMPLETED
```

Nhánh lỗi:

```text
PROCESSING
→ FAILED
→ PROCESSING
```

Khi dữ liệu thay đổi:

```text
COMPLETED
→ OUTDATED
```

---

# 31. Sự kiện analytics đề xuất

## Authentication

- `register_started`
- `register_completed`
- `login_completed`

## Resume

- `resume_upload_started`
- `resume_upload_completed`
- `resume_parsing_failed`
- `resume_review_started`
- `resume_review_completed`

## JD

- `job_created`
- `job_parsing_completed`
- `job_review_completed`

## Matching

- `matching_started`
- `matching_completed`
- `matching_failed`
- `report_viewed`

## Recommendation

- `recommendation_opened`
- `recommendation_started`
- `recommendation_completed`

## Versioning

- `resume_version_created`
- `matching_rerun_started`

Không được gửi nội dung CV/JD thô vào analytics bên thứ ba.

---

# 32. Acceptance criteria cho luồng cốt lõi

Luồng chính được xem là hoàn thành khi:

- [ ] Người dùng có thể đăng ký và đăng nhập.
- [ ] Người dùng có thể upload CV hợp lệ.
- [ ] Hệ thống hiển thị trạng thái processing.
- [ ] Người dùng có thể review và sửa dữ liệu CV.
- [ ] Người dùng có thể nhập JD.
- [ ] Người dùng có thể review và sửa JD.
- [ ] Hệ thống chạy matching.
- [ ] Báo cáo có score breakdown.
- [ ] Báo cáo có matched requirements.
- [ ] Báo cáo có weak evidence.
- [ ] Báo cáo có not shown in CV.
- [ ] Báo cáo có hard constraint riêng.
- [ ] Báo cáo có evidence.
- [ ] Báo cáo có recommendation.
- [ ] Người dùng có thể tạo version mới.
- [ ] Người dùng có thể chạy matching lại.
- [ ] Lỗi có retry.
- [ ] Không có claim bảo đảm tuyển dụng.
- [ ] Dữ liệu người dùng được bảo vệ.

---

# 33. Definition of Done cho từng màn hình

Mỗi màn hình phải có:

- Mục tiêu rõ ràng.
- URL/route.
- Heading.
- CTA chính.
- CTA phụ nếu cần.
- Loading state.
- Empty state.
- Error state.
- Permission handling.
- Responsive.
- Keyboard navigation.
- Focus state.
- Validation.
- Analytics event.
- Test case.

---

# 34. Quy tắc cho Codex và AI coding agent

Trước khi xây một luồng, AI agent phải:

1. Đọc `CODEX.md`.
2. Đọc `product-overview.md`.
3. Đọc `mvp-scope.md`.
4. Đọc phần tương ứng trong `core-user-flow.md`.
5. Tóm tắt:
   - Actor.
   - Entry point.
   - Preconditions.
   - Steps.
   - States.
   - Error cases.
   - Output.
6. Liệt kê file dự kiến thay đổi.
7. Chờ xác nhận.
8. Mới viết code.

AI agent không được:

- Bỏ qua bước review CV.
- Bỏ qua bước review JD.
- Chạy matching với dữ liệu chưa READY.
- Tự thêm field nghiệp vụ.
- Tự đổi trạng thái.
- Hiển thị pass/fail.
- Dùng “không có kỹ năng” thay cho “chưa thể hiện”.
- Ẩn hard constraint.
- Tự động loại ứng viên.

---

# 35. Tóm tắt luồng cốt lõi dành cho Codex

```text
1. Candidate creates an account.
2. Candidate completes basic onboarding.
3. Candidate uploads a PDF or DOCX resume.
4. System validates and parses the resume.
5. Candidate reviews and confirms structured resume data.
6. Candidate pastes a job description.
7. System parses and structures the JD.
8. Candidate reviews and confirms the JD requirements.
9. Candidate selects a READY resume version and a READY JD.
10. System runs explainable CV–JD matching.
11. Candidate views score breakdown, evidence, skill gaps,
    hard constraints and prioritized recommendations.
12. Candidate creates a new resume version or tries another JD.
```

Core rule:

> **Không được bỏ qua các bước xác nhận dữ liệu trước matching và không được trình bày điểm số như quyết định tuyển dụng.**

---

# 36. Kết luận

Core user flow của KaDa_CV không chỉ là:

```text
Upload CV → Nhận điểm
```

Luồng đúng phải là:

```text
Upload CV
→ Review dữ liệu
→ Nhập JD
→ Review yêu cầu
→ Matching có giải thích
→ Skill gap
→ Recommendation
→ Cải thiện và chạy lại
```

Mọi màn hình, API, trạng thái và module trong MVP phải phục vụ trực tiếp cho hành trình này.
