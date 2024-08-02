"use client";

import { Suspense, use, useState } from "react";

export const LocalPromiseModeSwitch = () => {
  return (
    <div className={"w-36 h-36 px-2  text-wrap"}>
      <h1>Is there a mode switch?</h1>
      <div className={"border-2 pt-1 pb-2"}>
        <Suspense fallback={<p>Loading!</p>}>
          <PromiseConsumer />
        </Suspense>
      </div>
    </div>
  );
};

const PromiseConsumer = () => {
  const [promise1] = useState(() => {
    return Promise.resolve("Promise1");
  });
  const inlinePromiseValue1 = use(promise1);

  useState(() => {
    console.log("modeswitch? Promise 1");
  });

  const [promise2] = useState(() => {
    return Promise.resolve("Promise2");
  });

  const inlinePromiseValue2 = use(promise2);

  useState(() => {
    console.log("modeswitch? Promise 2");
  });

  return (
    <div>
      <>{inlinePromiseValue1}</>
      <>{inlinePromiseValue2}</>
    </div>
  );
};
