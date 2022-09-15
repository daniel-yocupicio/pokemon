export interface PokemonListResponse {
    count: number;
    next?: String;
    previous?: String;
    results: SmallPokemon[];
}

export interface SmallPokemon {
    name: String;
    url: string;
    id: number;
    img: String;
}