import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Hero from './Components/Landing/Hero'
import HotelInfo from './Components/Landing/HotelInfo'
import GiftSection from './Components/Landing/GiftSection'
import FeedBack from './Components/Landing/FeedBack'
import AboutHero from './Components/About/AboutHero'
import AboutInfo from './Components/About/AboutInfo'
import Faq from './Components/About/Faq'
import ContactHero from './Components/Contact/ContactHero'
import ContactInfo from './Components/Contact/ContactInfo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={<> <Hero /> <HotelInfo /> <GiftSection /> <FeedBack /> </>} />
          <Route path='/about' element={<><AboutHero /> <AboutInfo /> <Faq /> </> } />
          <Route path='/contact' element={<><ContactHero/> <ContactInfo /> </> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
