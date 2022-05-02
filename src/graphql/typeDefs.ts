import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type PokemonStats {
    pokemons: [Pokemon!]
    meanHeight: Float!
    medianHeight: Float!
    modeHeight: Float!
    meanWeight: Float!
    medianWeight: Float!
    modeWeight: Float!
  }

  type Pokemon {
    name: String!
    weight: Int!
    height: Int!
  }

  type Query {
    pokemon(name: String!): Pokemon!
    pokemonStats(names: [String!]!): PokemonStats
  }
`;
