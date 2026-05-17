import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Expected clinical, healthcare system, and public health impact of the AI-based malaria diagnosis system.",
};

const objectives = [
  { number: "01", text: "Develop and validate an AI model achieving <strong>&ge;90% sensitivity</strong> and <strong>&ge;80% specificity</strong> in malaria parasite detection.", icon: "target" },
  { number: "02", text: "Create a <strong>user-friendly diagnostic interface</strong> accessible to healthcare workers with minimal training.", icon: "users" },
  { number: "03", text: "<strong>Reduce diagnostic time</strong> from 15&ndash;30 minutes to under 10 minutes per sample.", icon: "clock" },
];

const impactSections = [
  {
    title: "Clinical Impact",
    icon: "heart",
    items: [
      { title: "Improved Diagnostic Accuracy", desc: "Reduction in false positives and false negatives by 30&ndash;40% compared to manual microscopy alone, leading to more appropriate treatment decisions." },
      { title: "Faster Results", desc: "85&ndash;90% reduction in diagnostic time, enabling same-day treatment initiation and reducing patient wait times." },
      { title: "Enhanced Case Management", desc: "Better treatment selection through accurate species identification, reducing inappropriate use of artemisinin-based combination therapies." },
    ],
  },
  {
    title: "Healthcare System Benefits",
    icon: "server",
    items: [
      { title: "Increased Capacity", desc: "Healthcare workers can process 3&ndash;5 times more samples daily, reducing bottlenecks and improving patient throughput." },
      { title: "Workforce Optimization", desc: "Reduces dependency on specialized microscopists, allowing existing staff to focus on patient care rather than prolonged microscopy analysis." },
      { title: "Cost Savings", desc: "Lower operational costs through automation and reduced misdiagnosis, which decreases unnecessary treatments and hospitalizations." },
      { title: "Quality Standardization", desc: "Consistent diagnostic quality across all facilities, eliminating inter-observer variability and ensuring reliable results." },
    ],
  },
  {
    title: "Public Health Impact",
    icon: "globe",
    items: [
      { title: "Disease Surveillance", desc: "Real-time data collection enables epidemiological monitoring and trend analysis at regional and national levels." },
      { title: "Outbreak Detection", desc: "Early identification of malaria outbreaks through automated data analytics and anomaly detection, enabling faster response." },
      { title: "Resource Allocation", desc: "Evidence-based deployment of prevention and treatment resources based on actual disease burden and geographic distribution." },
      { title: "Research Advancement", desc: "Large-scale standardized datasets enable malaria research, drug resistance monitoring, and evaluation of intervention effectiveness." },
    ],
  },
];

const deploymentOptions = [
  { title: "Cloud-Based", desc: "Centralized processing with internet-connected microscopy stations. Enables real-time data aggregation for surveillance and continuous model improvement.", icon: "cloud" },
  { title: "Edge Computing", desc: "On-device inference for offline environments with limited or no internet connectivity. Results are stored locally and synced when connectivity is available.", icon: "chip" },
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

function IconSVG({ icon, className = "h-5 w-5 text-primary" }: { icon: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    target: <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm0 0A2.25 2.25 0 006.75 9.75 2.25 2.25 0 019 12M4.5 12a2.25 2.25 0 012.25 2.25A2.25 2.25 0 019 12m3-6.75V3m0 18.75V21m-2.25-9h-3.375m13.5 0h-3.375m-3.375 0h3.375M12 9.75V12m0 2.25V15" />,
    users: <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />,
    clock: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
    heart: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />,
    server: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />,
    globe: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.05 9.05 0 100-18 9.05 9.05 0 000 18zM2.25 12h19.5M12 3c-1.9 2-3 4.7-3 9s1.1 7 3 9c1.9-2 3-4.7 3-9s-1.1-7-3-9z" />,
    cloud: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />,
    chip: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />,
  };

  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      {paths[icon]}
    </svg>
  );
}

export default function ImpactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm">
              <IconSVG icon="heart" className="h-3.5 w-3.5 text-white/80" />
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
              <IconSVG icon="target" />
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(8,145,178,0.04),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <IconSVG icon="heart" />
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
                    <IconSVG icon={section.icon} />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight text-body sm:text-2xl">
                    {section.title}
                  </h2>
                </div>
                <div className="mt-6 space-y-5">
                  {section.items.map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <svg className="mt-1 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
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
              <IconSVG icon="cloud" />
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
                  <IconSVG icon={option.icon} />
                </div>
                <h3 className="mt-4 font-semibold text-body">{option.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{option.desc}</p>
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
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
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
                <svg
                  className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                {name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
