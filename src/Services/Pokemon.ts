import axios from "axios";

// TODO: Rename the class to PokemonService
// TODO: Class has too many responsibilites - think of abstracting stuff out, or follow a good pattern
export default class Pokemon {
  endpoint = "https://pokeapi.co/api/v2/pokemon";

  async getOne(name: string): Promise<any> {
    try {
      const res = await axios.get(`${this.endpoint}/${name.toLowerCase()}`);
      const pokemon = res.data;
      pokemon.name = name;
      return pokemon;
    } catch (e) {
      throw new Error("Invalid Name");
    }
  }

  getMany(names: [string]): Promise<any> {
    const requests = names.map((name) =>
      axios.get(`${this.endpoint}/${name.toLowerCase()}`)
    );
    return axios
      .all(requests)
      .then(
        axios.spread((...res) => {
          const pokemons = res.map((pokemon) => ({
            name: pokemon.data.name,
            height: pokemon.data.height,
            weight: pokemon.data.weight,
          }));
          return pokemons;
        })
      )
      .catch((e) => {
        throw new Error("Something Went Wrong.");
      });
  }

  // TODO: Abstract out mean, media and mode functions to a Helper file
  getMeanHeight(pokemons: [any]): number {
    return (
      pokemons.reduce((total, next) => total + next.height, 0) / pokemons.length
    );
  }

  getModeHeight(pokemons: [any]): number {
    return (
      3 * this.getMeanHeight(pokemons) - 2 * this.getMedianHeight(pokemons)
    );
  }

  getMedianHeight(pokemons: [any]): number {
    const heights = pokemons.map((pokemon) => pokemon.height);
    const sortedHeights = heights.sort((a, b) => a - b);
    const mid = Math.floor(sortedHeights.length / 2);

    if (sortedHeights.length % 2 === 0) {
      return (sortedHeights[mid] + sortedHeights[mid - 1]) / 2;
    }

    return sortedHeights[mid];
  }
}
