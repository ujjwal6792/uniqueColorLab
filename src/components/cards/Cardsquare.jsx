import {BsArrowRight} from 'react-icons/bs'

// props : id
// classes:cardClass imgClass headingClass paraClass buttonClass
// elements-data: img highlight text button
// button: function 

const Cardsquare = (props) => {
  return (
    <div id={props.id} key={props.id}
      className={`flex flex-col justify-evenly items-center border rounded-lg mx-auto text-center p-2 hover:scale-105 transition-transform cursor-pointer
    bg-gradient-to-b to-[#ffffff] from-[#ECE9E6] shadow-md ${props.cardClass}`} 
    >
      <img className={`h-12 text-blue-dark ${props.imgClass}`}
       src={props.img} alt="" />
       {props.children}
      <h3 className={`text-3xl text-blue-dark capitalize  ${props.headingClass}`}>{props.highlight}</h3>
      <p className={`text-slate-700 capitalize  ${props.paraClass}`}>{props.text}</p>
      <button onClick={props.function} className= {` text-blue-dark text-lg font-semibold mr-auto pl-4 pt-6
      flex items-center gap-2 hover:transition-transform hover:scale-105 ${props.buttonClass} `}>
      {props.button} <BsArrowRight />
      </button>
    </div>
  );
};

export default Cardsquare;
