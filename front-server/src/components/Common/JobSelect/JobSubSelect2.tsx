import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { JobCode, JobFamilyCode, JobName, JobSubCode } from '../../../atom'
import { useQuery } from '@tanstack/react-query'

import axios from 'axios'
const JobSubFamilyItem = styled.div`
  padding: 15px 10px 15px 10px;
`

interface JobCodeItemtype {
  code: string
  name: string
}
function JobSubSelect2() {
  const [jobSubCode, setjobSubCode] = useRecoilState(JobSubCode) // 직업 중분류 코드
  const [jobCode, setjobCode] = useRecoilState(JobCode) // 직업 소분류 코드
  const [jobName, setjobName] = useRecoilState(JobName) // 직업 소분류 이름

  const [activeTab, setActiveTab] = React.useState('')
  const [JobCodequery, setJobFamilyCode] = useState<JobCodeItemtype[]>()

  const getJobCode = async () => {
    const res = await axios(process.env.REACT_APP_SERVER_URL + `/resume/jobs?job_sub_code=${jobSubCode}`, {
      method: 'GET',
    })
    return res.data
  }

  const { data, error, isError, isLoading } = useQuery(['getJobCode', jobSubCode], getJobCode, {
    onSuccess: (data) => {
      setJobFamilyCode(data)
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
          width: '100%',
        }}
      ></div>
    )
  }

  if (isError) {
    return (
      <div
        style={{
          width: '100%',
        }}
      ></div>
    )
  }

  return (
    <>
      <div
        style={{
          width: '100%',
        }}
      >
        {JobCodequery &&
          JobCodequery.map((item, index) => (
            <JobSubFamilyItem
              key={item.code}
              onClick={() => {
                setActiveTab(item.code)
                setjobCode(item.code)
                setjobName(item.name)
              }}
              style={{
                backgroundColor: activeTab === item.code ? '#76dcb0' : index % 2 === 0 ? '#f2f2f2' : '#ffffff',
                color: activeTab === item.code ? '#ffffff' : '',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                width: '300px',
                whiteSpace: 'nowrap',
                fontSize: '16px',
              }}
            >
              {item.name}
            </JobSubFamilyItem>
          ))}
      </div>
    </>
  )
}

export default JobSubSelect2
