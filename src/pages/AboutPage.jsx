import aboutImage from '../images/about-image.svg';
import AboutPageText from '../components/AboutPageText';
import Heading from '../components/Heading';
import PageDiv from '../components/PageDiv';
import TechStack from '../components/TechStack'
const AboutPage = () => {
  return (
    <section className='py-20 bg-gray-200'>
      <PageDiv>
        <Heading heading='A little about me' />
        <div className='flex flex-col justify-between items-center space-y-10 lg:flex-row-reverse lg:space-y-0'>
          <div className='w-80 mx-auto md:w-[25rem] lg:w-1/2 lg:max-w-[25rem]'>
            <img src={aboutImage} alt='' className='w-full' />
          </div>
          {/* about text */}
          <AboutPageText />
        </div>
        <TechStack />
      </PageDiv>
    </section>
  );
};

export default AboutPage;
