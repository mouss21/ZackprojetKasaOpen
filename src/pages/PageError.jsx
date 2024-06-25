import 'react'
import ErrorPage from '../Components/ErrorPage'
import Navbar  from "../Components/navbar";
import Footer  from "../Components/footer";

import "../Styles/ErrorPage.css"

function PageError() {
  return (
    <div>
        <Navbar />       
        <ErrorPage />
        <Footer />
    </div>
  )
}

export default PageError