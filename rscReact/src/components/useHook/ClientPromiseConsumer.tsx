"use client";

import { use, useState } from "react";

interface PromiseConsumerProps {
  promise: Promise<any>;
}

export const ClientPromiseConsumer = (props: PromiseConsumerProps) => {
  // ensure we are only on the client
  const [statedPromise] = useState(() => props.promise);
  if (typeof window === 'undefined') {
    return null;
  }
  console.log(statedPromise);
  const promiseValue = use(statedPromise);
  console.log(`On the server: ${promiseValue}`);

  return (
    <div>
      <>{promiseValue}</>
    </div>
  );
};
