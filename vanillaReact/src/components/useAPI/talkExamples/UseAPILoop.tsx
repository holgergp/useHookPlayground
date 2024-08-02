"use client";

import { Suspense, use, useState } from "react";

export const UseAPILoop = () => {
  const [promises] = useState(() => [
    Promise.resolve("Test1"),
    Promise.resolve("Test2"),
  ]);
  return (
    <Suspense fallback={<p>Loading!</p>}>
      <PromiseConsumer promises={promises} />
    </Suspense>
  );
};

const PromiseConsumer = ({ promises }: { promises: Promise<any>[] }) => {
  let output = [];
  for (const promise of promises) {
    const promiseValue = use(promise);
    output.push(promiseValue);
  }
  return <>{output.join(", ")}</>;
};

