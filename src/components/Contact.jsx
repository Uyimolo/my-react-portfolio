import ButtonCta from './ButtonCta';

const Contact = () => {
  return (
    <section className='px-6 py-12 flex flex-col space-y-10 md:px-16 xl:px-28'>
      <h2 className='text-3xl text-gray-200 text-center lg:text-4xl '>
        Get in Touch With Me Today
      </h2>
      <p className='text-gray-400 text-center md:mx-auto md:max-w-2xl lg:max-w-3xl lg:text-lg'>
        {`If you're looking for a passionate web developer who can bring your vision to life, I'm here to help! Let's collaborate to create something amazing and make your dream designs a reality.`}
      </p>
      <div className='w-fit mx-auto'>
        <ButtonCta text='Contact me' link='contact' />
      </div>
    </section>
  );
};

export default Contact;
