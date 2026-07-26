# KaDa_CV Product Overview

> **Phiên bản:** 1.0  
> **Loại tài liệu:** Product overview / nguồn bối cảnh cốt lõi  
> **Đối tượng sử dụng:** Product owner, UI/UX designer, frontend engineer, backend engineer, AI engineer, Codex/Claude Code và các AI coding agent  
> **Vị trí đề xuất trong repository:** `docs/product-overview.md`

---

# 1. Tóm tắt sản phẩm

**KaDa_CV** là nền tảng AI hỗ trợ sinh viên mới tốt nghiệp, người tìm việc ngành công nghệ và kỹ sư IT:

- Phân tích CV.
- Hiểu chất lượng và mức độ hoàn thiện của CV.
- So khớp CV với một mô tả công việc cụ thể.
- Xác định kỹ năng đã đáp ứng.
- Phát hiện kỹ năng chưa được thể hiện hoặc còn thiếu bằng chứng.
- Giải thích vì sao hệ thống đưa ra kết quả.
- Đề xuất các bước cải thiện theo mức độ ưu tiên.

KaDa_CV không chỉ trả về một điểm CV chung chung. Sản phẩm phải giúp người dùng hiểu rõ:

1. CV hiện đang thể hiện điều gì.
2. Công việc mục tiêu đang yêu cầu điều gì.
3. Hai bên phù hợp với nhau ở mức nào.
4. Yêu cầu nào đã có bằng chứng rõ.
5. Yêu cầu nào mới chỉ được nhắc đến nhưng chưa có bằng chứng đủ mạnh.
6. Yêu cầu nào chưa được thể hiện trong CV.
7. Điều kiện bắt buộc nào có thể chưa đáp ứng.
8. Người dùng nên làm gì tiếp theo.

Luồng giá trị cốt lõi của sản phẩm:

```text
CV
→ Chuẩn hóa dữ liệu
→ Phân tích chất lượng CV
→ Phân tích JD
→ Chuẩn hóa kỹ năng
→ So khớp CV–JD
→ Phát hiện skill gap
→ Giải thích bằng bằng chứng
→ Gợi ý cải thiện theo mức ưu tiên
```

---

# 2. Tầm nhìn

KaDa_CV hướng đến việc trở thành một **AI Job Copilot** dành cho người tìm việc ngành công nghệ.

Trong dài hạn, sản phẩm không chỉ hỗ trợ sửa CV mà còn có thể đồng hành cùng người dùng trong toàn bộ hành trình nghề nghiệp:

```text
Hiểu năng lực hiện tại
→ Chọn công việc phù hợp
→ Phát hiện khoảng cách kỹ năng
→ Cải thiện hồ sơ
→ Ứng tuyển có mục tiêu
→ Theo dõi tiến bộ
→ Phát triển nghề nghiệp
```

Tuy nhiên, phiên bản đầu tiên phải tập trung vào giá trị cốt lõi:

> **Giúp người dùng hiểu mức độ phù hợp giữa CV và một công việc cụ thể, đồng thời chỉ ra bước cải thiện tiếp theo một cách minh bạch và có căn cứ.**

---

# 3. Sứ mệnh

KaDa_CV giúp người tìm việc chuyển quá trình ứng tuyển từ cảm tính sang một quy trình:

- Rõ ràng.
- Có cấu trúc.
- Có giải thích.
- Có bằng chứng.
- Có hành động tiếp theo.

Sản phẩm không được tạo cảm giác rằng AI đang phán xét con người. KaDa_CV chỉ đánh giá:

- Nội dung đang xuất hiện trong CV.
- Mức độ liên quan với JD cụ thể.
- Chất lượng bằng chứng được thể hiện.
- Khoảng cách giữa hồ sơ hiện tại và yêu cầu công việc.

KaDa_CV không đánh giá toàn diện năng lực, giá trị hoặc tiềm năng của một con người.

---

# 4. Vấn đề thị trường

## 4.1. Vấn đề của sinh viên và người mới tốt nghiệp

Sinh viên và người mới tốt nghiệp thường:

