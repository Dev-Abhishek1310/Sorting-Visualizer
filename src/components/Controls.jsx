import { ALGORITHMS } from "../algorithms";

export default function Controls({
  algo, setAlgo, size, setSize, speed, setSpeed,
  shuffle, start, pause, resume, reset, stepOnce, running, paused
}) {
  return (
    <section className="grid md:grid-cols-3 gap-3 mb-4">
      <div className="bg-slate-900/60 rounded-2xl p-4 shadow">
        <label className="block text-sm mb-2">Algorithm</label>
        <select
          value={algo}
          onChange={(e) => setAlgo(e.target.value)}
          className="w-full bg-slate-800 rounded-xl p-2 outline-none"
        >
          {ALGORITHMS.map((a) => (
            <option key={a.key} value={a.key}>{a.label}</option>
          ))}
        </select>
        {(algo === "counting" || algo === "radix") && (
          <p className="text-xs text-slate-400 mt-2">
            Tip: For Counting/Radix, values are limited to 0–99 for clearer buckets.
          </p>
        )}
      </div>

      <div className="bg-slate-900/60 rounded-2xl p-4 shadow">
        <label className="block text-sm">Bars: {size}</label>
        <input type="range" min={5} max={200} value={size}
          onChange={(e) => setSize(parseInt(e.target.value))} className="w-full" />
        <label className="block text-sm mt-3">Speed: {speed}</label>
        <input type="range" min={1} max={100} value={speed}
          onChange={(e) => setSpeed(parseInt(e.target.value))} className="w-full" />
      </div>

      <div className="flex gap-2 flex-wrap items-center justify-center">
        <button onClick={shuffle} className="px-3 py-2 rounded-2xl bg-slate-800 hover:bg-slate-700">Shuffle</button>
        {!running || paused ? (
          <button onClick={running && paused ? resume : start}
            className="px-3 py-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500">
            {running && paused ? "Resume" : "Start"}
          </button>
        ) : (
          <button onClick={pause} className="px-3 py-2 rounded-2xl bg-yellow-600 hover:bg-yellow-500">Pause</button>
        )}
        <button onClick={reset} className="px-3 py-2 rounded-2xl bg-rose-600 hover:bg-rose-500">Reset</button>
        <button onClick={stepOnce} className="px-3 py-2 rounded-2xl bg-indigo-600 hover:bg-indigo-500">Step</button>
      </div>
    </section>
  );
}
