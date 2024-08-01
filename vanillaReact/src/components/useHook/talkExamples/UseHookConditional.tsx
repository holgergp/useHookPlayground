"use client";

import { Suspense, use, useState } from "react";

export const UseHookConditional = ({ toggle }: { toggle: boolean }) => {
  const [inlinePromise] = useState(() => Promise.resolve("Test"));

  return (
    <Suspense fallback={<p>Loading!</p>}>
      <PromiseConsumer
        promise={inlinePromise}
        toggle={toggle}
      ></PromiseConsumer>
    </Suspense>
  );
};

const PromiseConsumer = ({
  promise,
  toggle,
}: {
  promise: Promise<any>;
  toggle: boolean;
}) => {
  let promiseValue;
  if (toggle) {
    promiseValue = use(promise);
  }

  console.log("rendering", promiseValue);

  return <>{promiseValue}</>;
};
