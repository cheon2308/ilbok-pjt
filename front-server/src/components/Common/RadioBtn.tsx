import React from 'react'
import '../../assets/styles/Common/RadioBtn.css'
interface RadioProps {
  value: string
  name: string
  defaultChecked?: boolean
  disabled?: boolean
}

const RadioBtn = (props: RadioProps) => {
  return (
    <label>
      <input
        type="radio"
        value={props.value}
        name={props.name}
        defaultChecked={props.defaultChecked}
        disabled={props.disabled}
      />
      {props.value}
    </label>
  )
}

export default RadioBtn
