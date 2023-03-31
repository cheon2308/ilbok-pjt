import React, { useEffect } from 'react'
import Footer from '../../components/Common/Footer'
import JobDetailItem from '../../components/Job/JobDetailItem'
import '../../assets/styles/Job/JobDetail.css'
import { useLocation } from 'react-router'
export default function JobDetail() {
  interface StateProps {
    wantedCode: string
  }

  const location = useLocation()
  const state = location.state as StateProps // Type Casting, then you can get the params passed via router
  const { wantedCode } = state
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="Main-container">
        <JobDetailItem wantedCode={wantedCode} />
      </div>
    </>
  )
}
