// type, style, placeholder, name, labelstyle
import { useField } from "formik";

const TextFieldBase = ({style,placeholder,labelstyle, ...props}) => {
  const [field, meta] = useField(props);
  return (<>
  {}
    <label htmlFor={field.name} className={labelstyle}>{placeholder}</label>
    <input
      {...field} {...props}
      className={`py-1 px-2 border-2 rounded-md border-blue-dark outline-none ${style}`}
      placeholder={placeholder}
      name={field.name}
    />
  </>);
};

export default TextFieldBase;
