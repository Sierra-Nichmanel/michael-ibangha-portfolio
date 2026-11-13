import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Selected Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <nav
          className={`mx-auto flex h-[72px] max-w-7xl items-center justify-between rounded-2xl border px-5 transition-all duration-500 sm:px-7 ${
            scrolled
              ? "border-white/10 bg-[#090E0C]/90 shadow-2xl shadow-black/30 backdrop-blur-2xl"
              : "border-white/[0.08] bg-[#090E0C]/55 backdrop-blur-xl"
          }`}
        >
          {/* Brand */}
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald/30 bg-emerald/[0.08] text-sm font-bold tracking-tight text-emerald transition-all duration-300 group-hover:border-emerald/70 group-hover:bg-emerald/15">
              MI
            </span>

            <span className="hidden sm:block">
              <span className="block text-sm font-semibold tracking-wide text-white">
                Michael Ibangha
              </span>
              <span className="mt-0.5 block text-[10px] uppercase tracking-[0.19em] text-gray-500">
                Software Engineer
              </span>
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 lg:flex xl:gap-9">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative py-2 text-[13px] font-medium text-gray-400 transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-emerald transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:border-emerald/50 hover:bg-emerald/10 hover:text-emerald lg:inline-flex"
          >
            Let's talk
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-emerald/40 hover:text-emerald lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile navigation panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-24 z-40 rounded-2xl border border-white/10 bg-[#0B120F]/95 p-5 shadow-2xl shadow-black/50 backdrop-blur-2xl lg:hidden"
          >
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Navigation
              </span>
              <span className="text-xs text-emerald">MI.</span>
            </div>

            <div className="flex flex-col">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.045 }}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-white/[0.06] py-4 text-sm font-medium text-gray-300 transition-colors hover:text-emerald"
                >
                  {link.label}
                  <ArrowUpRight size={15} className="text-gray-600" />
                </motion.a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald px-5 py-3.5 text-sm font-semibold text-[#04100B] transition-colors hover:bg-emerald-light"
            >
              Start a conversation <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
