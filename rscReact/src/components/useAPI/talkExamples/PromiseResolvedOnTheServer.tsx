import { ClientPromiseConsumer } from "./ClientPromiseConsumer";
import {ClientValueConsumer} from "./ClientValueConsumer";

export async function PromiseSentFromServer() {
    const value = await fetchPokemon();
    return <ClientValueConsumer value={value} />;
}

const fetchPokemon = () =>
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.text())
    .then((data) => data);
