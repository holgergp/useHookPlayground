"use client";

import { Suspense, use, useState } from "react";

function timedPromise(seconds: number) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Done in ${seconds} seconds`), seconds * 1000),
  );
}
export const LocalPromiseLongRunningPromises = () => {
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
