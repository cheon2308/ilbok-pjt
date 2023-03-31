import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()
export interface logintype {
  isLoggedIn: boolean
  userId: number
}
export const isDarkAtom = atom({
  key: 'isDark',
  default: true,
})

export const LoginState = atom<logintype>({
  key: 'LoginState',
  default: {
    isLoggedIn: false,
    userId: 0,
  },
  effects_UNSTABLE: [persistAtom],
})
