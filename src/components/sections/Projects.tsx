import { motion } from "motion/react";
import {
  ArrowUpRight,
  Activity,
  Code2,
  Newspaper,
  Building2,
  BrainCircuit,
} from "lucide-react";

type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  visual: "rossoneri" | "refund" | "wind" | "africentric";
  icon: typeof Code2;
  accent: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "Rossoneri Reflections",
    category: "Football Editorial Platform",
    description:
      "An editorial platform dedicated to AC Milan, bringing together football analysis, opinion pieces and thoughtful coverage of the Rossoneri.",
    technologies: ["Editorial", "Sports Media", "Content"],
    visual: "rossoneri",
    icon: Newspaper,
    accent: "#E63946",
  },
  {
    number: "02",
    name: "RefundIQ",
    category: "AI-Powered Refund Intelligence",
    description:
      "A refund evaluation platform combining an administrative interface, backend services and structured decision-making to assess refund requests.",
    technologies: ["React", "Express", "Prisma", "PostgreSQL"],
    visual: "refund",
    icon: BrainCircuit,
    accent: "#A78BFA",
  },
  {
    number: "03",
    name: "WindLens",
    category: "Forecast Intelligence",
    description:
      "A wind forecasting application powered by a FastAPI backend and Elexon data, with a deployed dashboard for exploring forecast information.",
    technologies: ["Python", "FastAPI", "Elexon", "React"],
    visual: "wind",
    icon: Activity,
    accent: "#38BDF8",
  },
  {
    number: "04",
    name: "Africentric Technology Hub",
    category: "Technology & Digital Solutions",
    description:
      "The digital presence of a technology company focused on software products, enterprise solutions, digital transformation and IT services.",
    technologies: ["Software", "Enterprise", "Technology"],
    visual: "africentric",
    icon: Building2,
    accent: "#10B981",
  },
];

function ProjectArtwork({ project }: { project: Project }) {
  return (
    <div
      className={`relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] ${
        project.visual === "rossoneri"
          ? "bg-[#16090C]"
          : project.visual === "refund"
            ? "bg-[#100E1B]"
            : project.visual === "wind"
              ? "bg-[#07151D]"
              : "bg-[#07140F]"
      }`}
    >
      {/* Atmospheric glow */}
      <div
        className="absolute -right-16 -top-20 h-64 w-64 rounded-full opacity-20 blur-[90px]"
        style={{ backgroundColor: project.accent }}
      />

      {project.visual === "rossoneri" && (
        <div className="relative flex h-full w-full flex-col justify-between p-7 sm:p-9">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-400">
              Football. Culture. Analysis.
            </span>
            <Newspaper size={19} className="text-red-400" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
              Sempre
            </p>
            <h3 className="mt-1 text-4xl font-black italic tracking-[-0.06em] text-white sm:text-6xl">
              ROSSONERI
            </h3>
            <p className="mt-1 text-sm font-semibold tracking-[0.3em] text-red-500">
              REFLECTIONS
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/50">
            <span className="h-px w-8 bg-red-500" />
            An independent football voice
          </div>
        </div>
      )}

      {project.visual === "refund" && (
        <div className="relative w-full max-w-sm p-5 sm:p-8">
          <div className="rounded-xl border border-violet-400/20 bg-[#171326]/90 p-4 shadow-2xl shadow-violet-950/40 backdrop-blur-xl sm:p-5">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-400/15 text-violet-300">
                  <BrainCircuit size={17} />
                </span>
                <span className="text-sm font-semibold text-white">
                  RefundIQ
                </span>
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[9px] text-emerald-300">
                Evaluation
              </span>
            </div>

            <div className="space-y-3">
              <div className="h-2 w-2/5 rounded-full bg-white/20" />
              <div className="h-2 w-4/5 rounded-full bg-white/10" />
              <div className="h-2 w-3/5 rounded-full bg-white/10" />
            </div>

            <div className="mt-5 rounded-lg border border-violet-400/15 bg-violet-400/[0.06] p-3">
              <p className="text-[9px] uppercase tracking-widest text-violet-300">
                Decision support
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-gray-300">
                  Request assessment
                </span>
                <span className="text-xs font-semibold text-violet-300">
                  AI-assisted
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {project.visual === "wind" && (
        <div className="relative w-full max-w-sm p-5 sm:p-8">
          <div className="rounded-xl border border-sky-400/20 bg-[#091D28]/90 p-4 shadow-2xl shadow-sky-950/40 backdrop-blur-xl sm:p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-white">WindLens</span>
              <Activity size={17} className="text-sky-400" />
            </div>

            <div className="mt-5 flex items-end gap-2">
              <span className="text-4xl font-semibold tracking-tight text-white">
                24.8
              </span>
              <span className="mb-1 text-xs text-sky-300">m/s</span>
            </div>

            <div className="mt-5 flex h-20 items-end gap-1.5">
              {[35, 52, 43, 67, 55, 78, 61, 86, 68, 92, 74, 83].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-sm bg-sky-400/70 transition-all duration-300 hover:bg-sky-300"
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>

            <div className="mt-4 flex justify-between text-[9px] text-gray-500">
              <span>Forecast overview</span>
              <span>Wind data</span>
            </div>
          </div>
        </div>
      )}

      {project.visual === "africentric" && (
        <div className="relative flex h-full w-full flex-col items-center justify-center p-7">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.08] shadow-xl shadow-emerald-950/40">
            <Code2 size={38} className="text-emerald-400" strokeWidth={1.4} />
          </div>
          <h3 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            AFRICENTRIC
          </h3>
          <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.35em] text-emerald-400">
            Technology Hub
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["Build", "Transform", "Innovate"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] text-gray-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      className="group min-w-0"
    >
      <div className="transition-transform duration-500 group-hover:-translate-y-1">
        <ProjectArtwork project={project} />

        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
              {project.category}
            </span>
            <span
              className="text-xs font-medium tabular-nums"
              style={{ color: project.accent }}
            >
              {project.number}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Icon
              size={19}
              style={{ color: project.accent }}
              strokeWidth={1.7}
            />
            <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald sm:text-2xl">
              {project.name}
            </h3>
          </div>

          <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium text-gray-400 transition-colors group-hover:border-white/15"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0A0F0D] py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute -left-48 top-1/3 h-[450px] w-[450px] rounded-full bg-emerald/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald">
              <span className="h-px w-8 bg-emerald" />
              Selected work
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Built with purpose.
              <br />
              <span className="text-gray-500">Designed to deliver.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
              A selection of digital products, platforms and initiatives
              reflecting my work across software engineering and technology.
            </p>
          </div>

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            04 featured projects
          </span>
        </motion.div>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-lg text-sm leading-7 text-gray-400">
            Interested in how I approach a particular engineering challenge?
            Let's discuss the work and the thinking behind it.
          </p>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-emerald"
          >
            Discuss a project
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
