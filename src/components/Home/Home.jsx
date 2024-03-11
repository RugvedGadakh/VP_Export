import React from "react"
import "./Home.css"

const Home = () => {
    return (
        <>
            <section className='hero' id='about'>
                <div className='container d_flex top'>
                    <div className='left'>
                        <div className='right_img'>
                            <img src="https://vcpexportenterprisesllp0.files.wordpress.com/2024/02/wet-wipes-production-albaad-1.jpg" alt='profile_img' />
                        </div>
                    </div>
                    <div className='right top'>

                        <h1>
                            WELCOME TO
                            VCP EXPORT ENTERPRISES LLP
                        </h1>


                        <p>Vcp Export Enterprises llp is established as a Nashik based company in the India

                            The company is operating in the business of products TISSUES (facial, kitchen, toilet, and paper napkins), WET WIPES . All our products have different sizes, specifications, design, and packing as per the standard market requirements.
                        </p>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Home;