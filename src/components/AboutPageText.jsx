import { Link } from 'react-router-dom';
const AboutPageText = () => {
  const paragraphStyle = `text-gray-800 font-Poppins mx-auto md:max-w-2xl lg:max-w-3xl lg:text-lg`;
  return (
    <div className='flex flex-col space-y-4 lg:w-1/2'>
      <p className={paragraphStyle}>
        {`Hey there, I'm Uyi, your go-to front-end web developer with a focus on crafting user-centric websites that are both visually stunning and functionally robust.`}
      </p>

      <p className={paragraphStyle}>
        {`With certifications in`}{' '}
        <Link
          className='text-indigo-900'
          to='https://www.freecodecamp.org/certification/Uyimolo/responsive-web-design'>
          Responsive Web Design
        </Link>{' '}
        and{' '}
        <Link
          className='text-indigo-900'
          to='https://www.freecodecamp.org/certification/Uyimolo/javascript-algorithms-and-data-structures'>
          JavaScript Algorithms and Data Structures
        </Link>{' '}
        from freeCodeCamp, along with completion of the{' '}
        <Link className='text-indigo-900' to=''>
          Zuri/Ingressive for good internship program
        </Link>{' '}
        {`I've been able enhance my skills and excel in the field.`}
      </p>

      <p className={paragraphStyle}>
        {`In my toolkit, I have React for dynamic interfaces, Tailwind CSS for stylish styling, Framer Motion for captivating animations, Redux, Zustand and ContextAPI for robust state management, React/Tanstack query and RTK query to streamline data fetching and management, ensuring seamless interactions within my applications and proficiency in HTML, CSS, and vanilla JavaScript—the essential building blocks of the web.`}
      </p>
    </div>
  );
};

export default AboutPageText;
