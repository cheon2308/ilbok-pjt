import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const RegionFamilyItem = styled.div`
  padding: 15px 10px 15px 10px;
`
interface RegionFamilyItem {
  regionCode: string
  region: string
}

function RegionSelect({ regionSelectCodeFunc, regionSelectNameFunc }: any) {
  const [activeTab, setActiveTab] = React.useState('')
  const [RegionFamily, setRegionFamily] = useState<RegionFamilyItem[]>()
  const getRegionSelect = async () => {
    const res = await axios(process.env.REACT_APP_SERVER_URL + `/resume/regions`, {
      method: 'GET',
    })
    return res
  }

  const { data, error, isError, isLoading } = useQuery(['getRegionSelect'], getRegionSelect, {
    onSuccess: (data) => {
      setRegionFamily(data.data)
      console.log('data:', data.data)
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
  // const RegionFamily = [
  //   { regionCode: '02', region: '서울특별시' },
  //   { regionCode: '051', region: '부산광역시' },
  //   { regionCode: '054', region: '경상북도' },
  // ]

  return (
    <>
      <div style={{ width: '50%' }}>
        {RegionFamily &&
          RegionFamily.map((item, index) => (
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
