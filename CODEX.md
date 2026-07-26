# CODEX.md — KaDa_CV Project Instructions

> **Phiên bản:** 1.0  
> **Loại tài liệu:** Chỉ dẫn bắt buộc dành cho Codex và các AI coding agent  
> **Vị trí:** Thư mục gốc của repository  
> **Mức ưu tiên:** Cao nhất trong nhóm tài liệu hướng dẫn thực thi

---

# 1. Mục đích của file này

File này định nghĩa cách Codex và các AI coding agent phải làm việc với dự án KaDa_CV.

Mục tiêu là bảo đảm agent:

- Hiểu đúng bản chất sản phẩm.
- Đọc đúng tài liệu trước khi code.
- Không tự suy diễn nghiệp vụ.
- Không tự mở rộng phạm vi.
- Không biến KaDa_CV thành một job board chung chung.
- Không tạo giao diện đẹp nhưng sai sản phẩm.
- Không tạo tính năng, dữ liệu, chỉ số hoặc nội dung chưa được phê duyệt.
- Luôn lập kế hoạch, xác nhận phạm vi và kiểm tra chất lượng trước khi hoàn thành.

File này là tài liệu điều phối. Nó không thay thế đặc tả nghiệp vụ chi tiết trong thư mục `docs/`.

---

# 2. KaDa_CV là gì?

KaDa_CV là nền tảng AI hỗ trợ:

- Sinh viên IT.
- Người mới tốt nghiệp.
- Thực tập sinh công nghệ.
- Người tìm việc ngành IT.
- Kỹ sư IT muốn chuyển việc hoặc chuyển hướng nghề nghiệp.
- Trong giai đoạn mở rộng: nhà tuyển dụng công nghệ.

Giá trị cốt lõi của sản phẩm:

```text
Resume Parser
→ Resume Quality Analysis
→ Job Description Parser
→ Skill Normalization
→ CV–JD Matching
→ Skill Gap Analysis
→ Evidence-based Explanation
→ Prioritized Improvement Recommendation
```

KaDa_CV giúp người dùng:

1. Hiểu CV hiện đang thể hiện điều gì.
2. Hiểu JD đang yêu cầu điều gì.
3. Biết mức độ phù hợp giữa CV và từng JD cụ thể.
4. Biết kỹ năng nào đã có bằng chứng.
5. Biết kỹ năng nào có liên quan nhưng bằng chứng còn yếu.
6. Biết kỹ năng nào chưa được thể hiện trong CV.
7. Biết hard constraint nào chưa được đáp ứng hoặc xác nhận.
8. Biết nên sửa gì hoặc học gì tiếp theo.

---

# 3. KaDa_CV không phải là gì?

Codex không được triển khai KaDa_CV như:

- Một job board thông thường.
- Một website tuyển dụng chỉ có danh sách việc làm.
- Một hệ thống chỉ chấm một điểm CV.
- Một công cụ chỉ đếm keyword.
- Một ATS tự động loại ứng viên.
- Một hệ thống cam kết người dùng được tuyển.
- Một chatbot tư vấn nghề nghiệp chung chung.
- Một công cụ tự bịa kỹ năng hoặc kinh nghiệm.
- Một hệ thống đánh giá giá trị con người.
- Một nền tảng recruiter đầy đủ ngay trong MVP.
- Một mobile app nếu chưa được yêu cầu.

---

# 4. Nguồn sự thật của dự án

Codex phải đọc tài liệu theo thứ tự sau:

1. `CODEX.md`
2. `docs/product-overview.md`
3. `docs/mvp-scope.md`
4. `docs/core-user-flow.md`
5. `brand/brand.md`
6. `content/home.md` hoặc tài liệu Home tương ứng
7. `content/features.md`
8. `content/solutions.md`
9. `content/pricing.md`
10. `content/waitlist.md`
11. Các đặc tả module liên quan trong `docs/`
12. Các file mẫu trong `examples/`

Nếu repository hiện có bản `.docx` thay vì `.md`, Codex phải:

