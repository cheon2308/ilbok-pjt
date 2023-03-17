import React from 'react'
import SearchBar from '../components/Common/SearchBar'
import Card from '../components/Common/Card'
import CarouselComponent from '../components/Common/Carousel'
import { useState } from 'react'

const MainPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const items = [
    {
      title: 'Item 1',
      description: 'This is the first item',
      image: 'https://picsum.photos/400/200?random=1',
    },
    {
      title: 'Item 2',
      description: 'This is the second item',
      image: 'https://picsum.photos/400/200?random=2',
    },
    {
      title: 'Item 3',
      description: 'This is the third item',
      image: 'https://picsum.photos/400/200?random=3',
    },
    {
      title: 'Item 4',
      description: 'This is the fourth item',
      image: 'https://picsum.photos/400/200?random=4',
    },
    {
      title: 'Item 5',
      description: 'This is the fifth item',
      image: 'https://picsum.photos/400/200?random=5',
    },
  ]

  const handleItemChange = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <SearchBar width="60%" height="30px" border_radius="5px" placeholder="Search" />
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
