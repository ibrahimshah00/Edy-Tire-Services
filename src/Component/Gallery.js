import React from 'react';
import newtire from './images/edy.jpg'
import newtire2 from './images/edy0.jpg'
import newtire3 from './images/edy1.jpg'
import newtire4 from './images/edy11.jpg'
import newtire5 from './images/edy2.jpg'
import newtire6 from './images/edy3.jpg'
import newtire7 from './images/edy4.jpg'
import newtire8 from './images/edy5.jpg'

import newtire9 from './images/edy6.jpg'
import newtire0 from './images/edy7.jpg'
import newtire11 from './images/edy8.jpg'
import newtire12 from './images/edutire.jpg'
import newtire13 from './images/edutire1.jpg'
import newtire14 from './images/edutire2.jpg'
import newtire15 from './images/edutire3.jpg'

const images = [
    newtire,
    newtire2,
    newtire3,
    newtire4,
    newtire5,
    newtire6,
    newtire7,
    newtire8,
  newtire9,
  newtire0,
  newtire12,
  newtire13,
  newtire14,
  newtire15,
  newtire5,
  newtire6,
  newtire7,
  newtire8,
  newtire11,

   
];


const Gallery = () => {
  return (
    <>
    <section className="gallery">
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
    

   
  

    </>
  );
};

export default Gallery;
