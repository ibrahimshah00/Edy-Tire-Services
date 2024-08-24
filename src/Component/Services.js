import React from 'react';
import newtire from './images/w1.jpg';
import usedtire from './images/w2.jpg';
import valveStem from './images/valve.jpg';
import sensorProgramming from './images/sensor.jpeg';
import rotation from './images/rotation.jpg';
import balance from './images/balance.jpg';
import plug from './images/plugging.jpg';

const Services = () => {
    return (
        <>
            <h2 id='Services' className='service-heading'>Our Services</h2>
            <section className="services" id="services">
                <div className="services-cards">
                    <div className="service-card">
                        <img src={newtire} alt="New Tires" />
                        <h3>Buy New Tires</h3>
                        <p>Explore our wide range of brand new tires for all vehicles.</p>
                    </div>
                    <div className="service-card">
                        <img src={usedtire} alt="Used Tires" />
                        <h3>Buy Used Tires</h3>
                        <p>Quality used tires, fully inspected for reliability and safety.</p>
                    </div>
                    <div className="service-card">
                        <img src={valveStem} alt="Valve Stem Replacement" />
                        <h3>Valve Stem Replacement</h3>
                        <p>We replace worn-out valve stems to ensure a secure seal.</p>
                    </div>
                    <div className="service-card">
                        <img src={sensorProgramming} alt="Sensor Programming" />
                        <h3>Sensor Programming</h3>
                        <p>We program tire pressure sensors for accurate monitoring.</p>
                    </div>
                    <div className="service-card">
                        <img src={rotation} alt="Tire Rotation" />
                        <h3>Tire Rotation</h3>
                        <p>Regular tire rotations to extend tire life and improve performance.</p>
                    </div>
                    <div className="service-card">
                        <img src={balance} alt="Tire Balancing" />
                        <h3>Tire Balancing</h3>
                        <p>We provide precise tire balancing for a smooth ride.</p>
                    </div>
                    <div className="service-card">
                        <img src={plug} alt="Tire Plugging" />
                        <h3>Tire Plugging</h3>
                        <p>Quick and reliable tire plugging services to fix punctures.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
