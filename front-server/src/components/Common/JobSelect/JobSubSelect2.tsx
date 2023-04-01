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
  jobFamilyCode: string
  name: string
}
function JobSubSelect2({ jobSubSelectCode, jobSubSelect2NameFunc }: any) {
  const JobSubFamily = [
    { jobSubCode2: '11111', jobSubCode: '3331', jobFamilyCode: '123', name: '양식' },
    { jobSubCode2: '11112', jobSubCode: '3331', jobFamilyCode: '123', name: '중식' },
    { jobSubCode2: '11113', jobSubCode: '3331', jobFamilyCode: '123', name: '일식' },
    { jobSubCode2: '11114', jobSubCode: '3331', jobFamilyCode: '123', name: '퓨전' },
  ]
  const [jobSubCode, setjobSubCode] = useRecoilState(JobSubCode) // 직업 중분류 코드
  const [jobCode, setjobCode] = useRecoilState(JobCode) // 직업 소분류 코드
  const [jobName, setjobName] = useRecoilState(JobName) // 직업 소분류 이름

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
      console.log('data:', data)
      // 데이터 로드 후 실행할 작업
    },
    onError: (error) => {
      console.log('error:', error)
      // 에러 발생 후 실행할 작업
    },
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error occurred </div>
  }
  console.log(jobSubSelectCode)

  return (
    <>
      <div
        style={{
          width: '50%',
        }}
      >
        {JobSubFamily.map((item, index) => (
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
