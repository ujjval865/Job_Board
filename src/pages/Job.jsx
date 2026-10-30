import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "../jobsSlice";
import JobCard from "../components/JobCard";

function Job() {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.slice1);

  useEffect(() => {
    dispatch(FetchData(20));
  }, [dispatch]);

  if (loading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-white dark:bg-slate-950">
        <h1 className="larian animate-pulse text-2xl font-bold text-emerald-600 dark:text-emerald-400">
          Data is Loading...
        </h1>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-white dark:bg-slate-950">
        <h1 className="larian text-xl font-bold text-red-500">
          Error has Occured
        </h1>
      </main>
    );
  }

  const jobs = data?.jobs ?? [];

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white px-4 py-14 text-slate-800 transition-colors duration-300 sm:px-6 sm:py-16 lg:px-10 dark:bg-slate-950 dark:text-slate-100">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-emerald-300/25 blur-3xl dark:bg-emerald-500/10" />

      <div className="pointer-events-none absolute -right-24 top-96 -z-10 h-72 w-72 rounded-full bg-teal-300/25 blur-3xl dark:bg-teal-500/10" />

      <div className="mx-auto max-w-7xl">

        {/* Center Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-400">
            YOUR NEXT CHAPTER STARTS HERE
          </span>

          <h1 className="larian mt-5 text-3xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Explore Opportunities
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
            Discover roles that match your career goals.
            Find exciting opportunities and take the next step in your journey.
          </p>

          {/* Decorative Line */}
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400" />

        </div>

        {/* Jobs Grid */}
        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {jobs.map((job) => (
              <JobCard key={job.guid} job={job} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-12 text-center dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              No Jobs Found
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Please check back later for new opportunities.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}

export default Job;