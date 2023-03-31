import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const JobSubFamilyItem = styled.div`
  padding: 15px 10px 15px 10px;
`

interface JobSubFamily {
  jobSubCode: string
  jobFamilyCode: string
  name: string
}

interface JobSubSelectProps {
  jobSelectCode: string
  jobSubSelectNameFunc: (name: string) => void
  jobSubSelectCodeFunc: (code: string) => void
}

function JobSubSelect({ jobSelectCode, jobSubSelectNameFunc, jobSubSelectCodeFunc }: JobSubSelectProps) {
  const [jobSubFamily, setJobSubFamily] = useState<JobSubFamily[]>([])

  const getJobSubFamilySelect = async () => {
    const res = await axios(
      process.env.REACT_APP_SERVER_URL + `/resume/jobSubFamily?job_family_code=${jobSelectCode}`,
      {
        method: 'GET',
      }
    )
    return res.data
  }

  const { data, error, isError, isLoading } = useQuery(
    ['getJobSubFamilySelect', jobSelectCode],
    getJobSubFamilySelect,
    {
      onSuccess: (data) => {
        setJobSubFamily(data)
        console.log('data:', data)
        // 데이터 로드 후 실행할 작업
      },
      onError: (error) => {
        console.log('error:', error)
        // 에러 발생 후 실행할 작업
      },
    }
  )

  const [activeTab, setActiveTab] = React.useState('')

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error occurred </div>
  }

  return (
    <>
      <div
        style={{
          width: '50%',
        }}
      >
        {jobSubFamily.map((item, index) => (
          <JobSubFamilyItem
            key={index}
            onClick={() => {
              setActiveTab(item.jobSubCode)
              jobSubSelectNameFunc(item.name)
              jobSubSelectCodeFunc(item.jobSubCode)
            }}
            style={{
              backgroundColor: activeTab === item.jobSubCode ? '#76dcb0' : index % 2 === 0 ? '#ffffff' : '#f2f2f2',
              color: activeTab === item.jobSubCode ? '#ffffff' : '',
            }}
          >
            {item.name}
          </JobSubFamilyItem>
        ))}
      </div>
    </>
  )
}

export default JobSubSelect
