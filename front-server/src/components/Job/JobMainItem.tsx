import { CarCrash } from '@mui/icons-material'
import React, { useEffect, useRef } from 'react'
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
import '../../assets/styles/Job/JobMainItem.css'
export default function JobMainItem({ keyword }: any) {
  //

  // 메인 : 0 / 로그인 : 1 / 로그인+추가정보 : 2
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState)

  const [getfavorite, setgetfavorite] = useState()
  const [getOtherUserLike, setGetOtherUserLike] = useState()
  // const GetFavorite = null
  const GetFavorite = async () => {
    const res = await axios(process.env.REACT_APP_SERVER_URL + `/users/getOne?user_id=${isLoggedIn.userId}`, {
      method: 'POST',
    })
    return res.data
  }
  const { data: getfavoritePost, error, isError } = useQuery(['GetFavorite', isLoggedIn.userId], GetFavorite, {})

  // 나랑 비슷한 사람들이 본 공고
  const GetOtherUserLikeyAlgo = async () => {
    const res = await axios(process.env.REACT_APP_SERVER_URL + `/algorithm/otherLike?userId=${isLoggedIn.userId}`, {
      method: 'POST',
    })
    return res.data
  }
  const { data, isLoading } = useQuery(['GetUserLikey'], GetOtherUserLikeyAlgo, {
    onSuccess: (data) => {
      setGetOtherUserLike(data)
    },
    onError: (error) => {
      // console.log('error:', error)
      // 에러 발생 후 실행할 작업
    },
  })
  //

  // 나랑 비슷한 사람들이 본 공고
  const items = data
  //
  const userName = window.localStorage.getItem('token')
    ? window.localStorage.getItem('nickname') || 'unknown'
    : undefined

  // if (isLoading)
  //   return (
  //     <>
  //       <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
  //         <BeatLoader color="#C6F0DE" size={50} />
  //       </div>
  //     </>
  //   )

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
        <div style={{ backgroundColor: '#e7f4ef', height: '500px', paddingTop: '80px' }}>
          {userName && (
            <div className="TenCardMargin">
              <TenCardContainer
                items={items}
                name={userName}
                title="님과 비슷한 유저들이 관심있는 일자리"
                description="일복(日福)에서 추천하는 비슷한 유저들이 관심있는 일자리"
              />
            </div>
          )}
          {/* <div style={{ paddingTop: '80px' }}>
            {userName && (
              <TenCardContainer
                items={items2}
                name={userName}
                title="님과 어울리는 일자리"
                description="일복(日福)에서 추천하는 어울리는 일자리"
              />
            )}
          </div> */}
        </div>
      ) : null}

      <div>
        <JobSearch keyword={keyword} />
      </div>

      <div style={{ marginTop: '25px', marginBottom: '25px' }}>
        <JobListContainer />
      </div>
    </>
  )
}
