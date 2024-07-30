import { ClientPromiseConsumer } from "./ClientPromiseConsumer";
import { useState } from "react";

function timedPromise(seconds: number): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Done in ${seconds} seconds`), seconds * 1000),
  );
}

export async function PromiseSentFromServer() {
  const threeSecondPromise = timedPromise(3);

  const promise1 = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.text())
    .then((data) => data);

  const promiseAll = Promise.all([promise1, threeSecondPromise]).then(
    (values) => {
      return values;
    },
  );
  return (
    <div className={"w-36 h-36 px-2  text-wrap"}>
      <h1>Promise sent from the server</h1>
      <div className={"border-2 pt-1 pb-2"}>
        <ClientPromiseConsumer promise={promiseAll} />
      </div>
    </div>
  );
}
