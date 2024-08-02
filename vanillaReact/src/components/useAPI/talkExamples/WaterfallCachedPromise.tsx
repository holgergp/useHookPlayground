"use client";

import { Suspense, use, useState } from "react";
import {timedPromise} from "../../../lib/utils";
let renderStart: DOMHighResTimeStamp | null = null;
//To force modechange and not interfer timing
const staticFakePromise = Promise.resolve(true);
export const WaterfallCachedPromise = () => (
  <Suspense fallback={<p>Loading!</p>}>
    <PromiseConsumer />
  </Suspense>
);

const PromiseConsumer = () => {
  if (!renderStart) renderStart = performance.now();
  use(staticFakePromise);

  const [promise1] = useState(() => timedPromise(1));
  const promiseValue1 = use(promise1);
  const [promise2] = useState(() => timedPromise(2));
  const promiseValue2 = use(promise2);
  const [promise3] = useState(() => timedPromise(3));
  const promiseValue3 = use(promise3);
  console.log(
    `Sequential time ${(performance.now() - renderStart) / 1000} seconds`,
  );
  return (
    <div>
      <>{promiseValue1}</>
      <>{promiseValue2}</>
      <>{promiseValue3}</>
    </div>
  );
};
