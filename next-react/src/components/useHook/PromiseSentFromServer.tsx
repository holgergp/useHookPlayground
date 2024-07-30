import { ClientPromiseConsumer } from "./ClientPromiseConsumer";

export async function PromiseSentFromServer() {
  const promise1 = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.text())
    .then((data) => data);
  return (
    <div className={"w-36 h-36 px-2  text-wrap"}>
      <h1>Promise sent from the server</h1>
      <div className={"border-2 pt-1 pb-2"}>
        <ClientPromiseConsumer promise={promise1} />
      </div>
    </div>
  );
}
