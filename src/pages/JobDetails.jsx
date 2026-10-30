import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  BriefcaseBusiness,
  ExternalLink,
} from "lucide-react";

function JobDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const job = state?.job;

  // Agar job data available nahi hai
  if (!job) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 text-center dark:bg-slate-950">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Job Details Not Available
        </h1>

        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Please open this page from the jobs listing.
        </p>

        <Link
          to="/jobs"
          className="mt-6 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
        >
          Browse Jobs
        </Link>
      </main>
    );
  }

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white px-4 py-10 text-slate-800 dark:bg-slate-950 dark:text-slate-100 sm:px-6 sm:py-14">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10" />

      <div className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl dark:bg-teal-500/10" />

      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
        >
          <ArrowLeft size={18} />
          Back to Jobs
        </button>

        {/* Job Header */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
              {job.companyLogo ? (
                <img
                  src={job.companyLogo}
                  alt={`${job.companyName} logo`}
                  className="h-full w-full object-contain p-1"
                />
              ) : (
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  {job.companyName?.charAt(0) || "J"}
                </span>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-semibold text-emerald-600 dark:text-emerald-400">
                {job.companyName}
              </p>

              <h1 className="mt-2 text-2xl leading-tight font-extrabold text-slate-900 sm:text-3xl dark:text-white">
                {job.title}
              </h1>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={17} />
                  {job.locationRestrictions?.length
                    ? job.locationRestrictions.join(", ")
                    : "Location not specified"}
                </span>

                <span className="inline-flex items-center gap-2">
                  <BriefcaseBusiness size={17} />
                  {job.employmentType || "Employment type not specified"}
                </span>
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <a
            href={job.applicationLink || job.guid}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-700 sm:w-auto"
          >
            Apply Now
            <ExternalLink size={17} />
          </a>
        </section>

        {/* Job Description */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            About This Job
          </h2>

          <div
            className="job-description mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base"
            dangerouslySetInnerHTML={{
              __html: job.description || job.excerpt || "No description available.",
            }}
          />
        </section>

        {/* Categories */}
        {job.categories?.length > 0 && (
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Skills & Categories
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400"
                >
                  {category.replaceAll("-", " ")}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default JobDetails;
