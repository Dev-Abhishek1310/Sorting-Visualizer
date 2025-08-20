export default function Header() {
  return (
    <header className="flex flex-col md:flex-row md:items-end gap-3 justify-between mb-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Sorting Algorithm Visualizer</h1>
        <p className="text-slate-400">12 algorithms • adjustable bars • start/stop • timers</p>
      </div>
    </header>
  );
}
