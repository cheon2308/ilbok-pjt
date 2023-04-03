import { CarCrash } from '@mui/icons-material'
import React from 'react'
import AddInfoNoti from '../Common/AddInfoNoti'
import JobSearch from './JobSearch'
import { useState } from 'react'
import Card from '../../components/Common/Card'
import TenCardContainer from '../Common/TenCardContainer'
import Paging from '../Common/Paging'
import AddInfoNoti2 from '../Common/AddInfoNoti2'
import styled from 'styled-components'
import JobListContainer from '../Common/JobListContainer'
import { useRecoilState } from 'recoil'
import { LoginState } from '../../atom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { BeatLoader } from 'react-spinners'
export default function JobMainItem({ keyword }: any) {
  // 메인 : 0 / 로그인 : 1 / 로그인+추가정보 : 2
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState)
  const [getfavorite, setgetfavorite] = useState()
  // const GetFavorite = null
  const GetFavorite = async () => {
    const res = await axios(process.env.REACT_APP_SERVER_URL + `/users/getOne?user_id=${isLoggedIn.userId}`, {
      method: 'POST',
    })
    return res.data
  }
  const { data, error, isError, isLoading } = useQuery(['GetFavorite', isLoggedIn.userId], GetFavorite, {
    onSuccess: (data) => {
      setgetfavorite(data.favorite)
      // console.log('data:', data)
      // 데이터 로드 후 실행할 작업
    },
    onError: (error) => {
      console.log('error:', error)
      // 에러 발생 후 실행할 작업
    },
  })

  // 비슷한 유저들이 관심있는 items
  const items = [
    { title: 'Item 1', description: 'This is the first item' },
    { title: 'Item 2', description: 'This is the second item' },
    { title: 'Item 3', description: 'This is the third item' },
    { title: 'Item 4', description: 'This is the fourth item' },
    { title: 'Item 5', description: 'This is the fifth item' },
    { title: 'Item 6', description: 'This is the fifth item' },
    { title: 'Item 7', description: 'This is the fifth item' },
    { title: 'Item 8', description: 'This is the fifth item' },
    { title: 'Item 9', description: 'This is the fifth item' },
    { title: 'Item 10', description: 'This is the fifth item' },
  ]

  // 어울리는 일자리 items2
  const items2 = [
    { title: 'Item 1', description: 'This is the first item' },
    { title: 'Item 2', description: 'This is the second item' },
    { title: 'Item 3', description: 'This is the third item' },
    { title: 'Item 4', description: 'This is the fourth item' },
    { title: 'Item 5', description: 'This is the fifth item' },
    { title: 'Item 6', description: 'This is the fifth item' },
    { title: 'Item 7', description: 'This is the fifth item' },
    { title: 'Item 8', description: 'This is the fifth item' },
    { title: 'Item 9', description: 'This is the fifth item' },
    { title: 'Item 10', description: 'This is the fifth item' },
  ]

  const [activeIndex, setActiveIndex] = useState<number>(0)
  const handleItemChange = (index: number) => {
    setActiveIndex(index)
  }
  if (isLoading)
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
          <BeatLoader color="#C6F0DE" size={50} />
        </div>
      </>
    )
  return (
    <>
      {isLoggedIn.isLoggedIn === false ? (
        <div style={{ backgroundColor: '#e7f4ef', height: '400px' }}>
          <div className="Main-container">
            <AddInfoNoti />
          </div>
        </div>
      ) : isLoggedIn.isLoggedIn === true && getfavorite === null ? (
        <div style={{ backgroundColor: '#e7f4ef', height: '400px' }}>
          <div className="Main-container">
            <AddInfoNoti2 />
          </div>
        </div>
      ) : getfavorite !== null ? (
        <div style={{ backgroundColor: '#e7f4ef', height: '1000px', paddingTop: '80px' }}>
          <TenCardContainer
            items={items}
            name="김유민"
            title="님과 비슷한 유저들이 관심있는 일자리"
            description="일복(日福)에서 추천하는 비슷한 유저들이 관심있는 일자리"
          />
          <div style={{ paddingTop: '80px' }}>
            <TenCardContainer
              items={items2}
              name="김유민"
              title="님과 어울리는 일자리"
              description="일복(日福)에서 추천하는 어울리는 일자리"
            />
          </div>
        </div>
      ) : null}

      <div className="Main-container">
        <JobSearch keyword={keyword} />
      </div>

      <div style={{ marginTop: '25px', marginBottom: '25px' }}>
        <JobListContainer />
      </div>
    </>
  )
}

const JobMainCategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  color: #666666;
`
