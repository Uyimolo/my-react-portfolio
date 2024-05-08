/* eslint-disable react/prop-types */


const FormGroup = ({
  formData,
  setFormData,
  validateForm,
  formErrors,
  formField,
}) => {
  const { id, value, placeholder, label } = formField;
  const errorIndex = formErrors.findIndex((err) => err.id === id);
  const error = formErrors[errorIndex].message;

  const handleChange = (e) => {
    const { name, value } = e.target;

    const index = formData.findIndex((formField) => formField.id === name);

    const updatedField = { ...formData[index], value: value };
    const newFormData = [
      ...formData.slice(0, index),
      updatedField,
      ...formData.slice(index + 1),
    ];
    setFormData(newFormData);

    validateForm(name, value);
  };

  if (id === 'message') {
    return (
      <div className='flex flex-col space-y-2 relative'>
        <label
          htmlFor='Message'
          className='absolute top-[-5px] bg-gray-200 text-gray-900 px-2 left-4 rounded-md'>
          Type in message
        </label>
        <textarea
          type='text'
          name={id}
          id={id}
          value={value}
          onChange={handleChange}
          className='bg-transparent border-2 border-slate-900 rounded h-40 text-gray-900 px-2 pt-3 placeholder:text-gray-600 placeholder:pl-3 hover:shadow-2xl hover:shadow-indigo-600 hover:border-indigo-600 transition-all duration-4'
          placeholder='Tell me anything'
        />
        <p className='text-red-700'>{error}</p>
      </div>
    );
  } else {
    return (
      <div className='flex flex-col space-y-2 relative'>
        <label
          htmlFor={id}
          className='absolute top-[-5px] bg-gray-200 text-gray-900 px-2 left-4 rounded-md'>
          {label}
        </label>
        <input
          type='text'
          name={id}
          id={id}
          value={value}
          onChange={handleChange}
          className='bg-transparent border-2 border-slate-900 rounded h-12 text-gray-900 px-2 placeholder:text-gray-500 placeholder:pl-3 hover:shadow-2xl hover:shadow-indigo-600 hover:border-indigo-600 transition-all duration-4'
          placeholder={placeholder}
        />
        <p className='text-red-700 text-sm'>{error}</p>
      </div>
    );
  }
};

export default FormGroup;
