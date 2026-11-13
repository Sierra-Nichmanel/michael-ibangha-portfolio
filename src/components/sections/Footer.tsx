
import { ArrowUp, ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Selected Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#080B09] px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <a href="#home" className="group inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/[0.08] text-sm font-bold text-emerald-300">
              MI
            </span>
            <span>
              <span className="block font-semibold tracking-wide text-white">
                Michael Ibangha
              </span>
              <span className="mt-1 block text-xs text-gray-500">
                Software Engineer
              </span>
            </span>
          </a>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-400 transition hover:text-emerald-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#home"
            aria-label="Back to top"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
          >
            <ArrowUp size={18} />
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.07] pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Michael Ibangha. All rights reserved.</p>
          <p className="inline-flex items-center gap-1">
            Designed with intention. Built with{" "}
            <span className="font-medium text-emerald-400">purpose</span>.
            <ArrowUpRight size={13} />
          </p>
        </div>
      </div>
    </footer>
  );
}
