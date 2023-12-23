import React from 'react'
import toolsData from '../constants/toolsData'
import Tool from './tool'

const Tools = () => {
  return (
    <div className='container wrap justify-center space-around tools-container'>
      {
        toolsData.map((tool, index) => (
            <Tool key={index} {...tool} />
        ))
      }
    </div>
  )
}

export default Tools
