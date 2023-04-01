import axios from 'axios'
import { defaultInstance } from './Api'

export const findAll = async () => {
  const { data } = await defaultInstance.get(`/resume/jobFamily`)

  return data
}
