"use client";

import { Suspense, use, useState } from "react";

function timedPromise(seconds: number): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Done in ${seconds} seconds`), seconds * 1000),
  );
}

interface HoistedPromisesProps {
  promise1: Promise<string>;
  promise2: Promise<string>;
  promise3: Promise<string>;
}

export const HoistedLocalPromiseLongRunningPromises = () => {
  const [promise1] = useState(() => timedPromise(1));
  const [promise2] = useState(() => timedPromise(2));
  const [promise3] = useState(() => timedPromise(3));

  return (
    <div className={"w-36 h-36 px-2  text-wrap"}>
      <h1>Does it take three seconds?</h1>
      <div className={"border-2 pt-1 pb-2"}>
        <Suspense fallback={<p>Loading!</p>}>
          <PromiseConsumer
            promise1={promise1}
            promise2={promise2}
            promise3={promise3}
          />
        </Suspense>
      </div>
    </div>
  );
};
let renderStart: DOMHighResTimeStamp | null = null;
const staticFakePromise = Promise.resolve(true);

const PromiseConsumer = (props: HoistedPromisesProps) => {
  if (!renderStart) renderStart = performance.now();

  const promiseValue1 = use(props.promise1);
  const promiseValue2 = use(props.promise2);
  const promiseValue3 = use(props.promise3);
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
