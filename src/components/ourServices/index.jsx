import React from "react";
import Cardsquare from "../cards/Cardsquare";
import { BsPrinter, BsColumnsGap, BsBook } from "react-icons/bs";
import content from "../../content";

const OurServices = (props) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-24 md:gap-6 mx-auto w-full ${props.mainClass}`}>
      <Cardsquare buttonClass="hidden" cardClass="w-[300px] h-[300px] relative p-4" 
      highlight={content.services[0].heading}
      text={content.services[0].text}>

        <BsPrinter className="absolute bg-blue-dark bg-opacity-95 text-white shadow-md p-8 box-content -top-14 left-24 text-5xl rounded-md" />
      </Cardsquare>
      <Cardsquare buttonClass="hidden" cardClass="w-[300px] h-[300px] relative p-4"
      highlight={content.services[1].heading}
      text={content.services[1].text}>

        <BsColumnsGap className="absolute bg-blue-dark bg-opacity-95 text-white shadow-md p-8 box-content -top-14 left-24 text-5xl rounded-md" />
      </Cardsquare>
      <Cardsquare buttonClass="hidden" cardClass="w-[300px] h-[300px] relative p-4"
      highlight={content.services[2].heading}
      text={content.services[2].text}>

        <BsBook className="absolute bg-blue-dark bg-opacity-95 text-white shadow-md p-8 box-content -top-14 left-24 text-5xl rounded-md" />
      </Cardsquare>
    </div>
  );
};

export default OurServices;
