import React from 'react'
import Navbar from './Navbar'

const layout = ({children}) => {
  return (
    <div style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        <Navbar/>
        {children}
    </div>
  )
}

export default layout