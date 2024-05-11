/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import FormGroup from './FormGroup';
import loadingImg from '../images/loading.svg';

export default function ContactForm({
  formRef,
  onSubmit,
  formData,
  emailSentStatus,
  loading,
  setFormData,
  formErrors,
  validateForm,
  error,
  errorMessage,
}) {
  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      action='post'
      className='w-full flex flex-col space-y-6 max-w-sm px-4 py-12 border-2 border-slate-950 rounded-xl shadow-indigo-600 mx-auto hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-600 transition-all duration-4 md:px-6'>
      {formData.map((formField) => (
        <FormGroup
          key={formField.id}
          formField={formField}
          setFormData={setFormData}
          formErrors={formErrors}
          formData={formData}
          validateForm={validateForm}
        />
      ))}

      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: [1, 1.1, 1, 1.2, 1.1, 3, 1.1] }}
        transition={{ duration: 1, type: 'spring', stiffness: 500 }}
        className='w-fit'>
        <button
          type='submit'
          className='px-8 py-2 rounded-md bg-indigo-950 border-2 text-gray-300 hover:shadow-2xl hover:shadow-indigo-600 hover:border-indigo-600 transition-all duration-4'>
          Send Email
        </button>
      </motion.div>
      {loading && (
        <motion.img
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }} 
          src={loadingImg}
          alt='loading'
          className='w-8'
        />
      )}

      {emailSentStatus && (
        <p
          className={`text-green-500 ${
            error ? 'text-red-700' : ''
          } w-full lg:text-lg`}>
          {emailSentStatus}
        </p>
      )}
      {errorMessage && error && (
        <p className='text-red-700 w-full lg-text-lg'>{errorMessage}</p>
      )}
    </form>
  );
}
