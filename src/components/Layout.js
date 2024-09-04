import React from 'react'
import Banner from './Banner'
import LauchPlaces from './LauchPlaces'
import Company from './Company'
import Review from './Review'
import Contact from './Contact'
import Footer from './Footer'

function Layout({sanityData}) {
  return (
    <div>
      <Banner />
      <LauchPlaces sanityData={sanityData} />
      <Company sanityData={sanityData} />
      <Review />
      <Contact sanityData={sanityData} />
      <Footer/>
    </div>
  )
}

export default Layout