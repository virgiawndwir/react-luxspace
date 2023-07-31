import React from 'react'

import Header from '../parts/Header' 
import Hero from '../parts/Hero'
import JustArrived from '../parts/HomePage/JustArrived'
import BrowseTheRoom from '../parts/HomePage/BrowseTheRoom'
import Clients from '../parts/Clients'
import SiteMap from '../parts/SiteMap'
import Footer from '../parts/Footer'

export default function HomePage(props) {
  return (
    <>
        <Header theme="white" position="absolute" />
        <Hero/>
        <BrowseTheRoom/>
        <JustArrived/>
        <Clients/>
        <SiteMap/>
        <Footer/>
    </>
  )
}
