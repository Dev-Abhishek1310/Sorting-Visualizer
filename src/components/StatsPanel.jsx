import { formatTime } from "../utlis/formatUtils.js";

export default function StatsPanel({ elapsed, comparisons, mutations, running, paused }) {
  return (
    <section className="bg-slate-900/60 rounded-2xl p-4 shadow grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <div>
        <div className="text-xs text-slate-400">Timer</div>
        <div className="text-xl font-semibold">{formatTime(elapsed)}</div>
      </div>
      <div>
        <div className="text-xs text-slate-400">Comparisons</div>
        <div className="text-xl font-semibold">{comparisons}</div>
      </div>
      <div>
        <div className="text-xs text-slate-400">Swaps/Sets</div>
        <div className="text-xl font-semibold">{mutations}</div>
      </div>
      <div>
        <div className="text-xs text-slate-400">Status</div>
        <div className="text-sm font-medium">{!running ? "Idle" : paused ? "Paused" : "Running"}</div>
      </div>
    </section>
  );
}
