import React from "react";
import { about } from "../data/data";
import {
  Heart,
  Sparkles,
  Target,
  Users,
  ArrowUpRight,
  Quote,
} from "lucide-react";

function About() {
  const valueIcons = [Heart, Target, Sparkles, Users];

  return (
    <main className="relative isolate overflow-hidden bg-white text-slate-800 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-emerald-400/25 blur-3xl dark:bg-emerald-500/10" />
      <div className="pointer-events-none absolute -right-32 top-[35%] -z-10 h-96 w-96 rounded-full bg-teal-400/25 blur-3xl dark:bg-teal-500/10" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/10" />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm dark:border-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300">
            <Sparkles size={16} />
            Get to know us
          </div>

          <h1 className="larian text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            {about.heroTitle}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            {about.heroSubtitle}
          </p>

          <div className="group relative mt-12 overflow-hidden rounded-3xl border border-white/70 bg-white/60 p-2 shadow-2xl shadow-emerald-950/10 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:shadow-emerald-900/20 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/20">
            <img
              src={about.heroImage}
              alt="Our team and story"
              className="h-64 w-full rounded-2xl object-cover transition duration-700 group-hover:scale-[1.02] sm:h-80 md:h-[460px]"
            />
            <div className="pointer-events-none absolute inset-2 rounded-2xl bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg backdrop-blur-md dark:bg-slate-900/90 dark:text-white">
              <Heart size={16} className="text-emerald-500" />
              Built with purpose
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid items-center gap-10 rounded-3xl border border-slate-200/80 bg-white/75 p-7 shadow-sm backdrop-blur-md sm:p-10 md:grid-cols-[auto_1fr] md:gap-12 md:p-14 dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20 sm:h-20 sm:w-20">
            <Quote size={34} />
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Our Story
            </span>
            <h2 className="larian mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              {about.story.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
              {about.story.content}
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            What Drives Us
          </span>
          <h2 className="larian mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl dark:text-white">
            The Values We <span className="text-emerald-600 dark:text-emerald-400">Live By</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            The principles behind every decision, every connection, and every step forward.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.map((value, index) => {
            const Icon = valueIcons[index % valueIcons.length];

            return (
              <article
                key={value.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-900/10 dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-emerald-800"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-400/20 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-teal-400/30" />

                <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-950 dark:text-emerald-400 dark:group-hover:bg-emerald-500 dark:group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="relative text-xl font-bold text-slate-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </section>

      {/* Our Team */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            The People Behind It
          </span>
          <h2 className="larian mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl dark:text-white">
            Meet Our <span className="text-emerald-600 dark:text-emerald-400">Team</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Passionate people working together to make a meaningful difference.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {about.team.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-3 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-950/10 dark:border-slate-800 dark:bg-slate-900/80"
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-emerald-700 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={21} />
                </div>
              </div>

              <div className="px-4 pb-5 pt-5">
                <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                  {member.name}
                </h3>
                <span className="mt-2 inline-block rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300">
                  {member.role}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
