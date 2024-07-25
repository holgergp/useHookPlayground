import { use } from "react";

export async function PromiseSentFromServer() {
  const resolvedPromise = Promise.resolve("from server");
  return <PromiseConsumer value1={resolvedPromise} />;
}

const PromiseConsumer = ({ value1 }) => {
  const inlinePromiseValue1 = use(value1);
  console.log("rendering", value1);

  return (
    <div className={"w-28 h-36 px-2 pt-1 pb-2 border-2"}>
      <>{inlinePromiseValue1}</>
    </div>
  );
};
