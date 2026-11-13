
import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

const EMAIL = "morgum17@gmail.com";
const WHATSAPP = "2348024912420";

function Contact() {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const emailSubject = encodeURIComponent(
      subject.trim() || `Portfolio enquiry from ${name}`
    );

    const emailBody = encodeURIComponent(
      `Hello Michael,\n\n${message}\n\nRegards,\n${name}\n${senderEmail}`
    );

    window.location.href = `mailto:${EMAIL}?subject=${emailSubject}&body=${emailBody}`;
  }

  const whatsappMessage = encodeURIComponent(
    "Hello Michael, I came across your portfolio and would like to discuss a project."
  );

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-500/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-medium tracking-wide text-emerald-300">
            <Sparkles size={14} />
            HAVE A PROJECT IN MIND?
          </span>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's build something{" "}
            <span className="text-emerald-400">meaningful.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400">
            Whether you have a product idea, a technical challenge, or an
            opportunity to collaborate, I'd be glad to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div className="rounded-2xl border border-white/[0.08] bg-[#101713] p-7 sm:p-8">
              <p className="text-sm text-gray-400">Prefer a direct conversation?</p>

              <a
                href={`https://wa.me/${WHATSAPP}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-center justify-between rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] p-5 transition hover:border-emerald-400/40 hover:bg-emerald-400/[0.11]"
              >
                <span className="flex items-center gap-4">
                  <span className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                    <MessageCircle size={22} />
                  </span>
                  <span>
                    <span className="block font-medium text-white">Chat on WhatsApp</span>
                    <span className="mt-1 block text-sm text-gray-400">Let's talk about your idea</span>
                  </span>
                </span>
                <ArrowUpRight className="text-emerald-300" size={20} />
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="mt-4 flex items-center gap-4 rounded-xl border border-white/[0.07] p-5 transition hover:border-white/20 hover:bg-white/[0.03]"
              >
                <span className="rounded-xl bg-white/[0.06] p-3 text-gray-300">
                  <Mail size={22} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-gray-400">Email me</span>
                  <span className="mt-1 block break-all font-medium text-white">{EMAIL}</span>
                </span>
              </a>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#101713] p-7">
              <p className="text-sm font-medium text-white">What I can help with</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Web applications",
                  "Backend systems",
                  "Mobile development",
                  "DevOps & infrastructure",
                  "Technical collaboration",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] px-3 py-2 text-xs text-gray-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/[0.08] bg-[#101713] p-7 sm:p-9"
          >
            <h3 className="text-xl font-semibold text-white">Send an enquiry</h3>
            <p className="mt-2 text-sm text-gray-400">
              Tell me a little about what you're working on.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="block text-sm text-gray-300">
                Your name
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-xl border border-white/[0.09] bg-[#0A0D0B] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-400/60"
                />
              </label>

              <label className="block text-sm text-gray-300">
                Email address
                <input
                  required
                  type="email"
                  value={senderEmail}
                  onChange={(event) => setSenderEmail(event.target.value)}
                  placeholder="john@example.com"
                  className="mt-2 w-full rounded-xl border border-white/[0.09] bg-[#0A0D0B] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-400/60"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm text-gray-300">
              Subject
              <input
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                placeholder="What would you like to discuss?"
                className="mt-2 w-full rounded-xl border border-white/[0.09] bg-[#0A0D0B] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-400/60"
              />
            </label>

            <label className="mt-5 block text-sm text-gray-300">
              Message
              <textarea
                required
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me about your project, idea, or opportunity..."
                className="mt-2 w-full resize-y rounded-xl border border-white/[0.09] bg-[#0A0D0B] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-400/60"
              />
            </label>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-400 px-6 py-4 text-sm font-semibold text-[#07110C] transition hover:bg-emerald-300 sm:w-auto"
            >
              Send message
              <Send size={16} />
            </button>

            <p className="mt-4 text-xs leading-5 text-gray-500">
              This opens your default email application with your message
              prepared. Nothing is sent automatically.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;