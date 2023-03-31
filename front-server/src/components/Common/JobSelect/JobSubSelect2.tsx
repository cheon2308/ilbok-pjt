import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { JobCode, JobName, JobSubCode } from '../../../atom'
const JobSubFamilyItem = styled.div`
  padding: 15px 10px 15px 10px;
`
function JobSubSelect2() {
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
  // console.log(jobSubSelectCode)
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
