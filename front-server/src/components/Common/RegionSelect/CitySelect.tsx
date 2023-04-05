import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { CityCode, CityName, RegionCode } from '../../../atom'
import { useRecoilState } from 'recoil'

const JobSubFamilyItem = styled.div`
  padding: 15px 10px 15px 10px;
`
interface CityFamilyItem {
  regionCode: string
  cityCode: string
  city: string
}
function CitySelect() {
  const [CityFamily, setCityFamily] = useState<CityFamilyItem[]>()

  const [cityCode, setCityCode] = useRecoilState(CityCode)
  const [cityName, setCityName] = useRecoilState(CityName)
  const [regionCode, setRegionCode] = useRecoilState(RegionCode)
  const getCitySelect = async () => {
    const res = await axios(process.env.REACT_APP_SERVER_URL + `/resume/cities?region_code=${regionCode}`, {
      method: 'GET',
    })
    return res.data
  }

  const { data, error, isError, isLoading } = useQuery(['getCitySelect', regionCode], getCitySelect, {
    onSuccess: (data) => {
      setCityFamily(data)
      // 데이터 로드 후 실행할 작업
    },
    onError: (error) => {
      // 에러 발생 후 실행할 작업
    },
  })

  const [activeTab, setActiveTab] = React.useState('')
  if (isLoading) {
    return <div style={{ margin: '15px', width: '100%' }}>지역을 선택해주세요.</div>
  }

  if (isError) {
    return <div style={{ margin: '15px', width: '100%' }}>지역을 선택해주세요.</div>
  }

  return (
    <>
      <div
        style={{
          width: '100%',
        }}
      >
        {CityFamily &&
          CityFamily.map((item, index) => (
            <JobSubFamilyItem
              key={index}
              onClick={() => {
                setActiveTab(item.cityCode)
                setCityCode(item.cityCode)
                setCityName(item.city)
              }}
              style={{
                backgroundColor: activeTab === item.cityCode ? '#76dcb0' : index % 2 === 0 ? '#ffffff' : '#f2f2f2',
                color: activeTab === item.cityCode ? '#ffffff' : '',
                fontSize: '16px',
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
