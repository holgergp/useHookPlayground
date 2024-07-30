"use client";

import { Suspense, use, useState } from "react";

export const ModeChangeCachedPromise = () => (
  <Suspense fallback={<p>Loading!</p>}>
    <PromiseConsumer />
  </Suspense>
);

const PromiseConsumer = () => {
  const [promise1] = useState(() => Promise.resolve("Test"));
  useState(() => console.log("Ich wurde für Promise1 aufgerufen!"));
  use(promise1);
  const [promise2] = useState(() => Promise.resolve("Test"));
  use(promise2);
  useState(() => console.log("Ich wurde für Promise2 aufgerufen!"));

  return <></>;
};
