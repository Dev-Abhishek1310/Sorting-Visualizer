import { useEffect, useRef } from "react";

/**
 * A custom React hook for running a callback on an interval.
 * 
 * @param {Function} callback - Function to run each tick
 * @param {number|null} delay - Interval delay in ms, or null to pause
 */
export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Save new callback if it changes
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up interval
  useEffect(() => {
    if (delay === null) return; // paused
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id); // cleanup
  }, [delay]);
}
