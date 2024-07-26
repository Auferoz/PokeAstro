import type { FavoritePokemons } from "@intefaces/favorite-pokemons";
import { For, createSignal } from "solid-js";

const getLocalStoragePokemons = (): FavoritePokemons[] => {
  const favoritePokemons = JSON.parse(
    localStorage.getItem("favoritos") ?? "[]"
  );

  return favoritePokemons;
};

export const FavoritePokemons = () => {
  const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

  return (
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg-grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
      <For each={pokemons()}>{(pokemon) => <h1>{pokemon.name}</h1>}</For>
    </div>
  );
};
