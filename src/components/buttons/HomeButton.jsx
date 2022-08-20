const HomeButton = (props) => {
  return (
    <button
      onClick={props.function}
      className={`mt-8 text-lg border h-min w-max py-2 px-4 border-blue-900 hover:bg-blue-900 hover:text-white hover:transition-opacity shadow-md ${props.style}`}
      type={props.type||""}
    > 
      {props.text}
    </button>
  );
};

export default HomeButton;
