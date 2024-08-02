"use client";

import { Suspense, use, useState } from "react";

export const UseAPIGenerator = () => {
  const [generatedPromises] = useState(() => promiseGenerator());
  return (
    <Suspense fallback={<p>Loading!</p>}>
      <PromiseConsumer generatedPromises={generatedPromises} />
    </Suspense>
  );
};

const PromiseConsumer = ({
  generatedPromises,
}: {
  generatedPromises: Generator<Promise<any>>;
}) => {
  console.log('hier', generatedPromises);
  let output = [];
  for (const promise of generatedPromises) {
    const promiseValue = use(promise);
    output.push(promiseValue);
  }
  return <>{output.join(", ")}</>;
};

function* promiseGenerator() {
  yield Promise.resolve("Test");
  yield Promise.resolve("Test2");
}
