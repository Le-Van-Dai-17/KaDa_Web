import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Bảng giá KaDa_CV — Pricing & ROI",
  description:
    "Chọn gói KaDa_CV phù hợp: Free, Career Pro hoặc Recruiter Team, cùng mô hình ROI từ đầu vào đến giá trị tiết kiệm và thời gian hoàn vốn.",
};

const plans = [
  {
    name: "Free",
    label: "TRẢI NGHIỆM CỐT LÕI",
    price: "0 đ / tháng",
    audience: "Phù hợp với sinh viên, người mới tốt nghiệp và người dùng muốn kiểm tra nhanh chất lượng CV trước khi quyết định nâng cấp.",
    includes: ["Tải lên và lưu 01 CV đang hoạt động.", "Phân tích cấu trúc CV cơ bản: học vấn, kinh nghiệm, dự án, kỹ năng và chứng chỉ.", "So khớp CV với JD và hiển thị mức độ phù hợp tổng quan.", "Danh sách kỹ năng đã đáp ứng và kỹ năng chưa thể hiện trong CV.", "Một nhóm gợi ý cải thiện ưu tiên cao.", "Quyền tải xuống hoặc xóa dữ liệu CV."],
    limits: ["03 lượt CV–JD matching mỗi tháng.", "01 báo cáo phân tích chi tiết mỗi tháng.", "Không có lịch sử nhiều phiên bản CV."],
    cta: "Chấm điểm CV miễn phí",
  },
  {
    name: "Career Pro",
    label: "KHUYẾN NGHỊ CHO NGƯỜI TÌM VIỆC",
    price: "99.000 đ / tháng · 990.000 đ / năm",
    audience: "Phù hợp với người đang ứng tuyển tích cực, muốn điều chỉnh CV theo nhiều JD và theo dõi sự cải thiện qua từng phiên bản.",
    includes: ["Toàn bộ tính năng của gói Free.", "Phân tích sâu từng phần CV với bằng chứng liên quan.", "So sánh yêu cầu bắt buộc và yêu cầu ưu tiên trong JD.", "Gợi ý cải thiện nội dung dự án, kinh nghiệm và kỹ năng theo từng JD.", "Lưu nhiều phiên bản CV và theo dõi thay đổi điểm số theo thời gian.", "Ưu tiên trải nghiệm các tính năng cá nhân mới trong giai đoạn Early Access."],
    limits: ["Tối đa 05 phiên bản CV đang lưu.", "30 lượt CV–JD matching mỗi tháng.", "Không bao gồm tư vấn trực tiếp 1–1 hoặc cam kết kết quả tuyển dụng."],
    cta: "Nâng cấp Career Pro",
  },
  {
    name: "Recruiter Team",
    label: "DÀNH CHO NHÓM NHỎ",
    price: "1.490.000 đ / tháng · 14.900.000 đ / năm",
    audience: "Phù hợp với startup, doanh nghiệp công nghệ nhỏ hoặc nhóm tuyển dụng cần sàng lọc CV theo JD và tạo shortlist có giải thích.",
    includes: ["Tạo và quản lý mô tả công việc có cấu trúc.", "Phân tích kỹ năng bắt buộc, kỹ năng ưu tiên và điều kiện công việc.", "So khớp nhiều CV với từng JD theo cùng một bộ tiêu chí.", "Shortlist ứng viên theo mức độ phù hợp và bằng chứng kỹ năng.", "Giải thích yêu cầu ứng viên đã đáp ứng hoặc chưa thể hiện.", "Không sử dụng thuộc tính nhạy cảm để xếp hạng ứng viên."],
    limits: ["03 tài khoản nhà tuyển dụng.", "10 vị trí tuyển dụng đang hoạt động.", "200 lượt phân tích CV–JD mỗi tháng.", "Không phải hệ thống ATS hoàn chỉnh và không thay thế quyết định tuyển dụng của con người."],
    cta: "Bắt đầu cho nhà tuyển dụng",
  },
];

