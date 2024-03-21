import { useEffect, useState, Suspense } from "react";
import ServiceCard from "../serviceCard/serviceCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles/featuredServicesSectionStyles.module.scss";


// function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, backgroundColor: "black", borderRadius: "100%"}}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "transparent", width: "40px", height: "40px" }}
//       onClick={onClick}
//     />
//   );
// }

function FeaturedServicesSection({ serviceType }) {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
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
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        {services.map((service, index) => (
          <div key={index}>
            <ServiceCard service={service} />
          </div>
        ))}
        {/* </Suspense> */}
      </Slider>
    </section>
  );
}

export default FeaturedServicesSection;
