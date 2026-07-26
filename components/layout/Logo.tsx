import Image from "next/image";
import Link from "next/link";
import logoImage from "@/brand/logo.png";

type LogoProps = {
  priority?: boolean;
  surface?: "light" | "dark";
};

export function Logo({ priority = false, surface = "light" }: LogoProps) {
  return (
    <Link
      className={`brand-logo brand-logo--${surface}`}
      href="/"
      aria-label="KaDa_CV — Trang chủ"
    >
      <span className="brand-logo__viewport" aria-hidden="true">
        <Image
          src={logoImage}
          alt=""
          priority={priority}
          sizes="160px"
        />
      </span>
    </Link>
  );
}
