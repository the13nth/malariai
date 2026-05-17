import type { Metadata } from "next";
import Link from "next/link";
import {
  LayersIcon,
  CameraIcon,
  BrainIcon,
  BadgeCheckIcon,
  ChartIcon,
  GlobeIcon,
  BeakerIcon,
  ShieldIcon,
  ArrowRightIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Solution",
  description:
    "Technical approach for the AI-based malaria diagnosis system including data collection, model development, and implementation strategy.",
};

const components = [
  { title: "Digital Microscopy Integration", desc: "High-resolution smartphone cameras or dedicated microscopy cameras capture blood smear images. The system supports both online uploads and offline capture for field deployment.", icon: CameraIcon },
  { title: "AI Detection Engine", desc: "Deep learning models trained on thousands of annotated blood smear images detect and classify Plasmodium parasites across all life stages: ring, trophozoite, schizont, and gametocyte.", icon: BrainIcon },
  { title: "Species Identification", desc: "Differentiates between P. falciparum, P. vivax, and mixed infections, enabling targeted treatment selection based on species-specific drug susceptibility.", icon: BadgeCheckIcon },
  { title: "Parasitemia Quantification", desc: "Automated counting and calculation of parasite density per microliter of blood, providing clinicians with critical information for treatment decisions.", icon: ChartIcon },
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
  { title: "Cross-Validation", desc: "K-fold cross-validation on training data ensures model robustness and detects overfitting early in development.", icon: LayersIcon },
  { title: "External Validation", desc: "Testing on independent datasets from different geographical regions evaluates generalization across populations.", icon: GlobeIcon },
  { title: "Clinical Trials", desc: "Prospective studies comparing AI diagnosis with expert microscopy and RDTs measure real-world clinical performance.", icon: BeakerIcon },
  { title: "Regulatory Compliance", desc: "Adherence to medical device regulations ensures the system meets safety and efficacy requirements.", icon: ShieldIcon },
];

const implSteps = [
  { number: "01", title: "Pilot Deployment", desc: "Initial rollout in 5&ndash;10 healthcare facilities across endemic regions to gather real-world performance data and user feedback." },
  { number: "02", title: "Training Program", desc: "Comprehensive training materials and workshops for healthcare workers ensure effective adoption at all skill levels." },
  { number: "03", title: "Monitoring & Evaluation", desc: "Metrics tracking for system performance, user satisfaction, and clinical outcomes guide ongoing improvements." },
  { number: "04", title: "Iterative Improvement", desc: "Continuous model refinement based on field data and user feedback, incorporating new training samples from deployed sites." },
];

export default function SolutionPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="absolute inset-0 glow-top-right" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm">
              <LayersIcon className="h-3.5 w-3.5 text-white/80" />
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
              <LayersIcon className="h-3.5 w-3.5" />
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
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-body">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface py-16 sm:py-24">
        <div className="absolute inset-0 glow-subtle-bl" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <LayersIcon className="h-3.5 w-3.5" />
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
              <BrainIcon className="h-3.5 w-3.5" />
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
        <div className="absolute inset-0 glow-subtle" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <ShieldIcon className="h-3.5 w-3.5" />
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
                  <item.icon className="h-5 w-5 text-primary" />
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
              <GlobeIcon className="h-3.5 w-3.5" />
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
              <ArrowRightIcon className="h-4 w-4" />
              View Expected Impact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