- Đọc nội dung nếu môi trường hỗ trợ.
- Không được bỏ qua vì định dạng khác.
- Ưu tiên sử dụng bản `.md` nếu cả hai cùng tồn tại.
- Báo lại nếu nội dung `.docx` và `.md` mâu thuẫn.

---

# 5. Thứ tự ưu tiên khi tài liệu mâu thuẫn

Nếu có mâu thuẫn, ưu tiên theo thứ tự:

1. Yêu cầu trực tiếp mới nhất của Product Owner.
2. `CODEX.md`.
3. `docs/mvp-scope.md`.
4. `docs/product-overview.md`.
5. `docs/core-user-flow.md`.
6. Đặc tả module cụ thể.
7. `brand/brand.md`.
8. Nội dung marketing trong `content/`.
9. Code hiện tại.
10. Suy đoán của AI agent.

Codex không được tự quyết định khi mâu thuẫn có ảnh hưởng đến:

- Business rule.
- Dữ liệu.
- Permission.
- AI logic.
- Pricing.
- Scope.
- Trạng thái nghiệp vụ.
- User flow.

Trong trường hợp này, Codex phải dừng và hỏi lại.

---

# 6. Quy trình bắt buộc trước khi viết code

Trước mỗi module hoặc thay đổi đáng kể, Codex phải thực hiện:

## Bước 1 — Đọc tài liệu

Đọc:

- `CODEX.md`
- Tài liệu product.
- Tài liệu scope.
- Tài liệu flow.
- Tài liệu module.
- Brand/content nếu có liên quan UI.

## Bước 2 — Tóm tắt hiểu biết

Codex phải tóm tắt:

- Mục tiêu module.
- Actor.
- Entry point.
- Preconditions.
- Luồng chính.
- Trạng thái.
- Error cases.
- Input.
- Output.
- Permission.
- Out of scope.

## Bước 3 — Kiểm tra repository

Codex phải kiểm tra:

- Framework.
- Cấu trúc thư mục.
- Coding conventions.
- Package manager.
- Existing components.
- Existing API.
- Existing schema.
- Existing tests.
- Existing environment variables.
- Existing lint/build command.

## Bước 4 — Lập kế hoạch

Plan phải gồm:

- File sẽ tạo.
- File sẽ sửa.
- File sẽ xóa, nếu có.
- Database migration.
- API thay đổi.
- UI thay đổi.
- Test cần thêm.
- Rủi ro.
- Giả định.

## Bước 5 — Chờ xác nhận

Không được code nếu người dùng đã yêu cầu quy trình xác nhận trước.

Với task nhỏ, không ảnh hưởng nghiệp vụ, có thể thực hiện ngay nếu yêu cầu rõ ràng.

## Bước 6 — Viết code

Chỉ thực hiện đúng phạm vi đã thống nhất.

## Bước 7 — Kiểm tra

Phải chạy các lệnh phù hợp:

```text
lint
type-check
test
build
```

Nếu không chạy được, phải nói rõ:

- Lệnh đã chạy.
- Lỗi nhận được.
- Nguyên nhân dự kiến.
- Phần nào chưa xác minh.

## Bước 8 — Báo cáo

Báo cáo cuối phải gồm:

- Đã làm gì.
- File nào thay đổi.
- Test nào đã chạy.
- Kết quả.
- Hạn chế còn lại.
- Bước tiếp theo duy nhất nếu cần.

---

# 7. Quy tắc phạm vi MVP