- Chưa có nhiều kinh nghiệm làm việc chính thức.
- Không biết dự án nào nên đưa vào CV.
- Chỉ liệt kê công nghệ mà chưa mô tả vai trò và kết quả.
- Không hiểu yêu cầu nào trong JD là bắt buộc.
- Không biết nên sửa CV hay học thêm kỹ năng trước.
- Dễ xem một điểm CV thấp như đánh giá về bản thân.
- Khó điều chỉnh CV cho từng vị trí thực tập hoặc junior.

## 4.2. Vấn đề của người tìm việc ngành IT

Người tìm việc ngành IT thường:

- Gửi cùng một CV cho nhiều công việc.
- Không hiểu vì sao ít nhận được phản hồi.
- Không biết kỹ năng nào đang thiếu.
- Không biết kỹ năng nào đã có nhưng chưa được thể hiện đủ tốt.
- Khó so sánh nhiều JD với hồ sơ hiện tại.
- Mất nhiều thời gian tự đọc JD và chỉnh CV thủ công.
- Không có cơ chế theo dõi CV đã cải thiện qua các phiên bản.

## 4.3. Vấn đề của kỹ sư IT muốn chuyển hướng

Kỹ sư muốn chuyển vai trò hoặc lĩnh vực thường:

- Không biết kỹ năng nào có thể chuyển đổi.
- Không biết khoảng cách với vai trò mục tiêu.
- Không biết nên nhấn mạnh kinh nghiệm cũ như thế nào.
- Không biết nên học kỹ năng nào trước.
- Khó xác định vị trí phù hợp với năng lực hiện tại.

Ví dụ:

- Backend Developer muốn chuyển sang AI Engineer.
- Tester muốn chuyển sang Automation Engineer.
- Data Analyst muốn chuyển sang Data Engineer.
- Software Engineer muốn chuyển sang DevOps.

## 4.4. Vấn đề của nhà tuyển dụng công nghệ

Nhà tuyển dụng thường:

- Mất nhiều thời gian đọc CV.
- Khó so sánh ứng viên theo cùng một bộ tiêu chí.
- Gặp CV sử dụng từ khóa nhưng thiếu bằng chứng thực tế.
- Khó ưu tiên ứng viên khi số lượng hồ sơ lớn.
- Cần một báo cáo có giải thích thay vì một điểm số không rõ nguồn gốc.

KaDa_CV có thể hỗ trợ nhà tuyển dụng trong giai đoạn mở rộng, nhưng không được trở thành hệ thống tự động loại ứng viên.

---

# 5. Đối tượng người dùng

## 5.1. Người dùng chính

### Persona A — Sinh viên IT mới tốt nghiệp

**Đặc điểm:**

- Có kiến thức nền tảng và dự án học tập.
- Ít hoặc chưa có kinh nghiệm toàn thời gian.
- Chưa biết cách trình bày dự án thành bằng chứng nghề nghiệp.
- Đang tìm internship, fresher hoặc junior role.

**Nhu cầu:**

- Biết CV có đủ rõ ràng hay chưa.
- Biết dự án nào phù hợp với JD.
- Biết kỹ năng nào còn thiếu.
- Nhận gợi ý cải thiện có thể thực hiện.

### Persona B — Người tìm việc ngành IT

**Đặc điểm:**

- Đã có một số kinh nghiệm hoặc dự án.
- Đang ứng tuyển nhiều vị trí.
- Có thể dùng một CV cho nhiều JD.
- Muốn tăng tính liên quan của CV.

**Nhu cầu:**

- So khớp CV với từng JD.
- Hiểu vì sao kết quả cao hoặc thấp.
- Tạo nhiều phiên bản CV.
- Ưu tiên công việc phù hợp hơn.

### Persona C — Kỹ sư IT chuyển hướng

**Đặc điểm:**

- Có kinh nghiệm ở một vai trò hiện tại.
- Muốn chuyển sang vai trò mới.
- Có kỹ năng liên quan nhưng chưa biết cách diễn đạt.
- Chưa rõ khoảng cách cần bù đắp.

**Nhu cầu:**

- Xác định transferable skills.
- Đánh giá skill gap.
- Biết nội dung nào cần nhấn mạnh.
- Biết kỹ năng nào cần học trước.

## 5.2. Người dùng mở rộng

### Persona D — Nhà tuyển dụng công nghệ

**Nhu cầu:**

