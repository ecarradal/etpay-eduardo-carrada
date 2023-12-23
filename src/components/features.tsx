import React from 'react'
import Feature from './feature'
import featuresData from '../constants/featuresData'

const Features = () => {
  return (
    <div className='container wrap features-container'>
      {featuresData.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </div>
  )
}

export default Features
