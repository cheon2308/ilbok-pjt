import React from 'react'
import '../../assets/styles/Common/RadioBtn.css'
import styled from 'styled-components'
interface RadioProps {
  value: string
  name: string
  defaultChecked?: boolean
  disabled?: boolean
}

const RadioBtnContainer = styled.label`
  margin: 0 10px 0 0;
`
const RadioBtnInput = styled.input`
`

const RadioBtn = (props: RadioProps) => {
  return (
    <RadioBtnContainer>
      <RadioBtnInput
        type="radio"
        value={props.value}
        name={props.name}
        defaultChecked={props.defaultChecked}
        disabled={props.disabled}
      />
      {props.value}
    </RadioBtnContainer>
  )
}

export default RadioBtn
