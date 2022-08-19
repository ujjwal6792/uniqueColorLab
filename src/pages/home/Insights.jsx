import React from "react";
import Cardsquare from "../../components/cards/Cardsquare";
import content from "../../content";

const Insights = () => {
  const insightContent = content.home.insights;
  return (
    <>
      <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pl-4 pr-4 md:pl-2 md:pr-2 lg:pl-0 lg:pr-0 ml-auto mr-auto
      gap-6 ">
        {insightContent.map((item) => {
          return (
            <Cardsquare
              id = {item.id}
              img={item.img}
              text={item.text}
              highlight={item.highlight}
              cardClass = {"h-52 w-52"}
              buttonClass={"hidden"}
            />
          );
        })}
      </section>
    </>
  );
};
export default Insights;
