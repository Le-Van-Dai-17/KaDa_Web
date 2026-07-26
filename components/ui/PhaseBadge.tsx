type PhaseBadgeProps = {
  label: "Giai đoạn mở rộng" | "Dự kiến" | "Sắp ra mắt";
};

export function PhaseBadge({ label }: PhaseBadgeProps) {
  return <span className="phase-badge">{label}</span>;
}