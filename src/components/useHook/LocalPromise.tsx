"use client";

import { Suspense, use } from "react";

export const LocalPromise = () => {
  const inlinePromise = Promise.resolve("Test");
  const inlinePromise2 = Promise.resolve("Test2");

  return (
    <div className={"w-36 h-36 px-2  text-wrap"}>
      <h1>Hoisted Promise via suspense</h1>
      <div className={"border-2 pt-1 pb-2"}>
        <Suspense fallback={<p>Loading!</p>}>
          <PromiseConsumer promise1={inlinePromise} promise2={inlinePromise2} />
        </Suspense>
      </div>
    </div>
  );
};

const PromiseConsumer = ({
  promise1,
  promise2,
}: {
  promise1: Promise<any>;
  promise2: Promise<any>;
}) => {
  const promiseValue1 = use(promise1);
  const promiseValue2 = use(promise2);
  console.log("rendering", promiseValue1, promiseValue2);

  return (
    <div>
      <>{promiseValue1}</>
      <>{promiseValue2}</>
    </div>
  );
};
