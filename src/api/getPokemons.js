import axios from "../services/axios";

export const getPokemons = async(limit = 151) =>
{
  console.log('entra')
  const resp = await axios(`/pokemon?limit=${limit}`)
  console.log(resp)
} 