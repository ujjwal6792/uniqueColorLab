import React from "react";
import content from "../../content";

const styles = {
  servicesBox: "rounded min-h-[200px] min-w-[250px] border border-opacity-10 border-blue-dark shadow-md shadow-blue-100 p-4",
  serviceBarH: "text-3xl capitalize mb-6",
  serviceBarP: "texl-xl text-slate-700 first-letter:capitalize",
};

const ServiceCards = () => (
  <section className="grid  gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pl-4 pr-4 md:pl-2 md:pr-2 lg:pl-0 lg:pr-0">
    <span className={styles.servicesBox}>
      <h3 className={styles.serviceBarH}> {content.home.service1[0]} </h3>
      <p className={styles.serviceBarP}> {content.home.service1[1]} </p>
    </span>
    <span className={styles.servicesBox}>
      <h3 className={styles.serviceBarH}> {content.home.service2[0]} </h3>
      <p className={styles.serviceBarP}> {content.home.service2[1]} </p>
    </span>
    <span className={styles.servicesBox}>
      <h3 className={styles.serviceBarH}> {content.home.service3[0]} </h3>
      <p className={styles.serviceBarP}> {content.home.service3[1]} </p>
    </span>
    <span className={styles.servicesBox}>
      <h3 className={styles.serviceBarH}> {content.home.service4[0]} </h3>
      <p className={styles.serviceBarP}> {content.home.service4[1]} </p>
    </span>
  </section>
);

export default ServiceCards;
