import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import type { IconType } from "react-icons";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiLinux,
} from "react-icons/si";

// TEMPORARY: Replace this with the generated hero photograph tomorrow.
const HERO_BACKGROUND = "/images/hero_background_image.png";

const technologies: { name: string; Icon: IconType; color: string }[] = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: ".NET", Icon: SiDotnet, color: "#512BD4" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  { name: "Linux", Icon: SiLinux, color: "#FCC624" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-obsidian pt-24"
    >
      {/* Background image placeholder. Swap for generated image later. */}
      <motion.div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />

      {/* Dark overlays preserve text contrast. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050907] via-[#050907]/95 to-[#050907]/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="mx-auto w-full max-w-7xl px-6 pb-12 pt-20 lg:px-10">
        <div className="grid min-h-[580px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald/30 bg-black/40 px-4 py-2.5 shadow-lg shadow-emerald/5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-emerald sm:text-sm">
                SOFTWARE ENGINEER
              </span>
              <span className="text-white/30">|</span>
              <span className="text-xs text-gray-300 sm:text-sm">
                Abuja, Nigeria
              </span>
            </div>

            <p className="mb-3 text-base font-medium text-gray-300 sm:text-lg">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl xl:text-[5.5rem]">
              Michael
              <br />
              <span className="bg-gradient-to-r from-emerald via-emerald-light to-white bg-clip-text text-transparent">
                Ibangha.
              </span>
            </h1>

            <h2 className="mt-7 max-w-2xl text-xl font-semibold leading-snug text-white sm:text-2xl md:text-3xl">
              Software Engineer
              <span className="text-emerald"> | </span>
              <span className="text-gray-200">Full-Stack & DevOps</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
              Building modern software products, enterprise applications and
              reliable digital infrastructure. I turn complex ideas into
              practical, scalable solutions.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="#projects"
                whileHover={{ y: -4, scale: 1.025 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-emerald px-7 py-4 font-semibold text-[#04100B] shadow-lg shadow-emerald/20 transition-shadow hover:shadow-emerald/40"
              >
                Explore My Work
                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-md transition-colors hover:border-emerald hover:bg-emerald/10 hover:text-emerald"
              >
                <Mail size={18} />
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Visual breathing room: the background image remains visible here. */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 1 }}
            className="hidden lg:block"
          >
            <div className="ml-auto max-w-sm rounded-2xl border border-emerald/20 bg-black/35 p-6 shadow-2xl shadow-emerald/10 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-emerald/50 hover:shadow-emerald/20">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Engineering mindset
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald shadow-[0_0_12px_#10B981]" />
              </div>
              {[
                "Design with purpose",
                "Build for scale",
                "Automate with care",
                "Deliver real value",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.65 + index * 0.12 }}
                  className="flex items-center gap-3 border-t border-white/10 py-4"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald/10 text-xs font-bold text-emerald">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-medium text-gray-200">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technology icon strip */}
        <div className="mt-12 border-t border-white/15 pt-7">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">
              Technologies & tools
            </p>
            <span className="text-xs text-gray-500">Selected technologies</span>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
            {technologies.map(({ name, Icon, color }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.045 }}
                whileHover={{ y: -5, scale: 1.06 }}
                className="group flex min-w-0 flex-col items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-2 py-3 backdrop-blur-sm transition-colors hover:border-emerald/40 hover:bg-emerald/5"
                title={name}
              >
                <Icon
                  size={25}
                  color={color}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-center text-[10px] font-medium text-gray-400 transition-colors group-hover:text-white sm:text-xs">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <a
          href="#about"
          className="mx-auto mt-9 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500 transition-colors hover:text-emerald"
        >
          Scroll to explore <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
