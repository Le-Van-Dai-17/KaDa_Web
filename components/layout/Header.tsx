import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/features", label: "Tính năng" },
  { href: "/solutions", label: "Giải pháp" },
  { href: "/pricing", label: "Bảng giá" },
  { href: "/waitlist", label: "Đăng ký trải nghiệm" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Logo priority />

        <nav className="site-nav" aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__cta">
          <ButtonLink href="/waitlist">Đăng ký sớm</ButtonLink>
        </div>

        <details className="mobile-menu">
          <summary aria-label="Mở menu điều hướng">
            <span className="mobile-menu__icon" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="sr-only">Mở menu điều hướng</span>
          </summary>
          <nav className="mobile-menu__panel" aria-label="Điều hướng di động">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/waitlist">Đăng ký sớm</ButtonLink>
          </nav>
        </details>
      </div>
    </header>
  );
}