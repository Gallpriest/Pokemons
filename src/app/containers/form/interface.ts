export interface SearchParams {
  name?: string;
  typeData?: { type: string; id: string };
}

export interface PokemonTypes {
  id: number;
  type: string;
}
