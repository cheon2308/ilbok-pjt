import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import {
  JobCode,
  JobCodeCareerInfo,
  JobFamilyCode,
  JobName,
  JobNameCareerInfo,
  JobSubCode,
  JobSubCodeCareerInfo,
} from '../../../atom'
import { useQuery } from '@tanstack/react-query'

import axios from 'axios'
const JobSubFamilyItem = styled.div`
  padding: 15px 10px 15px 10px;
`

interface JobCodeItemtype {
  jobFamilyCode: string
  name: string
}
function JobSubSelectCarrerInfo2({ jobSubSelectCode, jobSubSelect2NameFunc }: any) {
  const JobSubFamily = [
    { jobSubCode2: '11111', jobSubCode: '3331', jobFamilyCode: '123', name: '양식' },
    { jobSubCode2: '11112', jobSubCode: '3331', jobFamilyCode: '123', name: '중식' },
    { jobSubCode2: '11113', jobSubCode: '3331', jobFamilyCode: '123', name: '일식' },
    { jobSubCode2: '11114', jobSubCode: '3331', jobFamilyCode: '123', name: '퓨전' },
  ]
  const [jobSubCode, setjobSubCode] = useRecoilState(JobSubCodeCareerInfo) // 직업 중분류 코드
  const [jobCode, setjobCode] = useRecoilState(JobCodeCareerInfo) // 직업 소분류 코드
  const [jobName, setjobName] = useRecoilState(JobNameCareerInfo) // 직업 소분류 이름

  const [activeTab, setActiveTab] = React.useState('')
  const [JobCodequery, setJobCode] = useState<JobCodeItemtype[]>()

  const getJobCode = async () => {
    const res = await axios(process.env.REACT_APP_SERVER_URL + `/resume/jobFamily`, {
      method: 'GET',
    })
    return res.data
  }

  const { data, error, isError, isLoading } = useQuery(['getJobCode'], getJobCode, {
    onSuccess: (data) => {
      setJobCode(data)
      // 데이터 로드 후 실행할 작업
    },
    onError: (error) => {
      // 에러 발생 후 실행할 작업
    },
  })

  if (isLoading) {
    return (
      <div
        style={{
          width: '300px',
        }}
      >
        직종을 선택해주세요.
      </div>
    )
  }

  if (isError) {
    return (
      <div
        style={{
          width: '300px',
        }}
      >
        직종을 선택해주세요.
      </div>
    )
  }

  return (
    <>
      <div
        style={{
          width: '100%',
        }}
      >
        {JobSubFamily &&
          JobSubFamily.map((item, index) => (
            <JobSubFamilyItem
              key={index}
              onClick={() => {
                setActiveTab(item.jobSubCode2)
                setjobCode(item.jobSubCode2)
                setjobName(item.name)
              }}
              style={{
                backgroundColor: activeTab === item.jobSubCode2 ? '#76dcb0' : index % 2 === 0 ? '#f2f2f2' : '#ffffff',
                color: activeTab === item.jobSubCode2 ? '#ffffff' : '',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                fontSize: '16px',
                width: '300px',
              }}
            >
              {item.name}
            </JobSubFamilyItem>
          ))}
      </div>
    </>
  )
}

export default JobSubSelectCarrerInfo2
