import React from 'react'
import styled from 'styled-components'

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
`

const CardTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  width: 100%;
`

const CardDescription = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: center;
`

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
}

const Card = ({
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
}: JobListItemProps) => {
  return (
    <CardContainer>
      <CardDescription>{company}</CardDescription>
      <CardTitle>{title}</CardTitle>
      <CardDescription>
        {region} | {closeDt}
      </CardDescription>
    </CardContainer>
  )
}

export default Card
