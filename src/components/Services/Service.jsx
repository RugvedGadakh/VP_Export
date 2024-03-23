
import React from 'react';
import './Service.css';
import img1 from '../../Assets/Image/1.jpg'
import img2 from '../../Assets/Image/2.jpg'
import img3 from '../../Assets/Image/3.jpg'
import img4 from '../../Assets/Image/4.jpg'
import img5 from '../../Assets/Image/5.jpg'

const Services = () => {
    return (
        <div className="services-container">
            <h1 className='service-head'>Our Services</h1>
            <div className="service">
                <img src={img1} alt="Surgical Wet Wipes" className="service-image" />
                <div className="service-details">
                    <div className='discription'>
                        <h2>Soft Skin Cleansing Wipes
                        </h2>
                        <p>
                        Soft skin cleansing wipes have a diverse array of applications across various settings. In hospitals, they are commonly used for patient bathing to maintain hygiene standards and ensure comfort. These wipes also play a crucial role in patient cleaning within imaging rooms, where cleanliness is essential for accurate diagnostic procedures. Additionally, soft skin cleansing wipes are invaluable for managing incontinence among nursing patients, offering a gentle and effective solution for maintaining cleanliness and comfort. Beyond medical settings, these wipes are also utilized for bedridden patients at home and by hospital care professionals during their duties. Moreover, they serve as convenient cleansing solutions for individuals with active lifestyles such as sports persons, travelers, and field executives. Furthermore, soft skin cleansing wipes find application in cosmetics, particularly for makeup removal, providing a gentle and efficient way to cleanse the skin.
                        </p>
                    </div>
                </div>
            </div>

            <div className="service">
                <div className="service-details">
                    <div className='discription'>
                        <h2>Soft Baby Skin Cleansing Wipes</h2>
                        <p>
                        Soft baby skin cleansing wipes are meticulously designed to cater to the unique needs of infants, offering an array of features and advantages for gentle and effective care. Crafted from soft spunlace non-woven fabric, these wipes provide quick and convenient cleansing, ensuring diaper changes and other cleaning tasks are effortless. Their anti-friction properties, derived from a smooth texture, make them refreshing and gentle on the baby's skin, minimizing irritation. Moreover, these wipes play a vital role in maintaining the natural pH balance of healthy baby skin, removing irritants from diaper mess and promoting a healthy skin environment. Offering comprehensive care, they cleanse, moisturize, and freshen the delicate skin, leaving it soft and comfortable. Enriched with neem extract, known for its natural antibacterial properties, these wipes provide an additional layer of protection against harmful germs, ensuring the baby's skin remains clean and healthy. In essence, soft baby skin cleansing wipes are tailored to provide gentle, effective, and hygienic care, ensuring infants' delicate skin is kept clean, moisturized, and protected.
                        </p>
                    </div>
                </div>
                <img src={img2} alt="Pharmaceutical Wet Wipes" className="service-image" />
            </div>


            <div className="service">
            <img src={img5} alt="Pharmaceutical Wet Wipes" className="service-image" />

                <div className="service-details">
                    <div className='discription'>
                        <h2>Soft Neonatal Wipes</h2>
                        <p>
                        Eco Sure Soft Neonatal Water Wipes stand out due to their innovative water technology, setting them apart from conventional wipes. Comprising 99.9% water and a trace of fruit extract, they have been meticulously crafted to offer unparalleled purity compared to traditional cloth and water methods. These wipes have undergone special development to ensure they are purer and gentler on delicate neonatal skin while providing the convenience of a wipe. By harnessing the power of water and a hint of fruit extract, they offer a safe and effective solution for cleansing, catering to the unique needs of newborns. With Eco Sure Soft Neonatal Water Wipes, parents can confidently provide gentle care for their little ones, knowing they are using a product that prioritizes purity and convenience.                        </p>
                    </div>
                </div>
            </div>

            <div className="service">

                <div className="service-details">
                    <div className='discription'>
                        <h2>Intimate Wipes</h2>
                        <p>
                        Intimate wipes offer a convenient and effective solution for maintaining hygiene in intimate areas, catering to various needs throughout daily routines. Specifically designed for menstruation, they provide a hassle-free option for sanitary pad changes, ensuring cleanliness and comfort during menstrual cycles. Additionally, these wipes are gentle yet effective for cleansing intimate areas, removing sweat, bacteria, and impurities to promote freshness and hygiene. They are commonly used before and after sexual activity to remove bodily fluids and bacteria, reducing the risk of infections and ensuring a clean experience. Moreover, intimate wipes are suitable for use after urination, offering a quick and convenient way to cleanse and maintain hygiene. With their versatile features, intimate wipes provide individuals with a reliable and discreet way to stay clean and comfortable in intimate areas throughout the day.                        </p>
                    </div>
                </div>
                <img src={img3} alt="Pharmaceutical Wet Wipes" className="service-image" />


            </div>
        </div>
    );
}

export default Services;
