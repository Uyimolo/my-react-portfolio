

import { PropTypes } from "prop-types";
const FormGroup = ({ name, value, placeholder, label, type, formData, setFormData }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      
  return (
    <div className="flex flex-col space-y-2 relative">
      <label
        htmlFor={name}
        className="absolute top-[-5px] bg-slate-950 text-gray-300 px-2 left-4 rounded-md"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="bg-transparent border-2 rounded h-12 text-gray-300 px-2 placeholder:text-gray-400 placeholder:pl-3 hover:shadow-2xl hover:shadow-indigo-600 hover:border-indigo-600 transition-all duration-4"
        placeholder={placeholder}
      />
    </div>
  );
};

FormGroup.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  formData : PropTypes.Object,
  setFormData : PropTypes.func.isRequired
};

export default FormGroup;
