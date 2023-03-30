import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const JobSubFamilyItem = styled.div`
  padding: 15px 10px 15px 10px;
`
interface CityFamilyItem {
  regionCode: string
  cityCode: string
  city: string
}
function CitySelect({ regionSelectCode, cityselectNameFunc }: any) {
  const [CityFamily, setCityFamily] = useState<CityFamilyItem[]>()

  const getCitySelect = async () => {
    const res = await axios(process.env.REACT_APP_SERVER_URL + `/resume/cities?region_code=${regionSelectCode}`, {
      method: 'GET',
    })
    return res.data
  }

  const { data, error, isError, isLoading } = useQuery(['getCitySelect', regionSelectCode], getCitySelect, {
    onSuccess: (data) => {
      setCityFamily(data)
      console.log('data:', data)
      // 데이터 로드 후 실행할 작업
    },
    onError: (error) => {
      console.log('error:', error)
      // 에러 발생 후 실행할 작업
    },
  })

  const [activeTab, setActiveTab] = React.useState('')
  // console.log(activeTab)
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
        {CityFamily &&
          CityFamily.map((item, index) => (
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
