'use client';
import { services } from "@/lib/services";
import { FaCheckCircle } from "react-icons/fa";
import styles from '@/Styling/services.module.css';

const Services = () => {
  return (
    <section className={`${styles.section} py-16 px-6`}>
      <div className="container mx-auto relative z-10">
        <h2 className={`${styles.heading} mb-16`}>
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.card} p-6 text-center relative`}
            >
              {/* Wrapping FaCheckCircle in a span to apply className */}
              <span className={`${styles.icon} mb-4 flex justify-center`}>
                <FaCheckCircle />
              </span>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-lg text-gray-300">{service.description}</p>
              <div className={`${styles.neonBorder}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
