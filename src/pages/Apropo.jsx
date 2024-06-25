import  'react'

import Navbar  from "../Components/navbar";
import Propos  from "../Components/Propos";
import Footer  from "../Components/footer";

import "../Styles/Propos.css";

function Apropo() {
  return (
    <div className='Apro'>
        <Navbar />       
        <Propos />
        <Footer />
    </div>
  )
}

export default Apropo