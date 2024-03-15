import React from "react"
import "./About.css"

const AboutSec = () => {
    return (
        <>
            <section className='hero' id='about'>
                <div className='container d_flex top'>
                    <div className='left'>
                        <div className='right_img'>
                            <img src="https://static01.nyt.com/images/2018/11/25/smarter-living/25a3help/22sl-cleaning1-superJumbo.jpg" alt='profile_img' />
                        </div>
                    </div>
                    <div className='right top'>

                        <h1>
                            WELCOME TO
                            VCP EXPORT ENTERPRISES LLP
                        </h1>


                        <p>
                            VCP EXPORT ENTERPRISES LLP is a dynamic company specializing in manufacturing and supplying wet wipes, with a strong emphasis on infection control products for the healthcare industry. Located strategically in Nashik, India, they boast a certified manufacturing unit adhering to international standards like ISO and GMP. Their state-of-the-art facility and qualified team ensure high-quality products. With a robust distribution network covering 22 states in India and modern marketing strategies, VCP EXPORT ENTERPRISES LLP stands out as a reliable provider of innovative solutions for surgical, pharmaceutical, hospital, retail, and home care markets.





                        </p>
                    </div>

                    

                </div>
                <div className='container'>
                <div className="vision">
                    <h1> Vision</h1>
                    <p>To be a leading provider of innovative infection control solutions in the healthcare industry, recognized for our commitment to quality, safety, and customer satisfaction.</p>

                </div>

                <div className="mission">
                    <h1>Mission</h1>
                    <p>Our mission is to manufacture and supply high-quality wet wipes and infection control products, leveraging our expertise and state-of-the-art facilities. We aim to meet the diverse needs of the healthcare sector while adhering to international standards and regulations. Through strategic partnerships, efficient distribution, and continuous innovation, we strive to enhance hygiene and comfort for customers across India and beyond.</p>

                </div>
                </div>
                
            </section>

        </>
    )
}

export default AboutSec;