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
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <div className="cursor-pointer rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:border-primary/20 hover:shadow-md">
        <div className="text-3xl font-bold tracking-tight text-primary">247M</div>
        <div className="mt-1 text-sm text-muted">Annual Malaria Cases</div>
      </div>
      <div className="cursor-pointer rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:border-primary/20 hover:shadow-md">
        <div className="text-3xl font-bold tracking-tight text-red-500">619K</div>
        <div className="mt-1 text-sm text-muted">Annual Deaths</div>
      </div>
      <div className="cursor-pointer rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:border-primary/20 hover:shadow-md">
        <div className="text-3xl font-bold tracking-tight text-primary">90%</div>
        <div className="mt-1 text-sm text-muted">Sensitivity Target</div>
      </div>
      <div className="cursor-pointer rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:border-primary/20 hover:shadow-md">
        <div className="text-3xl font-bold tracking-tight text-primary">80%</div>
        <div className="mt-1 text-sm text-muted">Specificity Target</div>
      </div>

      <div className="col-span-2 mt-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm sm:col-span-4">
        <div className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-muted">
          Today
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-xl font-bold tracking-tight text-primary">
              {Math.floor(todayCases).toLocaleString()}
            </div>
            <div className="mt-0.5 text-xs text-muted">Cases Today</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold tracking-tight text-red-500">
              {Math.floor(todayDeaths).toLocaleString()}
            </div>
            <div className="mt-0.5 text-xs text-muted">Deaths Today</div>
          </div>
        </div>
      </div>
    </div>
  );
}
