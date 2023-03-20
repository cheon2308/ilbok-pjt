import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobMain from './pages/Job/JobMain'
import NavBar from './components/Layout/NavBar'
import WelfareMain from './pages/Welfare/WelfareMain'
import Main from './pages/Main'
import KakaoLogin from './components/KakaoLogin'

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/oauth" element={<KakaoLogin />} />
          <Route path="/job/*" element={<JobMain />} />
          <Route path="/welfare/*" element={<WelfareMain />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
