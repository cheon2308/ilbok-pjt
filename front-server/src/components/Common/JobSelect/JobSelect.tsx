import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useRecoilState } from 'recoil'
import { JobFamilyCode, JobFamilyName } from '../../../atom'

const JobFamilyItem = styled.div`
  padding: 15px 10px 15px 10px;
`
interface JobFamilyItemtype {
  jobFamilyCode: string
  name: string
}
function JobSelect() {
  const [activeTab, setActiveTab] = React.useState('')
  const [JobFamily, setJobFamily] = useState<JobFamilyItemtype[]>()
  const [jobFamilyCode, setjobFamilyCode] = useRecoilState(JobFamilyCode) // 직업 대분류 코드
  const [jobFamilyName, setjobFamilyName] = useRecoilState(JobFamilyName) // 직업 대분류 이름

  // * API
  const getJobFamilySelect = async () => {
    const res = await axios(process.env.REACT_APP_SERVER_URL + `/resume/jobFamily`, {
      method: 'GET',
    })
    return res.data
  }

  const { data, error, isError, isLoading } = useQuery(['getJobFamilySelect'], getJobFamilySelect, {
    onSuccess: (data) => {
      setJobFamily(data)
      // 데이터 로드 후 실행할 작업
    },
    onError: (error) => {
      // 에러 발생 후 실행할 작업
    },
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error occurred </div>
  }

  return (
    <>
      <div style={{ width: '100%' }}>
        {/* <div style={{ margin: '15px 0 15px 0' }}>대분류</div> */}
        {JobFamily &&
          JobFamily.map((item, index) => (
            <JobFamilyItem
              key={index}
              onClick={() => {
                setjobFamilyCode(item.jobFamilyCode)
                setjobFamilyName(item.name)
                setActiveTab(item.jobFamilyCode)
              }}
              style={{
                backgroundColor: activeTab === item.jobFamilyCode ? '#76dcb0' : index % 2 !== 0 ? '#ffffff' : '#f2f2f2',
                color: activeTab === item.jobFamilyCode ? '#ffffff' : '',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                width: '300px',
                fontSize: '16px',
              }}
            >
              {item.name}
            </JobFamilyItem>
          ))}
      </div>
    </>
  )
}

export default JobSelect
