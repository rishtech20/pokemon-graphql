import merge from "lodash.merge";
import { pokemonResolver } from "./Pokemon";

export const resolvers = merge(pokemonResolver);