- Cấu trúc hóa JD.
- So sánh ứng viên theo cùng tiêu chí.
- Xem bằng chứng kỹ năng.
- Tạo shortlist có giải thích.

### Persona E — Trường đại học và trung tâm đào tạo

**Nhu cầu:**

- Đánh giá mức sẵn sàng nghề nghiệp của sinh viên.
- Xác định kỹ năng phổ biến còn thiếu.
- Hỗ trợ cố vấn nghề nghiệp.
- Theo dõi tiến bộ của người học.

### Persona F — Cố vấn nghề nghiệp

**Nhu cầu:**

- Có báo cáo cấu trúc để tư vấn.
- So sánh nhiều phiên bản CV.
- Xác định ưu tiên cải thiện.
- Giảm thời gian rà soát thủ công.

---

# 6. Jobs To Be Done

## 6.1. Khi tôi chuẩn bị ứng tuyển

> Khi tôi chuẩn bị ứng tuyển một công việc, tôi muốn biết CV của mình phù hợp đến đâu để quyết định có nên ứng tuyển và nên chỉnh gì trước.

## 6.2. Khi tôi không hiểu JD

> Khi JD có quá nhiều yêu cầu, tôi muốn hệ thống tách rõ yêu cầu bắt buộc và yêu cầu ưu tiên để tôi biết điều gì thực sự quan trọng.

## 6.3. Khi tôi có kỹ năng nhưng CV chưa thể hiện tốt

> Khi tôi đã từng dùng một công nghệ nhưng CV chỉ liệt kê tên, tôi muốn biết cần bổ sung bằng chứng gì để nhà tuyển dụng hiểu đúng năng lực của tôi.

## 6.4. Khi tôi muốn chuyển hướng nghề nghiệp

> Khi tôi muốn chuyển sang một vai trò mới, tôi muốn biết kỹ năng nào có thể tận dụng và kỹ năng nào cần bổ sung.

## 6.5. Khi tôi muốn cải thiện CV theo thời gian

> Khi tôi chỉnh sửa CV qua nhiều lần, tôi muốn theo dõi xem những thay đổi nào thực sự cải thiện mức độ phù hợp.

---

# 7. Giá trị cốt lõi

## 7.1. Hiểu rõ CV

KaDa_CV giúp người dùng:

- Biết CV có đầy đủ section hay không.
- Phát hiện nội dung thiếu rõ ràng.
- Xác định phần thiếu bằng chứng.
- Hiểu cách hệ thống đọc CV.

## 7.2. So khớp theo từng công việc

KaDa_CV không đưa ra một điểm cố định cho mọi trường hợp.

Một CV có thể:

- Phù hợp cao với Backend Intern.
- Phù hợp trung bình với AI Engineer Intern.
- Phù hợp thấp với DevOps Engineer.

Kết quả phải phụ thuộc vào từng JD cụ thể.

## 7.3. Xác định khoảng cách kỹ năng

Mỗi yêu cầu nên được phân loại thành một trạng thái rõ ràng:

1. Đã đáp ứng với bằng chứng mạnh.
2. Có liên quan nhưng bằng chứng còn yếu.
3. Có kỹ năng tương đương hoặc liên quan.
4. Chưa thể hiện trong CV.
5. Điều kiện bắt buộc chưa đáp ứng.

## 7.4. Giải thích được

Mỗi nhận xét quan trọng phải có nguồn:

- Đoạn văn trong CV.
- Dự án liên quan.
- Kinh nghiệm liên quan.
- Yêu cầu tương ứng trong JD.

## 7.5. Có hành động tiếp theo

Báo cáo phải trả lời:

- Nên sửa gì trước?
- Nên bổ sung bằng chứng nào?
- Nên học kỹ năng nào?
- Nên tạo phiên bản CV nào?
- Có nên ứng tuyển ngay hay chuẩn bị thêm?

---

# 8. Điểm khác biệt

## 8.1. Không phải công cụ chấm điểm CV chung chung

KaDa_CV không chỉ trả về:

```text
CV Score: 75/100
```

Hệ thống phải giải thích:

- Điểm được hình thành từ đâu.
- Kỹ năng nào đang khớp.
- Kỹ năng nào chưa rõ.
- Nội dung nào cần cải thiện.

## 8.2. Không chỉ đếm từ khóa

Matching phải kết hợp:

