import React, { useEffect, useState } from 'react'
import ReactHelmet from '../Components/Layout/ReactHelmet'
import Banner from '../Components/Banner'
import CatagoryCard from '../Components/CatagoryCard'
import SectionHeading from '../Components/SectionHeading'
import PapularManuCard from '../Components/PapularManuCard'

const Home = () => {

  const [papular, setPapular]=useState(null)

  useEffect(()=>{

    fetch('Papular.json')
    .then((res)=> res.json())
    .then((data)=> {
      const papularData=data.filter((items)=> items.category === 'popular')
      setPapular(papularData)
    })
  },[])

  console.log(papular)
  return (
    <section className='container mx-auto'>
      <div>
        <Banner  />
      </div>


      {/* catagory */}
      <div>
        <SectionHeading title="Our Categories" desc="Explore a variety of delicious dishes" time={'---From 11:00am to 10:00pm---'} />
        <CatagoryCard />
      </div>

      {/* papular manu */}
      <SectionHeading title="FROM OUR MENU" desc="Explore a variety of delicious dishes" time={'---Check it out---'} />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {papular && papular.map(item => (
          <PapularManuCard key={item._id} item={item} />
        ))}
      </div>

    </section>
  )
}

export default Home