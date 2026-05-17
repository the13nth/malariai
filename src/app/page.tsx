import Link from "next/link";
import LiveStats from "@/components/LiveStats";
import {
  MicroscopeIcon,
  UsersIcon,
  GlobeIcon,
  BeakerIcon,
  CameraIcon,
  BrainIcon,
  BadgeCheckIcon,
  ChartIcon,
  LightbulbIcon,
  AlertIcon,
  ArrowRightIcon,
} from "@/components/Icons";

const challenges = [
  {
    title: "Microscopy Expertise",
    desc: "Manual microscopy requires highly trained technicians who can accurately identify parasites in blood smears&mdash;a skill in short supply.",
    icon: MicroscopeIcon,
  },
  {
    title: "Inter-observer Variability",
    desc: "Different microscopists produce inconsistent results, with accuracy rates varying significantly based on experience and fatigue.",
    icon: UsersIcon,
  },
  {
    title: "Limited Rural Access",
    desc: "Remote healthcare facilities often lack trained microscopists and quality diagnostic equipment.",
    icon: GlobeIcon,
  },
  {
    title: "RDT Limitations",
    desc: "Rapid Diagnostic Tests have lower sensitivity, cannot quantify parasitemia, and struggle to differentiate between species.",
    icon: BeakerIcon,
  },
];

const features = [
  {
    title: "Digital Microscopy",
    desc: "High-resolution smartphone cameras or dedicated microscopy cameras capture blood smear images for analysis.",
    icon: CameraIcon,
  },
  {
    title: "AI Detection Engine",
    desc: "Deep learning models trained on annotated blood smear images detect and classify Plasmodium parasites.",
    icon: BrainIcon,
  },
  {
    title: "Species Identification",
    desc: "Differentiates between P. falciparum, P. vivax, and mixed infections to guide appropriate treatment.",
    icon: BadgeCheckIcon,
  },
  {
    title: "Parasitemia Quantification",
    desc: "Automated counting and calculation of parasite density per microliter of blood.",
    icon: ChartIcon,
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="absolute inset-0 glow-top-right" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-dark/20 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm">
              <LightbulbIcon className="h-3.5 w-3.5" />
              Research Project &middot; Deep Learning &middot; Global Health
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Artificial Intelligence-Based Malaria Diagnosis
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
              Leveraging deep learning and computer vision to analyze blood smear
              images, providing rapid, accurate, and consistent malaria diagnosis
              for resource-limited settings.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/solution"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 text-sm font-semibold text-primary shadow-lg transition-all duration-200 hover:bg-accent hover:shadow-xl"
              >
                <LightbulbIcon className="h-4 w-4" />
                Explore the Solution
              </Link>
              <Link
                href="/impact"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/30 px-8 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10"
              >
                <ChartIcon className="h-4 w-4" />
                Expected Impact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <LiveStats />
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
        <div className="absolute inset-0 glow-subtle-bl" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <GlobeIcon className="h-3.5 w-3.5" />
              Background
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              The Malaria Challenge
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Malaria is caused by Plasmodium parasites transmitted through Anopheles
              mosquitoes. According to the World Health Organization (WHO), there are an
              estimated 247 million malaria cases annually, resulting in approximately 619,000
              deaths worldwide. The disease disproportionately affects children under five years
              of age and pregnant women in endemic regions, particularly in sub-Saharan Africa
              and South Asia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <AlertIcon className="h-3.5 w-3.5" />
              The Problem
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              The Diagnostic Challenge
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Traditional malaria diagnosis faces critical barriers that limit access to
              reliable testing in the regions that need it most.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {challenges.map((item) => (
              <div
                key={item.title}
                className="group cursor-pointer rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent transition-colors duration-200 group-hover:bg-accent-dark">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-body">{item.title}</h3>
                <p
                  className="mt-1 text-sm leading-relaxed text-muted"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
        <div className="absolute inset-0 glow-subtle" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <LightbulbIcon className="h-3.5 w-3.5" />
              Our Solution
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              AI-Powered Solution
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The system integrates AI-powered image analysis with traditional microscopy to
              create an intelligent diagnostic platform. It combines advanced deep learning
              models with user-friendly interfaces, enabling healthcare workers at any skill
              level to perform accurate malaria diagnosis.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {features.map((item) => (
              <div
                key={item.title}
                className="group cursor-pointer rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent transition-colors duration-200 group-hover:bg-accent-dark">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-body">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/solution"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-8 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-primary-dark hover:shadow-xl"
            >
              <ArrowRightIcon className="h-4 w-4" />
              View Technical Approach
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
        <div className="absolute inset-0 glow-bottom-left" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center text-white">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur-sm">
              <ChartIcon className="h-3.5 w-3.5" />
              Call to Action
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Transforming Malaria Diagnosis
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Reducing diagnostic time from 15&ndash;30 minutes to under 10 minutes per
              sample, while improving accuracy and accessibility in resource-limited settings.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/impact"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 text-sm font-semibold text-primary shadow-lg transition-all duration-200 hover:bg-accent hover:shadow-xl"
              >
                <ArrowRightIcon className="h-4 w-4" />
                See Expected Impact
              </Link>
              <Link
                href="/solution"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/30 px-8 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10"
              >
                <LightbulbIcon className="h-4 w-4" />
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
