"use client";

import { use } from "react";

interface PromiseValueProps {
  value: string;
}

export const ClientValueConsumer = (props: PromiseValueProps) => {
  return <>{props.value}</>;
};
