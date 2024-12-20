import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/popular/Popular'
import { Offer } from '../Components/Offer/Offer'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'
import { Footer } from '../Components/Footer/Footer'


export const Shop = () => {
  return (
    <>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
    </>

  )
}
