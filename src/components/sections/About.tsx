import { motion } from "motion/react";
import { Code2, Layers3, Workflow, ArrowUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Thoughtful engineering",
    description:
      "I focus on clean architecture, maintainable code and solutions built around real requirements.",
    Icon: Code2,
  },
  {
    number: "02",
    title: "End-to-end thinking",
    description:
      "From interfaces and APIs to databases, infrastructure and deployment, I consider the entire system.",
    Icon: Layers3,
  },
  {
    number: "03",
    title: "Practical innovation",
    description:
      "I use modern tools and automation to solve meaningful problems and deliver measurable value.",
    Icon: Workflow,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0A0F0D] py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald/[0.045] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Section introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald">
              <span className="h-px w-8 bg-emerald" />
              About me
            </p>

            <h2 className="max-w-md text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl">
              Engineering ideas into{" "}
              <span className="text-gray-500">real-world solutions.</span>
            </h2>

            <p className="mt-7 max-w-md text-base leading-8 text-gray-400">
              I am Michael Ibangha, a software engineer working across
              full-stack development, enterprise applications and DevOps. I
              enjoy understanding complex problems and building the systems that
              make solutions work.
            </p>

            <p className="mt-5 max-w-md text-base leading-8 text-gray-400">
              My work spans web and mobile products, backend services,
              database-driven platforms and deployment infrastructure. I
              approach each project with a focus on usability, reliability and
              long-term maintainability.
            </p>

            <a
              href="#experience"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-emerald"
            >
              Explore my experience
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Engineering principles */}
          <div className="space-y-4">
            {principles.map(({ number, title, description, Icon }, index) => (
              <motion.article
                key={number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-emerald/25 hover:bg-white/[0.035] sm:p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald/20 bg-emerald/[0.07] text-emerald transition-all duration-300 group-hover:border-emerald/50 group-hover:bg-emerald/15">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">
                        {title}
                      </h3>
                      <span className="text-xs tracking-widest text-gray-600">
                        {number}
                      </span>
                    </div>

                    <p className="text-sm leading-7 text-gray-400">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
