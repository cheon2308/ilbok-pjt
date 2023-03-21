import React from 'react'
import styled from 'styled-components'

interface SearchBarProps {
  width: string
  height: string
  placeholder: string // make placeholder optional
  borderwidth: string
  bordercolor: string
}

const Input = styled.input<SearchBarProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.borderwidth} solid ${(props) => props.bordercolor};
  cursor: pointer;
  border-radius: 5px; // use default value if border_radius is not provided
  padding: 8px;
  font-size: 18px;

  &:hover {
    border: 2px solid #c6f0de;
    box-shadow: inset 0 0 0 1px #c6f0de;
  }
  &:focus {
    outline: none !important;
    border-color: #c6f0de;
    box-shadow: inset 0 0 0 1px #c6f0de;
  }
`

const SearchBar = (props: SearchBarProps) => {
  return <Input type="text" {...props} />
}

export default SearchBar
