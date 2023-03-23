import React from 'react'
import AddInfoNoti from '../Common/AddInfoNoti'
import JobSearch from './JobSearch'

export default function JobMainItem() {
  return (
    <>
    <div style={{backgroundColor: '#e7f4ef', height: '400px'}}>
      <div className="Main-container">
      <AddInfoNoti /> 
      </div></div>
      <div className="Main-container">
      <JobSearch />
      </div>
    </>
  )
}
