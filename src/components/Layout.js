import React from 'react'
import Banner from './Banner'
import LauchPlaces from './LauchPlaces'
import Company from './Company'
import Review from './Review'
import Contact from './Contact'
import Footer from './Footer'

function Layout() {
  return (
    <div>
      <Banner />
      <LauchPlaces />
      <Company />
      <Review />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Layout