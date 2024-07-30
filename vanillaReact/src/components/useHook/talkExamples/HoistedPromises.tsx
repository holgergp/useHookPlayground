"use client";

import { Suspense, use, useState } from "react";
import { timedPromise } from "../../../lib/utils";

interface HoistedPromisesProps {
  promise1: Promise<string>;
  promise2: Promise<string>;
  promise3: Promise<string>;
}

export const HoistedPromises = () => {
  const [promise1] = useState(() => timedPromise(1));
  const [promise2] = useState(() => timedPromise(2));
  const [promise3] = useState(() => timedPromise(3));

  return (
    <Suspense fallback={<p>Loading!</p>}>
      <PromiseConsumer
        promise1={promise1}
        promise2={promise2}
        promise3={promise3}
      />
    </Suspense>
  );
};
let renderStart: DOMHighResTimeStamp | null = null;

const PromiseConsumer = (props: HoistedPromisesProps) => {
  if (!renderStart) renderStart = performance.now();

  const promiseValue1 = use(props.promise1);
  const promiseValue2 = use(props.promise2);
  const promiseValue3 = use(props.promise3);
  console.log(
    `Hoisted time ${(performance.now() - renderStart) / 1000} seconds`,
  );
  return (
    <div>
      <>{promiseValue1}</>
      <>{promiseValue2}</>
      <>{promiseValue3}</>
    </div>
  );
};
