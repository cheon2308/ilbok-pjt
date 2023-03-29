import React from 'react'
import styled from 'styled-components'

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

const JobListItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 30px 0 30px 0;

  font-size: 16px;
  color: #666666;
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
}: JobListItemProps) => {
  return (
    <>
      <JobListItemContainer>
        <div style={{ flex: '2 1 0', textAlign: 'center' }}>{company}</div>

        <div style={{ flex: '4 1 0' }}>
          <div style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>{title}</div>
          <div>
            {career} | {minEdubg} | {region}
          </div>
        </div>

        <div style={{ flex: '2 1 0' }}>
          <div style={{ marginBottom: '10px' }}>{salTpNm}</div>
          <div>{holidayTpNm}</div>
        </div>

        <div style={{ flex: '2 1 0', textAlign: 'center' }}>
          <div style={{ marginBottom: '10px' }}>{regDt}</div>
          <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>{closeDt}</div>
        </div>
      </JobListItemContainer>
      <hr />
    </>
  )
}

export default JobListItem
