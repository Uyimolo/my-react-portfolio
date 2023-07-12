import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { send } from "emailjs-com";

const ContactPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const formRef = useRef(null);

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
    email: "",
  });

  const validateForm = () => {
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.message === "" ||
      formData.email === ""
    ) {
      setError("Please fill in all fields");
    } else if (
      formData.firstName.trim().includes(" ") ||
      formData.lastName.trim().includes(" ")
    ) {
      setError("First Name and Last Name fields should not include spaces");
    } else {
      setError("");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (error === "") {
      // send form to email.js
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <main className="pt-32 pb-20 min-h-screen">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 origin-left ml-0 h-2 bg-purple-600 z-30"
      ></motion.div>

      <div className="flex flex-col space-y-12 px-6 md:px-16 xl:px-28">
        <div className="flex flex-col space-y-2">
        <h2 className="text-3xl text-gray-200 lg:text-5xl ">
            Send me an email
        </h2>
        <p className="text-gray-400 md:max-w-2xl md:text-lg lg:max-w-3xl lg:text-xl ">
            {`(I'll love to here from you)`}
          </p>
        </div>
        <motion.form
          ref={formRef}
          onSubmit={onSubmit}
          action="post"
          className="w-full flex flex-col space-y-6 max-w-sm px-4 py-12 border-2 border-gray-300 rounded-xl shadow-indigo-600 mx-auto hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-600 transition-all duration-4 md:px-6 "
        >
          <div className="flex flex-col space-y-2 relative">
            <label
              htmlFor="firstName"
              className="absolute top-[-5px] bg-slate-900 text-gray-300 px-2 left-4 rounded-md"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-transparent border-2 rounded h-12 text-gray-300 px-2 placeholder:text-gray-600 hover:shadow-2xl hover:shadow-indigo-600 hover:border-indigo-600 transition-all duration-4"
              placeholder="Type in first name..."
            />
          </div>

          <div className="flex flex-col space-y-2 relative">
            <label
              htmlFor="LastName"
              className="absolute top-[-5px] bg-slate-900 text-gray-300 px-2 left-4 rounded-md"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-transparent border-2 rounded h-12 text-gray-400 px-2 placeholder:text-gray-600 hover:shadow-2xl hover:shadow-indigo-600 hover:border-indigo-600 transition-all duration-4"
              placeholder="Type in last name..."
            />
          </div>

          <div className="flex flex-col space-y-2 relative">
            <label
              htmlFor="LastName"
              className="absolute top-[-5px] bg-slate-900 text-gray-300 px-2 left-4 rounded-md"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-2 rounded h-12 text-gray-400 px-2 placeholder:text-gray-600 hover:shadow-2xl hover:shadow-indigo-600 hover:border-indigo-600 transition-all duration-4"
              placeholder="Type in your email..."
            />
          </div>

          <div className="flex flex-col space-y-2 relative">
            <label
              htmlFor="Message"
              className="absolute top-[-5px] bg-slate-900 text-gray-300 px-2 left-4 rounded-md"
            >
              Type in message
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border-2 rounded h-40 text-gray-400 px-2 pt-3 placeholder:text-gray-600 hover:shadow-2xl hover:shadow-indigo-600 hover:border-indigo-600 transition-all duration-4"
              placeholder="Tell me anything..."
            />
          </div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: [1, 1.1, 1, 1.2, 1.1, 3, 1.1] }}
            transition={{ duration: 1, type: "spring", stiffness: 500 }}
            className="w-fit"
          >
            <button
              type="submit"
              className="px-8 py-2 rounded-md border-2 text-gray-300 hover:shadow-2xl hover:shadow-indigo-600 hover:border-indigo-600 transition-all duration-4"
            >
              Send Email
            </button>
          </motion.div>
        </motion.form>
      </div>
    </main>
  );
};

export default ContactPage;
