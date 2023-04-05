import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useRecoilState } from 'recoil'
import { CityCode, RegionCode, RegionName } from '../../../atom'

const RegionFamilyItem = styled.div`
  padding: 15px 10px 15px 10px;
`
interface RegionFamilyItem {
  regionCode: string
  region: string
}

function RegionSelect() {
  const [activeTab, setActiveTab] = React.useState('')
  const [RegionFamily, setRegionFamily] = useState<RegionFamilyItem[]>()

  const [regionName, setRegionName] = useRecoilState(RegionName)
  const [regionCode, setRegionCode] = useRecoilState(RegionCode)
  const getRegionSelect = async () => {
    const res = await axios(process.env.REACT_APP_SERVER_URL + `/resume/regions`, {
      method: 'GET',
    })
    return res
  }

  const { data, error, isError, isLoading } = useQuery(['getRegionSelect'], getRegionSelect, {
    onSuccess: (data) => {
      setRegionFamily(data.data)
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
        {RegionFamily &&
          RegionFamily.map((item, index) => (
            <RegionFamilyItem
              key={index}
              onClick={() => {
                setActiveTab(item.regionCode)
                setRegionCode(item.regionCode)
                setRegionName(item.region)
              }}
              style={{
                backgroundColor: activeTab === item.regionCode ? '#76dcb0' : index % 2 !== 0 ? '#ffffff' : '#f2f2f2',
                color: activeTab === item.regionCode ? '#ffffff' : '',
                fontSize: '16px',
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
