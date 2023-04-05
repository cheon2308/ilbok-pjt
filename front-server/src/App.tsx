/* eslint-disable */
import React from 'react'
import './App.css'
import { GlobalStyle } from './global-style'
import AppRouter from './AppRouter'
import Footer from './components/Common/Footer'
function App() {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
      <Footer />
    </>
  )
}

export default App
