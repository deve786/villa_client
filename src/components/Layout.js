import React from 'react'
import Banner from './Banner'
import LauchPlaces from './LauchPlaces'
import Company from './Company'
import Review from './Review'
import Contact from './Contact'
import Footer from './Footer'
import Construction from './Construction'

function Layout({sanityData}) {
  return (
    <div>
      <Banner />
      <LauchPlaces sanityData={sanityData} />
      <Construction sanityData={sanityData} />
      <Company sanityData={sanityData} />
      <Review sanityData={sanityData} />
      <Contact sanityData={sanityData} />
      <Footer/>
    </div>
  )
}

export default Layout