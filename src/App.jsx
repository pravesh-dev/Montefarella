import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Hero from './Components/Landing/Hero'
import HotelInfo from './Components/Landing/HotelInfo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={<> <Hero /> <HotelInfo /> </>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
