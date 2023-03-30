import axios from 'axios'

export const getAllWanted = async (offset: number) => {
  const { data } = await axios.get(`/wanted/getAll?offset=${offset}`)

  return data
}
