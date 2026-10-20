export interface PokemonListItem {
  id: number;
  name: string;
  sprite: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}
