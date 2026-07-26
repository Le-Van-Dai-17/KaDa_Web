import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PhaseBadge } from "@/components/ui/PhaseBadge";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "KaDa_CV — Phân tích CV và so khớp công việc bằng AI",
  description:
    "KaDa_CV giúp sinh viên và người tìm việc ngành công nghệ phân tích CV, so khớp với JD, xác định kỹ năng còn thiếu và nhận gợi ý cải thiện có căn cứ.",
  keywords: [
    "phân tích CV bằng AI",
    "chấm điểm CV",
    "so khớp CV với JD",
    "kỹ năng còn thiếu",
    "CV ngành IT",
    "AI tuyển dụng",
    "công cụ hỗ trợ tìm việc",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    title: "Hiểu CV. Khớp công việc. Bứt phá sự nghiệp.",
    description:
      "Phân tích CV, đọc JD, xác định skill gap và biết bước cần cải thiện tiếp theo với KaDa_CV.",
  },
};

const problems = [
  {
    title: "Không biết CV có phù hợp với công việc",
    description:
      "Người dùng thường đọc JD theo cảm giác và khó xác định yêu cầu nào là bắt buộc, yêu cầu nào chỉ là lợi thế.",
  },
  {
    title: "Có kỹ năng nhưng chưa thể hiện bằng bằng chứng",
    description:
      "CV có thể liệt kê công nghệ nhưng chưa nói rõ người dùng đã sử dụng chúng ở đâu, với vai trò nào và đạt kết quả gì.",
  },
  {
    title: "Không biết đang thiếu kỹ năng nào",
    description:
      "Danh sách yêu cầu trong JD dài và khó ưu tiên. Người dùng không biết nên sửa CV trước hay học thêm kỹ năng trước.",
  },
  {
    title: "Dùng một CV cho nhiều vị trí",
    description:
      "Một CV chung thường không thể hiện đúng mức độ phù hợp với từng công việc cụ thể.",
  },
];

const values = [
  {
    title: "Hiểu rõ CV của bạn",
    description:
      "Biết CV đang mạnh ở đâu, phần nào thiếu rõ ràng và nội dung nào chưa có bằng chứng đủ tốt.",
  },
  {
    title: "So khớp với từng công việc",
    description:
      "Phân tích CV theo từng JD thay vì dùng một điểm chung cho mọi vị trí.",
  },
  {
    title: "Xác định khoảng cách kỹ năng",
    description:
      "Phân biệt kỹ năng đã có bằng chứng, bằng chứng còn yếu, chưa thể hiện và điều kiện bắt buộc chưa đáp ứng.",
  },
  {
    title: "Biết bước cần làm tiếp theo",
    description:
      "Nhận gợi ý cải thiện theo mức ưu tiên để biết nên sửa nội dung nào trước.",
  },
];

const steps = [
  {
    title: "Tải CV",
    description:
      "Tải CV ở định dạng PDF hoặc DOCX. Hệ thống phân tích và chuẩn hóa các phần như học vấn, kinh nghiệm, dự án, kỹ năng và chứng chỉ.",
  },
  {
    title: "Thêm mô tả công việc",
    description:
      "Dán JD hoặc chọn một công việc trong hệ thống. KaDa_CV tách kỹ năng bắt buộc, kỹ năng ưu tiên, trách nhiệm và điều kiện làm việc.",
  },
  {
    title: "Nhận báo cáo matching",
    description:
      "Xem mức độ phù hợp, yêu cầu đã đáp ứng, kỹ năng chưa thể hiện và các cảnh báo quan trọng.",
  },
  {
    title: "Cải thiện theo mức ưu tiên",
    description:
      "Nhận gợi ý cụ thể về nội dung cần sửa, bằng chứng cần bổ sung và kỹ năng nên ưu tiên phát triển.",
  },
];

