import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solution",
  description:
    "Technical approach for the AI-based malaria diagnosis system including data collection, model development, and implementation strategy.",
};

const components = [
  {
    title: "Digital Microscopy Integration",
    desc: "High-resolution smartphone cameras or dedicated microscopy cameras capture blood smear images. The system supports both online uploads and offline capture for field deployment.",
    icon: "camera",
  },
  {
    title: "AI Detection Engine",
    desc: "Deep learning models trained on thousands of annotated blood smear images detect and classify Plasmodium parasites across all life stages: ring, trophozoite, schizont, and gametocyte.",
    icon: "brain",
  },
  {
    title: "Species Identification",
    desc: "Differentiates between P. falciparum, P. vivax, and mixed infections, enabling targeted treatment selection based on species-specific drug susceptibility.",
    icon: "badge",
  },
  {
    title: "Parasitemia Quantification",
    desc: "Automated counting and calculation of parasite density per microliter of blood, providing clinicians with critical information for treatment decisions.",
    icon: "chart",
  },
];

const dataSteps = [
  { number: "01", title: "Dataset Compilation", desc: "Gather annotated blood smear images from diverse geographical regions and patient populations to ensure the model generalizes across different settings and malaria transmission intensities." },
  { number: "02", title: "Expert Validation", desc: "All images are reviewed and labeled by certified parasitologists to ensure ground-truth accuracy. Each annotation is cross-validated by a second expert." },
  { number: "03", title: "Data Augmentation", desc: "Apply techniques such as rotation, scaling, color adjustment, and mosaic augmentation to increase dataset diversity and improve model robustness against real-world variation." },
];

const modelSteps = [
  { number: "01", title: "Architecture Selection", desc: "YOLOv8m provides an optimal trade-off between detection accuracy and inference speed, making it suitable for deployment on modest hardware available in resource-limited settings." },
  { number: "02", title: "Transfer Learning", desc: "The model is initialized from a pre-trained YOLOv8m checkpoint and fine-tuned on the malaria blood smear dataset, accelerating convergence and improving performance with limited medical imaging data." },
  { number: "03", title: "Multi-task Learning", desc: "The model simultaneously performs object detection (identifying red blood cells and parasites), classification (differentiating parasite stages), and quantification (counting infected cells)." },
  { number: "04", title: "Explainable AI", desc: "Bounding box visualizations and confidence scores provide transparency in diagnostic decisions, allowing healthcare workers to review and validate AI findings." },
];

const validationItems = [
  { title: "Cross-Validation", desc: "K-fold cross-validation on training data ensures model robustness and detects overfitting early in development.", icon: "layers" },
  { title: "External Validation", desc: "Testing on independent datasets from different geographical regions evaluates generalization across populations.", icon: "globe" },
  { title: "Clinical Trials", desc: "Prospective studies comparing AI diagnosis with expert microscopy and RDTs measure real-world clinical performance.", icon: "beaker" },
  { title: "Regulatory Compliance", desc: "Adherence to medical device regulations ensures the system meets safety and efficacy requirements.", icon: "shield" },
];

const implSteps = [
  { number: "01", title: "Pilot Deployment", desc: "Initial rollout in 5&ndash;10 healthcare facilities across endemic regions to gather real-world performance data and user feedback." },
  { number: "02", title: "Training Program", desc: "Comprehensive training materials and workshops for healthcare workers ensure effective adoption at all skill levels." },
  { number: "03", title: "Monitoring & Evaluation", desc: "Metrics tracking for system performance, user satisfaction, and clinical outcomes guide ongoing improvements." },
  { number: "04", title: "Iterative Improvement", desc: "Continuous model refinement based on field data and user feedback, incorporating new training samples from deployed sites." },
];

function IconSVG({ icon, className = "h-5 w-5 text-primary" }: { icon: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    camera: <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316zM16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />,
    brain: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />,
    badge: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />,
    chart: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />,
    layers: <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />,
    globe: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.05 9.05 0 100-18 9.05 9.05 0 000 18zM2.25 12h19.5M12 3c-1.9 2-3 4.7-3 9s1.1 7 3 9c1.9-2 3-4.7 3-9s-1.1-7-3-9z" />,
    beaker: <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />,
    shield: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
  };

  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      {paths[icon]}
    </svg>
  );
}

export default function SolutionPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm">
              <IconSVG icon="layers" className="h-3.5 w-3.5 text-white/80" />
              Technical Overview
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Technical Approach
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              A comprehensive methodology combining advanced deep learning architectures,
              rigorous validation, and practical deployment strategies.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <IconSVG icon="layers" />
              Architecture
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Key Components</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The system is built around four integrated components that work together to
              deliver accurate, actionable diagnostic results.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {components.map((item) => (
              <div
                key={item.title}
                className="group cursor-pointer rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent transition-colors duration-200 group-hover:bg-accent-dark">
                  <IconSVG icon={item.icon} />
                </div>
                <h3 className="mt-4 font-semibold text-body">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface py-16 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(8,145,178,0.04),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <IconSVG icon="layers" />
              Foundation
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Data Collection &amp; Preparation</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              High-quality training data is the foundation of the system. The dataset
              comprises Giemsa-stained thin blood smear images from diverse geographical
              regions and patient populations.
            </p>
          </div>
          <div className="mt-10 space-y-4">
            {dataSteps.map((step) => (
              <div
                key={step.number}
                className="group cursor-pointer rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                    {step.number}
                  </span>
                  <div className="pt-0.5">
                    <h3 className="font-semibold text-body">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <IconSVG icon="brain" />
              Model
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Model Development</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The detection model is built on YOLOv8 (You Only Look Once), a state-of-the-art
              object detection architecture chosen for its balance of accuracy and inference
              speed&mdash;critical for real-time diagnostic use.
            </p>
          </div>
          <div className="mt-10 space-y-4">
            {modelSteps.map((step) => (
              <div
                key={step.number}
                className="group cursor-pointer rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                    {step.number}
                  </span>
                  <div className="pt-0.5">
                    <h3 className="font-semibold text-body">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface py-16 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(8,145,178,0.04),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <IconSVG icon="shield" />
              Quality
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Validation &amp; Testing</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Rigorous validation ensures the system meets clinical standards before
              deployment. The model is evaluated through multiple complementary approaches.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {validationItems.map((item) => (
              <div
                key={item.title}
                className="group cursor-pointer rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent transition-colors duration-200 group-hover:bg-accent-dark">
                  <IconSVG icon={item.icon} />
                </div>
                <h3 className="mt-4 font-semibold text-body">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <IconSVG icon="globe" />
              Rollout
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Implementation Strategy</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Deployment follows a phased approach to ensure reliability, usability, and
              continuous improvement in real-world healthcare settings.
            </p>
          </div>
          <div className="mt-10 space-y-4">
            {implSteps.map((step) => (
              <div
                key={step.number}
                className="group cursor-pointer rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                    {step.number}
                  </span>
                  <div className="pt-0.5">
                    <h3 className="font-semibold text-body">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted" dangerouslySetInnerHTML={{ __html: step.desc }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/impact"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-8 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-primary-dark hover:shadow-xl"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              View Expected Impact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
