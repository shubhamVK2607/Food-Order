import React from 'react'
import "../styles/Shimmer.css"

function Shimmer() {
  return (
    <div className="menuItem2">
        {Array(15).fill("").map(()=><div className='shimmer-card'/>)}
    </div>
  )
}

export default Shimmer