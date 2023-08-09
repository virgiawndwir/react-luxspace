import React from 'react'

import Header from '../parts/Header' 
import Hero from '../parts/HomePage/Hero'
import JustArrived from '../parts/HomePage/JustArrived'
import BrowseTheRoom from '../parts/HomePage/BrowseTheRoom'
import Clients from '../parts/Clients'
import SiteMap from '../parts/SiteMap'
import Footer from '../parts/Footer'
import useScrollAnchor from '../helpers/hooks/useScrollAnchor'
import useModalDOM from '../helpers/hooks/useModalDOM'

export default function HomePage(props) {
  useScrollAnchor()
  useModalDOM()
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
