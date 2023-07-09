import MildCta from "./MildCta";

const About = () => {

  return (
    <section
      className="px-6 flex flex-col space-y-6 mt-20 pb-12 md:px-16  xl:px-28"
    >
      <h2 className="text-4xl text-gray-200 md:text-center lg:text-5xl ">
        Introductions
      </h2>
      <p className="text-gray-400 md:max-w-2xl leading- md:text-center md:mx-auto  md:text-lg lg:max-w-3xl lg:text-xl ">
        I am Uyioghosa Justin Urhoghide (Uyi to friends and business
        associates). I am a front end web developer. I love creating websites
        that are not just visually appealing but functional and interactive.
      </p>

      <div className="pt-6 md:mx-auto">
        <MildCta text="Read more" />
      </div>
    </section>
  );
};

export default About;
