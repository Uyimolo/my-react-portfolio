import ButtonCta from "./ButtonCta";

const Contact = () => {
  return (
    <section className="px-6 flex flex-col space-y-6 md:px-16 xl:px-28 mt-20">
      <h2 className="text-3xl text-gray-200 md:text-center lg:text-5xl ">
        Get in Touch With Me Today
      </h2>
      <p className="text-gray-400 md:max-w-2xl md:text-lg lg:max-w-3xl lg:text-xl ">
        {`If you're looking for a passionate web developer who can bring your vision to life, I'm here to help! Let's collaborate to create something amazing and make your dream designs a reality.`}
      </p>
      <ButtonCta text="Contact me" link="contact" />
    </section>
  );
};

export default Contact;
