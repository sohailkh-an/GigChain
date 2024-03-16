import Image from "next/image";
import styles from './styles/serviceCard.module.scss';

function ServiceCard({ service }: { service: any }) {
  return (
    <div className={styles.service_card}>
      <img
        width={400}
        height={200}
        src={service.thumbnailUrl}
        alt={service.category}
      />
      <div className={styles.cardDetails}>
        <h3>{service.serviceProvider}</h3>
        <p>
          ⭐ {service.rating} ({service.reviews})
        </p>
        <p className={styles.serviceDescription}>{service.description}</p>
      </div>
      {/* Add more details as needed */}
    </div>
  );
}

export default ServiceCard;
