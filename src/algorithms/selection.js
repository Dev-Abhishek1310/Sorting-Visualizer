export function* selectionSteps(a) {
  const n = a.length;
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      yield { kind: "compare", i: minIdx, j };
      if (a[j] < a[minIdx]) minIdx = j;
    }
    if (minIdx !== i) {
      yield { kind: "swap", i, j: minIdx };
      const t = a[i];
      a[i] = a[minIdx];
      a[minIdx] = t;
    }
    yield { kind: "mark", i, state: "done" };
  }
}