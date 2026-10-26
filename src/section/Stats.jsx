import React from "react";
import { stats } from "../data/data";

function Stats() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-14 transition-colors duration-500 sm:py-16 md:px-6 md:py-20 dark:bg-slate-950 bg-slate-50">
     {/* Background Decorations */}
<div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />

<div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-teal-400/25 blur-3xl" />
      <div className="mx-auto max-w-7xl">
<div className="mb-10 text-center">
  <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
    Our Impact
  </span>

  <h2 className="larian mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
  Trusted by Job Seekers Worldwide
</h2>

  <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
    Helping professionals discover better opportunities and take the next
    step in their careers.
  </p>
</div>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-800"
            >
              {/* Hover Glow */}
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-emerald-900/40"></div>

              <div className="relative flex items-center justify-between">

                {/* Content */}
                <div>
                  <span className="block text-3xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-emerald-600 sm:text-4xl dark:text-white dark:group-hover:text-emerald-400">
                    {stat.value}
                  </span>

                  <span className="mt-2 block text-sm font-medium text-slate-500 transition-colors duration-300 group-hover:text-slate-700 sm:text-base dark:text-slate-400 dark:group-hover:text-slate-300">
                    {stat.label}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-600 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-950/50 dark:text-emerald-400 dark:group-hover:bg-emerald-500 dark:group-hover:text-white">
                  {stat.icon}
                </div>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;
