import { ClientPromiseConsumer } from "./ClientPromiseConsumer";

export async function PromiseSentFromServer() {
    const promise = fetchPokemon();
    return <ClientPromiseConsumer promise={promise} />;
}

const fetchPokemon = () =>
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.text())
    .then((data) => data);
