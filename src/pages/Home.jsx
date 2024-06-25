import  "react"

import Navbar  from "../Components/navbar";
import Banner  from "../Components/Banner";
import DisplayCards  from "../Components/DisplayCards";
import Footer  from "../Components/footer";


function Home() {
  return (
    <div>
        <Navbar />       
        <Banner />
        <DisplayCards />
        <Footer />
    </div>
  )
}

export default Home