import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

const productLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/features", label: "Tính năng" },
  { href: "/solutions", label: "Giải pháp" },
  { href: "/pricing", label: "Bảng giá" },
  { href: "/waitlist", label: "Early Access" },
];

const candidateGroups = [
  "Sinh viên và thực tập sinh công nghệ",
  "Fresher và Junior Developer",
  "Người tìm việc IT",
  "Kỹ sư chuyển hướng",
];

const principles = [
  "Phân tích có bằng chứng",
  "Không phán xét con người",
  "AI hỗ trợ ra quyết định",
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Logo surface="dark" />
          <p>
            KaDa_CV giúp người tìm việc hiểu CV, so khớp với công việc và cải
            thiện đúng hướng bằng những phân tích có căn cứ.
          </p>
        </div>

        <div className="site-footer__nav">
          <div className="footer-links">
            <h2>Sản phẩm</h2>
            {productLinks.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="footer-links">
            <h2>Người dùng MVP</h2>
            {candidateGroups.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="footer-links">
            <h2>Nguyên tắc</h2>
            {principles.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}