export function* insertionSteps(a) {
  for (let i = 1; i < a.length; i++) {
    let key = a[i];
    let j = i - 1;
    while (j >= 0) {
      yield { kind: "compare", i: j, j: i };
      if (a[j] > key) {
        yield { kind: "set", i: j + 1, val: a[j] };
        a[j + 1] = a[j];
        j--;
      } else break;
    }
    yield { kind: "set", i: j + 1, val: key };
    a[j + 1] = key;
  }
  for (let i = 0; i < a.length; i++) yield { kind: "mark", i, state: "done" };
}