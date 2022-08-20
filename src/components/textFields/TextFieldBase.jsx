
// type, style, placeholder, id

const TextFieldBase = (props) => {
  return (
    <input type={props.type||"text"} className={`py-1 px-2 border-2 rounded-md border-blue-dark outline-none ${props.style}`} placeholder={props.placeholder}
    id={props.id} name={props.id}/>
  )
}

export default TextFieldBase