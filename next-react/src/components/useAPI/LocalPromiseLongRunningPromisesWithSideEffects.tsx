"use client";

import { Suspense, use, useState } from "react";


export const LocalPromiseLongRunningPromisesWithSideEffects = () => {
  return (
    <div className={"w-36 h-36 px-2  text-wrap"}>
      <h1>Does it take three seconds?</h1>
      <div className={"border-2 pt-1 pb-2"}>
        <Suspense fallback={<p>Loading!</p>}>
          <PromiseConsumer />
        </Suspense>
      </div>
    </div>
  );
};
let renderStart: DOMHighResTimeStamp | null = null;
const staticFakePromise = Promise.resolve(true);

const PromiseConsumer = () => {
  if (!renderStart) renderStart = performance.now();
  use(staticFakePromise);
  const [promise1] = useState(() => {
    return fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then((res) => res.text())
        .then((data) => data);
  });
  const promiseValue1 = use(promise1);

  console.log(
    `Loading huge dataset takes this long:${(performance.now() - renderStart) / 1000} seconds`,
  );
  return (
    <div>
      <>{promiseValue1}</>
    </div>
  );
};
