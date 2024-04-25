export type PokemonSingleDetail = {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: Array<{ ability: { name: string } }>;
  types: Array<{ type: { name: string } }>;
  stats: Array<{ base_stat: number; stat: { name: string } }>;
  sprites: {
    [key: string]: any;
  };
  location_area_encounters: string;
  game_indices: PokemonSingleGameIndex[];
};

export type PokemonSingleGameIndex = {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
};

export type PokemonSingleEncounter = {
  location_area: {
    name: string;
    url: string;
  };
  version_details: Array<{
    max_chance: number;
    encounter_details: Array<{
      min_level: number;
      max_level: number;
      condition_values: Array<{ name: string }>;
      chance: number;
      method: { name: string };
    }>;
    version: { name: string; url: string };
  }>;
};
