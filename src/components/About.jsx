import MildCta from "./MildCta";

const About = () => {
  return (
    <section className="px-6 flex flex-col space-y-4 h-full pb-12 md:px-16  xl:px-28">
      <h2 className="text-2xl text-gray-200 lg:text-3xl lg:text-center">Introductions</h2>
      <p className="text-gray-400 md:max-w-2xl lg:max-w-3xl lg:text-xl lg:text-center lg:mx-auto">
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
