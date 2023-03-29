import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'

const JobFamilyItem = styled.div`
  padding: 15px 10px 15px 10px;
`
function JobSelect({ jobSelectCodeFunc, jobSelectNameFunc }: any) {
  const [activeTab, setActiveTab] = React.useState('')

  const JobFamily = [
    { jobFamilyCode: '123', name: '서비스업' },
    { jobFamilyCode: '456', name: '제조업' },
  ]

  return (
    <>
      <div style={{ width: '50%' }}>
        {JobFamily.map((item, index) => (
          <JobFamilyItem
            key={index}
            onClick={() => {
              jobSelectCodeFunc(item.jobFamilyCode)
              jobSelectNameFunc(item.name)
              setActiveTab(item.jobFamilyCode)
            }}
            style={{
              backgroundColor: activeTab === item.jobFamilyCode ? '#76dcb0' : index % 2 !== 0 ? '#ffffff' : '#f2f2f2',
              color: activeTab === item.jobFamilyCode ? '#ffffff' : '',
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
