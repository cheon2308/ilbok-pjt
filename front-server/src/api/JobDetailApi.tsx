import { defaultInstance } from './Api'

export const getOneWanted = async (wanted_code: number) => {
  const { data } = await defaultInstance.get(`/wanted/getOne?wanted_code=${wanted_code}`)

  return data
}
