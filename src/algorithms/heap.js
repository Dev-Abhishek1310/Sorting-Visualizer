export function* heapSteps(a) {
  const n = a.length;
  function* heapify(n, i) {
    let largest = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;
    if (l < n) {
      yield { kind: "compare", i: l, j: largest };
      if (a[l] > a[largest]) largest = l;
    }
    if (r < n) {
      yield { kind: "compare", i: r, j: largest };
      if (a[r] > a[largest]) largest = r;
    }
    if (largest !== i) {
      yield { kind: "swap", i, j: largest };
      const t = a[i];
      a[i] = a[largest];
      a[largest] = t;
      yield* heapify(n, largest);
    }
  }
  // Build heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) yield* heapify(n, i);
  // Extract
  for (let i = n - 1; i > 0; i--) {
    yield { kind: "swap", i: 0, j: i };
    const t = a[0];
    a[0] = a[i];
    a[i] = t;
    yield* heapify(i, 0);
    yield { kind: "mark", i, state: "done" };
  }
  if (n > 0) yield { kind: "mark", i: 0, state: "done" };
}