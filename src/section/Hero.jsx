import React from "react";
import { hero } from "../data/data";

function Hero() {
  return (
    <section className="relative  w-full overflow-hidden px-4 py-16 transition-colors duration-500 md:px-6 md:py-24 dark:bg-slate-950 bg-slate-50">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-teal-400/25 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Small Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 transition-colors duration-300 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
              Find your next opportunity
            </div>

            {/* Heading */}
            <h2 className="larian text-xl font-medium leading-tight text-slate-900 transition-colors duration-300 md:text-4xl md:font-bold lg:text-6xl dark:text-white">
              {hero.title}
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 transition-colors duration-300 md:text-lg md:leading-8 dark:text-slate-400">
              {hero.subtitle}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              {/* Primary Button */}
              <button className="button-primary group rounded-xl px-6 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95">
                <span className="flex items-center gap-2">
                  {hero.ctaPrimary}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>

              {/* Secondary Button */}
              <button className="group rounded-xl border border-emerald-600 px-6 py-3.5 font-semibold text-emerald-700 transition-all duration-700 hover:-translate-y-1 hover:bg-emerald-600 hover:text-white hover:shadow-lg active:scale-95 dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-white">
                <span className="flex items-center gap-2">
                  {hero.ctaSecondary}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="group relative">
            {/* Background Glow */}
            <div className="absolute -inset-3 rounded-[2rem] bg-emerald-200/40 blur-2xl transition-all duration-500 group-hover:bg-emerald-300/50 dark:bg-emerald-900/20"></div>

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/60 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/40">
              <img
                src={hero.image}
                alt="Job search"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

              {/* Image Badge */}
              <span className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900/90 dark:text-white">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500"></span>
                {hero.badge}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
