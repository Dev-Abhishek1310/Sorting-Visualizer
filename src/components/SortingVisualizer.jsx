import React, { useEffect, useMemo, useRef, useState } from "react";
import { ALGORITHMS, ALGO_IMPL } from "../algorithms";
import { generateRandomArray, clamp } from "../utlis/arrayUtils.js";
import { formatTime } from "../utlis/formatUtils.js";

import Bars from "./Bars";
import Controls from "./Controls";
import StatsPanel from "./StatsPanel";
import Header from "./Header";

export default function SortingVisualizer() {
  const [algo, setAlgo] = useState(ALGORITHMS[0].key);
  const [size, setSize] = useState(60);
  const [data, setData] = useState(() => generateRandomArray(60));
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState(50);
  const [highlight, setHighlight] = useState({ a: -1, b: -1, swap: false });
  const [doneSet, setDoneSet] = useState(new Set());
  const [comparisons, setComparisons] = useState(0);
  const [mutations, setMutations] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const timerRef = useRef(null);
  const stepperRef = useRef(null);
  const dataRef = useRef(data);
  const runningRef = useRef(running);
  const pausedRef = useRef(paused);

  useEffect(() => { dataRef.current = data; }, [data]);
  useEffect(() => { runningRef.current = running; }, [running]);
  useEffect(() => { pausedRef.current = paused; }, [paused]);

  useEffect(() => {
    setData(generateRandomArray(size));
    resetStats();
  }, [size]);

  const resetStats = () => {
    setComparisons(0);
    setMutations(0);
    setElapsed(0);
    setDoneSet(new Set());
    setHighlight({ a: -1, b: -1, swap: false });
  };

  const shuffle = () => {
    setData(generateRandomArray(size));
    resetStats();
    stop();
  };

  const setAllNonNegativeSmall = () => {
    const arr = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
    setData(arr);
    resetStats();
    stop();
  };

  const buildGenerator = () => {
    const a = dataRef.current.slice();
    return ALGO_IMPL[algo](a);
  };

  const start = () => {
    if (runningRef.current && !pausedRef.current) return;
    if (algo === "counting" || algo === "radix") setAllNonNegativeSmall();
    stepperRef.current = buildGenerator();
    setRunning(true);
    setPaused(false);
    startTimer();
  };

  const pause = () => { setPaused(true); stopTimer(); };
  const resume = () => { if (!runningRef.current) return; setPaused(false); startTimer(); };
  const stop = () => { setRunning(false); setPaused(false); stepperRef.current = null; stopTimer(); };
  const reset = () => { stop(); setData(generateRandomArray(size)); resetStats(); };

  const startTimer = () => {
    if (timerRef.current) return;
    const startAt = Date.now() - elapsed;
    timerRef.current = setInterval(() => {
      setElapsed(Date.now() - startAt);
    }, 50);
  };
  const stopTimer = () => { if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; } };

  const doStep = () => {
    const gen = stepperRef.current;
    if (!gen) { stop(); return; }
    const res = gen.next();
    if (res.done) { stop(); return; }
    const op = res.value;
    if (!op) return;
    if (op.kind === "compare") {
      setHighlight({ a: op.i, b: op.j, swap: false });
      setComparisons(c => c + 1);
    } else if (op.kind === "swap") {
      setData(prev => {
        const arr = prev.slice();
        [arr[op.i], arr[op.j]] = [arr[op.j], arr[op.i]];
        return arr;
      });
      setHighlight({ a: op.i, b: op.j, swap: true });
      setMutations(m => m + 1);
    } else if (op.kind === "set") {
      setData(prev => { const arr = prev.slice(); arr[op.i] = op.val; return arr; });
      setHighlight({ a: op.i, b: -1, swap: false });
      setMutations(m => m + 1);
    } else if (op.kind === "mark") {
      setDoneSet(old => new Set(old).add(op.i));
    }
  };

  const stepOnce = () => {
    if (!running) {
      stepperRef.current = buildGenerator();
      setRunning(true);
      setPaused(true);
    }
    doStep();
  };

  useEffect(() => {
    if (!running || paused) return;
    const interval = clamp(205 - speed * 2, 5, 200);
    const id = setInterval(() => doStep(), interval);
    return () => clearInterval(id);
  }, [running, paused, speed]);

  const maxVal = useMemo(() => Math.max(1, ...data), [data]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100 p-4">
      <div className="max-w-6xl mx-auto">
        <Header />
        <Controls
          algo={algo} setAlgo={setAlgo}
          size={size} setSize={setSize}
          speed={speed} setSpeed={setSpeed}
          shuffle={shuffle}
          start={start}
          pause={pause}
          resume={resume}
          reset={reset}
          stepOnce={stepOnce}
          running={running}
          paused={paused}
        />
        <StatsPanel
          elapsed={elapsed}
          comparisons={comparisons}
          mutations={mutations}
          running={running}
          paused={paused}
        />
        <Bars data={data} highlight={highlight} doneSet={doneSet} maxVal={maxVal} />
      </div>
    </div>
  );
}
