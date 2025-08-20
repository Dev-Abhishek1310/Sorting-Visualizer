export function* shellSteps(a) {
  const n = a.length;
  let gap = Math.floor(n / 2);
  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = a[i];
      let j = i;
      while (j >= gap && a[j - gap] > temp) {
        yield { kind: "compare", i: j - gap, j };
        yield { kind: "set", i: j, val: a[j - gap] };
        a[j] = a[j - gap];
        j -= gap;
      }
      yield { kind: "set", i: j, val: temp };
      a[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  for (let i = 0; i < n; i++) yield { kind: "mark", i, state: "done" };
}