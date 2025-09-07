import React from 'react'

const SectionHeading = ({title, desc,time}) => {
  return (
    <div className='text-center my-8'>
        <p className='text-gray-600'>{time}</p>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='text-gray-600'>{desc}</p>
    </div>
  )
}

export default SectionHeading