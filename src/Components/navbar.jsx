import  "react"
import { NavLink } from "react-router-dom";


import "../Styles/navbar.css";

function navbar() {
  return (
  <div>
    <nav className='navbar'>
      <div className='navbarLogo'>
        <img src= "logocl.png" alt='log'/>
      </div>
      <div className="navProp">
        <NavLink to="/">
          <div>accueil</div>
        </NavLink>
        <NavLink to="/Apropo">
          <div>À propos</div>
        </NavLink>
      </div>
    </nav>
  </div>
  )
}

export default navbar
