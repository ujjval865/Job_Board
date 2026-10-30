import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  BriefcaseBusiness,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

function JobCard({ job }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5 sm:p-6 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-800">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl transition-colors duration-300 group-hover:bg-emerald-400/20" />

      {/* Company Information */}
      <div className="relative flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
          {job.companyLogo ? (
            <img
              src={job.companyLogo}
              alt={`${job.companyName} logo`}
              className="h-full w-full object-contain p-1"
            />
          ) : (
            <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
              {job.companyName?.charAt(0) || "J"}
            </span>
          )}
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-800 dark:text-slate-200">
            {job.companyName}
          </p>

          <span className="mt-1 inline-block rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
            {job.employmentType || "Job Opportunity"}
          </span>
        </div>
      </div>

      {/* Job Title */}
      <h2 className="relative mt-5 line-clamp-2 text-xl leading-snug font-bold text-slate-900 transition-colors group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400">
        {job.title}
      </h2>

      {/* Location */}
      <div className="relative mt-4 flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
        <MapPin size={17} className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />

        <span>
          {job.locationRestrictions?.length
            ? job.locationRestrictions.join(", ")
            : "Location not specified"}
        </span>
      </div>

      {/* Job Description */}
      <p className="relative mt-4 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {job.excerpt || "Explore this opportunity and learn more about the role."}
      </p>

      {/* Categories */}
      {job.categories?.length > 0 && (
        <div className="relative mt-4 flex flex-wrap gap-2">
          {job.categories.slice(0, 3).map((category) => (
            <span
              key={category}
              className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {category.replaceAll("-", " ")}
            </span>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="relative mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
        <Link
          to={`/jobs/${encodeURIComponent(job.guid)}`}
          state={{ job }}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-emerald-800 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-400"
        >
          View Details
          <ArrowUpRight size={17} />
        </Link>

        <a
          href={job.applicationLink || job.guid}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200 dark:focus:ring-emerald-900"
        >
          Apply Now
          <ExternalLink size={16} />
        </a>
      </div>
    </article>
  );
}

export default JobCard;
