import React, { useState } from "react"
import "./Header.css"

const Header = () => {
    // fixed Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })
    // Toogle Menu
    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        <a href="/home"><h2><img className="logoImg" src="https://vcpexportenterprisesllp0.files.wordpress.com/2024/02/whatsapp-image-2024-01-18-at-3.34.08-pm-1-1-edited-1.jpeg?w=130&h=43"></img> EXPORT ENTERPRISES LLP</h2></a>
                    </div>

                    <div className='navlink'>
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                            {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
                            <li><a href="/home">home</a></li>
                            <li><a href="/about">about</a></li>
                            <li><a href="/service">service</a></li>
                            <li><a href="/shop">shop</a></li>
                            <li><a href="/contact">contact</a></li>
                        </ul>

                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <i className='fa-solid fa-x close home-btn'></i> : <i className='fas fa-bars open'></i>}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header

