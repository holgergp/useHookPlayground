"use client";

import { createContext, use } from "react";

const MyContext = createContext<string | null>(null);
const ContextWithUseHook = () => (
  <MyContext.Provider value={"itsAContext"}>
    <ContextConsumer />
  </MyContext.Provider>
);

const ContextConsumer = () => {
  const contextValue = use(MyContext);
  return <>{contextValue}</>;
};
