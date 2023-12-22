import React from 'react'
import ToolProps from '../types/ToolProps'

const Tool: React.FC<ToolProps> = ({name, icon}) => {
  return (
    <div>
      <img src={icon} alt={name} />
    </div>
  )
}

export default Tool