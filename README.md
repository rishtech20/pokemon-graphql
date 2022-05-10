# Pokemon GraphQL

> Note: This repo is based on https://github.com/rishtech20/Node-GraphQL-TypeScript-Starter boilerplate

#### Steps to Setup

1. Clone the repo
2. Install all the packages: `npm run i`
3. Start the server locally: `npm run dev`
4. Access the GraphQL Playground @ `localhost:9000/api/graphql`

#### Test Steps

1. Make sure that you have the GraphQL playground up and running
2. Go to the Playground and make sure that the `docs` show two queries: `pokemon` and `pokemonStats`
3. Querying pokemon:

```
query {
    pokemon(name: "pikachu") {
        name
        height
        weight
    }
}
```

4. Query pokemonStats:

```
query {
  pokemonStats(names: ["pikachu", "raichu"]) {
    pokemons {
      name
      height
    }
    meanHeight
    medianHeight
    modeHeight
  }
}
```

5. Each of the above queries should return an apt result with the fields being queried
6. In case of a bad pokemon name an error should be returned to the user

query -> input (2 pokemon ) -> compare attack -> winning pokemon or tie
pokemon(opponents: ["1", "2"]) {
winner
}

{winner: "1"}