Codex chỉ được triển khai các nhóm chức năng MVP sau nếu không có chỉ đạo khác:

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
Marketing Pages
Waitlist
```

Các chức năng sau mặc định là ngoài phạm vi:

```text
Full Job Marketplace
Production Payment
AI Interview
Voice Interview
Video Interview
Cover Letter Generator
Full CV Builder
Learning Management System
Native Mobile App
Full Recruiter ATS
Automatic Candidate Rejection
Guaranteed Hiring Outcome
Social Network
Complex Gamification
```

Không được thêm chức năng ngoài phạm vi chỉ vì “hợp lý” hoặc “thường có ở sản phẩm khác”.

---

# 8. Quy tắc nghiệp vụ cốt lõi

## 8.1. CV phải được xác nhận trước matching

Luồng đúng:

```text
Upload CV
→ Parse
→ Review
→ Confirm
→ READY
→ Matching
```

Không được chạy matching trực tiếp với dữ liệu parser chưa được người dùng xác nhận, trừ khi tài liệu module nói rõ.

## 8.2. JD phải được xác nhận trước matching

Luồng đúng:

```text
Input JD
→ Parse
→ Review
→ Confirm
→ READY
→ Matching
```

## 8.3. Matching theo từng JD

Không được dùng một điểm CV cố định cho mọi công việc.

## 8.4. Hard constraint phải hiển thị riêng

Không được chỉ làm giảm điểm tổng mà không giải thích.

## 8.5. Báo cáo phải có bằng chứng

Mỗi nhận xét quan trọng phải liên kết với:

- Section trong CV.
- Đoạn CV.
- Yêu cầu trong JD.
- Hoặc dữ liệu cấu trúc đã xác nhận.

## 8.6. Không suy diễn “không có kỹ năng”

Câu đúng:

> CV chưa thể hiện kinh nghiệm với Docker.

Câu sai:

> Người dùng không biết Docker.

## 8.7. Không ghi đè lịch sử

Khi CV hoặc JD thay đổi:

- Tạo version mới.
- Tạo matching record mới.
- Báo cáo cũ giữ nguyên.
- Có thể đánh dấu `OUTDATED`.

## 8.8. Không dùng pass/fail

Không hiển thị:

- Passed.
- Failed candidate.
- Qualified.
- Disqualified.

Nên hiển thị:

- Mức độ phù hợp.
- Điểm mạnh.
- Khoảng cách.
- Hard constraint.
- Recommendation.

---

# 9. Trạng thái nghiệp vụ chuẩn

## Resume

```text
UPLOADING
UPLOADED
VALIDATING
PROCESSING
REVIEW_REQUIRED
READY
FAILED
ARCHIVED
```

## Job Description

```text
DRAFT
PROCESSING
REVIEW_REQUIRED
READY
FAILED
ARCHIVED
```

## Match

```text
PENDING
PROCESSING
COMPLETED
FAILED
OUTDATED
```

Nếu muốn thêm trạng thái, Codex phải:

1. Nêu lý do.
2. Mô tả transition.
3. Kiểm tra tác động API, database và UI.
4. Chờ xác nhận.

---

# 10. Quy tắc AI và Responsible AI

Codex phải giữ các nguyên tắc sau trong mọi module AI:

## 10.1. Không hallucinate dữ liệu cá nhân

Không được tự tạo:

- Kỹ năng.
- Kinh nghiệm.
- Công ty.
- Chức danh.
- Dự án.
- Chứng chỉ.
- Số năm kinh nghiệm.
- Thành tích.
- Kết quả định lượng.

## 10.2. Structured output

Output AI phải được:

- Ràng buộc bằng schema.
- Validate.
- Retry khi sai cấu trúc.
- Log lỗi an toàn.
- Không sử dụng trực tiếp nếu chưa hợp lệ.

## 10.3. Evidence first

Nhận xét quan trọng không có evidence phải:

- Bị loại.
- Hoặc hiển thị là chưa đủ bằng chứng.
- Không được trình bày như kết luận chắc chắn.

## 10.4. Không sử dụng thuộc tính nhạy cảm

Không dùng để scoring:

- Giới tính.
- Tuổi.
- Ảnh.
- Chủng tộc.
- Tôn giáo.
- Tình trạng hôn nhân.
- Thông tin sức khỏe.
- Các thuộc tính nhạy cảm khác.

## 10.5. Human in the loop

Người dùng phải kiểm tra và xác nhận dữ liệu parser trước khi matching.

AI không được tự động:

- Loại ứng viên.
- Gửi hồ sơ.
- Sửa CV.
- Thay đổi dữ liệu nguồn.
- Quyết định tuyển dụng.

---

# 11. Quy tắc nội dung và ngôn ngữ

## Nên dùng

- Mức độ phù hợp.
- Kỹ năng đã đáp ứng.
- Bằng chứng còn yếu.
- Kỹ năng liên quan.
- Chưa thể hiện trong CV.
- Điều kiện bắt buộc.
- Cơ hội cải thiện.
- Gợi ý ưu tiên.
- AI hỗ trợ phân tích.

## Không nên dùng

- CV yếu.
- Ứng viên kém.
- Không đủ năng lực.
- Chắc chắn được tuyển.
- Chắc chắn bị loại.
- CV hoàn hảo.
- AI quyết định.
- Tỷ lệ thành công nếu chưa có dữ liệu thật.

---

# 12. Quy tắc thiết kế UI/UX

Codex phải tuân thủ `brand/brand.md`.

Nguyên tắc chung:

- Rõ ràng.
- Hiện đại.
- Công nghệ.
- Tin cậy.
- Khích lệ.
- Không phán xét.
- Không gây sợ hãi.

## UI bắt buộc

Mỗi màn hình phải có:

- Heading rõ ràng.
- CTA chính.
- Loading state.
- Empty state.
- Error state.
- Permission state.
- Responsive.
- Accessible focus state.
- Form validation.
- Feedback sau thao tác.

## Không được

- Chỉ tạo happy path.
- Dùng màu đỏ như tín hiệu duy nhất.
- Giấu explanation.
- Hiển thị quá nhiều metric cùng lúc.
- Tự thêm testimonial.
- Tự thêm logo đối tác.
- Tự thêm số lượng người dùng.
- Tự thêm biểu đồ không có dữ liệu thật.

---

# 13. Brand token mặc định

Nếu `brand.md` không quy định khác:

```text
Primary Orange: #FF5A2A
Soft Orange: #FFF0EA
Accent Blue: #1F6FEB
Soft Blue: #EAF2FF
Dark Text: #111111
Neutral Background: #FFFFFF / light neutral
```

Typography ưu tiên:

- Inter.
- Manrope.
- Sans-serif hiện đại tương đương.

Không tự thêm quá nhiều màu ngoài hệ thống thương hiệu.

---

# 14. Quy tắc frontend

## Framework

Tuân theo framework hiện có trong repository.

Nếu dự án dùng Next.js:

- Ưu tiên App Router nếu codebase đã dùng App Router.
- Dùng TypeScript.
- Phân biệt Server Component và Client Component hợp lý.
- Không thêm `"use client"` không cần thiết.
- Không fetch dữ liệu nhạy cảm trực tiếp từ client nếu có thể xử lý phía server.

## Component

- Tái sử dụng component hiện có.
- Không tạo component trùng chức năng.
- Tách page-specific và shared component.
- Tránh component quá lớn.
- Có type rõ ràng.
- Không hardcode business data trong JSX nếu dữ liệu có nguồn khác.

## Styling

- Tuân theo design system hiện tại.
- Không trộn nhiều cách styling nếu không cần.
- Không thêm dependency UI lớn chỉ để dùng một component.

## State

- Ưu tiên state đơn giản.
- Không thêm global state nếu local/server state đủ.
- Trạng thái async phải có loading/error.

---

# 15. Quy tắc backend

- API phải có schema request/response.
- Validation ở server.
- Authentication và authorization bắt buộc.
- Không tin dữ liệu từ client.
- Không để user truy cập resource của người khác.
- Không trả stack trace cho client.
- Dùng transaction khi nhiều thao tác phụ thuộc nhau.
- Background job cho parsing và matching nếu thời gian xử lý dài.
- Idempotency cho retry nếu cần.
- Không log CV thô nếu không cần.

---

# 16. Quy tắc database

Mọi bảng nghiệp vụ nên có:

- ID.
- Created at.
- Updated at.
- Ownership hoặc user reference.
- Status nếu có workflow.
- Version nếu cần.
- Index cho truy vấn chính.

Codex phải:

- Dùng migration.
- Không sửa production schema thủ công.
- Không xóa column/table mà không nêu migration impact.
- Không cascade delete dữ liệu nhạy cảm mà chưa xác định rõ.
- Giữ liên kết giữa report và resume version/job version.

---

# 17. Quy tắc file CV và dữ liệu cá nhân

CV là dữ liệu riêng tư.

Bắt buộc:

- Private storage.
- Không public URL.
- Signed URL có thời hạn nếu cần.
- Authorization trước khi tải file.
- Có quy trình xóa.
- Không đưa file CV vào Git.
- Không đưa dữ liệu CV thật vào seed.
- Không gửi CV thô tới analytics.
- Không hiển thị PII ở log.

Dữ liệu mẫu phải là dữ liệu hư cấu.

---

# 18. Quy tắc API contract

Khi thêm hoặc sửa API, Codex phải ghi rõ:

- Method.
- Route.
- Auth requirement.
- Request schema.
- Response schema.
- Error codes.
- Ownership rule.
- Side effects.
- State transition.
- Idempotency.

Không được chỉ tạo API “cho chạy được” mà thiếu contract.

---

# 19. Quy tắc test

## Tối thiểu

- Unit test cho business rule quan trọng.
- API test cho permission.
- Test validation.
- Test state transition.
- Test error case.
- Test happy path cốt lõi.
- Build test.

## Luồng bắt buộc phải có test

```text
Register
Upload CV
Parse CV
Review CV
Input JD
Parse JD
Review JD
Run Matching
View Report
Create Version
Rerun Matching
```

## AI test

Phải có dữ liệu mẫu cố định để kiểm tra:

- Không hallucinate.
- Có evidence.
- Không dùng thuộc tính nhạy cảm.
- Output đúng schema.
- Trạng thái skill đúng nhóm.

---

# 20. Quy tắc dependency

Codex không được tự thêm dependency nếu:

- Codebase đã có giải pháp tương đương.
- Chỉ dùng cho một chức năng nhỏ.
- Package ít được duy trì.
- Tạo xung đột framework.
- Làm tăng bundle lớn không cần thiết.

Khi thêm dependency phải nêu:

- Tên.
- Mục đích.
- Vì sao cần.
- Alternative đã cân nhắc.
- Ảnh hưởng bundle hoặc backend.

---

# 21. Quy tắc môi trường và secret

Không được:

- Commit `.env`.
- Hardcode API key.
- In secret ra log.
- Đưa secret vào client bundle.
- Dùng credential thật trong test.

Phải:

- Có `.env.example`.
- Mô tả biến môi trường.
- Validate env khi startup.
- Phân biệt dev/staging/production.

---

# 22. Quy tắc marketing content

Nội dung public phải bám vào:

- `brand/brand.md`
- `content/home.*`
- `content/features.*`
- `content/solutions.*`
- `content/pricing.*`
- `content/waitlist.*`

Không được tự thêm:

- Testimonial.
- Khách hàng.
- Logo đối tác.
- Số lượng người dùng.
- Tỷ lệ tuyển dụng.
- Giải thưởng.
- Dữ liệu ROI mới.
- Giá mới.
- Discount.
- Claim “tốt nhất”.
- Claim “chính xác tuyệt đối”.

Nếu nội dung pricing là thử nghiệm, phải giữ disclaimer.

---

# 23. Quy tắc SEO cho public pages

Mỗi public page cần:

- Title.
- Description.
- One H1.
- Semantic heading.
- Open Graph metadata nếu hệ thống hỗ trợ.
- Alt text.
- Internal links.
- Canonical nếu cần.
- Không duplicate metadata.

Không ưu tiên SEO hơn tính chính xác của sản phẩm.

---

# 24. Quy tắc accessibility

Bắt buộc:

- Keyboard navigation.
- Focus visible.
- Form label.
- Error message liên kết đúng field.
- Semantic HTML.
- Contrast phù hợp.
- Không dùng màu là tín hiệu duy nhất.
- Dialog có focus trap nếu dùng.
- Icon quan trọng có accessible name.
- Decorative icon phải được ẩn khỏi screen reader.

---

# 25. Quy tắc hiệu năng

Codex phải tránh:

- Fetch trùng dữ liệu.
- Render client toàn trang khi không cần.
- Ảnh quá lớn.
- Bundle dependency nặng.
- Polling quá nhanh.
- Query không index.
- N+1 query.
- Xử lý AI dài trong request đồng bộ.

Nếu có tác vụ dài:

```text
Create Job
→ Return job ID
→ Poll/stream status
→ Fetch result
```

---

# 26. Quy tắc Git và thay đổi file

Không được:

- Xóa file không liên quan.
- Reformat toàn repository nếu task nhỏ.
- Thay đổi lockfile vô lý.
- Đổi package manager.
- Gộp refactor lớn với feature nhỏ.
- Sửa file generated thủ công.

Mỗi task nên có phạm vi thay đổi tối thiểu.

---

# 27. Quy tắc khi repository chưa hoàn chỉnh

Nếu repo thiếu:

- Product docs.
- API contract.
- Database schema.
- Design token.
- Sample data.
- Acceptance criteria.

Codex phải:

1. Báo phần thiếu.
2. Đề xuất giả định tối thiểu.
3. Không tự biến giả định thành sự thật.
4. Chờ xác nhận nếu ảnh hưởng nghiệp vụ.

---

# 28. Quy tắc khi người dùng yêu cầu “thiết kế trang”

Trước khi code, Codex phải xác định:

- Trang marketing hay application.
- Actor.
- Mục tiêu trang.
- CTA chính.
- Dữ liệu thật hay mock.
- Trạng thái.
- Route.
- Nội dung nguồn.
- Mobile behavior.
- Out of scope.

Ví dụ, “Dashboard” không được hiểu là dashboard SaaS chung chung. Phải đọc `core-user-flow.md`.

---

# 29. Quy tắc khi dùng dữ liệu mock

Mock data phải:

- Hư cấu.
- Không chứa PII thật.
- Bám đúng schema.
- Có nhiều trạng thái.
- Có error case.
- Không được hiển thị như dữ liệu production.

Tên gợi ý:

- Minh Nguyễn.
- Lan Trần.
- Backend Intern.
- AI Engineer Intern.
- ForecastAI.
- PTIT course project.

Không dùng dữ liệu thật của người dùng nếu chưa được yêu cầu.

---

# 30. Quy tắc hoàn thành task

Một task chỉ được xem là hoàn thành khi:

- Đúng nghiệp vụ.
- Đúng scope.
- Đúng brand.
- Có error state.
- Có loading state.
- Có permission.
- Có type.
- Có test phù hợp.
- Lint pass.
- Build pass.
- Không có secret.
- Không có claim bịa.
- Không có accessibility issue rõ ràng.
- Báo cáo trung thực phần chưa xác minh.

---

# 31. Mẫu tóm tắt bắt buộc trước khi code

Codex nên dùng cấu trúc:

```md
## Tôi hiểu yêu cầu

