import React from "react";

const a ="filter: invert(19%) sepia(34%) saturate(2458%) hue-rotate(193deg) brightness(95%) contrast(85%);"

const Cardsquare = (props) => {
  return (
    <div id={props.id} key={props.id}
      className="h-52 w-52 border rounded-lg mr-auto ml-auto 
    bg-gradient-to-b to-[#ffffff] from-[#ECE9E6] shadow-md
    flex flex-col justify-evenly items-center text-center p-2
    hover:scale-105 transition-transform cursor-pointer" 
    >
      <img className="h-12 text-blue-dark"
       src={props.img} alt="" />
      <h3 className="text-3xl text-blue-dark capitalize">{props.highlight}</h3>
      <p className="text-slate-700 capitalize ">{props.text}</p>
    </div>
  );
};

export default Cardsquare;
