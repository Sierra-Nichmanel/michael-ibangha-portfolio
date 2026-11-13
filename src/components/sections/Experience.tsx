import { motion } from "motion/react";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";

const experience = [
  {
    period: "November 2026 — Present",
    company: "Sysmax Technologies Limited",
    role: "Full Stack Software Developer",
    type: "Current role",
    description:
      "Working on enterprise software development, with a focus on the Microsoft development ecosystem and business application solutions.",
    technologies: [
      "C#",
      "ASP.NET MVC",
      ".NET Framework 4.8.1",
      "Microsoft SQL Server",
      "Visual Studio",
    ],
    current: true,
  },
  {
    period: "March 2025 — Present",
    company: "Africentric Technology Hub",
    role: "Co-founder · Full-Stack Developer & DevOps Engineer",
    type: "Technology & Product Development",
    description:
      "Building web and mobile software solutions while contributing to deployment workflows, infrastructure and the development of technology products.",
    technologies: ["React", "Node.js", "React Native", "Supabase", "DevOps"],
    current: false,
  },
  {
    period: "December 2022 — March 2025",
    company: "Mehtic Technology",
    role: "Full-Stack Developer",
    type: "Software Development",
    description:
      "Worked across frontend and backend development, building application features and contributing to the delivery of software solutions.",
    technologies: ["JavaScript", "Frontend", "Backend", "REST APIs"],
    current: false,
  },
  {
    period: "June 2021 — December 2022",
    company: "Code Pinnacle Innovation",
    role: "Frontend Developer",
    type: "Frontend Engineering",
    description:
      "Contributed to frontend development, implementing user interfaces and translating application requirements into functional web experiences.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#080C0A] py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute -right-48 top-1/4 h-[450px] w-[450px] rounded-full bg-emerald/[0.04] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald">
            <span className="h-px w-8 bg-emerald" />
            Professional journey
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Experience that{" "}
            <span className="text-gray-500">shapes the work.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
            My professional journey across frontend engineering, full-stack
            development, enterprise software and infrastructure.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-8 left-[15px] top-8 hidden w-px bg-gradient-to-b from-emerald/60 via-white/10 to-transparent sm:block" />

          <div className="space-y-6">
            {experience.map((item, index) => (
              <motion.article
                key={item.company}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative sm:pl-12"
              >
                {/* Timeline marker */}
                <span
                  className={`absolute left-[9px] top-9 hidden h-3.5 w-3.5 rounded-full border-2 sm:block ${
                    item.current
                      ? "border-emerald bg-emerald shadow-[0_0_14px_rgba(16,185,129,0.6)]"
                      : "border-gray-600 bg-[#080C0A]"
                  }`}
                />

                <div
                  className={`rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1 sm:p-8 ${
                    item.current
                      ? "border-emerald/25 bg-emerald/[0.035] hover:border-emerald/40"
                      : "border-white/[0.08] bg-white/[0.02] hover:border-white/15"
                  }`}
                >
                  <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
                    <div className="min-w-0 flex-1">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="text-xs font-medium tracking-wide text-gray-400">
                          {item.period}
                        </span>

                        {item.current && (
                          <span className="rounded-full border border-emerald/25 bg-emerald/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-emerald">
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        {item.company}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-emerald">
                        {item.role}
                      </p>

                      <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-3 lg:justify-end">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-gray-400">
                        <BriefcaseBusiness size={19} />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-gray-500">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.07] pt-5">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-[10px] font-medium text-gray-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <p className="text-lg font-semibold text-white">
              Interested in working together?
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Let's discuss how I can contribute to your next project.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-emerald transition-colors hover:text-emerald-light"
          >
            Get in touch
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
