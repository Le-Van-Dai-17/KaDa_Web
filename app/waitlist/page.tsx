import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

export const metadata: Metadata = {
  title: "Đăng ký trải nghiệm KaDa_CV — AI phân tích CV và so khớp công việc",
  description:
    "Tham gia danh sách chờ KaDa_CV để trải nghiệm sớm nền tảng AI hỗ trợ phân tích CV, so khớp JD và xác định kỹ năng còn thiếu.",
  openGraph: {
    title: "Trải nghiệm KaDa_CV sớm",
    description: "Đăng ký Early Access và đóng góp phản hồi cho nền tảng hỗ trợ người tìm việc ngành công nghệ.",
  },
};

const benefits = [
  ["Trải nghiệm sản phẩm sớm", "Được mời dùng thử trước khi KaDa_CV được phát hành rộng rãi."],
  ["Đóng góp vào sản phẩm", "Gửi phản hồi về tính năng, độ rõ ràng của báo cáo và trải nghiệm sử dụng."],
  ["Nhận thông báo quan trọng", "Được cập nhật khi mở đợt thử nghiệm hoặc phát hành tính năng mới."],
  ["Có cơ hội tham gia pilot miễn phí", "Một số người dùng phù hợp có thể được mời tham gia chương trình thử nghiệm có hướng dẫn."],
];

const faqs = [
  ["Khi nào tôi được trải nghiệm KaDa_CV?", "Các đợt thử nghiệm được mở theo từng giai đoạn. KaDa_CV sẽ liên hệ khi có chương trình phù hợp với nhóm người dùng của bạn."],
  ["Đăng ký có mất phí không?", "Không. Việc tham gia danh sách chờ là miễn phí."],
  ["Tôi có chắc chắn được mời dùng thử không?", "Không. Số lượng người tham gia mỗi đợt có thể giới hạn để đội ngũ hỗ trợ và thu thập phản hồi tốt hơn."],
  ["KaDa_CV có yêu cầu tôi tải CV ngay không?", "Không tại bước Waitlist. Chỉ tải CV khi bạn được mời vào trải nghiệm và đã đồng ý với điều khoản xử lý dữ liệu."],
  ["Tôi có thể yêu cầu xóa thông tin không?", "Có. Bạn có thể liên hệ để yêu cầu xóa thông tin đăng ký."],
];

const privacyNotes = [
  "Chỉ thu thập thông tin cần thiết cho chương trình Early Access.",
  "Không bán hoặc chia sẻ thông tin đăng ký cho nhà quảng cáo.",
  "Không tự động thêm người dùng vào danh sách marketing ngoài mục đích đã thông báo.",
  "Cho phép người dùng yêu cầu xóa thông tin đã đăng ký.",
  "Không yêu cầu tải CV tại form Waitlist nếu chưa có quy trình lưu trữ và bảo mật phù hợp.",
];

export default function WaitlistPage() {
  return (
    <>
      <section className="hero-section hero-section--compact">
        <div className="hero-copy">
          <p className="eyebrow">EARLY ACCESS · KADA_CV</p>
          <h1>Trở thành một trong những người đầu tiên trải nghiệm KaDa_CV</h1>
          <p className="lede">Đăng ký danh sách chờ để nhận thông báo khi KaDa_CV mở bản thử nghiệm và có cơ hội đóng góp phản hồi trực tiếp cho quá trình phát triển sản phẩm.</p>
          <p className="text-muted">AI hỗ trợ phân tích, không thay thế quyết định của con người.</p>
        </div>
        <WaitlistForm />
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeading title="Lợi ích khi đăng ký sớm" />
          <div className="grid grid--four">
            {benefits.map(([title, description]) => <article className="card" key={title}><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading title="Quyền riêng tư và trách nhiệm dữ liệu" />
        <div className="grid grid--two">
          {privacyNotes.map((note) => <article className="card" key={note}><p>{note}</p></article>)}
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeading title="Nội dung FAQ cho trang Waitlist" />
          <div className="grid grid--two">
            {faqs.map(([question, answer]) => <article className="card" key={question}><h3>{question}</h3><p>{answer}</p></article>)}
          </div>
        </div>
      </section>
    </>
  );
}
