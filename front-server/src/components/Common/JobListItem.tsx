import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { DbUserId, LoginState } from '../../atom'
import { defaultInstance } from '../../api/Api'
import { useQuery } from '@tanstack/react-query'
import '../../assets/styles/Job/JobListItem.css'

export interface JobListItemProps {
  wantedAuthNo: string
  company: string
  title: string
  salTpNm: string
  region: string
  holidayTpNm: string
  minEdubg: string // 최소학력
  career: string // 경력
  regDt: string
  closeDt: string
  degreeCode: any
  workingDay: string
  salary: string
  salaryType: string
}

const JobListItemContainer = styled.div`
  font-size: 16px;
  color: #666666;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  color: #666666;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 30px 0 30px 0;

  :hover {
    color: #76dcb0;
  }
`

const JobListItem = ({
  wantedAuthNo,
  company,
  title,
  salTpNm,
  region,
  holidayTpNm,
  minEdubg,
  career,
  regDt,
  closeDt,
  degreeCode,
  workingDay,
  salary,
  salaryType,
}: JobListItemProps) => {
  // const [dbUserId, setDbUserId] = useRecoilState(DbUserId)
  const [dbUserId, setDbUserId] = useRecoilState(LoginState)
  const workRegionData = `${region}`
  const workRegionArray = workRegionData.split(' ')

  const numberWithCommas = (x: any) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  const [findLike, setFindLike] = useState(false)
  ///
  const getListItemUsersLike = async () => {
    const res = await axios(process.env.REACT_APP_SERVER_URL + `/myPage/getUsersLike?user_id=${dbUserId.userId}`, {
      method: 'GET',
    })
    return res.data
  }
  const { data, error, isError, isLoading } = useQuery(['getListItemUsersLike', findLike], getListItemUsersLike, {})

  const findWantedCode = (wantedAuthNo: any) => {
    const item = data.find((item: any) => item.wantedCode === wantedAuthNo)

    return item ? setFindLike(true) : setFindLike(false)
  }

  useEffect(() => {
    if (data) {
      findWantedCode(wantedAuthNo)
    }
  })
  return (
    <>
      <JobListItemContainer>
        <div
          style={{
            width: '100%',
            color: '#666666',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {findLike === true ? (
            <BsStarFill size={20} color="#76DCB0" strokeWidth="0.01"></BsStarFill>
          ) : (
            <BsStar size={20} color="#76DCB0" strokeWidth="0.01"></BsStar>
          )}
          <StyledLink to={`/detail/${wantedAuthNo}`} state={{ wantedCode: `${wantedAuthNo}` }}>
            <div style={{ flex: '2 1 0', textAlign: 'center' }} className="smallListItem">
              {company}
            </div>

            <div style={{ flex: '4 1 0' }} className="TitleMargin">
              <div style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>{title}</div>
              <div>
                {career} | {degreeCode.degree} | {workRegionArray[2] + ' ' + workRegionArray[3]}
              </div>
            </div>

            <div style={{ flex: '2 1 0' }} className="smallListItem">
              <div style={{ marginBottom: '10px', textAlign: 'center' }}>
                {salaryType} | {numberWithCommas(salary)}
                {'원'}
              </div>
              <div style={{ textAlign: 'center' }}>{workingDay}</div>
            </div>

            <div style={{ flex: '2 1 0', textAlign: 'center' }}>
              <div style={{ marginBottom: '10px' }}>{regDt}</div>
              <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>{closeDt}</div>
            </div>
          </StyledLink>
        </div>
      </JobListItemContainer>
      <hr />
    </>
  )
}

export default JobListItem
