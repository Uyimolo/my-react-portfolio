import { Link } from "react-router-dom"
const AboutPageText = () => {
  return (
    <div className="flex flex-col space-y-4 lg:w-1/2">
            <p className="text-gray-400 md:max-w-2xl md:text-lg lg:max-w-3xl lg:text-xl ">
              {`Hey there, I'm Uyi, your friendly neighborhood front-end web developer! I've got a knack for creating websites that not only look cool but work like a charm. `}
            </p>

            <p className="text-gray-400 md:max-w-2xl   md:text-lg lg:max-w-3xl lg:text-xl ">
              {`I've earned certifications in`}{" "}
              <Link
                className="text-indigo-600"
                to="https://www.freecodecamp.org/certification/Uyimolo/responsive-web-design"
              >
                Responsive Web Design
              </Link>{" "}
              and{" "}
              <Link
                className="text-indigo-600"
                to="https://www.freecodecamp.org/certification/Uyimolo/javascript-algorithms-and-data-structures"
              >
                JavaScript Algorithms and Data Structures
              </Link>{" "}
              from freeCodeCamp, and completed the{" "}
              <Link className="text-indigo-600" to="">
                Zuri/ingressive for good training program
              </Link>{" "}
              to enhance my skills and excel in the field.
            </p>

            <p className="text-gray-400 md:max-w-2xlmd:text-lg lg:max-w-3xl lg:text-xl ">
              {`In my toolkit, I have React for dynamic interfaces, Tailwind CSS for stylish styling, Framer Motion for captivating animations, Redux for robust state management, and proficiency in HTML, CSS, and vanilla JavaScript—the essential building blocks of the web.`}
            </p>
          </div>
  )
}

export default AboutPageText
