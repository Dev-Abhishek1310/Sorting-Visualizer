export function* countingSteps(a) {
  // Works best with non-negative small-ish integers. We'll bucket by value.
  const maxVal = Math.max(...a);
  const counts = Array(maxVal + 1).fill(0);
  for (let i = 0; i < a.length; i++) {
    counts[a[i]]++;
  }
  // Reconstruct
  let idx = 0;
  for (let val = 0; val <= maxVal; val++) {
    while (counts[val]-- > 0) {
      yield { kind: "set", i: idx, val };
      a[idx++] = val;
    }
  }
  for (let i = 0; i < a.length; i++) yield { kind: "mark", i, state: "done" };
}