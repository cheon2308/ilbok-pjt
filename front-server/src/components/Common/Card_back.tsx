import React from 'react'
import styled from 'styled-components'

export interface CardProps {
  image?: string
  title: string
  description: string
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`

const CardTitle = styled.h3`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`

const CardDescription = styled.p`
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
`

const Card = ({ image, title, description }: CardProps) => {
  return (
    <CardContainer>
      <CardImage src={image} />

      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  )
}

export default Card
