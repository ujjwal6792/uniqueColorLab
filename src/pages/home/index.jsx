import React from "react";
import content from "../../content";

const styles={
    servicesBar: "min-h-[200px] min-w-[250px] shadow p-4",
    serviceBarH:"text-3xl capitalize mb-6",
    serviceBarP:"texl-xl first-letter:capitalize",
}

const Home = () => {
  return (
    <>
      {/* hero section */}
      <div className="w-full flex flex-col min-h-fit md:pt-20">
        <main className="flex flex-col min-h-full">
          <section className="w-1/2 min-h-[90vh] flex flex-col p-2 md:pt-[15%] justify-center bg-white leading-8">
            <h3 className="text-4xl capitalize">{content.home.heroHeadding}</h3>
            <p className="capitalize text-xl ">{content.home.heroPara}</p>
            <button className="mt-8 text-lg border h-min w-max pt-2 pb-2 pl-4 pr-4 rounded border-blue-900 hover:bg-blue-900 hover:text-white hover:transition-opacity shadow-md">
              Explore Now
            </button>
          </section>
          <img src="" alt="" />
        </main>

        <section className="grid gap-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          <span className={styles.servicesBar}>
           <h3 className={styles.serviceBarH}> {content.home.service1[0]} </h3>
           <p className={styles.serviceBarP}> {content.home.service1[1]} </p>
            </span>
          <span className={styles.servicesBar}>
          <h3 className={styles.serviceBarH}> {content.home.service2[0]} </h3>
           <p className={styles.serviceBarP}> {content.home.service2[1]} </p>
          </span>
          <span className={styles.servicesBar}>
          <h3 className={styles.serviceBarH}> {content.home.service3[0]} </h3>
           <p className={styles.serviceBarP}> {content.home.service3[1]} </p>
          </span>
          <span className={styles.servicesBar}>
          <h3 className={styles.serviceBarH}> {content.home.service4[0]} </h3>
           <p className={styles.serviceBarP}> {content.home.service4[1]} </p>
          </span>
        </section>

        <section></section>
      </div>
    </>
  );
};
export default Home;
