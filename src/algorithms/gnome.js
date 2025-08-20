export function* gnomeSteps(a) {
  let i = 0;
  while (i < a.length) {
    if (i === 0 || a[i] >= a[i - 1]) {
      i++;
    } else {
      yield { kind: "swap", i: i, j: i - 1 };
      const t = a[i];
      a[i] = a[i - 1];
      a[i - 1] = t;
      i--;
    }
  }
  for (let k = 0; k < a.length; k++) yield { kind: "mark", i: k, state: "done" };
}