"use client";

import { Suspense, use, useState } from "react";

export const FetchedPromise = () => {
  const [apiVersions] = useState(() => {
    return fetch("/api.json")
      .then((res) => res.json())
      .then((data) => data.version);
  });
  return (
    <div className={"w-36 h-36 px-2  text-wrap"}>
      <h1>Using a fetched promise via suspense</h1>
      <div className={"border-2 pt-1 pb-2"}>
        <Suspense fallback={<p>Loading!</p>}>
          <PromiseConsumer promise={apiVersions}></PromiseConsumer>
        </Suspense>
      </div>
    </div>
  );
};

const PromiseConsumer = ({ promise }: { promise: Promise<any> }) => {
  const fetchedPromiseValue = use(promise);
  console.log("fetchedPromiseValue", promise);

  return (
    <div>
      <p>API Version</p>
      <p>{fetchedPromiseValue}</p>
    </div>
  );
};
