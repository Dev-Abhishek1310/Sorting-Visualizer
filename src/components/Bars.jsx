export default function Bars({ data, highlight, doneSet, maxVal }) {
  return (
    <section className="bg-slate-900/60 rounded-2xl p-4 shadow min-h-[360px]">
      <div className="flex items-end gap-[2px] h-[360px] w-full">
        {data.map((v, idx) => {
          const h = (v / maxVal) * 340 + 4;
          const isA = highlight.a === idx;
          const isB = highlight.b === idx;
          const marked = doneSet.has(idx);
          const bg = marked
            ? "bg-emerald-500"
            : isA || isB
            ? highlight.swap
              ? "bg-rose-500"
              : "bg-yellow-400"
            : "bg-sky-500";
          return (
            <div key={idx} className={`flex-1 ${bg} rounded-t-md`}
              style={{ height: `${h}px` }} title={`idx ${idx}: ${v}`} />
          );
        })}
      </div>
    </section>
  );
}
