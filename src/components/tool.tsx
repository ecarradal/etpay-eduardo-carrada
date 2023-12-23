import React from 'react'
import ToolProps from '../types/ToolProps'

const Tool: React.FC<ToolProps> = ({name, icon}) => {
  return (
      <img className='tool-img' src={icon} alt={name} />
  )
}

export default Tool