### Mục tiêu
...

### Actor
...

### Entry point
...

### Preconditions
...

### Luồng chính
1. ...
2. ...

### Trạng thái
- ...

### Error cases
- ...

### Dữ liệu đầu vào
- ...

### Dữ liệu đầu ra
- ...

### Ngoài phạm vi
- ...

### File dự kiến thay đổi
- ...

### Rủi ro hoặc điểm cần xác nhận
- ...
```

---

# 32. Mẫu báo cáo sau khi code

```md
## Đã hoàn thành

### Thay đổi chính
- ...

### File đã tạo
- ...

### File đã sửa
- ...

### Kiểm tra đã chạy
- `npm run lint`
- `npm run test`
- `npm run build`

### Kết quả
- ...

### Chưa xác minh
- ...

### Ghi chú
- ...
```

---

# 33. Checklist riêng cho Resume module

- [ ] PDF/DOCX.
- [ ] Validation client và server.
- [ ] Private storage.
- [ ] Trạng thái processing.
- [ ] Retry.
- [ ] Review data.
- [ ] User confirmation.
- [ ] Original và structured data tách biệt.
- [ ] Không hallucinate.
- [ ] Ownership.
- [ ] Delete flow.

---

# 34. Checklist riêng cho JD module

- [ ] Required skills.
- [ ] Preferred skills.
- [ ] Responsibilities.
- [ ] Experience.
- [ ] Education.
- [ ] Hard constraints.
- [ ] Benefits tách khỏi matching.
- [ ] Company description tách khỏi matching.
- [ ] User review.
- [ ] READY trước matching.

---

# 35. Checklist riêng cho Matching module

- [ ] Resume version đúng.
- [ ] JD version đúng.
- [ ] Skill normalization.
- [ ] Score breakdown.
- [ ] Matched requirements.
- [ ] Weak evidence.
- [ ] Related skills.
- [ ] Not shown in CV.
- [ ] Hard constraints riêng.
- [ ] Evidence links.
- [ ] Recommendation.
- [ ] Scoring version.
- [ ] Stable result.
- [ ] Không pass/fail.

---

# 36. Checklist riêng cho public website

- [ ] Nội dung đúng tài liệu.
- [ ] Không invent claim.
- [ ] Đúng màu và typography.
- [ ] Responsive.
- [ ] CTA đúng.
- [ ] SEO metadata.
- [ ] Accessibility.
- [ ] Không dùng fake testimonial.
- [ ] Không dùng fake statistics.
- [ ] Pricing disclaimer nếu cần.

---

# 37. Những câu hỏi Codex phải trả lời đúng trước khi triển khai lớn

1. KaDa_CV là sản phẩm gì?
2. Người dùng chính là ai?
3. Luồng cốt lõi là gì?
4. Vì sao cần review CV?
5. Vì sao cần review JD?
6. Hard constraint hiển thị thế nào?
7. “Not shown in CV” khác “No skill” thế nào?
8. Báo cáo matching gồm những phần nào?
9. MVP gồm gì?
10. Out of scope gồm gì?
11. Dữ liệu nhạy cảm nào không được dùng?
12. File nào là source of truth?
13. Khi tài liệu mâu thuẫn thì xử lý thế nào?
14. Khi chưa chắc nghiệp vụ thì có được tự đoán không?

Nếu trả lời sai, Codex chưa được bắt đầu implementation lớn.

---

# 38. Lệnh khởi động phiên làm việc gợi ý

Người dùng có thể yêu cầu Codex:

```text
Hãy đọc theo thứ tự:

