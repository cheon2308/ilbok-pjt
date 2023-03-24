import { CarCrash } from '@mui/icons-material'
import React from 'react'
import AddInfoNoti from '../Common/AddInfoNoti'
import JobSearch from './JobSearch'
import { useState } from 'react'
import Card from '../../components/Common/Card'
import TenCardContainer from '../Common/TenCardContainer'

export default function JobMainItem() {
  const items = [
    { title: 'Item 1', description: 'This is the first item' },
    { title: 'Item 2', description: 'This is the second item' },
    { title: 'Item 3', description: 'This is the third item' },
    { title: 'Item 4', description: 'This is the fourth item' },
    { title: 'Item 5', description: 'This is the fifth item' },
    { title: 'Item 6', description: 'This is the fifth item' },
    { title: 'Item 7', description: 'This is the fifth item' },
    { title: 'Item 8', description: 'This is the fifth item' },
    { title: 'Item 9', description: 'This is the fifth item' },
    { title: 'Item 10', description: 'This is the fifth item' },
  ]
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const handleItemChange = (index: number) => {
    setActiveIndex(index)
  }
  return (
    <>
      <div style={{ backgroundColor: '#e7f4ef', height: '400px' }}>
        <div className="Main-container">
          <AddInfoNoti />
        </div>
      </div>
      <div>
        <TenCardContainer
          items={items}
          name="김유민"
          title="님과 비슷한 유저들이 관심있는 일자리"
          description="일복(日福)에서 추천하는 비슷한 유저들이 관심있는 일자리"
        />
      </div>
      <div className="Main-container">
        <JobSearch />
      </div>
    </>
  )
}
