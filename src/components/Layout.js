import React from 'react'
import Banner from './Banner'
import LauchPlaces from './LauchPlaces'
import Company from './Company'
import Review from './Review'
import Contact from './Contact'
import Footer from './Footer'
import Construction from './Construction'
import ContactUs from '@/pages/contactUs'
import Navbar from './Navbar'
import Head from 'next/head'

function Layout({children}) {
  return (
    <>
      <Head>
        <title>Villa</title>
      </Head>
      <div>
        <Navbar/>
        {children}
      </div>
    </>
  )
}

export default Layout