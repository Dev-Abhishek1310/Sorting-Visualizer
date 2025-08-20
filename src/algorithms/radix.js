export function* radixSteps(a) {
  // LSD Radix base 10 for non-negative integers
  const maxVal = Math.max(...a);
  let exp = 1;
  while (Math.floor(maxVal / exp) > 0) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < a.length; i++) {
      const digit = Math.floor((a[i] / exp) % 10);
      buckets[digit].push(a[i]);
    }
    // Write back
    let idx = 0;
    for (let b = 0; b < 10; b++) {
      for (let k = 0; k < buckets[b].length; k++) {
        const val = buckets[b][k];
        yield { kind: "set", i: idx, val };
        a[idx++] = val;
      }
    }
    exp *= 10;
  }
  for (let i = 0; i < a.length; i++) yield { kind: "mark", i, state: "done" };
}
