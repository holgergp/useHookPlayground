"use client";

import { Suspense, use } from "react";

export const UncachedPromise = () => (
  <Suspense fallback={<p>Loading!</p>}>
    <PromiseConsumer />
  </Suspense>
);

const PromiseConsumer = () => {
  const inlinePromise = Promise.resolve("Test");
  const promiseValue = use(inlinePromise);

  return <>{promiseValue}</>;
};
