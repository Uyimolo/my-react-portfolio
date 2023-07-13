import MildCta from "./MildCta";

const About = () => {

  return (
    <section
      className="px-6 flex flex-col space-y-6 mt- pb-12 md:px-16 mt:10  xl:px-28"
    >
      <h2 className="text-3xl text-gray-200 md:text-center lg:text-4xl ">
        A Little About Me
      </h2>
      
      <p className="text-gray-300 md:max-w-2xl leading- md:text-center md:mx-auto lg:max-w-3xl lg:text-lg ">
        {`Hey there, I'm Uyi, your friendly neighborhood front-end web developer! I've got a knack for creating websites that not only look cool but work like a charm. `}
      </p>

      <div className="pt-6 md:mx-auto">
        <MildCta text="Read more" link="about" />
      </div>
    </section>
  );
};

export default About;
