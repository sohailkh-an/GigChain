import Image from 'next/image';
import React, { useState, useEffect } from 'react';

function FeaturedServices() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchFeaturedServices() {
      const response = await fetch('/lib/featuredServices/api');
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      }
    }

    fetchFeaturedServices();
  }, []);

  return (
    <div>
      <h2>Featured Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service._id} className="service-card">
            {/* Display service details */}
            {/* <Image src={service.imageUrl} alt={service.name} /> */}
            <h3>{service.serviceName}</h3>
            <p>{service.deliveryTime}</p>
            {/* <p>{service.rating}</p> */}
            {/* <h4>{service.price}</h4> */}
            {/* Other details */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedServices;
