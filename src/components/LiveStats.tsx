"use client";

import { useEffect, useState } from "react";

const CASES_PER_SECOND = 247_000_000 / 365.25 / 24 / 60 / 60;
const DEATHS_PER_SECOND = 619_000 / 365.25 / 24 / 60 / 60;

export default function LiveStats() {
  const [todayCases, setTodayCases] = useState(0);
  const [todayDeaths, setTodayDeaths] = useState(0);

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const todayElapsed = (now - new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()) / 1000;
      setTodayCases(todayElapsed * CASES_PER_SECOND);
      setTodayDeaths(todayElapsed * DEATHS_PER_SECOND);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="group cursor-pointer rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md">
          <svg className="mx-auto h-6 w-6 text-primary/40" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
          </svg>
          <div className="mt-2 text-3xl font-bold tracking-tight text-primary">247M</div>
          <div className="mt-1 text-sm text-muted">Annual Malaria Cases</div>
        </div>
        <div className="group cursor-pointer rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md">
          <svg className="mx-auto h-6 w-6 text-red-300" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
          <div className="mt-2 text-3xl font-bold tracking-tight text-red-500">619K</div>
          <div className="mt-1 text-sm text-muted">Annual Deaths</div>
        </div>
        <div className="group cursor-pointer rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md">
          <svg className="mx-auto h-6 w-6 text-primary/40" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
          <div className="mt-2 text-3xl font-bold tracking-tight text-primary">90%</div>
          <div className="mt-1 text-sm text-muted">Sensitivity Target</div>
        </div>
        <div className="group cursor-pointer rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md">
          <svg className="mx-auto h-6 w-6 text-primary/40" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
          </svg>
          <div className="mt-2 text-3xl font-bold tracking-tight text-primary">80%</div>
          <div className="mt-1 text-sm text-muted">Specificity Target</div>
        </div>

        <div className="col-span-2 mt-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm sm:col-span-4">
          <div className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Live Counter &mdash; Today
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg bg-accent p-4 text-center">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl font-bold tracking-tight text-primary">
                  {Math.floor(todayCases).toLocaleString()}
                </span>
                <span className="text-xs text-primary/60">cases</span>
              </div>
              <div className="mt-1 text-xs text-muted">Estimated cases today</div>
            </div>
            <div className="rounded-lg bg-red-50 p-4 text-center">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl font-bold tracking-tight text-red-500">
                  {Math.floor(todayDeaths).toLocaleString()}
                </span>
                <span className="text-xs text-red-400">deaths</span>
              </div>
              <div className="mt-1 text-xs text-muted">Estimated deaths today</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