- Chuẩn hóa tên kỹ năng.
- Luật nghiệp vụ.
- Tương đồng ngữ nghĩa.
- Bằng chứng từ dự án và kinh nghiệm.
- Điều kiện bắt buộc.

## 8.3. Không đánh đồng “không có trong CV” với “không có kỹ năng”

Cách viết đúng:

> CV chưa thể hiện kinh nghiệm với Docker.

Cách viết sai:

> Bạn không biết Docker.

## 8.4. Không che giấu hard constraint trong điểm tổng

Ví dụ:

```text
Mức độ phù hợp: 78%

Cảnh báo:
Công việc yêu cầu làm full-time, nhưng hồ sơ hiện cho biết bạn chỉ có thể làm part-time.
```

Hard constraint phải hiển thị riêng, không chỉ làm giảm điểm âm thầm.

## 8.5. Không thay thế quyết định của con người

KaDa_CV chỉ hỗ trợ:

- Phân tích.
- Ưu tiên.
- Giải thích.
- Đề xuất.

KaDa_CV không được tuyên bố:

- Ứng viên chắc chắn được tuyển.
- Ứng viên chắc chắn bị loại.
- AI có thể thay thế recruiter.
- Điểm số là kết luận cuối cùng.

---

# 9. Nguyên tắc sản phẩm

## 9.1. Minh bạch

Người dùng phải hiểu:

- Dữ liệu nào được sử dụng.
- Vì sao có kết quả.
- Thành phần nào tạo nên điểm số.
- Nhận xét nào dựa trên bằng chứng nào.

## 9.2. Thực tế

Không sử dụng:

- Lời hứa phóng đại.
- Số liệu chưa kiểm chứng.
- Cam kết tuyển dụng.
- Thông điệp gây sợ hãi.

## 9.3. Khích lệ

KaDa_CV phải dùng ngôn ngữ:

- Không phán xét.
- Tập trung vào cải thiện.
- Chỉ ra điểm mạnh.
- Chuyển điểm yếu thành hành động.

## 9.4. Trung thực với dữ liệu

Không bịa:

- Kỹ năng.
- Kinh nghiệm.
- Chứng chỉ.
- Kết quả dự án.
- Số năm kinh nghiệm.
- Thành tích.

## 9.5. Có trách nhiệm

Không sử dụng các thuộc tính nhạy cảm để matching:

- Giới tính.
- Tuổi.
- Chủng tộc.
- Tôn giáo.
- Ảnh chân dung.
- Tình trạng hôn nhân.
- Thông tin sức khỏe.

---

# 10. Phạm vi sản phẩm

## 10.1. Phạm vi cốt lõi của MVP

### Tài khoản

- Đăng ký.
- Đăng nhập.
- Đăng xuất.
- Quên mật khẩu.
- Hồ sơ ứng viên cơ bản.

### Quản lý CV

- Upload PDF hoặc DOCX.
- Kiểm tra định dạng và dung lượng.
- Trích xuất nội dung.
- Chuẩn hóa thành dữ liệu có cấu trúc.
- Cho phép người dùng xem và sửa dữ liệu.
- Lưu CV.
- Theo dõi trạng thái xử lý.

### Phân tích CV

- Kiểm tra section.
- Đánh giá mức độ đầy đủ.
- Phân tích tính rõ ràng.
- Kiểm tra bằng chứng trong dự án và kinh nghiệm.
- Hiển thị điểm mạnh và cơ hội cải thiện.

### Phân tích JD

- Nhập JD bằng văn bản.
- Tách chức danh.
- Tách kỹ năng bắt buộc.
- Tách kỹ năng ưu tiên.
- Tách kinh nghiệm.
- Tách học vấn.
- Tách trách nhiệm.
- Tách hard constraint.
- Tách benefit khỏi tiêu chí matching.

### Matching

- Chuẩn hóa kỹ năng.
- So sánh kỹ năng.
- So sánh kinh nghiệm.
- So sánh dự án.
- So sánh học vấn và chứng chỉ.
- Tính điểm theo từng nhóm.
- Tính điểm tổng.
- Hiển thị hard constraint riêng.

### Skill gap

- Kỹ năng đã đáp ứng.
- Bằng chứng yếu.
- Kỹ năng liên quan.
- Chưa thể hiện trong CV.
- Điều kiện bắt buộc chưa đáp ứng.

