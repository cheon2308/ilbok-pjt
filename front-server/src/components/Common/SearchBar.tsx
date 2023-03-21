import React from 'react'
import styled from 'styled-components'

interface SearchBarProps {
  width: string
  height: string
  placeholder: string // make placeholder optional
}

const Input = styled.input<SearchBarProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid #76dcb0;
  cursor: pointer;
  border-radius: 5px; // use default value if border_radius is not provided
  padding: 8px;
  font-size: 18px;
`

const SearchBar = (props: SearchBarProps) => {
  return <Input type="text" {...props} />
}

export default SearchBar
