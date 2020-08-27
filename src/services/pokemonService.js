import axios from "axios";

//end points to retrieve pokemon
const MEW_API = 'https://pokeapi.co/api/v2/pokemon/mew';
const DITTO_API = 'https://pokeapi.co/api/v2/pokemon/ditto';
const CORSOLA_API = 'https://pokeapi.co/api/v2/pokemon/corsola';
const UNOWN_API = 'https://pokeapi.co/api/v2/pokemon/unown';

//
// methods for fetching/catching pokemon data
//
// catch a Mew!
export const getMewData = async () => {
  return await axios.get(MEW_API).then(response => {
    return response.data;
  })
    .catch((error) => console.log(error));
}
// catch a Ditto!
export const getDittoData = async () => {
  return await axios.get(DITTO_API).then(response => {
    return response.data;
  })
    .catch((error) => console.log(error));
}
// catch a Corsola!
export const getCorsolaData = async () => {
  return await axios.get(CORSOLA_API).then(response => {
    return response.data;
  })
    .catch((error) => console.log(error));
}

// catch a Unown!
export const getUnownData = async () => {
  return await axios.get(UNOWN_API).then(response => {
    return response.data;
  })
    .catch((error) => console.log(error));
}