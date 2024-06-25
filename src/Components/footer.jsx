import "react"
import LogoNoir from "../assets/LogoNoir.webp";
import "../Styles/footer.css";

function Footer() {
    return (
        <footer className='footer'>
            <div className='img_footer'><img src={LogoNoir} alt='Logo de bas de page' /></div>
            <div className='Text_footer'><p>© 2020 Kasa. All rights reserved</p></div>
        </footer>
    )
}

export default Footer