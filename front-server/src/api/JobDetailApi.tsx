import axios from 'axios'

export const getOneWanted = async (wanted_code: number) => {
  const { data } = await axios.get(`/wanted/getOne?wanted_code=${wanted_code}`)

  return data
}
