export function* mergeSteps(a) {
  function* mergeSort(lo, hi) {
    if (hi - lo <= 1) return;
    const mid = Math.floor((lo + hi) / 2);
    yield* mergeSort(lo, mid);
    yield* mergeSort(mid, hi);
    // Merge
    const left = a.slice(lo, mid);
    const right = a.slice(mid, hi);
    let i = 0,
      j = 0,
      k = lo;
    while (i < left.length && j < right.length) {
      yield { kind: "compare", i: lo + i, j: mid + j };
      if (left[i] <= right[j]) {
        yield { kind: "set", i: k, val: left[i] };
        a[k++] = left[i++];
      } else {
        yield { kind: "set", i: k, val: right[j] };
        a[k++] = right[j++];
      }
    }
    while (i < left.length) {
      yield { kind: "set", i: k, val: left[i] };
      a[k++] = left[i++];
    }
    while (j < right.length) {
      yield { kind: "set", i: k, val: right[j] };
      a[k++] = right[j++];
    }
  }
  yield* mergeSort(0, a.length);
  for (let i = 0; i < a.length; i++) yield { kind: "mark", i, state: "done" };
}