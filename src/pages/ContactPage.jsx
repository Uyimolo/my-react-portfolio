import { useEffect, useRef, useState } from 'react';
import { send } from 'emailjs-com';
import Heading from '../components/Heading';
import ContactForm from '../components/ContactForm';
import PageDiv from '../components/PageDiv';

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

  const defaultFormData = [
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
  ];

  const [formData, setFormData] = useState(defaultFormData);

  const validateForm = (name, value) => {
    const index = formData.findIndex((field) => field.id === name);
    let errorMessage;

    if (name === 'firstName' || name === 'lastName') {
      const nameRegex = /^[a-zA-Z]+$/;

      const isValid = nameRegex.test(value.trim());

      !isValid && value.length > 0
        ? (errorMessage = `${formData[index].label} should not include spaces, symbols or numbers.`)
        : (errorMessage = '');
    }
    // email validation
    else if (name === 'email') {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const isValid = emailRegex.test(value.trim());

      !isValid && value.length > 0
        ? (errorMessage = `${formData[index].label} should be a valid email address.`)
        : (errorMessage = '');
    }
    // message validation
    else if (name === 'message') {
      value.length >= 9
        ? (errorMessage = '')
        : (errorMessage = `messages should be at least 9 characters long. `);
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

  // email.js
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
        setFormData(defaultFormData);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      setEmailSentStatus('Failed to send message');
      console.log(error);
    }
  };

  // remove error messages after 4 secs, don't want them sticking around too long
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
      // validate each form field before sending to server
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
    <main className='py-20 min-h-screen bg-gray-200'>
      <PageDiv>
        <div className='flex flex-col space-y-2'>
          <Heading heading='Send me an email' />
          <p className='text-gray-900 font-Poppins mx-auto w-[90%] max-w-[35rem] md:max-w-2xl leading- text-center  lg:max-w-3xl lg:text-lg'>
            {`(I'll love to hear from you)`}
          </p>
        </div>

        <ContactForm
          formRef={formRef}
          onSubmit={onSubmit}
          formData={formData}
          emailSentStatus={emailSentStatus}
          loading={loading}
          setFormData={setFormData}
          formErrors={formErrors}
          validateForm={validateForm}
          error={error}
          errorMessage={errorMessage}
        />
      </PageDiv>
    </main>
  );
};

export default ContactPage;
