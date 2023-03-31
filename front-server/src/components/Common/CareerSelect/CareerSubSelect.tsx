import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useRecoilState } from 'recoil'
import { CareerSelectCode, CareerSubSelectName } from '../../../atom'

const RegionFamilyItem = styled.div`
  padding: 15px 10px 15px 10px;
`
interface RegionFamilyItem {
  regionCode: string
  region: string
}

function CareerSubSelect() {
  const [activeTab, setActiveTab] = React.useState('')
  const [careerCode, setCarrerCode] = useRecoilState(CareerSelectCode)
  const [careerSubName, setCarrerSubName] = useRecoilState(CareerSubSelectName)
  const CareerSubFamily = [
    { careerCode: '1', period: '1', name: '1년 미만' },
    { careerCode: '1', period: '2', name: '1년 이상 ~ 3년 미만' },
    { careerCode: '1', period: '3', name: '3년 이상 ~ 5년 미만' },
    { careerCode: '1', period: '4', name: '5년 이상 ~ 10년 미만' },
    { careerCode: '1', period: '5', name: '10년 이상' },
  ]

  return (
    <>
      <div style={{ width: '50%' }}>
        {careerCode === '1'
          ? CareerSubFamily.map((item, index) => (
              <RegionFamilyItem
                key={index}
                onClick={() => {
                  setActiveTab(item.period)
                  setCarrerSubName(item.name)
                }}
                style={{
                  backgroundColor: activeTab === item.period ? '#76dcb0' : index % 2 !== 0 ? '#ffffff' : '#f2f2f2',
                  color: activeTab === item.period ? '#ffffff' : '',
                }}
              >
                {item.name}
              </RegionFamilyItem>
            ))
          : null}
      </div>
    </>
  )
}

export default CareerSubSelect
