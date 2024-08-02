"use client";

import { Suspense, use, useState } from "react";

export const SetStateCachedPromise = () => (
  <Suspense fallback={<p>Loading!</p>}>
    <PromiseConsumer />
  </Suspense>
);

const PromiseConsumer = () => {
  const [inlinePromise] = useState(() => Promise.resolve("Test"));
  const promiseValue = use(inlinePromise);

  return <>{promiseValue}</>;
};