### Explanation

- Giải thích kết quả.
- Liên kết đến bằng chứng.
- Chỉ ra nguồn từ CV và JD.
- Không tạo nhận xét không có căn cứ.

### Recommendation

- Gợi ý cải thiện CV.
- Xếp hạng theo mức ưu tiên.
- Phân loại:
  - Quick win.
  - Cần bổ sung bằng chứng.
  - Cần học thêm.
  - Cần điều chỉnh mục tiêu.

### Lịch sử

- Lưu kết quả matching.
- Xem lịch sử phân tích.
- So sánh nhiều phiên bản CV ở mức cơ bản.

## 10.2. Phạm vi mở rộng

- Đề xuất công việc phù hợp.
- Nhà tuyển dụng đăng JD.
- Xếp hạng ứng viên có giải thích.
- Talent pool.
- Application tracking.
- CV builder.
- Cover letter generator.
- AI interview.
- Gợi ý khóa học.
- Career roadmap.
- Analytics cho trường đại học.
- Dashboard nhà tuyển dụng đầy đủ.
- Marketplace việc làm.
- Mobile application.

---

# 11. Kiến trúc chức năng cấp cao

```text
Candidate Experience
├── Authentication
├── Candidate Profile
├── Resume Management
├── Job Description Input
├── Matching Report
├── Improvement Recommendations
└── Analysis History

AI Intelligence Layer
├── Resume Parser
├── Resume Quality Analyzer
├── Job Description Parser
├── Skill Normalizer
├── Matching Engine
├── Skill Gap Analyzer
├── Evidence Extractor
└── Recommendation Engine

Recruiter Experience — mở rộng
├── Company Profile
├── Job Management
├── Candidate Ranking
├── Evidence-based Shortlist
└── Recruitment Pipeline

Admin
├── User Management
├── Skill Taxonomy Management
├── AI Error Review
├── Content Moderation
└── System Logs
```

---

# 12. Luồng người dùng cốt lõi

## 12.1. Luồng phân tích CV

```text
Đăng nhập
→ Tải CV
→ Hệ thống kiểm tra file
→ Trạng thái PROCESSING
→ Parser trích xuất dữ liệu
→ Người dùng xem lại
→ Người dùng chỉnh sửa nếu cần
→ Xác nhận CV
→ CV ở trạng thái READY
```

## 12.2. Luồng matching

```text
Chọn CV
→ Nhập hoặc chọn JD
→ Hệ thống phân tích JD
→ Người dùng xem lại cấu trúc JD
→ Bắt đầu matching
→ Hệ thống tính kết quả
→ Hiển thị báo cáo
→ Người dùng xem bằng chứng
→ Nhận gợi ý ưu tiên
→ Sửa CV hoặc thử JD khác
```

## 12.3. Luồng cải thiện

```text
Xem recommendation
→ Chọn hành động ưu tiên
→ Sửa CV
→ Tạo phiên bản mới
→ Chạy matching lại
→ So sánh kết quả
```

---

# 13. Trạng thái nghiệp vụ quan trọng

## 13.1. Trạng thái CV

- `UPLOADED`
- `VALIDATING`
- `PROCESSING`
- `REVIEW_REQUIRED`
- `READY`
- `FAILED`
- `ARCHIVED`

## 13.2. Trạng thái JD

- `DRAFT`
- `PROCESSING`
- `REVIEW_REQUIRED`
- `READY`
- `FAILED`

## 13.3. Trạng thái matching

- `PENDING`
- `PROCESSING`
- `COMPLETED`
- `FAILED`
- `OUTDATED`

`OUTDATED` được dùng khi:

- CV đã được chỉnh sửa.
- JD đã thay đổi.
- Scoring version đã thay đổi.

---

# 14. Dữ liệu đầu vào

## 14.1. CV

Định dạng ban đầu:

- PDF.
- DOCX.

Dữ liệu cấu trúc:

```text
Personal Information
Professional Summary
Education
Experience
Projects
Technical Skills
Soft Skills
Certifications
Languages
Awards
Links
```

## 14.2. JD

Dữ liệu cấu trúc:

