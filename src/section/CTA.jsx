import React from "react";
import { cta } from "../data/data";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-16 transition-colors duration-500 sm:px-6 sm:py-20 md:px-8 md:py-24 dark:bg-slate-950">
      {/* Background Decorations */}
<div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />

<div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-teal-400/25 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        {/* Main CTA Container */}
        <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-xl shadow-slate-200/40 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-200/20 sm:rounded-[2.5rem] dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
          {/* Top Image */}
          <div className="relative h-64 overflow-hidden sm:h-80 md:h-[420px] lg:h-[480px]">
            <img
              src={cta.image}
              alt="Explore your next career opportunity"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

            {/* Image Badge */}
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-md sm:left-8 sm:top-8">
              <Sparkles size={16} className="text-emerald-300" />
              Your Next Chapter Starts Here
            </div>

            {/* Image Caption */}
            <div className="absolute bottom-6 left-5 right-5 sm:bottom-10 sm:left-10 md:bottom-12 md:left-14">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-emerald-300 sm:text-sm">
                Find Your Future
              </p>
              <p className="max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Discover opportunities that move you forward.
              </p>
            </div>
          </div>

          {/* Horizontal Cylinder / Pill Structure */}
          <div className="relative z-10 px-4 pb-4 pt-0 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
            <div className="relative -mt-5 flex flex-col items-center gap-6 rounded-[1.75rem] border border-emerald-100 bg-white px-5 py-8 text-center shadow-lg shadow-slate-900/5 transition-all duration-500 hover:border-emerald-300 sm:-mt-8 sm:rounded-full sm:px-10 sm:py-8 md:-mt-10 md:flex-row md:justify-between md:gap-8 md:px-12 md:py-9 dark:border-slate-700 dark:bg-slate-950 dark:hover:border-emerald-800">
              {/* CTA Text */}
              <div className="max-w-2xl">
                <h2 className="larian font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
                  {cta.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
                  {cta.subtitle}
                </p>
              </div>

              {/* CTA Button */}
              <Link
                to="/jobs"
                className="group/btn inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-emerald-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/30 active:translate-y-0 sm:w-auto dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:dark:text-slate-950"
              >
                {cta.buttonText}
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;