import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
const JobSubFamilyItem = styled.div`
  padding: 15px 10px 15px 10px;
`
function JobSubSelect({ jobSelectCode, jobSubSelectNameFunc, jobSubSelectCodeFunc }: any) {
  const JobSubFamily = [
    { jobSubCode: '3331', jobFamilyCode: '123', name: '레스토랑' },
    { jobSubCode: '3332', jobFamilyCode: '123', name: '카페' },
    { jobSubCode: '3333', jobFamilyCode: '123', name: '동물원' },
    { jobSubCode: '3334', jobFamilyCode: '123', name: '시장' },
    { jobSubCode: '3335', jobFamilyCode: '123', name: '호텔' },
  ]

  const [activeTab, setActiveTab] = React.useState('')
  // console.log(jobSelectCode)
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
