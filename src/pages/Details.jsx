import React from 'react'

import Header from '../parts/Header' 
import SiteMap from '../parts/SiteMap'
import Footer from '../parts/Footer'
import BreadCrumbs from '../components/BreadCrumbs'
import ProductDetails from '../parts/Details/ProductDetails'
import Suggestion from '../parts/Details/Suggestion'

export default function Details() {
  return (
    <>
        <Header theme="black"/>

        <BreadCrumbs list={[
          {url: "/", name: "Home"},
          {url: "/categories/2133", name: "Office Room"},
          {url: "/categories/2133/products/32232", name: "Details"},
        ]} />

        <ProductDetails/>
        <Suggestion/>
        <SiteMap/>
        <Footer/>
    </>
  )
}
