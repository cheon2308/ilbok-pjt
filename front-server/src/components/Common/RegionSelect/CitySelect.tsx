import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
const JobSubFamilyItem = styled.div`
  padding: 15px 10px 15px 10px;
`
function CitySelect({ regionSelectCode, cityselectNameFunc }: any) {
  const CityFamily = [
    { regionCode: '02', cityCode: '021', city: '동구' },
    { regionCode: '02', cityCode: '022', city: '서구' },
    { regionCode: '02', cityCode: '023', city: '남구' },
  ]

  const [activeTab, setActiveTab] = React.useState('')
  // console.log(regionSelectCode)
  return (
    <>
      <div
        style={{
          width: '50%',
        }}
      >
        {CityFamily.map((item, index) => (
          <JobSubFamilyItem
            key={index}
            onClick={() => {
              setActiveTab(item.cityCode)
              cityselectNameFunc(item.city)
            }}
            style={{
              backgroundColor: activeTab === item.cityCode ? '#76dcb0' : index % 2 === 0 ? '#ffffff' : '#f2f2f2',
              color: activeTab === item.cityCode ? '#ffffff' : '',
            }}
          >
            {item.city}
          </JobSubFamilyItem>
        ))}
      </div>
    </>
  )
}

export default CitySelect
