import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'

const RegionFamilyItem = styled.div`
  padding: 15px 10px 15px 10px;
`
function RegionSelect({ regionSelectCodeFunc, regionSelectNameFunc }: any) {
  const [activeTab, setActiveTab] = React.useState('')

  const RegionFamily = [
    { regionCode: '02', region: '서울특별시' },
    { regionCode: '051', region: '부산광역시' },
    { regionCode: '054', region: '경상북도' },
  ]

  return (
    <>
      <div style={{ width: '50%' }}>
        {RegionFamily.map((item, index) => (
          <RegionFamilyItem
            key={index}
            onClick={() => {
              regionSelectCodeFunc(item.regionCode)
              regionSelectNameFunc(item.region)
              setActiveTab(item.regionCode)
            }}
            style={{
              backgroundColor: activeTab === item.regionCode ? '#76dcb0' : index % 2 !== 0 ? '#ffffff' : '#f2f2f2',
              color: activeTab === item.regionCode ? '#ffffff' : '',
            }}
          >
            {item.region}
          </RegionFamilyItem>
        ))}
      </div>
    </>
  )
}

export default RegionSelect
