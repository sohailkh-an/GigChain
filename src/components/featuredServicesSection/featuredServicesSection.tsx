import { useEffect, useState } from "react";
import ServiceCard from "../serviceCard/serviceCard";
// /api/services?featured=true&type=${serviceType}
import styles from "./styles/featuredServicesSectionStyles.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FeaturedServicesSection({ serviceType }: { serviceType: string }) {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

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
      <Slider {...sliderSettings}>
        {services.map((service, index) => (
          <div key={index}>
            <ServiceCard service={service} />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default FeaturedServicesSection;
