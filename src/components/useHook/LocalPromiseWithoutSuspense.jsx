import { use } from "react";

export const LocalPromiseWithoutSuspense = () => {
  const handRolledPromise = new HandRolledPromise()

  return <PromiseConsumer value1={handRolledPromise} />;
};

const PromiseConsumer = ({ value1 }) => {
  const inlinePromiseValue1 = use(value1);

  return (
    <div className={"w-28 h-36 px-2 pt-1 pb-2 border-2"}>
      <>{inlinePromiseValue1}</>
    </div>
  );
};

class HandRolledPromise {
  constructor() {

  }
  then() {

  }
  test() {

  }
}
