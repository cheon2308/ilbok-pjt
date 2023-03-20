import React from 'react'
import SearchBar from '../components/Common/SearchBar'
import Card from '../components/Common/Card'
import CarouselComponent from '../components/Common/Carousel'
import styled from 'styled-components'
import mainImage from '../assets/image/mainImage.png'
import { useState } from 'react'

const IlbokMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 400px;
`

const IlbokMainImg = styled.img`
  width: 15%;
  margin: 20px 10px;
`
const IlbokTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const IlbokMainTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-top: 20px;
`

const IlbokMainSubtitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`

const MainPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const items = [
    { title: 'Item 1', description: 'This is the first item', image: 'https://picsum.photos/400/200?random=1' },
    { title: 'Item 2', description: 'This is the second item', image: 'https://picsum.photos/400/200?random=2' },
    { title: 'Item 3', description: 'This is the third item', image: 'https://picsum.photos/400/200?random=3' },
    { title: 'Item 4', description: 'This is the fourth item', image: 'https://picsum.photos/400/200?random=4' },
    { title: 'Item 5', description: 'This is the fifth item', image: 'https://picsum.photos/400/200?random=5' },
  ]

  const handleItemChange = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <>
      <IlbokMain>
        <IlbokMainImg src={mainImage} alt="mainImg" />
        <IlbokTitleContainer>
          <IlbokMainTitle>일복</IlbokMainTitle>
          <IlbokMainSubtitle>나만의 일자리/복지</IlbokMainSubtitle>
        </IlbokTitleContainer>
      </IlbokMain>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
          textAlign: 'center',
          marginTop: '30px',
          backgroundColor: '#C6F0DE',
        }}
      >
        <SearchBar width="60%" height="30px" placeholder="Search" />
      </div>

      <div style={{ marginTop: '30px' }}>
        <CarouselComponent
          items={items.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} image={item.image} />
          ))}
          activeIndex={activeIndex}
          onChange={handleItemChange}
        />
      </div>
    </>
  )
}

export default MainPage
