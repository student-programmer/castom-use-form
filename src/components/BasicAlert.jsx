import React from 'react'

const BasicAlert = ({color, children}) => {
  return (
    <div className={`notification ${color}`}>
        {children}
    </div>
  )
}

export default BasicAlert