export function* cocktailSteps(a) {
  let start = 0;
  let end = a.length - 1;
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = start; i < end; i++) {
      yield { kind: "compare", i, j: i + 1 };
      if (a[i] > a[i + 1]) {
        yield { kind: "swap", i, j: i + 1 };
        const t = a[i];
        a[i] = a[i + 1];
        a[i + 1] = t;
        swapped = true;
      }
    }
    yield { kind: "mark", i: end, state: "done" };
    if (!swapped) break;
    swapped = false;
    end--;
    for (let i = end; i > start; i--) {
      yield { kind: "compare", i: i - 1, j: i };
      if (a[i - 1] > a[i]) {
        yield { kind: "swap", i: i - 1, j: i };
        const t = a[i - 1];
        a[i - 1] = a[i];
        a[i] = t;
        swapped = true;
      }
    }
    yield { kind: "mark", i: start, state: "done" };
    start++;
  }
}