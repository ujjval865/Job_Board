import React, { useState } from "react";
import { faqs } from "../data/data";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";

function FAQS() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 transition-colors duration-500 sm:py-20 md:py-24 dark:bg-slate-950">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-teal-400/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-400">
            <HelpCircle size={15} />
            Got Questions?
          </span>

          <h2 className="larian text-3xl sm:text-4xl md:text-5xl mt-5 font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
            Frequently Asked{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            Everything you need to know about finding your next remote
            opportunity and getting started with us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq) => {
            const open = isOpen === faq.id;

            return (
              <div
                key={faq.id}
                className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                  open
                    ? "border-emerald-300 bg-emerald-50/50 shadow-lg shadow-emerald-100/40 dark:border-emerald-800 dark:bg-slate-900 dark:shadow-emerald-950/20"
                    : "border-slate-200 bg-white hover:border-emerald-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-800"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setIsOpen(open ? null : faq.id)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span
                    className={`text-base font-semibold leading-7 transition-colors duration-300 sm:text-lg ${
                      open
                        ? "text-emerald-700 dark:text-emerald-400"
                        : "text-slate-800 group-hover:text-emerald-700 dark:text-slate-100 dark:group-hover:text-emerald-400"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      open
                        ? "rotate-180 bg-emerald-600 text-white dark:bg-emerald-500"
                        : "bg-slate-100 text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-700 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-emerald-950 dark:group-hover:text-emerald-400"
                    }`}
                  >
                    {open ? <Minus size={19} /> : <Plus size={19} />}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 sm:px-7">
                      <div className="mb-4 h-px w-full bg-emerald-200/70 dark:bg-slate-800" />
                      <p className="text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Support Card */}
        <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-3xl border border-emerald-100 bg-emerald-50/70 p-6 text-center sm:flex-row sm:p-8 sm:text-left dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
              <MessageCircle size={23} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Still have questions?
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                We’re here to help you find the right answers.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-lg dark:bg-emerald-500 dark:hover:bg-emerald-400"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQS;
