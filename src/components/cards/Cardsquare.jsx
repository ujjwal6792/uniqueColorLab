import {BsArrowRight} from 'react-icons/bs'

// props : id
// classes:cardClass imgClass headingClass paraClass buttonClass
// elements-data: img highlight text button
// button: function 

const Cardsquare = (props) => {
  return (
    <div id={props.id} key={props.id}
      className={`${props.cardClass} flex flex-col justify-evenly items-center border rounded-lg mx-auto text-center p-2 hover:scale-105 transition-transform cursor-pointer
    bg-gradient-to-b to-[#ffffff] from-[#ECE9E6] shadow-md `} 
    >
      <img className={`h-12 text-blue-dark ${props.imgClass}`}
       src={props.img} alt="" />
       {props.children}
      <h3 className={` ${props.headingClass} text-3xl text-blue-dark capitalize `}>{props.highlight}</h3>
      <p className={`${props.paraClass} text-slate-700 capitalize  `}> <span className={props.innerTextClass}> {props.text} </span></p>
      <button onClick={props.function} className= {`${props.buttonClass}  text-blue-dark text-lg font-semibold mr-auto pl-4 flex items-center gap-2 hover:transition-transform hover:scale-105 `}>
      {props.button} <BsArrowRight />
      </button>
    </div>
  );
};

export default Cardsquare;
