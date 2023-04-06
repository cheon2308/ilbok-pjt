import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 60%;
  margin: 0 auto;
`

const Button = styled.button`
  background-color: transparent;

  cursor: pointer;
  height: 100px;
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
  z-index: 2;
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

const Item = styled.div<{ active: boolean }>`
  width: calc(60vw / 5);
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  transform: ${(props) => (props.active ? 'scale(1)' : 'scale(0.8')};
  z-index: ${(props) => (props.active ? 2 : 1)};
  transition: transform 0.3s ease, z-index 0.3s ease;
`

interface CarouselProps {
  items: React.ReactNode[]
  activeIndex: number
  onChange?: (index: number) => void
}

const CarouselComponent = ({ items, activeIndex, onChange }: CarouselProps) => {
  const [position, setPosition] = useState(40)

  const handleLeftClick = () => {
    setPosition(position + 20)
    if (activeIndex > 0) {
      onChange && onChange(activeIndex - 1)
    }
  }

  const handleRightClick = () => {
    setPosition(position - 20)
    if (activeIndex < items.length - 1) {
      onChange && onChange(activeIndex + 1)
    }
  }
  const isLeftDisabled = activeIndex === 0
  const isRightDisabled = position <= -40 || activeIndex === items.length - 1
  const handleItemClick = (index: number) => {
    setPosition(-(index - 2) * 20)
    onChange && onChange(index)
  }

  return (
    <Wrapper>
      <LeftButton onClick={handleLeftClick} disabled={isLeftDisabled}>
        {'<'}
      </LeftButton>
      <Carousel style={{ transform: `translateX(${position}%)` }}>
        {items && items.map((item, index) => (
          <Item key={index} active={index === activeIndex} onClick={() => handleItemClick(index)}>
            {item}
          </Item>
        ))}
      </Carousel>
      <RightButton onClick={handleRightClick} disabled={isRightDisabled}>
        {'>'}
      </RightButton>
    </Wrapper>
  )
}

export default CarouselComponent
