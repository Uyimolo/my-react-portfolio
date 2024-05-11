import ButtonCta from './ButtonCta';
import Slide from './Slide';
import SmallHeading from './SmallHeading';

const Contact = () => {
  return (
    <section className='bg-gray-200 '>
      <Slide slideClass='px-6 flex py-12  flex-col space-y-12 font-Poppins'>
        <SmallHeading heading='Get in Touch With Me Today' color='dark' />

        <p className='text-gray-900 font-Poppins mx-auto w-[90%] max-w-[35rem] md:max-w-2xl leading- text-center  lg:max-w-3xl lg:text-lg '>
          {`If you're looking for a passionate web developer who can bring your vision to life, I'm here to help! Let's collaborate to create something amazing and make your dream designs a reality.`}
        </p>
        <div className='mx-auto'>
          <ButtonCta
            text='Contact me'
            link='contact'
            backgroundColor='bg-indigo-950'
          />
        </div>
      </Slide>
    </section>
  );
};

export default Contact;
