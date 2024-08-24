import React from 'react';
import audiLogo from './images/audi.jpg';
import bmwLogo from './images/bmw.jpg';
import mercedesLogo from './images/merceded.jpg';
import toyotaLogo from './images/toyota.png';
import honda from './images/honda.jpg';



const carBrands = [
    { src: audiLogo, alt: 'Audi' },
    { src: bmwLogo, alt: 'BMW' },
    { src: mercedesLogo, alt: 'Mercedes' },
    { src: toyotaLogo, alt: 'Toyota' },
    { src: honda, alt: 'Honda' },
    // Add more brands as needed
];

const CarBrands = () => {
    return (
        <section className="car-brands-section">
            <div className="car-brands-container">
                <h2 className="car-brands-heading">We Repair All Makes of Automobiles</h2>
                <p className="car-brands-subheading">We work with all makes and models of vehicles</p>
                <div className="car-brands-logos">
                    {carBrands.map((brand, index) => (
                        <div className="car-brand-logo" key={index}>
                            <img 
                                src={brand.src} 
                                alt={brand.alt} 
                                className="car-brand-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CarBrands;
