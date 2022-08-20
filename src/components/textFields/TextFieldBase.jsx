// type, style, placeholder, name, labelstyle
import { useField, ErrorMessage } from "formik";

const TextFieldBase = ({style,placeholder,labelstyle, ...props}) => {
  const [field, meta] = useField(props);
  return (<>
    <div className="flex gap-2 items-center">
        <label htmlFor={field.name} className={labelstyle}>{placeholder}</label>
        <ErrorMessage component="div" className="text-red-600" name = {field.name}/>
    </div>
    <input
      {...field} {...props}
      className={`py-1 px-2 border-2 rounded-md border-blue-dark outline-none ${style} ${meta.touched&&meta.error&& "border-red-600 animate-pulse"}`}
      placeholder={placeholder}
      name={field.name}
    />
  </>);
};

export default TextFieldBase;
