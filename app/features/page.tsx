import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Tính năng KaDa_CV — Phân tích CV và so khớp công việc",
  description:
    "Các tính năng KaDa_CV giúp chuẩn hóa CV, phân tích JD, so khớp từng công việc, phát hiện skill gap và giải thích bằng bằng chứng.",
};

const principles = [
  "Có giải thích: Không chỉ trả điểm; phải chỉ rõ lý do, bằng chứng và thành phần tạo kết quả.",
  "Không phán xét: Đánh giá nội dung CV và mức độ phù hợp, không đánh giá giá trị hay năng lực toàn diện của con người.",
  "Có hành động tiếp theo: Mỗi phát hiện cần dẫn đến gợi ý cụ thể, có thể thực hiện và được ưu tiên.",
  "Trung thực với dữ liệu: Không bịa kỹ năng, kinh nghiệm hoặc số liệu; phân biệt rõ “chưa thể hiện” với “không có”.",
  "Bảo vệ người dùng: Hạn chế thuộc tính nhạy cảm, bảo vệ dữ liệu CV và duy trì vai trò quyết định của con người.",
];

const features = [
  {
    title: "Tải lên và chuẩn hóa CV",
    stage: "MVP",
    value: "Biến CV thành dữ liệu có cấu trúc",
    problem: "CV có nhiều định dạng và cách trình bày khác nhau. Nếu hệ thống chỉ đọc văn bản thô, các phần như học vấn, kinh nghiệm, dự án và kỹ năng dễ bị trộn lẫn.",
    how: "Người dùng tải CV PDF hoặc DOCX; hệ thống kiểm tra tệp, trích xuất nội dung, nhận diện section và chuẩn hóa thành hồ sơ có cấu trúc.",
    measure: "Tỷ lệ nhận diện section, thời gian xử lý và tỷ lệ cần sửa thủ công.",
  },
  {
    title: "Phân tích chất lượng và mức độ hoàn thiện CV",
    stage: "MVP",
    value: "Hiểu chất lượng CV hiện tại",
    problem: "Người tìm việc thường tự đánh giá CV bằng cảm giác và không biết phần nào đang thiếu, dài dòng hoặc thiếu bằng chứng.",
    how: "Hệ thống kiểm tra mức độ đầy đủ, cấu trúc, tính rõ ràng, mức độ cụ thể, bằng chứng định lượng, tính liên quan và khả năng đọc bởi hệ thống tuyển dụng.",
    measure: "Độ bao phủ tiêu chí, tỷ lệ nhận xét có bằng chứng và mức hữu ích của báo cáo.",
  },
  {
    title: "Phân tích và cấu trúc hóa mô tả công việc",
    stage: "MVP",
    value: "Tách đúng yêu cầu trong JD",
    problem: "JD thường trộn lẫn kỹ năng bắt buộc, kỹ năng ưu tiên, nhiệm vụ, phúc lợi và điều kiện làm việc.",
    how: "Bộ phân tích tách chức danh, trách nhiệm, kỹ năng bắt buộc, kỹ năng ưu tiên, kinh nghiệm, học vấn, ngôn ngữ và điều kiện bắt buộc.",
    measure: "Precision kỹ năng bắt buộc, tỷ lệ phân loại đúng nhóm và thời gian xác nhận JD.",
  },
  {
    title: "So khớp CV với từng công việc",
    stage: "MVP",
    value: "Biết mức phù hợp theo từng công việc",
    problem: "Một CV không thể phù hợp như nhau với mọi vị trí. Người dùng cần biết mức độ phù hợp với một JD cụ thể.",
    how: "Hệ thống chuẩn hóa kỹ năng, kiểm tra điều kiện bắt buộc, đánh giá mức liên quan của kinh nghiệm, dự án và trách nhiệm, rồi hiển thị điểm tổng, điểm theo nhóm và yêu cầu chưa thể hiện.",
    measure: "Mức đồng thuận với chuyên gia, độ ổn định kết quả và thời gian tạo báo cáo.",
  },
  {
    title: "Phát hiện khoảng cách kỹ năng",
    stage: "MVP",
    value: "Xác định kỹ năng còn thiếu",
    problem: "Người tìm việc thấy danh sách công nghệ dài nhưng không biết kỹ năng nào thật sự quan trọng, kỹ năng nào đã có và kỹ năng nào chỉ chưa được thể hiện trong CV.",
    how: "Hệ thống chia yêu cầu thành: đã có bằng chứng, có liên quan nhưng bằng chứng yếu, chưa xuất hiện trong CV và điều kiện bắt buộc chưa đáp ứng.",
    measure: "Precision missing-skill, tỷ lệ chuẩn hóa alias và tỷ lệ hành động tiếp theo.",
  },
  {
    title: "Giải thích kết quả bằng bằng chứng",
    stage: "MVP",
    value: "Hiểu vì sao có kết quả",
    problem: "Một điểm số không có giải thích dễ làm người dùng mất niềm tin.",
    how: "Mỗi insight quan trọng được gắn với đoạn CV, dự án, kỹ năng hoặc yêu cầu JD liên quan; báo cáo nêu rõ kết quả là dữ liệu hỗ trợ.",
    measure: "Coverage bằng chứng, tỷ lệ truy vết đúng và điểm tin cậy người dùng.",
  },
  {
    title: "Gợi ý cải thiện CV theo mức ưu tiên",
    stage: "MVP",
    value: "Biết việc cần sửa trước",
    problem: "Nhận xét chung chung như “hãy viết CV tốt hơn” không tạo ra hành động.",
    how: "Hệ thống chuyển khoảng trống thành hành động cụ thể và xếp ưu tiên theo tác động dự kiến, mức độ bắt buộc trong JD và công sức thực hiện.",
    measure: "Tính khả thi, tỷ lệ hoàn thành và mức cải thiện báo cáo giữa hai phiên bản CV.",
  },
  {
    title: "Quản lý phiên bản và theo dõi tiến bộ CV",
    stage: "MVP",
    value: "Theo dõi tiến bộ qua các phiên bản",
    problem: "Người dùng chỉnh nhiều bản CV nhưng khó biết bản nào tốt hơn, đã thay đổi gì và phiên bản nào phù hợp với từng vị trí.",
    how: "Mỗi lần tải CV mới hoặc cập nhật nội dung, hệ thống lưu thành phiên bản có thời gian, ghi chú và hỗ trợ so sánh thay đổi.",
    measure: "Tỷ lệ lưu đúng phiên bản, thời gian so sánh và tỷ lệ quay lại cải thiện.",
  },
  {
    title: "Đề xuất công việc phù hợp",
    stage: "Giai đoạn mở rộng",
    value: "Khám phá công việc phù hợp",
    problem: "Người tìm việc có thể bỏ lỡ các vị trí phù hợp vì chức danh khác nhau, mô tả dài hoặc không biết từ khóa cần tìm.",
    how: "Hệ thống sử dụng hồ sơ kỹ năng, kinh nghiệm, mục tiêu nghề nghiệp và các ràng buộc do người dùng chọn để xếp hạng công việc và hiển thị lý do đề xuất.",
    measure: "Chất lượng xếp hạng, tỷ lệ tương tác và tỷ lệ lý do hữu ích.",
  },
  {
    title: "Hỗ trợ nhà tuyển dụng ưu tiên ứng viên",
    stage: "Giai đoạn mở rộng",
    value: "Ưu tiên ứng viên có căn cứ",
    problem: "Nhà tuyển dụng mất nhiều thời gian đọc CV và khó so sánh ứng viên theo cùng một tiêu chí.",
    how: "Nhà tuyển dụng xác nhận tiêu chí bắt buộc, ưu tiên và trọng số; hệ thống xếp hạng ứng viên kèm bằng chứng, khoảng trống và cảnh báo, không tự động loại ứng viên.",
    measure: "Thời gian tạo shortlist, Recall ứng viên phù hợp và tỷ lệ quyết định có giải thích.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="hero-section hero-section--compact">
        <div className="hero-copy">
          <p className="eyebrow">FEATURE DOCUMENT</p>
          <h1>Đặc tả tính năng cho nền tảng AI phân tích CV và so khớp công việc</h1>
          <p className="lede">Tài liệu này chuyển định vị, lời hứa thương hiệu và các messaging pillars trong brand.md thành một danh mục tính năng có thể dùng để viết nội dung website, thiết kế trải nghiệm và lập kế hoạch phát triển sản phẩm KaDa_CV.</p>
          <p className="text-muted">Các con số trong tài liệu là chỉ số và mục tiêu đề xuất để kiểm chứng trong MVP hoặc pilot; chúng không phải kết quả đã đạt được.</p>
        </div>
        <figure className="hero-media">
          <Image src="/images/feature.png" alt="Minh họa trang tính năng KaDa_CV" width={720} height={480} />
        </figure>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeading title="Nguyên tắc thiết kế tính năng" />
          <div className="grid grid--five">
            {principles.map((principle) => <article className="card" key={principle}><p>{principle}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading title="Danh mục tính năng" description="Mỗi tính năng được mô tả theo đúng khuôn: Tên → Vấn đề nó giải → Cách hoạt động → Lợi ích đo được." />
        <div className="grid grid--two">
          {features.map((feature) => (
            <article className="card" key={feature.title}>
              <span className="badge">{feature.stage}</span>
              <h3>{feature.title}</h3>
              <p><strong>{feature.value}</strong></p>
              <h4>Vấn đề nó giải</h4>
              <p>{feature.problem}</p>
              <h4>Cách hoạt động</h4>
              <p>{feature.how}</p>
              <h4>Lợi ích đo được</h4>
              <p>{feature.measure}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection title="MVP nên chứng minh luồng cốt lõi" description="Tải CV → phân tích CV/JD → matching → skill gap → giải thích → gợi ý cải thiện." primaryLabel="Đăng ký trải nghiệm" primaryHref="/waitlist" secondaryLabel="Xem giải pháp" secondaryHref="/solutions" />
    </>
  );
}


