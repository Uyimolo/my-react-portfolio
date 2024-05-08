import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { send } from 'emailjs-com';
import FormGroup from '../components/FormGroup';
import loadingImg from '../images/loading.svg';

const ContactPage = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [emailSentStatus, setEmailSentStatus] = useState('');

  const [formErrors, setFormErrors] = useState([
    { id: 'firstName', message: '' },
    { id: 'lastName', message: '' },
    { id: 'email', message: '' },
    { id: 'message', message: '' },
  ]);

  const [formData, setFormData] = useState([
    {
      id: 'firstName',
      placeholder: 'John',
      label: 'First Name',
      value: '',
    },
    {
      id: 'lastName',
      placeholder: 'Doe',
      label: 'Last Name',
      value: '',
    },
    {
      id: 'email',
      placeholder: 'Johndoe@example.com',
      label: 'Email',
      value: '',
    },
    {
      id: 'message',
      placeholder: 'Tell me anything',
      label: 'Type in your message',
      value: '',
    },
  ]);

  const validateForm = (name, value) => {
    const index = formData.findIndex((field) => field.id === name);
    let errorMessage;
    if (name === 'firstName' || name === 'lastName') {
      const nameRegex = /^[a-zA-Z]+$/;
      const isValid = nameRegex.test(value.trim());
      if (!isValid && value.length > 0) {
        errorMessage = `${formData[index].label} should not include spaces, symbols or numbers. `;
      } else {
        errorMessage = '';
      }
    } else if (name === 'email') {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isValid = emailRegex.test(value.trim());
      if (!isValid && value.length > 0) {
        errorMessage = `${formData[index].label} should be a valid email address. `;
      } else {
        errorMessage = '';
      }
    } else if (name === 'message') {
      if (value.length >= 9) {
        errorMessage = '';
      } else {
        errorMessage = `messages should be at least 9 characters long. `;
      }
    }
    const errorIndex = formErrors.findIndex((error) => error.id === name);
    const updatedErrorField = {
      ...formErrors[errorIndex],
      message: errorMessage,
    };
    const newErrorsData = [
      ...formErrors.slice(0, errorIndex),
      updatedErrorField,
      ...formErrors.slice(errorIndex + 1),
    ];
    setFormErrors(newErrorsData);
  };

  const env = import.meta.env;

  const sendFormData = async () => {
    setLoading(true);
    setError(true);
    const formattedFormData = {
      firstName: formData[0].value,
      lastName: formData[1].value,
      email: formData[2].value,
      message: formData[3].value,
    };
    try {
      const response = await send(
        env.VITE_SERVICE_ID,
        'portfolio-template',
        formattedFormData,
        env.VITE_PUBLIC_KEY
      );
      if (response.text === 'OK') {
        setLoading(false);
        setError(false);
        setEmailSentStatus('Email sent');
        setFormData([
          {
            id: 'firstName',
            placeholder: 'John',
            label: 'First Name',
            value: '',
          },
          {
            id: 'lastName',
            placeholder: 'Doe',
            label: 'Last Name',
            value: '',
          },
          {
            id: 'email',
            placeholder: 'Johndoe@example.com',
            label: 'Email',
            value: '',
          },
          {
            id: 'message',
            placeholder: 'Tell me anything',
            label: 'Type in your message',
            value: '',
          },
        ]);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      setEmailSentStatus('Failed to send message');
      console.log(error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMessage('');
      setEmailSentStatus('');
    }, [4000]);
    return () => clearTimeout(timeout);
  }, [errorMessage, emailSentStatus]);

  const onSubmit = (e) => {
    e.preventDefault();
    setError(true);
    if (formData.filter((field) => field.value === '').length > 0) {
      setErrorMessage('Please fill in all fields');
      return;
    } else {
      validateForm('firstName', formData[0].value);
      validateForm('lastName', formData[1].value);
      validateForm('email', formData[2].value);
      validateForm('message', formData[3].value);
      if (formErrors.filter((field) => field.length > 0).length > 0) {
        setErrorMessage('Please resolve all errors');
        return;
      } else {
        sendFormData();
      }
    }
  };

  return (
    <main className='pt-32 pb-20 min-h-screen bg-gray-200'>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
        className='flex flex-col space-y-12 px-6 md:px-16 xl:px-28'>
        <div className='flex flex-col space-y-2'>
          <h1 className='text-5xl font-Lobster text-center italic font-bold text-indigo-950 md:text-6xl lg:text-7xl'>
            Send me an email
          </h1>
          <p className='text-gray-900 font-Poppins mx-auto w-[90%] max-w-[35rem] md:max-w-2xl leading- text-center  lg:max-w-3xl lg:text-lg '>
            {`(I'll love to hear from you)`}
          </p>
        </div>
        <form
          ref={formRef}
          onSubmit={onSubmit}
          action='post'
          className='w-full flex flex-col space-y-6 max-w-sm px-4 py-12 border-2 border-slate-950 rounded-xl shadow-indigo-600 mx-auto hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-600 transition-all duration-4 md:px-6 '>
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
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }} // Set loop and duration
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
      </motion.div>
    </main>
  );
};

export default ContactPage;
