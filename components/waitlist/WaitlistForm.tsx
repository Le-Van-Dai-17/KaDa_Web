"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  persona: string;
  needs: string[];
  role: string;
  experience: string;
  note: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof FormState | "system", string>>;

const initialState: FormState = {
  fullName: "",
  email: "",
  persona: "",
  needs: [],
  role: "",
  experience: "",
  note: "",
  consent: false,
};

const personas = ["Sinh viên", "Người mới tốt nghiệp", "Người tìm việc IT", "Kỹ sư IT chuyển hướng", "Nhà tuyển dụng", "Giảng viên/cố vấn", "Khác"];
const needs = ["Phân tích CV", "So khớp CV với JD", "Phát hiện skill gap", "Gợi ý cải thiện", "Theo dõi tiến bộ CV", "Tìm ứng viên phù hợp"];
const experienceLevels = ["Sinh viên", "Fresher", "Junior", "Middle", "Senior", "Khác"];

function validate(form: FormState) {
  const errors: Errors = {};

  if (!form.fullName.trim()) errors.fullName = "Vui lòng nhập họ và tên.";
  if (!form.email.trim()) errors.email = "Vui lòng nhập email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Email chưa đúng định dạng. Vui lòng kiểm tra lại.";
  if (!form.persona) errors.persona = "Vui lòng chọn nhóm phù hợp với bạn.";
  if (form.needs.length === 0) errors.needs = "Vui lòng chọn ít nhất một nhu cầu.";
  if (!form.consent) errors.consent = "Bạn cần đồng ý để KaDa_CV có thể liên hệ về chương trình thử nghiệm.";

  return errors;
}

export function WaitlistForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined, system: undefined }));
  }

  function toggleNeed(value: string) {
    const nextNeeds = form.needs.includes(value)
      ? form.needs.filter((item) => item !== value)
      : [...form.needs, value];
    updateField("needs", nextNeeds);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  }

  if (isSubmitted) {
    return (
      <div className="form-card status-box status-box--success" role="status">
        <h2>Bạn đã đăng ký thành công!</h2>
        <p>Cảm ơn bạn đã quan tâm đến KaDa_CV. Chúng tôi sẽ liên hệ khi có đợt trải nghiệm phù hợp với nhu cầu bạn đã chọn.</p>
        <div className="actions">
          <Link className="button button--primary" href="/">Quay về trang chủ</Link>
          <Link className="button button--secondary" href="/features">Khám phá tính năng</Link>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card form-grid" onSubmit={handleSubmit} noValidate>
      {errors.system ? <p className="status-box status-box--error" role="alert">{errors.system}</p> : null}

      <div className="field">
        <label htmlFor="fullName">Họ và tên</label>
        <input id="fullName" name="fullName" placeholder="Nhập tên của bạn" value={form.fullName} onChange={(event) => updateField("fullName", event.target.value)} aria-describedby={errors.fullName ? "fullName-error" : undefined} />
        {errors.fullName ? <p id="fullName-error" className="error-text">{errors.fullName}</p> : null}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="name@example.com" value={form.email} onChange={(event) => updateField("email", event.target.value)} aria-describedby={errors.email ? "email-error" : undefined} />
        {errors.email ? <p id="email-error" className="error-text">{errors.email}</p> : null}
      </div>

      <div className="field">
        <label htmlFor="persona">Bạn là ai?</label>
        <select id="persona" name="persona" value={form.persona} onChange={(event) => updateField("persona", event.target.value)} aria-describedby={errors.persona ? "persona-error" : undefined}>
          <option value="">Chọn nhóm mô tả đúng nhất với bạn</option>
          {personas.map((persona) => <option value={persona} key={persona}>{persona}</option>)}
        </select>
        {errors.persona ? <p id="persona-error" className="error-text">{errors.persona}</p> : null}
      </div>

      <fieldset aria-describedby={errors.needs ? "needs-error" : undefined}>
        <legend>Bạn muốn KaDa_CV hỗ trợ điều gì?</legend>
        <p className="text-muted">Bạn có thể chọn nhiều lựa chọn</p>
        {needs.map((need) => (
          <label className="checkbox-row" key={need}>
            <input type="checkbox" checked={form.needs.includes(need)} onChange={() => toggleNeed(need)} />
            <span>{need}</span>
          </label>
        ))}
        {errors.needs ? <p id="needs-error" className="error-text">{errors.needs}</p> : null}
      </fieldset>

      <div className="field">
        <label htmlFor="role">Vị trí nghề nghiệp quan tâm</label>
        <input id="role" name="role" placeholder="Ví dụ: Backend Developer" value={form.role} onChange={(event) => updateField("role", event.target.value)} />
      </div>

      <div className="field">
        <label htmlFor="experience">Mức độ kinh nghiệm</label>
        <select id="experience" name="experience" value={form.experience} onChange={(event) => updateField("experience", event.target.value)}>
          <option value="">Chọn mức độ kinh nghiệm</option>
          {experienceLevels.map((level) => <option value={level} key={level}>{level}</option>)}
        </select>
      </div>

      <div className="field">
        <label htmlFor="note">Góp ý hoặc mong đợi</label>
        <textarea id="note" name="note" placeholder="Bạn đang gặp khó khăn gì khi chuẩn bị CV hoặc tìm việc?" value={form.note} onChange={(event) => updateField("note", event.target.value)} />
      </div>

      <div className="field">
        <label className="checkbox-row">
          <input type="checkbox" checked={form.consent} onChange={(event) => updateField("consent", event.target.checked)} aria-describedby={errors.consent ? "consent-error" : undefined} />
          <span>Tôi đồng ý để KaDa_CV sử dụng thông tin trên nhằm liên hệ về chương trình thử nghiệm và cải thiện sản phẩm.</span>
        </label>
        {errors.consent ? <p id="consent-error" className="error-text">{errors.consent}</p> : null}
      </div>

      <button className="button button--primary" type="submit" disabled={isSubmitting}>{isSubmitting ? "Đang gửi đăng ký…" : "Đăng ký trải nghiệm sớm"}</button>
      <p className="text-muted">Thông tin của bạn chỉ được sử dụng để liên hệ về KaDa_CV và chương trình thử nghiệm. Bạn có thể yêu cầu xóa dữ liệu bất kỳ lúc nào.</p>
    </form>
  );
}