const features = [
  {
    title: "Chuẩn hóa CV",
    description:
      "Biến CV PDF hoặc DOCX thành dữ liệu có cấu trúc để người dùng dễ kiểm tra và chỉnh sửa.",
  },
  {
    title: "Đánh giá chất lượng CV",
    description:
      "Chỉ ra điểm mạnh, cơ hội cải thiện và những phần đang thiếu bằng chứng.",
  },
  {
    title: "Phân tích JD",
    description:
      "Tách kỹ năng bắt buộc, kỹ năng ưu tiên, trách nhiệm và điều kiện công việc.",
  },
  {
    title: "Matching theo từng JD",
    description:
      "Đánh giá mức độ phù hợp theo từng công việc thay vì dùng một điểm số chung.",
  },
  {
    title: "Phát hiện skill gap",
    description:
      "Xác định kỹ năng đã đáp ứng, chưa thể hiện hoặc cần được làm rõ thêm.",
  },
  {
    title: "Giải thích bằng chứng",
    description:
      "Mỗi nhận xét quan trọng phải liên kết với nội dung tương ứng trong CV hoặc JD.",
  },
  {
    title: "Gợi ý cải thiện",
    description:
      "Ưu tiên các thay đổi có tác động cao và phù hợp với công việc mục tiêu.",
  },
  {
    title: "Theo dõi tiến bộ CV",
    description:
      "So sánh nhiều phiên bản để biết CV đã cải thiện như thế nào theo thời gian.",
  },
];

const candidateAudiences = [
  {
    title: "Sinh viên IT, người mới tốt nghiệp và thực tập sinh công nghệ",
    pain:
      "Ít kinh nghiệm, chưa biết cách biến học vấn và dự án thành bằng chứng nghề nghiệp rõ ràng.",
    support: [
      "Phân tích CV theo bối cảnh ứng viên đầu sự nghiệp.",
      "Tách yêu cầu bắt buộc và yêu cầu ưu tiên trong JD.",
      "Chỉ ra skill gap và gợi ý cải thiện có mức ưu tiên.",
    ],
    cta: "Xem giải pháp cho sinh viên",
  },
  {
    title:
      "Fresher, Junior Developer và người đang chủ động tìm việc ngành IT",
    pain: "Gửi nhiều CV nhưng ít phản hồi và không hiểu nguyên nhân.",
    support: [
      "Matching theo từng JD.",
      "Giải thích yêu cầu đã đáp ứng hoặc chưa thể hiện.",
      "Quản lý nhiều phiên bản CV theo từng mục tiêu ứng tuyển.",
    ],
    cta: "Xem giải pháp cho người tìm việc IT",
  },
  {
    title: "Kỹ sư IT muốn chuyển vị trí hoặc chuyển hướng",
    pain:
      "Khó xác định kỹ năng có thể chuyển đổi và khoảng cách với vai trò mục tiêu.",
    support: [
      "Chuẩn hóa kỹ năng.",
      "Phân tích khoảng cách với công việc mục tiêu.",
      "Gợi ý nội dung và lộ trình cải thiện theo mức ưu tiên.",
    ],
    cta: "Xem giải pháp chuyển hướng nghề nghiệp",
  },
];

const reportLabels = [
  {
    title: "Mức độ phù hợp",
    description: "Hiển thị điểm tổng và các thành phần tạo điểm.",
    tone: "info",
  },
  {
    title: "Kỹ năng đã đáp ứng",
    description: "Danh sách kỹ năng có bằng chứng rõ trong CV.",
    tone: "success",
  },
  {
    title: "Kỹ năng cần làm rõ",
    description:
      "Các kỹ năng có xuất hiện nhưng chưa có ngữ cảnh hoặc kết quả cụ thể.",
    tone: "warning",
  },
  {
    title: "Kỹ năng chưa thể hiện",
    description: "Các yêu cầu trong JD chưa được tìm thấy trong CV.",
    tone: "neutral",
  },
  {
    title: "Điều kiện bắt buộc",
    description:
      "Hiển thị riêng các hard constraint, không hòa lẫn vào điểm tổng.",
    tone: "neutral",
  },
  {
    title: "Gợi ý ưu tiên",
    description:
      "Danh sách hành động được xếp theo tác động và mức độ cần thiết.",
    tone: "action",
  },
];

