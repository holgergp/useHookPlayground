"use client";

import { Suspense, use, useState } from "react";
import { ErrorBoundary } from "../ErrorBoundary";

export const UseAPIRejectedButAlternative = () => {
  const [inlinePromise] = useState(() =>
    Promise.reject("Test").catch(() => "Rejected Test"),
  );

  return (
    <Suspense fallback={<p>Loading!</p>}>
      <PromiseConsumer promise={inlinePromise}></PromiseConsumer>
    </Suspense>
  );
};

const PromiseConsumer = ({ promise }: { promise: Promise<any> }) => {
  const promiseValue = use(promise);

  return <>{promiseValue}</>;
};
