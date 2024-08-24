
import React from 'react';

const MapLocation = () => {
  return (
    <section className="map-location">
      <h2>Our Location</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.642345012757!2d-76.9657674!3d38.9251875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c7708d4d3b11%3A0x87051368231090d5!2sEdy%20Tire%20Service!5e0!3m2!1sen!2sus!4v1637895041615!5m2!1sen!2sus"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
      <p className="map-description">
        Visit us at Edy Tire Service. We are located at 2712 Bladensburg Rd NE, Washington, DC 20018, United States. Our location is easily accessible, and we look forward to seeing you!
      </p>
    </section>
  );
};

export default MapLocation;
