import type { FavoritePokemon } from "@intefaces/favorite-pokemon";
import { For, createSignal } from "solid-js";
import { FavoritePokemonCard } from './FavoritePokemonCard';

const getLocalStoragePokemons = (): FavoritePokemon[] => {
  const favoritePokemons = JSON.parse(
    localStorage.getItem('favorites') ?? '[]'
  );

  return favoritePokemons;
};

export const FavoritePokemons = () => {
  const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

  return (
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg-grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
      <For each={pokemons()}>
        {(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
      </For>
    </div>
  );
};
