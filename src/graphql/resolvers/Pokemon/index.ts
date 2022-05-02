import { IResolvers } from "apollo-server-express";
import Pokemon from "../../../Services/Pokemon";

export const pokemonResolver: IResolvers = {
  Query: {
    pokemon: async (
      _root: undefined,
      { name }: { name: string },
      _ctx: undefined
    ): Promise<any> => {
      const pokemonService = new Pokemon();
      const pokemonByName = await pokemonService.getOne(name);

      return pokemonByName;
    },
    pokemonStats: async (
      _root: undefined,
      { names }: { names: [string] },
      _ctx: undefined
    ) => {
      const pokemonService = new Pokemon();
      const pokemons = await pokemonService.getMany(names);
      return {
        pokemons: pokemons,
        meanHeight: pokemonService.getMeanHeight(pokemons),
        medianHeight: pokemonService.getMedianHeight(pokemons),
        modeHeight: pokemonService.getModeHeight(pokemons),
      };
    },
  },
};
