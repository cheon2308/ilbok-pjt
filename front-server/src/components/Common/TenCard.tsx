import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import '../../assets/styles/Common/Card.css'
import { BsStar } from 'react-icons/bs'

export interface CardProps {
  title: string
  description: string
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 230px;
  height: 230px;
  margin: 15px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  min-height: 230px;
  flex-basis: 230px;
  flex-grow: 1;

  // @media (max-width: 700px) {
  //   min-height: 150px;
  //   height: 150px;
  //   max-width: 150px;
  //   flex-basis: 150px;
  //   flex-grow: 1;
  // }
  @media (min-width: 1399px) {
    min-width: 360px;
  }

  @media (min-width: 1864px) {
    min-width: 360px;
  }
  @media (min-width: 1868px) {
    min-width: 230px;
  }
  @media (min-width: 2330px) {
    max-width: 230px;
  }
`

const CardTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: 700;
  text-align: center;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  width: 100%;
  @media (max-width: 1399px) {
    width: 230px;
  }
`

const CardDescription = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: center;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  color: #666666;

  :hover {
    color: #76dcb0;
  }
`
export interface JobListItemProps {
  wantedCode: string
  company: string
  title: string
  salTpNm: string
  region: string
  holidayTpNm: string
  minEdubg: string // 최소학력
  career: string // 경력
  regDt: string
  closeDt: string
}

const TenCard = ({
  wantedCode,
  company,
  title,
  salTpNm,
  region,
  holidayTpNm,
  minEdubg,
  career,
  regDt,
  closeDt,
}: JobListItemProps) => {
  const workRegionData = `${region}`
  const workRegionArray = workRegionData.split(' ')

  return (
    <>
      <CardContainer>
        {/* <div style={{ display: 'flex', width: '100%', justifyContent: 'right' }}> */}
        {/* <BsStar size={22.5} color="#C7C7C7" strokeWidth="0.01"></BsStar> */}
        {/* </div> */}
        <StyledLink to={`/detail/${wantedCode}`} state={{ wantedCode: `${wantedCode}` }}>
          <CardDescription>{company}</CardDescription>

          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {workRegionArray[2] + ' ' + workRegionArray[3]} | {closeDt}
          </CardDescription>
        </StyledLink>
      </CardContainer>
    </>
  )
}

export default TenCard
