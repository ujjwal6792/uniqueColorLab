const HomeButton = (props) => {
  return (
    <button
      onClick={props.function}
      className="mt-8 text-lg border h-min w-max pt-2 pb-2 pl-4 pr-4 rounded border-blue-900 hover:bg-blue-900 hover:text-white hover:transition-opacity shadow-md"
    >
      {props.text}
    </button>
  );
};

export default HomeButton;
