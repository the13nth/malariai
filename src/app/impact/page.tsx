import type { Metadata } from "next";
import {
  TargetIcon,
  UsersIcon,
  ClockIcon,
  HeartIcon,
  ServerIcon,
  GlobeIcon,
  CloudIcon,
  ChipIcon,
  BookOpenIcon,
  CheckIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Expected clinical, healthcare system, and public health impact of the AI-based malaria diagnosis system.",
};

const objectives = [
  { number: "01", text: "Develop and validate an AI model achieving <strong>&ge;90% sensitivity</strong> and <strong>&ge;80% specificity</strong> in malaria parasite detection.", icon: TargetIcon },
  { number: "02", text: "Create a <strong>user-friendly diagnostic interface</strong> accessible to healthcare workers with minimal training.", icon: UsersIcon },
  { number: "03", text: "<strong>Reduce diagnostic time</strong> from 15&ndash;30 minutes to under 10 minutes per sample.", icon: ClockIcon },
];

const impactSections = [
  {
    title: "Clinical Impact",
    icon: HeartIcon,
    items: [
      { title: "Improved Diagnostic Accuracy", desc: "Reduction in false positives and false negatives by 30&ndash;40% compared to manual microscopy alone, leading to more appropriate treatment decisions." },
      { title: "Faster Results", desc: "85&ndash;90% reduction in diagnostic time, enabling same-day treatment initiation and reducing patient wait times." },
      { title: "Enhanced Case Management", desc: "Better treatment selection through accurate species identification, reducing inappropriate use of artemisinin-based combination therapies." },
    ],
  },
  {
    title: "Healthcare System Benefits",
    icon: ServerIcon,
    items: [
      { title: "Increased Capacity", desc: "Healthcare workers can process 3&ndash;5 times more samples daily, reducing bottlenecks and improving patient throughput." },
      { title: "Workforce Optimization", desc: "Reduces dependency on specialized microscopists, allowing existing staff to focus on patient care rather than prolonged microscopy analysis." },
      { title: "Cost Savings", desc: "Lower operational costs through automation and reduced misdiagnosis, which decreases unnecessary treatments and hospitalizations." },
      { title: "Quality Standardization", desc: "Consistent diagnostic quality across all facilities, eliminating inter-observer variability and ensuring reliable results." },
    ],
  },
  {
    title: "Public Health Impact",
    icon: GlobeIcon,
    items: [
      { title: "Disease Surveillance", desc: "Real-time data collection enables epidemiological monitoring and trend analysis at regional and national levels." },
      { title: "Outbreak Detection", desc: "Early identification of malaria outbreaks through automated data analytics and anomaly detection, enabling faster response." },
      { title: "Resource Allocation", desc: "Evidence-based deployment of prevention and treatment resources based on actual disease burden and geographic distribution." },
      { title: "Research Advancement", desc: "Large-scale standardized datasets enable malaria research, drug resistance monitoring, and evaluation of intervention effectiveness." },
    ],
  },
];

const deploymentOptions = [
  { title: "Cloud-Based", desc: "Centralized processing with internet-connected microscopy stations. Enables real-time data aggregation for surveillance and continuous model improvement.", icon: CloudIcon },
  { title: "Edge Computing", desc: "On-device inference for offline environments with limited or no internet connectivity. Results are stored locally and synced when connectivity is available.", icon: ChipIcon },
];

const references = [
  ["IEEE Paper", "https://ieeexplore.ieee.org/document/8846750"],
  ["NIH Thick Smears Dataset", "https://data.lhncbc.nlm.nih.gov/public/Malaria/Thick_Smears_150/index.html"],
  ["P. Vivax Blood Smears (Kaggle)", "https://www.kaggle.com/datasets/orvile/p-vivax-malaria-infected-human-blood-smears"],
  ["Broad Institute BBBC041", "https://bbbc.broadinstitute.org/BBBC041"],
  ["Mendeley Data", "https://data.mendeley.com/datasets/6zpxnhjxzz/1"],
  ["Harvard Dataverse (AirLab)", "https://dataverse.harvard.edu/dataverse/airlab_lacuna_mal"],
  ["TensorFlow Datasets", "https://www.tensorflow.org/datasets/catalog/malaria"],
];

export default function ImpactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="absolute inset-0 glow-top-right" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm">
              <HeartIcon className="h-3.5 w-3.5 text-white/80" />
              Outcomes &amp; Impact
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Expected Outcomes &amp; Impact
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              The AI-based diagnosis system is designed to deliver measurable improvements
              across clinical outcomes, healthcare system efficiency, and public health
              surveillance.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <TargetIcon className="h-3.5 w-3.5" />
              Goals
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Primary Objectives</h2>
          </div>
          <div className="mt-10 space-y-4">
            {objectives.map((obj) => (
              <div
                key={obj.number}
                className="group cursor-pointer rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                    {obj.number}
                  </span>
                  <p className="pt-1.5 text-sm leading-relaxed text-muted" dangerouslySetInnerHTML={{ __html: obj.text }} />
                </div>
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
              <HeartIcon className="h-3.5 w-3.5" />
              Impact Areas
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Areas of Impact</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The system delivers value across three dimensions: direct clinical care,
              healthcare system operations, and population-level public health.
            </p>
          </div>
          <div className="mt-10 grid gap-6">
            {impactSections.map((section) => (
              <div
                key={section.title}
                className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-primary/20 hover:shadow-md sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight text-body sm:text-2xl">
                    {section.title}
                  </h2>
                </div>
                <div className="mt-6 space-y-5">
                  {section.items.map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <h3 className="font-semibold text-body">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted" dangerouslySetInnerHTML={{ __html: item.desc }} />
                      </div>
                    </div>
                  ))}
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
              <CloudIcon className="h-3.5 w-3.5" />
              Deployment
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Deployment Options</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The system is designed for flexible deployment to accommodate varying
              infrastructure availability across target regions.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {deploymentOptions.map((option) => (
              <div
                key={option.title}
                className="group cursor-pointer rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent transition-colors duration-200 group-hover:bg-accent-dark">
                  <option.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-body">{option.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{option.desc}</p>
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
              <BookOpenIcon className="h-3.5 w-3.5" />
              Resources
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Datasets &amp; References</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              This project builds upon publicly available datasets and prior research in
              malaria diagnosis and computer vision.
            </p>
          </div>
          <div className="mt-10 space-y-3">
            {references.map(([name, url]) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-4 text-sm text-body shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-accent hover:shadow-md"
              >
                <BookOpenIcon className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-0.5" />
                {name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