```text
Job Title
Seniority
Required Skills
Preferred Skills
Responsibilities
Minimum Experience
Education Requirements
Language Requirements
Work Type
Location
Hard Constraints
Benefits
Company Description
```

## 14.3. Skill taxonomy

Mỗi skill nên có:

- Tên chuẩn.
- Alias.
- Viết tắt.
- Nhóm kỹ năng.
- Skill cha.
- Skill liên quan.
- Loại kỹ năng.
- Mức độ ưu tiên theo từng job family.

Ví dụ:

```text
JavaScript
├── JS
├── ECMAScript
└── Java Script

PostgreSQL
├── Postgres
└── Postgre SQL
```

---

# 15. Dữ liệu đầu ra

Một báo cáo matching tối thiểu cần có:

```json
{
  "overall_score": 0,
  "score_breakdown": {
    "skills": 0,
    "experience": 0,
    "projects": 0,
    "education": 0,
    "evidence_quality": 0
  },
  "matched_requirements": [],
  "weak_evidence": [],
  "related_skills": [],
  "not_shown_in_resume": [],
  "hard_constraint_violations": [],
  "recommendations": [],
  "evidence_links": [],
  "scoring_version": ""
}
```

---

# 16. Triết lý chấm điểm

## 16.1. Điểm số chỉ mang tính hỗ trợ

Điểm tổng không được trình bày như:

- Đậu.
- Trượt.
- Đủ năng lực.
- Không đủ năng lực.

Nên trình bày như:

- Mức độ phù hợp hiện tại.
- Điểm mạnh.
- Khoảng cách.
- Cơ hội cải thiện.
- Bước tiếp theo.

## 16.2. Điểm phải có breakdown

Ví dụ:

```text
Tổng: 76%

Kỹ năng: 82%
Kinh nghiệm: 65%
Dự án: 80%
Học vấn: 70%
Chất lượng bằng chứng: 68%
```

## 16.3. Trọng số có thể thay đổi theo cấp độ

### Sinh viên và fresher

Có thể ưu tiên:

- Kỹ năng.
- Dự án.
- Học vấn.
- Chứng chỉ.
- Chất lượng bằng chứng.

### Người có kinh nghiệm

Có thể ưu tiên:

- Kinh nghiệm.
- Kỹ năng.
- Trách nhiệm tương đồng.
- Kết quả công việc.
- Dự án.

Mọi công thức phải có `scoring_version`.

---

# 17. Quy tắc bằng chứng

Một yêu cầu chỉ được xem là có bằng chứng mạnh khi CV thể hiện ít nhất một trong các yếu tố:

- Kỹ năng được dùng trong dự án cụ thể.
- Có vai trò rõ ràng.
- Có hành động rõ.
- Có kết quả hoặc đầu ra.
- Có thời gian hoặc bối cảnh sử dụng.

Ví dụ bằng chứng yếu:

> Python, FastAPI, MySQL.

Ví dụ bằng chứng mạnh hơn:

> Xây dựng REST API bằng FastAPI cho hệ thống dự báo nhu cầu, kết nối MySQL và triển khai luồng inference bằng Python.

---

# 18. Quy tắc ngôn ngữ

## 18.1. Nên dùng

- Kỹ năng đã đáp ứng.
- Kỹ năng chưa thể hiện trong CV.
- Bằng chứng còn yếu.
- Điều kiện bắt buộc chưa được xác nhận.
- Cơ hội cải thiện.
- Gợi ý ưu tiên.
- Mức độ phù hợp.

## 18.2. Không nên dùng

- Bạn không biết kỹ năng này.
- CV của bạn rất yếu.
- Bạn chắc chắn bị loại.
- Bạn chắc chắn được tuyển.
- CV hoàn hảo.
- Không đủ năng lực.
- Ứng viên tốt/xấu tuyệt đối.

---

# 19. Bảo mật và quyền riêng tư

CV chứa thông tin cá nhân. Sản phẩm phải tuân theo các nguyên tắc:

- Không công khai URL CV.
- Kiểm soát quyền truy cập.
- Dùng signed URL có thời hạn nếu cần.
- Cho phép người dùng xóa CV.
- Cho phép người dùng xóa tài khoản.
- Không sử dụng CV để huấn luyện nếu chưa có đồng ý rõ ràng.
- Ghi log truy cập dữ liệu nhạy cảm.
- Mã hóa kết nối.
- Không đưa CV vào client bundle.
- Không hiển thị thông tin cá nhân cho người không có quyền.

