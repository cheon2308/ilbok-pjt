import { defaultInstance } from './Api'

export const getAllWanted = async (offset: number) => {
  const { data } = await defaultInstance.get(`/wanted/getAll?offset=${offset}`)

  return data
}
