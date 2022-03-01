import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <div className="navbar">
                   <nav>
                       <div className="logo">
                       <img src="./Images/signature.png" alt="signature" />
                           {/* <h2>Vipul</h2> */}
                       </div>
                       <div className="menu">
                           <ul>
                               <NavLink exaxt to='/' style={{ textDecoration: 'none' }} className="menulink">Home</NavLink>
                               <NavLink exaxt to='/education' style={{ textDecoration: 'none' }}  className="menulink">Education</NavLink>
                               <NavLink exaxt to='/projects'  style={{ textDecoration: 'none' }} className="menulink">Projects</NavLink>
                               <NavLink exaxt to='/service'  style={{ textDecoration: 'none' }} className="menulink">Service</NavLink>
                               <NavLink exaxt to='/contact'  style={{ textDecoration: 'none' }} className="menulink">Contact</NavLink>
                           </ul>
                       </div>
                   </nav>
            </div>

        </>
    )
}
