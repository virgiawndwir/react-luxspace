import React from 'react'

import Header from '../parts/Header'
import Footer from '../parts/Footer'
import BreadCrumbs from '../components/BreadCrumbs'
import SiteMap from '../parts/SiteMap'
import ShoppingCart from '../parts/Cart/ShoppingCart'
import ShippingDetails from '../parts/Cart/ShippingDetails'
// import Suggestion from '../parts/Details/Suggestion'

export default function Cart() {
  return (
    <>
        <Header theme="black"/>

        <BreadCrumbs list={[
          {url: "/", name: "Home"},
          {url: "/cart", name: "Shopping Cart"},
        ]} />

        <section className="md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex -mx-4 flex-wrap">
              <ShoppingCart/>
              <ShippingDetails/>
            </div>
          </div>
        </section>

        <SiteMap/>
        <Footer/>
    </>
  )
}
