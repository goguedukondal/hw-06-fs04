import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'
import {CiTwitter} from 'react-icons/ci'
function Navbar() {
  return (
    <div className='navbar'>
       <h1 style={{fontFamily:"inherit",color:"grey",marginTop:"8px"}}>logo</h1> 
       <div className='heading'>
        <h3 style={{color:"blue"}}>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
       </div>
       <div className='icons'>
        <FiFacebook className='icon'/>
        <CiTwitter  className='icon'/>
        <AiOutlineInstagram  className='icon'/>
       
       </div>

    </div>
  )
}

export default Navbar