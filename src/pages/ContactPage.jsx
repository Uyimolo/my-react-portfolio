import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { send } from "emailjs-com";
import FormGroup from "../components/FormGroup";

const ContactPage = () => {
  const formRef = useRef(null);

  const [error, setError] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailSentStatus, setEmailSentStatus] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
    email: "",
  });

  const env = import.meta.env;

  const validateForm = () => {
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.message === "" ||
      formData.email === ""
    ) {
      setError(true);
      setErrorMessage("Please fill in all fields");
    } else if (
      formData.firstName.trim().includes(" ") ||
      formData.lastName.trim().includes(" ")
    ) {
      setError(true);
      setErrorMessage(
        "First Name and Last Name fields should not include spaces"
      );
    } else {
      setError(false);
      sendFormData();
    }
    setTimeout(() => {
      setErrorMessage("");
    }, [2000]);
  };

  const sendFormData = async () => {
    const response = await send(
      env.VITE_SERVICE_ID,
      "portfolio-template",
      formData,
      env.VITE_PUBLIC_KEY
    );
    if (response.text === "OK") {
      setEmailSentStatus("Email sent");
      setFormData({ firstName: "", lastName: "", message: "", email: "" });
    } else {
      setEmailSentStatus("Email not sent, try again");
      console.log("not Sent");
    }
    setTimeout(() => {
      setEmailSentStatus("");
    }, [2000]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
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
          <FormGroup
            type='text'
            label='First name'
            name='firstName'
            placeholder='Your first name'
            value={formData.firstName}
            formData={formData}
            setFormData={setFormData}
          />

          <FormGroup
            type='text'
            label='Last name'
            name='lastName'
            placeholder='Your last name'
            value={formData.lastName}
            formData={formData}
            setFormData={setFormData}
          />

          <FormGroup
            type='email'
            label='email'
            name='email'
            placeholder='Your email'
            value={formData.email}
            formData={formData}
            setFormData={setFormData}
          />

          <div className='flex flex-col space-y-2 relative'>
            <label
              htmlFor='Message'
              className='absolute top-[-5px] bg-gray-200 text-gray-900 px-2 left-4 rounded-md'>
              Type in message
            </label>
            <textarea
              type='text'
              name='message'
              id='message'
              value={formData.message}
              onChange={handleChange}
              className='bg-transparent border-2 border-slate-900 rounded h-40 text-gray-900 px-2 pt-3 placeholder:text-gray-600 placeholder:pl-3 hover:shadow-2xl hover:shadow-indigo-600 hover:border-indigo-600 transition-all duration-4'
              placeholder='Tell me anything'
            />
          </div>
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

          <p className='text-green-500 w-full lg:text-lg'>{emailSentStatus}</p>
          {errorMessage && error && (
            <p className='text-red-700 w-full lg-text-lg'>{errorMessage}</p>
          )}
        </form>
      </motion.div>
    </main>
  );
};

export default ContactPage;
