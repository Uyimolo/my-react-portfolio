import MildCta from "./MildCta";

const About = () => {
  return (
    <section className="px-6 md:px-16 flex flex-col space-y-4 h-full">
      <h2 className="text-2xl text-gray-200 lg:text-3xl">Introductions</h2>
      <p className="text-gray-400 md:max-w-xl lg:text-lg">
        I am Uyioghosa Justin Urhoghide (Uyi to friends and business
        associates). I am a front end web developer. I love creating websites
        that are not just visually appealing but functional and interactive
      </p>

      <div className="pt-6">
        <MildCta text="Read more" />
      </div>
    </section>
  );
};

export default About;