const principles = [
  {
    title: "Không bịa kỹ năng",
    description:
      "Hệ thống không được thêm kỹ năng, kinh nghiệm hoặc kết quả không có trong CV.",
  },
  {
    title: "Có bằng chứng",
    description:
      "Nhận xét quan trọng phải dẫn lại nội dung nguồn trong CV hoặc JD.",
  },
  {
    title: "Không dùng thuộc tính nhạy cảm để chấm điểm",
    description:
      "Thông tin nhạy cảm không được sử dụng để xếp hạng ứng viên.",
  },
  {
    title: "Người dùng giữ quyền kiểm soát",
    description:
      "Người dùng có thể kiểm tra, sửa hoặc xóa dữ liệu CV của mình.",
  },
  {
    title: "Không bảo đảm tuyển dụng",
    description:
      "Kết quả KaDa_CV mang tính hỗ trợ và không phải cam kết người dùng sẽ được tuyển.",
  },
];

const pricingPreview = [
  {
    name: "Free",
    price: "0 đ/tháng.",
    features: [
      "Phân tích CV cơ bản.",
      "03 lượt CV–JD matching mỗi tháng.",
      "Một nhóm gợi ý cải thiện ưu tiên cao.",
    ],
    cta: "Dùng thử miễn phí",
  },
  {
    name: "Career Pro",
    price: "99.000 đ/tháng.",
    note: "Giá đề xuất thử nghiệm",
    features: [
      "Phân tích sâu có bằng chứng.",
      "30 lượt CV–JD matching mỗi tháng.",
      "Lưu tối đa 05 phiên bản CV.",
      "Gợi ý cải thiện theo từng JD.",
    ],
    cta: "Nâng cấp Career Pro",
  },
  {
    name: "Recruiter Team",
    price: "1.490.000 đ/tháng.",
    phase: "Dự kiến" as const,
    features: [
      "Quản lý JD có cấu trúc.",
      "200 lượt phân tích CV–JD mỗi tháng.",
      "Shortlist ứng viên có giải thích.",
      "03 tài khoản recruiter.",
    ],
    cta: "Đăng ký quan tâm",
  },
];

const faqs = [
  {
    question: "KaDa_CV có bảo đảm tôi được tuyển dụng không?",
    answer:
      "Không. KaDa_CV cung cấp dữ liệu tham khảo, giải thích và gợi ý cải thiện; quyết định tuyển dụng vẫn thuộc về con người.",
  },
  {
    question: "KaDa_CV có tự thêm kỹ năng vào CV không?",
    answer:
      "Không. Hệ thống chỉ phân tích nội dung hiện có và chỉ ra những yêu cầu chưa được thể hiện.",
  },
  {
    question: "Một CV có dùng được cho mọi công việc không?",
    answer:
      "Không phải lúc nào cũng vậy. KaDa_CV phân tích mức độ phù hợp theo từng JD cụ thể.",
  },
  {
    question: "Dữ liệu CV có được bảo vệ không?",
    answer:
      "KaDa_CV định hướng lưu trữ dữ liệu CV theo nguyên tắc riêng tư, kiểm soát quyền truy cập và cho phép người dùng xóa dữ liệu.",
  },
];

type SectionIntroProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
};

