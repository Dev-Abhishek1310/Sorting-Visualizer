// Format milliseconds into mm:ss.ms
export function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const millis = ms % 1000;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(millis).padStart(3, "0")}`;
}

// Format large numbers with commas (e.g., 12345 -> 12,345)
export function formatNumber(num) {
  return num.toLocaleString();
}
