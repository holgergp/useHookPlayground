import { use } from "react";

export async function PromiseSentFromServer() {
  const resolvedPromise = Promise.resolve("Hello from the server");
  return (
    <div className={"w-36 h-36 px-2  text-wrap"}>
      <h1>Promise sent from the server</h1>
      <div className={"border-2 pt-1 pb-2"}>
        <PromiseConsumer promise={resolvedPromise} />
      </div>
    </div>
  );
}

interface PromiseConsumerProps {
  promise: Promise<any>;
}

const PromiseConsumer = (props: PromiseConsumerProps) => {
  const promiseValue = use(props.promise);
  console.log(`On the server: ${promiseValue}`);

  return (
    <div>
      <>{promiseValue}</>
    </div>
  );
};
