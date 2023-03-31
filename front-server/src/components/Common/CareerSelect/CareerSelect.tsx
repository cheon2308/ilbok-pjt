import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useRecoilState } from 'recoil'
import { CareerSelectCode } from '../../../atom'
import { CareerSelectName } from '../../../atom'

const JobSubFamilyItem = styled.div`
  padding: 15px 10px 15px 10px;
`
interface CityFamilyItem {
  regionCode: string
  cityCode: string
  city: string
}
function CareerSelect() {
  const CareerFamily = [
    { careerCode: '0', name: '신입' },
    { careerCode: '1', name: '경력' },
  ]
  const [careerCode, setCareerCode] = useRecoilState(CareerSelectCode)
  const [careerName, setCareerName] = useRecoilState(CareerSelectName)
  const [activeTab, setActiveTab] = useState('')

  return (
    <>
      <div
        style={{
          width: '50%',
        }}
      >
        {CareerFamily &&
          CareerFamily.map((item, index) => (
            <JobSubFamilyItem
              key={index}
              onClick={() => {
                setActiveTab(item.careerCode)
                setCareerCode(item.careerCode)
                setCareerName(item.name)
              }}
              style={{
                backgroundColor: activeTab === item.careerCode ? '#76dcb0' : index % 2 === 0 ? '#ffffff' : '#f2f2f2',
                color: activeTab === item.careerCode ? '#ffffff' : '',
              }}
            >
              {item.name}
            </JobSubFamilyItem>
          ))}
      </div>
    </>
  )
}

export default CareerSelect
