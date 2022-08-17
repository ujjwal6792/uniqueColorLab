import React from "react";
import Cardsquare from "../../components/cards/Cardsquare";
import content from "../../content";

const styles = {
  servicesBox:
    "rounded min-h-[200px] min-w-[250px] border border-opacity-10 border-blue-dark shadow-md shadow-blue-100 p-4",
  serviceBarH: "text-3xl capitalize mb-6",
  serviceBarP: "texl-xl text-slate-700 first-letter:capitalize",
};

const Insights = () => {
  const insightContent = content.home.insights;
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pl-4 pr-4 md:pl-2 md:pr-2 lg:pl-0 lg:pr-0 ml-auto mr-auto">
        {insightContent.map((item) => {
          return (
            <Cardsquare
              img={item.img}
              text={item.text}
              highlight={item.highlight}
            />
          );
        })}
      </section>
    </>
  );
};
export default Insights;