---

# 20. Những điều KaDa_CV không phải

KaDa_CV không phải:

- Website tuyển dụng chỉ để đăng tin và ứng tuyển.
- ATS tự động loại ứng viên.
- Công cụ cam kết tuyển dụng.
- Công cụ chỉ đếm keyword.
- Công cụ tự động thêm kỹ năng giả vào CV.
- Hệ thống đánh giá giá trị con người.
- Công cụ dùng ảnh, tuổi hoặc giới tính để chấm điểm.
- Chatbot nghề nghiệp chung chung không có dữ liệu CV và JD.

---

# 21. Giả định sản phẩm

Các giả định cần được kiểm chứng:

1. Người dùng sẵn sàng upload CV để nhận phân tích.
2. Người dùng thấy báo cáo có giải thích hữu ích hơn điểm số đơn lẻ.
3. Skill gap là một trong các giá trị được quan tâm nhất.
4. Người dùng sẵn sàng chỉnh CV theo từng JD.
5. Người dùng sẵn sàng trả phí cho phân tích sâu và nhiều lượt matching.
6. Recruiter thấy shortlist có bằng chứng giúp giảm thời gian sàng lọc.
7. Sinh viên cần đánh giá dự án và kỹ năng nhiều hơn số năm kinh nghiệm.

---

# 22. Chỉ số thành công

## 22.1. Chỉ số sản phẩm

- Tỷ lệ upload CV thành công.
- Tỷ lệ parser hoàn thành.
- Tỷ lệ người dùng xác nhận dữ liệu CV.
- Tỷ lệ người dùng chạy matching sau khi upload.
- Số lượt matching trung bình mỗi người dùng.
- Tỷ lệ người dùng tạo phiên bản CV mới.
- Tỷ lệ quay lại trong 7 ngày và 30 ngày.

## 22.2. Chỉ số chất lượng AI

- Precision/Recall trích xuất kỹ năng.
- Accuracy phân loại required/preferred skill.
- Tỷ lệ nhận xét có bằng chứng.
- Tỷ lệ hallucination.
- Mức đồng thuận với chuyên gia.
- Độ ổn định điểm giữa các lần chạy.
- Mức hữu ích do người dùng đánh giá.

## 22.3. Chỉ số kinh doanh

- Waitlist conversion rate.
- Activation rate.
- Free-to-paid conversion.
- Churn rate.
- Cost per analysis.
- Revenue per user.
- Recruiter pilot adoption.

Các chỉ số chưa có dữ liệu thật không được dùng như tuyên bố marketing.

---

# 23. Rủi ro chính

## 23.1. AI bịa thông tin

Giải pháp:

- Structured output.
- Schema validation.
- Evidence links.
- Rule-based guardrail.
- Người dùng xác nhận dữ liệu.

## 23.2. Điểm số gây hiểu nhầm

Giải pháp:

- Breakdown.
- Hard constraint hiển thị riêng.
- Disclaimer.
- Ngôn ngữ không phán xét.
- Không dùng pass/fail.

## 23.3. Parser đọc sai CV

Giải pháp:

- Cho phép chỉnh sửa.
- Confidence score.
- OCR fallback.
- Lưu bản gốc.
- Review-required state.

## 23.4. Bias tuyển dụng

Giải pháp:

- Loại bỏ thuộc tính nhạy cảm.
- Audit.
- Explainability.
- Không dùng AI làm quyết định cuối.
- Theo dõi chênh lệch kết quả.

## 23.5. Scope quá lớn

Giải pháp:

- Tập trung MVP vào CV + JD + matching + explanation.
- Không xây marketplace hoàn chỉnh ngay.
- Không thêm AI interview hoặc chatbot trước khi core engine ổn định.

---

# 24. Nguyên tắc UI/UX

- Mỗi màn hình có một nhiệm vụ chính.
- Không tạo cảm giác đậu/trượt.
- Ưu tiên điểm mạnh, khoảng cách và hành động tiếp theo.
- Có loading, empty, error và processing state.
- Có explanation gần với điểm số.
- Có thể mở bằng chứng.
- Mobile-first.
- Accessible.
- Không dùng màu là tín hiệu duy nhất.
- Không hiển thị quá nhiều số liệu cùng lúc.
- CTA phải dẫn đến bước tiếp theo rõ ràng.

