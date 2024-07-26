"use client";

import { createContext, use } from "react";

const MyContext = createContext<string | null>(null);
export const ContextWithUseHook = () => {
  return (
    <div className={"w-36 h-36 px-2  text-wrap"}>
      <h1>Using a context</h1>
      <div className={"border-2 pt-1 pb-2"}>
        <MyContext.Provider value={"itsAContext"}>
          <ContextConsumer />
        </MyContext.Provider>
      </div>
    </div>
  );
};

const ContextConsumer = () => {
  const contextValue = use(MyContext);

  return <div>{contextValue}</div>;
};
