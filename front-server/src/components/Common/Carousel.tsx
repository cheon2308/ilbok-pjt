import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  padding: 0 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const LeftButton = styled(Button)`
  left: 0;
`

const RightButton = styled(Button)`
  right: 0;
`

const Carousel = styled.div`
  display: flex;
  flex-wrap: nowrap;
  transition: transform 0.3s ease;
`

interface CarouselProps {
  items: React.ReactNode[]
}

const CarouselComponent = ({ items }: CarouselProps) => {
  const [position, setPosition] = useState(0)

  const handleLeftClick = () => setPosition(position - 100)
  const handleRightClick = () => setPosition(position + 100)

  const isLeftDisabled = position === 0
  const isRightDisabled = position === -(items.length - 1) * 100

  return (
    <Wrapper>
      <LeftButton onClick={handleLeftClick} disabled={isLeftDisabled}>
        {'<'}
      </LeftButton>
      <Carousel style={{ transform: `translateX(${position}%)` }}>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Carousel>
      <RightButton onClick={handleRightClick} disabled={isRightDisabled}>
        {'>'}
      </RightButton>
    </Wrapper>
  )
}

export default CarouselComponent
