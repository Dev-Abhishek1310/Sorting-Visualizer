export function* combSteps(a) {
  const n = a.length;
  let gap = n;
  const shrink = 1.3;
  let sorted = false;
  while (!sorted) {
    gap = Math.floor(gap / shrink);
    if (gap <= 1) {
      gap = 1;
      sorted = true;
    }
    let i = 0;
    while (i + gap < n) {
      yield { kind: "compare", i, j: i + gap };
      if (a[i] > a[i + gap]) {
        yield { kind: "swap", i, j: i + gap };
        const t = a[i];
        a[i] = a[i + gap];
        a[i + gap] = t;
        sorted = false;
      }
      i++;
    }
  }
  for (let i = 0; i < n; i++) yield { kind: "mark", i, state: "done" };
}