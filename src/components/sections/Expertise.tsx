import { motion } from "motion/react";
import type { IconType } from "react-icons";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiNginx,
  SiGithubactions,
  SiExpo,
  SiFigma,
  SiGit,
  SiPostman,
} from "react-icons/si";

import { Database, Smartphone, Wrench } from "lucide-react";

type Technology = {
  name: string;
  Icon: IconType;
  color: string;
};

type SkillGroup = {
  title: string;
  description: string;
  technologies: Technology[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    description: "Modern, responsive and accessible user experiences.",
    technologies: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend & Enterprise",
    description: "Application logic, APIs and enterprise software.",
    technologies: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
      { name: "ASP.NET", Icon: SiDotnet, color: "#512BD4" },
    ],
  },
  {
    title: "Databases & Data",
    description: "Relational, document and managed database platforms.",
    technologies: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
    ],
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile application development.",
    technologies: [
      { name: "React Native", Icon: SiReact, color: "#61DAFB" },
      { name: "Expo", Icon: SiExpo, color: "#FFFFFF" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    description: "Deployment, automation and infrastructure operations.",
    technologies: [
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
      { name: "Linux", Icon: SiLinux, color: "#FCC624" },
      { name: "Nginx", Icon: SiNginx, color: "#009639" },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Tools that support design, collaboration and delivery.",
    technologies: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className="group rounded-2xl border border-white/[0.08] bg-[#101713] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-emerald/25 hover:shadow-xl hover:shadow-black/20 sm:p-7"
    >
      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {group.title}
          </h3>
          <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
            {group.description}
          </p>
        </div>

        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald/60 transition-all duration-300 group-hover:scale-150 group-hover:bg-emerald" />
      </div>

      <div className="grid grid-cols-3 gap-3">
        {group.technologies.map(({ name, Icon, color }) => (
          <motion.div
            key={name}
            whileHover={{ y: -4, scale: 1.04 }}
            title={name}
            className="flex min-h-[88px] flex-col items-center justify-center gap-3 rounded-xl border border-white/[0.06] bg-black/20 px-2 py-4 transition-all duration-300 hover:border-emerald/25 hover:bg-emerald/[0.045]"
          >
            <Icon
              size={27}
              color={color}
              className="transition-transform duration-300 hover:scale-110"
            />
            <span className="text-center text-[10px] font-medium leading-tight text-gray-400 sm:text-xs">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.article>
  );
}

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-[#080C0A] py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute -right-48 top-40 h-[450px] w-[450px] rounded-full bg-emerald/[0.04] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald">
            <span className="h-px w-8 bg-emerald" />
            Technical expertise
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            The tools behind <span className="text-gray-500">the work.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
            A broad engineering toolkit spanning frontend and backend
            development, enterprise platforms, databases, mobile applications
            and infrastructure.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
            <Database className="text-emerald" size={22} />
            <div>
              <p className="text-sm font-semibold text-white">Data systems</p>
              <p className="mt-1 text-xs text-gray-500">
                Database design and integration
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
            <Smartphone className="text-emerald" size={22} />
            <div>
              <p className="text-sm font-semibold text-white">Cross-platform</p>
              <p className="mt-1 text-xs text-gray-500">
                Web and mobile experiences
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
            <Wrench className="text-emerald" size={22} />
            <div>
              <p className="text-sm font-semibold text-white">Delivery</p>
              <p className="mt-1 text-xs text-gray-500">
                Tooling, automation and deployment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
