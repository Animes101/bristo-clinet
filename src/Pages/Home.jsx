import React from 'react'
import ReactHelmet from '../Components/Layout/ReactHelmet'
import Banner from '../Components/Banner'
import CatagoryCard from '../Components/CatagoryCard'
import SectionHeading from '../Components/SectionHeading'

const Home = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <Banner  />
      </div>


      {/* catagory */}
      <div className='container  mx-auto'>
        <SectionHeading title="Our Categories" desc="Explore a variety of delicious dishes" time={'---From 11:00am to 10:00pm---'} />
        <CatagoryCard />
      </div>

    </section>
  )
}

export default Home