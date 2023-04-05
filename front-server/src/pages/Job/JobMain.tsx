import React, { useEffect, useState } from 'react'
import Footer from '../../components/Common/Footer'
import JobMainItem from '../../components/Job/JobMainItem'
import { useLocation } from 'react-router'

function JobMain() {
  const location = useLocation()
  const state = location.state
  return (
    <>
      <JobMainItem keyword={state} />
    </>
  )
}
export default JobMain
