import React from 'react';
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Banner2 from "../components/Banner/Banner2";
import Subcribe from "../components/Subscribe/Subscribe";


const Home = () => {
  return (
    <>
       <Hero />
      <Services />
      <Banner />
      <Subcribe />
      <Banner2 />
    </>
  )
}

export default Home