import React from "react";
import About from "./About";
import Blog from "./Blog";
import Hero from "./Hero";
import Insights from "./Insights";
import ServiceCards from "./ServiceCards";

const styles = {
  servicesBar: "rounded min-h-[200px] min-w-[250px] shadow p-4",
  serviceBarH: "text-3xl capitalize mb-6",
  serviceBarP: "texl-xl first-letter:capitalize",
};

const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col min-h-fit md:pt-12">
        {/* hero section */}
        <Hero />
        {/* tagline section */}
        <h1 className="text-blue-dark text-2xl md:text-5xl m mb-8 mt-6 md:mt-20 md:w-1/2"
        >Why people choose our services</h1>
        {/* cards section */}
        <ServiceCards />
        {/* About Us */}
        <section className="mt-6 md:mt-20">
          <About/>
        </section>
        {/* Business Insights */}
        <section className="mt-6 md:mt-20 pt-16 pb-16 pl-4 pr-4 lg:pl-6 lg:pr-6 bg-gradient-to-r to-sky-500 from-blue-dark via-blue-900">
          <Insights/>
        </section>
        {/* Blogs */}
        <section className="mt-6 md:mt-20 pt-16 pb-16 pl-4 pr-4 lg:pl-6 lg:pr-6">
          <Blog/>
        </section>
      </div>
    </>
  );
};
export default Home;
