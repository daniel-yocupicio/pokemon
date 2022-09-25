import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameorId: String) => {
    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${nameorId}`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
    };
}