import  'react'

import "../Styles/Appart.css";
import { NavLink } from 'react-router-dom';


function Appart() {
  return (
    <div className='Appart'>
      <NavLink to="/CardPage">
      <div className='AppTitle'>Titre de la location</div>
      </NavLink>
    </div>
  )
}

export default Appart