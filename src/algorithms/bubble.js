export function* bubbleSteps(a) {
  const n = a.length;
  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      yield { kind: "compare", i: j, j: j + 1 };
      if (a[j] > a[j + 1]) {
        yield { kind: "swap", i: j, j: j + 1 };
        [a[j], a[j + 1]] = [a[j + 1], a[j]]; // shorter swap
        swapped = true;
      }
    }
    yield { kind: "mark", i: n - i - 1, state: "done" };
    if (!swapped) break;
  }
}
