import React from 'react';
import img1 from './images/11.jpeg'
import img2 from './images/111.jpeg'
import img13 from './images/6.jpeg'
import img8 from './images/8.jpeg'
import img12 from './images/12.jpeg'
import img112 from './images/112.jpg'

import img4 from './images/13.png'
import img5 from './images/20.jpeg'
import img6 from './images/19.jpeg'


const Testimonials = () => {
  const testimonials = [
    {
      imgSrc: img1,
      text: '"I bought a new tire from Edy, and the service was top-notch. Professional and quick! The staff was friendly and provided great advice on maintaining my tires. The entire process was smooth and hassle-free. "',
      name: '- Joan Sanchez',
    },
    {
      imgSrc: img2,
      text: '"Bought a used tire, and its been great. Fair prices and excellent customer service."',
      name: '- Michael M. Roark',
    },
    {
      imgSrc: img4,
      text: '"Fast and reliable service. fixed my tire in no time. Affordable and reliable,"',
      name: '- Lawanda Smith',
    },
    {
      imgSrc: img5,
      text: '"Friendly staff and excellent customer service. Edy Tire Service is the best! Fixed my tire quickly, and the price was right."',
      name: '- John B. Davila',
    },
    {
      imgSrc: img6,
      text: '"Fair dealer with affordable prices. Bought a used tire, and the quality is excellent!"',
      name: '- David Wilson',
    },
    {
      imgSrc: img13,
      text: '"Edy is so professional! Got my new tire installed quickly and at a fair price."',
      name: '- Emily Brown',
    },
   
    {
      imgSrc: img12,
      text: '"Edy Tire Service is my go-to for all tire needs. Professional, affordable, and always fair."',
      name: '- James Anderson',
    },
    {
      imgSrc: img8,
      text: '"Needed a used tire, and Edy delivered. Great service and fair prices all around."',
      name: '- Maria Rodriguez',
    },
    {
      imgSrc: img112,
      text: '"Bought a new tire here, and I am impressed by their professionalism and service quality."',
      name: '- Robert Garcia',
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-cards-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className='reviewimage'>
            <h4>{testimonial.name}</h4>
            <img src={testimonial.imgSrc} alt={`Customer ${index + 1}`} />
            </div>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
