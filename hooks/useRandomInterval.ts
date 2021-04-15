import {useRef, useEffect, useCallback} from 'react';

export const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

export const useRandomInterval = (callback: () => void, minDelay: number | null, maxDelay: number | null) => {
  const timeoutId = useRef(0);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const isDelayProvided = (delay: number | null): delay is number => typeof delay === 'number';

    if (isDelayProvided(minDelay) && isDelayProvided(maxDelay)) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);

        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };
      handleTick();
    }
    return () => window.clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);

  const cancel = useCallback(function () {
    window.clearTimeout(timeoutId.current);
  }, []);

  return cancel;
};