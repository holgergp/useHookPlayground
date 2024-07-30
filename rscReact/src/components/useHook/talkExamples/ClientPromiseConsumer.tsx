"use client";

import { use } from "react";

interface PromiseConsumerProps {
  promise: Promise<any>;
}

export const ClientPromiseConsumer = (props: PromiseConsumerProps) => {
  const promiseValue = use(props.promise);
  return <>{promiseValue}</>;
};
