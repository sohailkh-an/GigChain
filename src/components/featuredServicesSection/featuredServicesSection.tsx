import { useEffect, useState } from "react";
import ServiceCard from "../serviceCard/serviceCard";
// /api/services?featured=true&type=${serviceType}
import styles from './styles/featuredServicesSectionStyles.module.scss'

function FeaturedServicesSection({ serviceType }: { serviceType: any }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchFeaturedServices() {
      const response = await fetch("/lib/featuredServices/api");
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      }
    }

    fetchFeaturedServices();
  }, []);

return (
    <section className={styles.featuredServices_main_container}>
        <h2>Featured {serviceType}</h2>
        <div className={styles.services_container}>
            {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
            ))}
        </div>
        {/* Add navigation or "See More" link as needed */}
    </section>
);
}

export default FeaturedServicesSection;
