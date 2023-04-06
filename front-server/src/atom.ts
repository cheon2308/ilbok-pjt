import { atom, selector } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()
export const CareerSelectCode = atom({
  key: 'CareerSelectCode', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const CareerSelectName = atom({
  key: 'CareerSelectName', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const CareerSubSelectName = atom({
  key: 'CareerSubSelectName', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const JobFamilyCode = atom({
  key: 'JobFamilyCode', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})
export const JobFamilyName = atom({
  key: 'JobFamilyName', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const JobSubCode = atom({
  key: 'JobSubCode', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})
export const JobSubName = atom({
  key: 'JobSubName', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const JobCode = atom({
  key: 'JobCode', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})
export const JobName = atom({
  key: 'JobName', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const RegionCode = atom({
  key: 'RegionCode', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const RegionName = atom({
  key: 'RegionName', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const CityCode = atom({
  key: 'CityCode', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})
export const CityName = atom({
  key: 'CityName', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

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

// -------------

export const JobFamilyCodeCareerInfo = atom({
  key: 'JobFamilyCodeCareerInfo', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})
export const JobFamilyNameCareerInfo = atom({
  key: 'JobFamilyNameCareerInfo', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const JobSubCodeCareerInfo = atom({
  key: 'JobSubCodeCareerInfo', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})
export const JobSubNameCareerInfo = atom({
  key: 'JobSubNameCareerInfo', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const JobCodeCareerInfo = atom({
  key: 'JobCodeCareerInfo', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})
export const JobNameCareerInfo = atom({
  key: 'JobNameCareerInfo', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const Period = atom({
  key: 'Period', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export interface CareersTypes {
  subCode: string
  period: string
}

export const CareersState = atom<CareersTypes[]>({
  key: 'CareersState',

  default: [],
})

export interface CareersItemTypes {
  jobFamily: string
  job: string
  periodName: string
}
export const CareersItem = atom<CareersItemTypes[]>({
  key: 'CareersItem',
  default: [],
})

export const CareerInfoDegree = atom({
  key: 'CareerInfoDegree',
  default: 0,
})

export const DbUserId = atom({
  key: 'DbUserId',
  default: 0,
  effects_UNSTABLE: [persistAtom],
})

export const MobileCarrer = atom({
  key: 'MobileCarrer',

  default: '',
})

export const genderInfoCode = atom({
  key: 'genderInfoCode',

  default: 2,
})
