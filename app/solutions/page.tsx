import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Giải pháp KaDa_CV — Theo từng hành trình người dùng",
  description:
    "KaDa_CV hỗ trợ sinh viên, người tìm việc IT, kỹ sư chuyển hướng và nhà tuyển dụng bằng phân tích CV, matching theo JD, skill gap và bằng chứng.",
};

const solutions = [
  {
    audience: "Sinh viên và người mới tốt nghiệp",
    label: "ỨNG VIÊN ĐẦU SỰ NGHIỆP • MVP",
    intro: "Nhóm này thường có nền tảng học tập và dự án nhưng chưa biết cách chuyển chúng thành bằng chứng nghề nghiệp rõ ràng.",
    pains: ["Không biết dự án học tập nào nên đưa vào CV và nên mô tả đến mức nào.", "Không hiểu sự khác nhau giữa yêu cầu bắt buộc và yêu cầu “có là lợi thế” trong JD.", "Có kỹ năng nhưng CV chỉ liệt kê tên công nghệ, chưa gắn với vai trò hoặc kết quả.", "Khó biết nên sửa CV trước hay học thêm kỹ năng trước."],
    support: "KaDa_CV tập trung vào bằng chứng từ học vấn, dự án và kỹ năng thay vì chỉ dựa vào số năm kinh nghiệm. Hệ thống giải thích từng nhận xét và chuyển khoảng trống thành danh sách việc cần làm có ưu tiên.",
    features: ["Chuẩn hóa CV", "Phân tích JD", "Matching", "Skill gap", "Gợi ý ưu tiên"],
    storyTitle: "Minh — ứng tuyển Backend Intern",
    story: "Tình huống hư cấu: sinh viên năm cuối có ba dự án môn học, biết Java và SQL nhưng chưa từng làm việc toàn thời gian.",
    outcome: "Minh nhận được một báo cáo có cấu trúc và tạo một phiên bản CV riêng cho vị trí Backend Intern. KaDa_CV không khẳng định Minh sẽ được tuyển; giá trị đầu ra là Minh hiểu vì sao CV phù hợp ở đâu và cần cải thiện điểm nào trước khi nộp.",
  },
  {
    audience: "Người tìm việc ngành IT",
    label: "ỨNG VIÊN ĐANG TÌM VIỆC • MVP",
    intro: "Người đã có một phần kinh nghiệm thường không thiếu nội dung, nhưng lại gặp khó khăn khi chọn nội dung nào cần nhấn mạnh cho từng vị trí.",
    pains: ["Gửi nhiều hồ sơ nhưng không biết vì sao tỷ lệ phản hồi thấp.", "Dùng cùng một CV cho Backend Developer, Full-stack Developer và Software Engineer.", "Khó nhận ra kỹ năng tương đương hoặc tên gọi khác nhau giữa CV và JD.", "Không biết phiên bản CV nào phù hợp với công việc nào."],
    support: "KaDa_CV chuyển từ tư duy “một điểm CV chung” sang “mức độ phù hợp theo từng công việc”. Người dùng có thể so sánh nhiều JD, lưu nhiều phiên bản CV và xem thay đổi nào tác động đến các tiêu chí liên quan.",
    features: ["Matching", "Skill gap", "Bằng chứng", "Gợi ý ưu tiên", "Quản lý phiên bản"],
    storyTitle: "Lan — Junior Backend Developer tìm công việc mới",
    story: "Tình huống hư cấu: có 18 tháng kinh nghiệm Node.js và từng tham gia một dự án nội bộ dùng PostgreSQL.",
    outcome: "Lan có hai bản CV rõ mục tiêu và biết khi nào nên ứng tuyển, khi nào cần bổ sung bằng chứng. Kết quả không hứa tăng tỷ lệ trúng tuyển; nó giúp giảm quyết định cảm tính và làm rõ sự khác nhau giữa các JD.",
  },
  {
    audience: "Kỹ sư IT muốn chuyển hướng nghề nghiệp",
    label: "CHUYỂN VAI TRÒ / CHUYỂN LĨNH VỰC • MVP",
    intro: "Khi chuyển từ một vai trò sang vai trò khác, người dùng thường nhìn thấy danh sách kỹ năng còn thiếu rất dài nhưng không biết kỹ năng hiện tại có thể chuyển đổi ra sao.",
    pains: ["Không biết kỹ năng hiện tại nào có thể chuyển sang vai trò mục tiêu.", "Khó phân biệt khoảng trống cốt lõi với kỹ năng có thể học sau.", "Kinh nghiệm liên quan được mô tả bằng thuật ngữ khác với JD.", "Không biết nên xây dự án, học kỹ năng hay chỉnh CV trước."],
    support: "KaDa_CV kết hợp chuẩn hóa kỹ năng, matching ngữ nghĩa và phân loại khoảng cách theo mức độ ưu tiên. Hệ thống chỉ đề xuất nội dung có thể chứng minh và không khuyến khích người dùng thêm kỹ năng không có thật.",
    features: ["Matching", "Skill gap", "Bằng chứng", "Gợi ý ưu tiên", "Quản lý phiên bản"],
    storyTitle: "Huy — chuyển từ Backend Developer sang AI Engineer",
    story: "Tình huống hư cấu: có kinh nghiệm Python, FastAPI, Docker và triển khai API nhưng mới học Machine Learning qua dự án cá nhân.",
    outcome: "Huy có một bản đồ rõ gồm nền tảng có thể tận dụng, bằng chứng cần tăng cường và khoảng trống dài hạn. Câu chuyện không kết luận Huy đủ hoặc không đủ năng lực; KaDa_CV giúp Huy ra quyết định có thông tin hơn.",
  },
  {
    audience: "Nhà tuyển dụng công nghệ",
    label: "NHÀ TUYỂN DỤNG • GIAI ĐOẠN MỞ RỘNG",
    intro: "Nhà tuyển dụng cần xử lý nhiều CV trong thời gian ngắn nhưng vẫn phải bảo đảm quyết định có thể giải thích và không phụ thuộc hoàn toàn vào từ khóa.",
    pains: ["Mất nhiều thời gian đọc CV và tạo shortlist ban đầu.", "Khó so sánh ứng viên theo cùng một bộ tiêu chí.", "Bộ lọc từ khóa có thể bỏ sót ứng viên dùng thuật ngữ khác hoặc có kinh nghiệm liên quan gián tiếp.", "Nguy cơ dùng AI như quyết định loại ứng viên tự động."],
    support: "KaDa_CV cho phép recruiter xác nhận tiêu chí bắt buộc và ưu tiên trong JD, sau đó xếp hạng hồ sơ với bằng chứng. Hệ thống không dùng thuộc tính nhạy cảm, không tự động loại ứng viên và giữ quyền quyết định ở con người.",
    features: ["Phân tích JD", "Chuẩn hóa CV", "Matching", "Skill gap", "Bằng chứng", "Recruiter support"],
    storyTitle: "Trang — Tech Recruiter tuyển Junior AI Engineer",
    story: "Tình huống hư cấu: cần xem 120 CV cho một vị trí, trong khi JD chứa cả kỹ năng bắt buộc, kỹ năng ưu tiên và phần phúc lợi.",
    outcome: "Đầu ra là một danh sách ưu tiên có thể truy vết, giúp Trang tập trung thời gian đọc sâu vào hồ sơ liên quan. Mục tiêu pilot là giảm thời gian tạo shortlist, không phải thay thế chuyên môn hoặc quyết định tuyển dụng của Trang.",
  },
];

