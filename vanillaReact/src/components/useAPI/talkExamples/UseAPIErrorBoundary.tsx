"use client";

import { Suspense, use, useState } from "react";
import { ErrorBoundary } from "../ErrorBoundary";

export const UseAPIErrorBoundary = () => {
  const [inlinePromise] = useState(() => Promise.reject("Test"));

  return (
    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
      <Suspense fallback={<p>Loading!</p>}>
        <PromiseConsumer promise={inlinePromise}></PromiseConsumer>
      </Suspense>
    </ErrorBoundary>
  );
};

const PromiseConsumer = ({ promise }: { promise: Promise<any> }) => {
  const promiseValue = use(promise);

  return <>{promiseValue}</>;
};
