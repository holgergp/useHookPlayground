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
    console.log("modeswitch? Promise 1");

    return fetch("/api.json")
      .then((res) => res.json())
      .then((data) => data.version);
  });

  const inlinePromiseValue1 = use(promise1);

  useState(() => {
    console.log("modeswitch? Promise #2");
  });

  use(promise1);

  useState(() => {
    console.log("modeswitch? Promise #3");
  });

  return (
    <div>
      <>{inlinePromiseValue1}</>
    </div>
  );
};
