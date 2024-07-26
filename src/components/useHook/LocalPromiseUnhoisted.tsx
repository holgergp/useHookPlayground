"use client";

import { Suspense, use } from "react";

export const LocalPromiseUnHoisted = () => {
  return (
    <div className={"w-36 h-36 px-2  text-wrap"}>
      <h1>Local Promise Unhoisted</h1>
      <div className={"border-2 pt-1 pb-2"}>
        <Suspense fallback={<p>Loading!</p>}>
          <PromiseConsumer />
        </Suspense>
      </div>
    </div>
  );
};

const PromiseConsumer = () => {
  const inlinePromise = Promise.resolve("Test");
  const inlinePromise2 = Promise.resolve("Test2");

  const inlinePromiseValue1 = use(inlinePromise);
  const inlinePromiseValue2 = use(inlinePromise2);
  console.log("unhoisted", inlinePromiseValue1, inlinePromiseValue2);

  return (
    <div>
      <>{inlinePromiseValue1}</>
      <>{inlinePromiseValue2}</>
    </div>
  );
};
