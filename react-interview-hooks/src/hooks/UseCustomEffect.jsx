import { useRef } from "react";

const useCustomEffect = (effect, deps) => {
  // first render
  const isFirstRender = useRef(true);
  const prevDeps = useRef(true);

  if (isFirstRender.current) {
    isFirstRender.current = false;
   const cleanup = effect();
    return () => {
        if (cleanup && typeof cleanup === 'function') {
            cleanup();
        }
    }
  }

  //  dep changes and no deps array

  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

    if (depsChanged) {
    const cleanup =  effect();
    if (cleanup && typeof cleanup === 'function' && deps) {
        cleanup();
    }
    }

  // cleanup


  prevDeps.current = deps || []


};


export default useCustomEffect;
