import React from "react";
import { howItWorks } from "../data/data";

function Work() {
  return (
    <section className="relative  w-full overflow-hidden bg-slate-50 py-16 transition-colors duration-500 dark:bg-slate-950 sm:py-20 md:py-24">
      {/* Background Decorations */}
<div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />

<div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-teal-400/25 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ========== Section Header ========== */}
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
            How It Works
          </span>

          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
            <span className="larian block sm:inline">
              Land Your Dream Job in
            </span>{" "}
            <span className="larian mt-1 block text-emerald-600 sm:mt-0 sm:inline dark:text-emerald-400">
              Four Easy Steps
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            From creating your profile to getting hired — we’ve made the process
            simple, fast and transparent.
          </p>
        </div>

        {/* ========== Steps Grid ========== */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, index) => (
            <div
              key={step.id}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-700"
            >
              {/* Step Number Badge */}
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-bold text-white shadow-md shadow-emerald-200 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500 dark:shadow-emerald-900/40">
                  {step.step}
                </span>

                {/* Connecting Line (only desktop & not last item) */}
                {index < howItWorks.length - 1 && (
                  <div className="absolute left-[calc(100%+0.5rem)] top-10 hidden h-0.5 w-8 bg-slate-200 lg:block dark:bg-slate-700"></div>
                )}
              </div>

              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:rotate-6 group-hover:bg-emerald-100 dark:bg-emerald-950/50 dark:text-emerald-400 dark:group-hover:bg-emerald-900/40">
                <step.icon size={26} strokeWidth={2} />
              </div>

              {/* Title + Description */}
              <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                {step.title}
              </h3>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {step.description}
              </p>

              {/* Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl bg-emerald-500 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