const matrix = [
  ["Phân tích cấu trúc CV", "Cơ bản", "Chi tiết", "Chi tiết"],
  ["CV–JD Match Score", "03 lượt/tháng", "30 lượt/tháng", "200 lượt/tháng"],
  ["Giải thích theo bằng chứng", "Giới hạn", "Đầy đủ", "Đầy đủ"],
  ["Kỹ năng đã đáp ứng / còn thiếu", "Có", "Có", "Có"],
  ["Lưu phiên bản CV", "01", "05", "Theo ứng viên"],
  ["Gợi ý cải thiện theo JD", "Ưu tiên cao", "Chi tiết", "Góc nhìn tuyển dụng"],
  ["Quản lý JD", "Không", "Không", "10 JD hoạt động"],
  ["Shortlist ứng viên", "Không", "Không", "Có"],
  ["Số tài khoản", "01", "01", "03"],
  ["Xuất báo cáo", "Không", "Có", "PDF/CSV*"],
];

const roiFlow = [
  "ĐẦU VÀO → THỜI GIAN / CHI PHÍ TRƯỚC KHI DÙNG",
  "SỬ DỤNG KaDa_CV → THỜI GIAN / CHI PHÍ SAU KHI DÙNG",
  "TIẾT KIỆM THÁNG = GIÁ TRỊ TRƯỚC − GIÁ TRỊ SAU",
  "LỢI ÍCH RÒNG = TIẾT KIỆM THÁNG − PHÍ GÓI",
  "ROI (%) = LỢI ÍCH RÒNG / PHÍ GÓI × 100",
  "THỜI GIAN HOÀN VỐN (THÁNG) = PHÍ GÓI / TIẾT KIỆM THÁNG",
];

