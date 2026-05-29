import { useCallback, useEffect, useRef, useState } from 'react';

export function useStepPlayer<T>(steps: T[], defaultSpeed = 700) {
  const [stepIndex, setStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(defaultSpeed);
  const timerRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const reset = useCallback(() => {
    clearTimer();
    setIsPlaying(false);
    setStepIndex(0);
  }, []);

  const step = useCallback(() => {
    setStepIndex((current) => Math.min(current + 1, steps.length - 1));
  }, [steps.length]);

  const play = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    reset();
  }, [steps, reset]);

  useEffect(() => {
    clearTimer();
    if (!isPlaying) return undefined;

    timerRef.current = window.setInterval(() => {
      setStepIndex((current) => {
        if (current >= steps.length - 1) {
          setIsPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, speed);

    return clearTimer;
  }, [isPlaying, speed, steps.length]);

  useEffect(() => () => clearTimer(), []);

  return {
    step: steps[stepIndex],
    stepIndex,
    totalSteps: steps.length,
    isPlaying,
    speed,
    play,
    pause,
    stepForward: step,
    reset,
    setSpeed,
  };
}
