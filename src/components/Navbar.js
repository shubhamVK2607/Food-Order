import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

    const [showLink,setShowLink]=useState(false)

    const handleShowLink=()=>{
        setShowLink(!showLink)
    }
  return (
    <div className="navbar">
        <div className="leftSide">
            <Link to="/"><img src={logo} alt="" /></Link>
            <div className="hiddenLinks" id={showLink?"open":"close"}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/menu">Menu</Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/menu">Menu</Link>

            <button onClick={handleShowLink}>
                <ReorderIcon/>
            </button>
        </div>
    </div>
  )
}

export default Navbar