const roiModes = [
  {
    title: "ROI cho Career Pro",
    inputs: ["H_before: số giờ mỗi tháng người dùng tự đọc JD, đối chiếu kỹ năng và chỉnh CV.", "H_after: số giờ mỗi tháng sau khi dùng KaDa_CV.", "V_hour: giá trị ước tính của một giờ cá nhân (VNĐ/giờ).", "C_avoided: chi phí dịch vụ rà soát CV hoặc công cụ khác có thể tránh được trong tháng.", "P: phí Career Pro mỗi tháng."],
    formula: ["GIỜ TIẾT KIỆM = H_before − H_after", "TIẾT KIỆM THÁNG = (GIỜ TIẾT KIỆM × V_hour) + C_avoided", "LỢI ÍCH RÒNG = TIẾT KIỆM THÁNG − P", "ROI (%) = LỢI ÍCH RÒNG / P × 100", "HOÀN VỐN (THÁNG) = P / TIẾT KIỆM THÁNG"],
    example: "Tiết kiệm 390.000 đ/tháng · Lợi ích ròng 291.000 đ · Hoàn vốn 0,25 tháng, khoảng 8 ngày · ROI 294%",
  },
  {
    title: "ROI cho Recruiter Team",
    inputs: ["N_cv: số CV cần sàng lọc trong một tháng.", "T_before: số phút trung bình để đọc và đối chiếu một CV trước khi dùng KaDa_CV.", "T_after: số phút trung bình để rà soát một CV sau khi có báo cáo matching.", "C_hour: chi phí lao động của recruiter cho một giờ làm việc.", "C_other: chi phí khác tránh được, chỉ nhập khi doanh nghiệp có dữ liệu thực tế.", "P_team: phí Recruiter Team mỗi tháng."],
    formula: ["GIỜ TIẾT KIỆM = N_cv × (T_before − T_after) / 60", "TIẾT KIỆM THÁNG = (GIỜ TIẾT KIỆM × C_hour) + C_other", "LỢI ÍCH RÒNG = TIẾT KIỆM THÁNG − P_team", "ROI (%) = LỢI ÍCH RÒNG / P_team × 100", "HOÀN VỐN (THÁNG) = P_team / TIẾT KIỆM THÁNG"],
    example: "Tiết kiệm 14 giờ/tháng · Giá trị 2.520.000 đ · Lợi ích ròng 1.030.000 đ · Hoàn vốn 0,59 tháng, khoảng 18 ngày · ROI 69%",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="hero-section hero-section--compact">
        <div className="hero-copy">
          <p className="eyebrow">PRICING & ROI</p>
          <h1>Bắt đầu miễn phí. Nâng cấp khi bạn cần phân tích sâu hơn.</h1>
          <p className="lede">Chọn gói phù hợp với hành trình của bạn. KaDa_CV giúp người tìm việc hiểu CV, so khớp với từng công việc và cải thiện có căn cứ; đồng thời hỗ trợ nhóm tuyển dụng ưu tiên hồ sơ hiệu quả hơn.</p>
          <p className="text-muted">Kết quả có giải thích · Bạn kiểm soát dữ liệu của mình · Không cam kết kết quả tuyển dụng</p>
        </div>
        <figure className="hero-media">
          <Image src="/images/pricing.png" alt="Minh họa bảng giá và ROI KaDa_CV" width={720} height={480} />
        </figure>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeading title="Tổng quan 3 gói" description="Các mức giá, hạn mức và ví dụ ROI trong tài liệu là đề xuất để thử nghiệm thị trường, không phải dữ liệu thị trường đã được xác thực." />
          <div className="grid grid--three">
            {plans.map((plan) => <article className="plan-card" key={plan.name}><span className="badge">{plan.label}</span><h3>{plan.name}</h3><p><strong>{plan.price}</strong></p><p>{plan.audience}</p><h4>Bao gồm</h4><ul className="list-clean">{plan.includes.map((item) => <li key={item}>{item}</li>)}</ul><h4>Hạn mức đề xuất</h4><ul className="list-clean">{plan.limits.map((item) => <li key={item}>{item}</li>)}</ul><ButtonLink href="/waitlist">{plan.cta}</ButtonLink></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading title="Ma trận tính năng và hạn mức" />
        <div className="table-wrap">
          <table>
            <thead><tr><th>Tính năng</th><th>Free</th><th>Career Pro</th><th>Recruiter Team</th></tr></thead>
            <tbody>{matrix.map(([feature, free, pro, team]) => <tr key={feature}><td>{feature}</td><td>{free}</td><td>{pro}</td><td>{team}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="text-muted">* Chỉ hiển thị trong bảng giá công khai sau khi chức năng xuất báo cáo đã hoạt động ổn định.</p>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeading title="Mô hình ROI chung" description="ROI của KaDa_CV phải được tính từ những đầu vào người dùng có thể tự nhập. Không dùng các tuyên bố chung như “tăng cơ hội trúng tuyển 300%” nếu chưa có dữ liệu kiểm chứng." />
          <div className="roi-flow">{roiFlow.map((step, index) => <div className={index >= 3 ? "roi-step roi-step--highlight" : "roi-step"} key={step}>{step}</div>)}</div>
          <p className="text-muted">Nếu tiết kiệm tháng bằng 0 hoặc âm, hệ thống không nên hiển thị thời gian hoàn vốn; thay vào đó cần thông báo rằng chưa đủ dữ liệu để chứng minh ROI tài chính.</p>
        </div>
      </section>

      <section className="section">
        <SectionHeading title="ROI theo từng nhóm" description="Ghi chú rõ đây là phép tính dựa trên giả định người dùng nhập." />
        <div className="grid grid--two">
          {roiModes.map((mode) => <article className="card" key={mode.title}><h3>{mode.title}</h3><h4>Đầu vào</h4><ul className="list-clean">{mode.inputs.map((item) => <li key={item}>{item}</li>)}</ul><h4>Công thức</h4><ul className="list-clean">{mode.formula.map((item) => <li key={item}>{item}</li>)}</ul><h4>Ví dụ minh họa</h4><p>{mode.example}</p></article>)}
        </div>
        <p className="text-muted">Kết quả này chỉ là ước tính vận hành, không phải cam kết bạn sẽ nhận được việc làm. KaDa_CV chỉ hỗ trợ ưu tiên CV và cung cấp bằng chứng để recruiter rà soát.</p>
      </section>

      <CTASection title="Chọn gói phù hợp với hành trình của bạn" description="Gói miễn phí giúp người dùng trải nghiệm giá trị cốt lõi trước khi nâng cấp." primaryLabel="Đăng ký trải nghiệm" primaryHref="/waitlist" secondaryLabel="Khám phá tính năng" secondaryHref="/features" />
    </>
  );
}