---

# 25. Quan hệ với website marketing

Website marketing gồm:

```text
Home
Features
Solutions
Pricing
Waitlist
```

Vai trò của các trang:

| Trang | Mục đích |
|---|---|
| Home | Giới thiệu KaDa_CV và giá trị cốt lõi |
| Features | Giải thích sản phẩm có những khả năng gì |
| Solutions | Trình bày giá trị theo từng nhóm người dùng |
| Pricing | Mô tả các gói và ROI |
| Waitlist | Thu thập người dùng thử nghiệm |

Website marketing không phải toàn bộ web application.

Web application sẽ có thêm:

```text
Dashboard
Resume Management
JD Analysis
Matching Report
Improvement Plan
Analysis History
Profile
```

---

# 26. Nguồn sự thật trong repository

AI coding agent phải đọc theo thứ tự:

1. `CODEX.md`
2. `docs/product-overview.md`
3. `docs/mvp-scope.md`
4. `docs/core-user-flow.md`
5. `brand/brand.md`
6. `content/`
7. Các đặc tả module liên quan

Khi tài liệu mâu thuẫn:

- Không tự đoán.
- Phải báo lại.
- Chờ người phụ trách xác nhận.

---

# 27. Glossary

| Thuật ngữ | Ý nghĩa |
|---|---|
| CV | Hồ sơ nghề nghiệp của ứng viên |
| JD | Mô tả công việc |
| Matching | So khớp CV với JD |
| Match Score | Mức độ phù hợp |
| Skill Gap | Khoảng cách kỹ năng |
| Matched Skill | Kỹ năng đã đáp ứng |
| Weak Evidence | Bằng chứng còn yếu |
| Not Shown in CV | Chưa được thể hiện trong CV |
| Hard Constraint | Điều kiện bắt buộc |
| Evidence | Nội dung chứng minh nhận xét |
| Skill Taxonomy | Hệ thống chuẩn hóa và phân loại kỹ năng |
| Resume Parser | Module đọc và chuẩn hóa CV |
| Job Parser | Module đọc và chuẩn hóa JD |
| Recommendation | Gợi ý cải thiện |
| Scoring Version | Phiên bản công thức chấm điểm |
| Explainability | Khả năng giải thích kết quả |

---

# 28. Tóm tắt dành cho Codex

KaDa_CV là một nền tảng **Resume Intelligence + Job Intelligence + Explainable Matching**.

Core product:

```text
Resume Parser
+
Job Parser
+
Skill Normalizer
+
Matching Engine
+
Skill Gap Analyzer
+
Evidence-based Explanation
+
Improvement Recommendation
```

Không được xây KaDa_CV như một job board chung chung.

Không được xây kết quả chỉ gồm một điểm số.

Không được tự thêm tính năng, dữ liệu, số liệu hoặc claim chưa có trong tài liệu.

Mọi màn hình và module phải phục vụ mục tiêu:

> **Giúp người dùng hiểu CV hiện tại, biết mức độ phù hợp với công việc và xác định bước cải thiện tiếp theo một cách minh bạch, thực tế và có căn cứ.**

---

# 29. Checklist xác nhận Codex đã hiểu đúng

Trước khi viết code, Codex phải trả lời đúng:

- [ ] KaDa_CV là sản phẩm gì?
- [ ] Người dùng chính là ai?
- [ ] Luồng CV → JD → Matching → Recommendation hoạt động thế nào?
- [ ] KaDa_CV khác công cụ chấm CV thông thường ở đâu?
- [ ] Vì sao không được nói “người dùng không có kỹ năng”?
- [ ] Hard constraint phải hiển thị thế nào?
- [ ] Kết quả cần có những phần nào?
- [ ] Những chức năng nào chưa thuộc MVP?
- [ ] AI không được sử dụng dữ liệu nhạy cảm nào?
- [ ] Tài liệu nào là nguồn sự thật?

Codex chỉ được bắt đầu lập kế hoạch kỹ thuật sau khi phần tóm tắt này được người phụ trách dự án xác nhận.
