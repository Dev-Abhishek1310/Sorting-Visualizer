export function* quickSteps(a) {
  function* qs(lo, hi) {
    if (lo >= hi) return;
    const pivot = a[hi];
    let i = lo;
    for (let j = lo; j < hi; j++) {
      yield { kind: "compare", i: j, j: hi };
      if (a[j] < pivot) {
        if (i !== j) {
          yield { kind: "swap", i, j };
          const t = a[i];
          a[i] = a[j];
          a[j] = t;
        }
        i++;
      }
    }
    if (i !== hi) {
      yield { kind: "swap", i, j: hi };
      const t = a[i];
      a[i] = a[hi];
      a[hi] = t;
    }
    yield* qs(lo, i - 1);
    yield* qs(i + 1, hi);
  }
  yield* qs(0, a.length - 1);
  for (let i = 0; i < a.length; i++) yield { kind: "mark", i, state: "done" };
}