function SectionIntro({ id, eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className={styles.sectionIntro}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className={styles.home}>
      <section className={styles.hero} aria-labelledby="home-heading">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              Nền tảng AI dành cho hành trình nghề nghiệp công nghệ
            </p>
            <h1 id="home-heading">
              Hiểu CV. Khớp công việc. <span>Bứt phá sự nghiệp.</span>
            </h1>
            <p className={styles.heroDescription}>
              KaDa_CV giúp bạn phân tích CV, so khớp với mô tả công việc,
              xác định kỹ năng còn thiếu và biết rõ điều cần cải thiện trước
              khi ứng tuyển.
            </p>
            <div className={styles.heroActions}>
              <ButtonLink href="/waitlist">Đăng ký trải nghiệm sớm</ButtonLink>
              <ButtonLink href="#how-it-works" variant="secondary">
                Xem cách hoạt động
              </ButtonLink>
            </div>
            <p className={styles.trustNote}>
              <span aria-hidden="true">✓</span>
              AI hỗ trợ phân tích và giải thích dữ liệu, không thay thế quyết
              định của con người.
            </p>
          </div>

          <div
            className={styles.heroVisual}
            role="img"
            aria-label="Minh họa CV và JD được kết nối qua một AI analysis node để tạo báo cáo có giải thích"
          >
            <div className={styles.heroVisualChrome} aria-hidden="true">
              <span />
              <span />
              <span />
              <p>Minh họa báo cáo</p>
            </div>
            <div className={styles.heroFlow} aria-hidden="true">
              <div className={styles.sourceDocument}>
                <span>CV</span>
                <i />
                <i />
                <i />
              </div>
              <div className={styles.analysisNode}>
                <span>AI</span>
                <small>analysis</small>
              </div>
              <div className={styles.sourceDocument}>
                <span>JD</span>
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className={styles.heroReport} aria-hidden="true">
              <div className={styles.heroReportMain}>
                <span>Mức độ phù hợp</span>
                <strong>Có giải thích</strong>
                <p className={styles.heroReportHint}>Thành phần tạo điểm</p>
              </div>
              <div className={styles.heroReportGrid}>
                <div>
                  <span className={styles.statusDotSuccess} />
                  <p>Kỹ năng đã đáp ứng</p>
                </div>
                <div>
                  <span className={styles.statusDotWarning} />
                  <p>Kỹ năng cần làm rõ</p>
                </div>
                <div>
                  <span className={styles.statusDotInfo} />
                  <p>Gợi ý ưu tiên</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className={styles.heroScroll} href="#problems">
          Vấn đề KaDa_CV giải quyết <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section
        className={`${styles.band} ${styles.problemBand}`}
        id="problems"
        aria-labelledby="problem-heading"
      >
        <div className={styles.bandInner}>
          <div className={styles.problemLead}>
            <p className={styles.eyebrow}>VẤN ĐỀ NGƯỜI TÌM VIỆC ĐANG GẶP</p>
            <h2 id="problem-heading">
              Gửi CV nhiều lần nhưng vẫn không biết cần cải thiện điều gì?
            </h2>
            <p>
              Nhiều người tìm việc không thiếu nỗ lực. Họ thiếu một cách rõ
              ràng để hiểu CV đang thể hiện điều gì và công việc thực sự đang
              yêu cầu gì.
            </p>
          </div>
          <ol className={styles.problemList}>
            {problems.map((problem, index) => (
              <li key={problem.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{problem.title}</h3>
                  <p>{problem.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="value-heading">
        <div className={styles.valueLayout}>
          <div className={styles.valueLead}>
            <p className={styles.eyebrow}>
              KADA_CV GIÚP BẠN LÀM RÕ TỪNG BƯỚC
            </p>
            <h2 id="value-heading">
              Không chỉ chấm điểm CV — hãy hiểu vì sao.
            </h2>
          </div>
          <div className={styles.valueList}>
            {values.map((value, index) => (
              <article key={value.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className={`${styles.band} ${styles.processBand}`}
        aria-labelledby="process-heading"
      >
        <div className={styles.sectionInner}>
          <SectionIntro
            id="process-heading"
            eyebrow="CÁCH KADA_CV HOẠT ĐỘNG"
            title="Từ CV hiện tại đến hành động tiếp theo rõ ràng hơn"
          />
          <ol className={styles.processList}>
            {steps.map((step, index) => (
              <li key={step.title}>
                <div className={styles.stepNumber}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
          <div className={styles.sectionAction}>
            <ButtonLink href="/waitlist">Bắt đầu với CV của bạn</ButtonLink>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="features-heading">
        <div className={styles.featureHeader}>
          <SectionIntro
            id="features-heading"
            eyebrow="TÍNH NĂNG NỔI BẬT"
            title="Những công cụ giúp bạn hiểu CV tốt hơn"
          />
          <ButtonLink href="/features" variant="secondary">
            Khám phá toàn bộ tính năng
          </ButtonLink>
        </div>
        <div className={styles.featureShowcase}>
          <div className={styles.featureMedia}>
            <Image
              src="/images/feature.png"
              alt="Minh họa trang tính năng KaDa_CV"
              width={1122}
              height={1402}
              sizes="(min-width: 960px) 42vw, 100vw"
            />
          </div>
          <div className={styles.featureList}>
            {features.map((feature, index) => (
              <article key={feature.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${styles.band} ${styles.audienceBand}`}
        aria-labelledby="audience-heading"
      >
        <div className={styles.sectionInner}>
          <SectionIntro
            id="audience-heading"
            eyebrow="GIẢI PHÁP CHO ỨNG VIÊN TRONG MVP"
            title="KaDa_CV hỗ trợ bạn theo đúng bối cảnh nghề nghiệp"
          />
          <div className={styles.audienceGrid}>
            {candidateAudiences.map((audience, index) => (
              <article key={audience.title}>
                <span className={styles.audienceNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{audience.title}</h3>
                <p>{audience.pain}</p>
                <ul>
                  {audience.support.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ButtonLink href="/solutions" variant="secondary">
                  {audience.cta}
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${styles.band} ${styles.reportBand}`}
        aria-labelledby="report-heading"
      >
        <div className={styles.reportLayout}>
          <div className={styles.reportCopy}>
            <p className={styles.eyebrow}>BÁO CÁO DỄ HIỂU</p>
            <h2 id="report-heading">Điểm số chỉ là điểm bắt đầu</h2>
            <p>
              KaDa_CV đánh giá nội dung CV và mức độ phù hợp với JD, không đánh
              giá toàn diện năng lực hay giá trị của một con người.
            </p>
          </div>
          <div className={styles.reportPanel}>
            <div className={styles.reportPanelHeader}>
              <div>
                <span>KaDa_CV</span>
                <strong>Minh họa báo cáo matching</strong>
              </div>
              <span>CV + JD</span>
            </div>
            <div className={styles.reportGrid}>
              {reportLabels.map((item) => (
                <article
                  className={styles[`reportTone${item.tone}`]}
                  key={item.title}
                >
                  <span aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="trust-heading">
        <SectionIntro
          id="trust-heading"
          eyebrow="MINH BẠCH VÀ CÓ TRÁCH NHIỆM"
          title="AI hỗ trợ bạn hiểu dữ liệu — không phán xét con người"
        />
        <div className={styles.principleList}>
          {principles.map((principle, index) => (
            <article key={principle.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`${styles.band} ${styles.expansionBand}`}
        aria-labelledby="expansion-heading"
      >
        <div className={styles.expansionInner}>
          <div className={styles.expansionCopy}>
            <PhaseBadge label="Giai đoạn mở rộng" />
            <h2 id="expansion-heading">
              Định hướng cho tổ chức và nhà tuyển dụng
            </h2>
            <p>
              KaDa_CV định hướng mở rộng hỗ trợ nhà tuyển dụng công nghệ,
              trường đại học, trung tâm đào tạo và cố vấn nghề nghiệp. Các trải
              nghiệm này đang ở giai đoạn nghiên cứu nhu cầu và chưa thuộc MVP.
            </p>
          </div>
          <div className={styles.expansionAction}>
            <p>
              KaDa_CV hỗ trợ sàng lọc, không tự động loại ứng viên và không
              thay thế quyết định tuyển dụng.
            </p>
            <ButtonLink href="/waitlist" variant="secondary">
              Đăng ký quan tâm
            </ButtonLink>
          </div>
        </div>
      </section>

      <section
        className={`${styles.band} ${styles.pricingBand}`}
        aria-labelledby="pricing-heading"
      >
        <div className={styles.sectionInner}>
          <div className={styles.pricingHeader}>
            <SectionIntro
              id="pricing-heading"
              eyebrow="LỰA CHỌN PHÙ HỢP VỚI NHU CẦU"
              title="Bắt đầu miễn phí, nâng cấp khi bạn cần phân tích sâu hơn"
            />
            <ButtonLink href="/pricing" variant="secondary">
              Xem bảng giá
            </ButtonLink>
          </div>
          <div className={styles.pricingGrid}>
            {pricingPreview.map((plan, index) => (
              <article
                className={index === 1 ? styles.featuredPlan : ""}
                key={plan.name}
              >
                <div className={styles.planHeading}>
                  <div className={styles.planTitleRow}>
                    <h3>{plan.name}</h3>
                    {plan.phase ? <PhaseBadge label={plan.phase} /> : null}
                  </div>
                  <strong>{plan.price}</strong>
                  {plan.note ? (
                    <span className={styles.planNote}>{plan.note}</span>
                  ) : null}
                </div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <ButtonLink
                  href={plan.name === "Recruiter Team" ? "/waitlist" : "/pricing"}
                  variant={index === 1 ? "primary" : "secondary"}
                >
                  {plan.cta}
                </ButtonLink>
              </article>
            ))}
          </div>
          <p className={styles.disclaimer}>
            Giá và hạn mức hiện tại là đề xuất thử nghiệm. Chỉ công bố chính
            thức sau khi được đội ngũ xác nhận.
          </p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="waitlist-heading">
        <div className={styles.waitlistLayout}>
          <div>
            <p className={styles.eyebrow}>EARLY ACCESS</p>
            <h2 id="waitlist-heading">
              Trở thành một trong những người đầu tiên trải nghiệm KaDa_CV
            </h2>
            <p className={styles.waitlistDescription}>
              Đăng ký danh sách chờ để nhận thông báo khi KaDa_CV mở bản thử
              nghiệm và có cơ hội đóng góp phản hồi cho sản phẩm.
            </p>
            <ButtonLink href="/waitlist">Đăng ký trải nghiệm sớm</ButtonLink>
            <p className={styles.disclaimer}>
              Chúng tôi chỉ sử dụng thông tin đăng ký để liên hệ về KaDa_CV và
              chương trình thử nghiệm.
            </p>
          </div>
          <ul className={styles.waitlistBenefits}>
            <li>Trải nghiệm sản phẩm sớm.</li>
            <li>Nhận thông báo tính năng mới.</li>
            <li>Đóng góp phản hồi trực tiếp.</li>
            <li>Có cơ hội tham gia thử nghiệm miễn phí.</li>
          </ul>
        </div>
      </section>

      <section
        className={`${styles.band} ${styles.faqBand}`}
        aria-labelledby="faq-heading"
      >
        <div className={styles.faqLayout}>
          <div>
            <p className={styles.eyebrow}>FAQ</p>
            <h2 id="faq-heading">Câu hỏi thường gặp</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Sẵn sàng hiểu CV của bạn rõ hơn?"
        description="Bắt đầu từ CV hiện tại, so khớp với công việc bạn đang hướng đến và khám phá bước cải thiện tiếp theo."
        primaryLabel="Đăng ký trải nghiệm sớm"
        primaryHref="/waitlist"
        secondaryLabel="Khám phá tính năng"
        secondaryHref="/features"
      />
    </div>
  );
}