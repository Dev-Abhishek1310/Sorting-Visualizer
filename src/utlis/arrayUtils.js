// Generate a random integer array of size n, with values between min and max
export function generateRandomArray(n, min = 5, max = 300) {
  return Array.from({ length: n }, () =>
    Math.floor(Math.random() * (max - min + 1)) + min
  );
}

// Clamp a number to stay within bounds [lo, hi]
export function clamp(value, lo, hi) {
  return Math.max(lo, Math.min(hi, value));
}
