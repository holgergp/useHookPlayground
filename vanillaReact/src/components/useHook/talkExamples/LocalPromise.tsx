"use client";

import { Suspense, use } from "react";

const promise = Promise.resolve("Test");

export const PromiseWithUseHook = () => (
  <Suspense fallback={<p>Loading!</p>}>
    <PromiseConsumer promise={promise} />
  </Suspense>
);

const PromiseConsumer = ({ promise }: { promise: Promise<any> }) => {
  const promiseValue = use(promise);

  return <>{promiseValue}</>;
};