1. CODEX.md
2. docs/product-overview.md
3. docs/mvp-scope.md
4. docs/core-user-flow.md
5. brand/brand.md

Chưa được viết code.

Hãy tóm tắt:
- KaDa_CV là sản phẩm gì
- người dùng chính
- core flow
- MVP scope
- out of scope
- nguyên tắc AI
- trạng thái nghiệp vụ
- tài liệu còn thiếu

Sau đó chờ tôi xác nhận.
```

---

# 39. Tóm tắt cuối cùng

KaDa_CV phải được hiểu là:

```text
Resume Intelligence
+
Job Intelligence
+
Explainable CV–JD Matching
+
Skill Gap Analysis
+
Career Improvement Workflow
```

Mọi quyết định thiết kế và kỹ thuật phải phục vụ mục tiêu:

> **Giúp người dùng hiểu CV hiện tại, biết mức độ phù hợp với một công việc cụ thể và xác định bước cải thiện tiếp theo một cách minh bạch, thực tế và có căn cứ.**

Codex không được ưu tiên “làm cho đẹp” hơn “làm đúng sản phẩm”.

Codex không được ưu tiên “làm nhiều” hơn “làm đúng phạm vi”.

Codex không được ưu tiên “tự suy luận” hơn “đọc và tuân thủ tài liệu”.
