import React from 'react'
import Footer from '../../components/Common/Footer'
import JobDetailItem from '../../components/Job/JobDetailItem'
import './JobDetail.css'
export default function JobDetail() {
  return (
    <>
      <div className="Main-container">
        <JobDetailItem />
      </div>
      <Footer />
    </>
  )
}
