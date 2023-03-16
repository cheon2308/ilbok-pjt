import React from 'react'
import SearchBar from '../components/Common/SearchBar'

const MainPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <SearchBar width="80%" height="30px" border_radius="5px" placeholder="Search" />
    </div>
  )
}

export default MainPage