const websiteMessages = [
  ["Sinh viên", "Biến dự án học tập thành bằng chứng nghề nghiệp.", "Hiểu CV đang thể hiện gì, JD cần gì và nên cải thiện từ đâu."],
  ["Người tìm việc IT", "Điều chỉnh CV theo từng công việc, không theo cảm giác.", "So khớp từng JD, xem bằng chứng và quản lý nhiều phiên bản."],
  ["Chuyển hướng", "Biết kỹ năng nào có thể mang theo sang vai trò mới.", "Phân biệt nền tảng chuyển đổi, bằng chứng yếu và khoảng trống dài hạn."],
  ["Recruiter", "Ưu tiên ứng viên bằng dữ liệu có thể giải thích.", "Chuẩn hóa tiêu chí và hỗ trợ shortlist, không tự động loại ứng viên."],
];

export default function SolutionsPage() {
  return (
    <>
      <section className="hero-section hero-section--compact">
        <div className="hero-copy">
          <p className="eyebrow">SOLUTION DOCUMENT</p>
          <h1>Giải pháp theo từng hành trình người dùng</h1>
          <p className="lede">KaDa_CV không chỉ cho người dùng biết một điểm số. Sản phẩm giúp họ hiểu bằng chứng hiện có, khoảng cách với mục tiêu và hành động phù hợp tiếp theo — theo cách rõ ràng, thực tế và không phán xét.</p>
          <p className="text-muted">Các câu chuyện là tình huống hư cấu minh họa, không phải testimonial khách hàng.</p>
        </div>
        <figure className="hero-media">
          <Image src="/images/solution.png" alt="Minh họa các hành trình người dùng KaDa_CV" width={720} height={480} />
        </figure>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeading title="Tổng quan nhóm giải pháp" />
          <div className="grid grid--four">
            {websiteMessages.map(([group, headline, support]) => <article className="card" key={group}><span className="badge">{group}</span><h3>{headline}</h3><p>{support}</p></article>)}
          </div>
        </div>
      </section>

      {solutions.map((solution, index) => (
        <section className={index % 2 === 0 ? "section" : "section section--soft"} key={solution.audience}>
          <div className={index % 2 === 0 ? undefined : "section__inner"}>
            <SectionHeading eyebrow={solution.label} title={solution.audience} description={solution.intro} />
            <div className="grid grid--three">
              <article className="card">
                <h3>Nỗi đau</h3>
                <ul className="list-clean">{solution.pains.map((pain) => <li key={pain}>{pain}</li>)}</ul>
              </article>
              <article className="card">
                <h3>KaDa_CV giải quyết như thế nào</h3>
                <p>{solution.support}</p>
                <ul className="list-clean">{solution.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              </article>
              <article className="story-card">
                <span className="badge">Tình huống minh họa</span>
                <h3>{solution.storyTitle}</h3>
                <p>{solution.story}</p>
                <p>{solution.outcome}</p>
              </article>
            </div>
          </div>
        </section>
      ))}

      <CTASection title="Dẫn người dùng đến hành động rõ ràng" description="Các solution section mở đầu bằng nỗi đau cụ thể, tiếp theo là cách KaDa_CV hỗ trợ và kết thúc bằng một hành động rõ ràng." primaryLabel="Đăng ký nhận thông tin" primaryHref="/waitlist" secondaryLabel="Khám phá tính năng" secondaryHref="/features" />
    </>
  );
}


