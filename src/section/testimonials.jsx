import React from "react";
import { testimonials } from "../data/data";
import { Star, Quote } from "lucide-react";

function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-16 transition-colors duration-500 sm:py-20 md:py-24 dark:bg-slate-950">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-teal-400/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-400">
            <Star size={14} fill="currentColor" />
            Community Love
          </span>

          <h2 className="larian mt-5 font-bold leading-tight tracking-tight text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl">
            Real Stories,{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Real Success
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            Discover how professionals are finding better opportunities and
            building their dream careers with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={item.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/50 sm:p-8 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-800 dark:hover:shadow-emerald-950/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative Quote */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-950/70 dark:text-emerald-400 dark:group-hover:bg-emerald-500 dark:group-hover:text-white">
                  <Quote size={24} />
                </div>

                <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5 dark:bg-amber-950/40">
                  {Array.from(
                    {
                      length: Math.max(
                        0,
                        Math.min(5, Number(item.rating) || 0),
                      ),
                    },
                    (_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill="currentColor"
                        className="text-amber-400"
                      />
                    ),
                  )}
                  <span className="ml-1 text-sm font-bold text-slate-700 dark:text-slate-200">
                    {item.rating}
                  </span>
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="mb-8 flex-1 text-base leading-7 text-slate-600 transition-colors duration-300 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-300">
                “{item.content}”
              </p>

              {/* Bottom Accent */}
              <div className="mb-6 h-px w-full bg-slate-100 transition-colors duration-300 group-hover:bg-emerald-100 dark:bg-slate-800 dark:group-hover:bg-emerald-900" />

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    loading="lazy"
                    className="h-14 w-14 rounded-2xl border-2 border-white object-cover shadow-md transition-transform duration-500 group-hover:scale-105 dark:border-slate-700"
                  />
                  <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-[3px] border-white bg-emerald-500 dark:border-slate-900" />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
