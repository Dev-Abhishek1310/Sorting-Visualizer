import { bubbleSteps } from "./bubble.js";
import { selectionSteps } from "./selection.js";
import { insertionSteps } from "./insertion.js";
import { mergeSteps } from "./merge.js";
import { quickSteps } from "./quick.js";
import { heapSteps } from "./heap.js";
import { shellSteps } from "./shell.js";
import { cocktailSteps } from "./cocktail.js";
import { combSteps } from "./comb.js";
import { gnomeSteps } from "./gnome.js";
import { countingSteps } from "./counting.js";
import { radixSteps } from "./radix.js";

export const ALGO_IMPL = {
  bubble: bubbleSteps,
  selection: selectionSteps,
  insertion: insertionSteps,
  merge: mergeSteps,
  quick: quickSteps,
  heap: heapSteps,
  shell: shellSteps,
  cocktail: cocktailSteps,
  comb: combSteps,
  gnome: gnomeSteps,
  counting: countingSteps,
  radix: radixSteps,
};

export const ALGORITHMS = [
  { key: "bubble", label: "Bubble Sort" },
  { key: "selection", label: "Selection Sort" },
  { key: "insertion", label: "Insertion Sort" },
  { key: "merge", label: "Merge Sort" },
  { key: "quick", label: "Quick Sort" },
  { key: "heap", label: "Heap Sort" },
  { key: "shell", label: "Shell Sort" },
  { key: "cocktail", label: "Cocktail Shaker" },
  { key: "comb", label: "Comb Sort" },
  { key: "gnome", label: "Gnome Sort" },
  { key: "counting", label: "Counting Sort" },
  { key: "radix", label: "Radix Sort (LSD)" },
];
