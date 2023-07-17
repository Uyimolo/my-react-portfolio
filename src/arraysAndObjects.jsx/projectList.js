import RestCountriesDesktop from "../images/project-images/rest-countries-desktop-bg.png";
import weatherDesktop from "../images/project-images/react-weather-desktop-bg.png";
import todoDesktop from "../images/project-images/todo-app-desktop-bg.jpg";
import productPageDesktop from "../images/project-images/product-page-desktop-bg.png";
import interactiveCardDesktop from "../images/project-images/interactive-card-desktop-bg.png";
import portfolioV1 from "../images/project-images/uyijustindavid-desktop-bg.png";

const projectList = [
    {
      title: "Weather App",
      titleColor: "text-blue-500",
      projectDesc: `This app allows users to get the current weather forecast for any
        location in the world. Users can simply enter a city name or zip
        code into the search bar and the app will return the current weather
        conditions, as well as a forcast for the next 7 days.`,
      technologies: ["React", "CSS", "API"],
      liveLink: "https://react-weather-app-uyimolo.vercel.app",
      github: "https://github.com/uyimolo/react-weather-app",
      desktopView: weatherDesktop,
    },
    {
      title: "Countrypedia",
      titleColor: "text-yellow-400",
      projectDesc: `Countrypedia is a web app that allows users to search and explore information about countries around the world. Other features include filter by region and a theme toggler for light and dark modes.  `,
      technologies: ["JS", "CSS", "HTML", "API"],
      liveLink: "https://rest-countries-wheat.vercel.app",
      github: "https://github.com/uyimolo/rest-countries",
      desktopView: RestCountriesDesktop,
    },
    {
      title: "Uyi Justin David",
      titleColor: "text-teal-500",
      projectDesc: `My very first portfolio website, built with HTML, CSS, Javascript, it boasts of a clean and modern design that showcases my skills in frontend web development. Is easy to navigate and provides clear overview of my skills and experience. It also includes a section to show my works`,
      technologies: ["JS", "CSS", "HTML"],
      liveLink: "https://uyijustindavid.vercel.app",
      github: "https://github.com/uyimolo/uyijustindavid",
      desktopView: portfolioV1,
    },
    {
      title: "Todo App",
      titleColor: "text-purple-700",
      projectDesc: `This is a simple to-do app built using Javascript. It allows users to create, edit, and delete to-do items, users can also filter todo items by their active states and theres a drag and drop feature to rearrange todos.`,
      technologies: ["JS", "CSS", "HTML"],
      liveLink: "https://uyimolo.github.io/todo-app",
      github: "https://github.com/uyimolo/todo-app",
      desktopView: todoDesktop,
    },
    {
      title: "Sneakers",
      titleColor: "text-orange-400",
      projectDesc: `This is a sneaker product page I made very early in my journey. It includes complete cart features, lightboxes, carousels and modals and also a clean and responsive design. Learnt alot implementing the add to/remove from cart features.`,
      technologies: ["JS", "CSS", "HTML"],
      liveLink: "https://uyimolo.github.io/e-commerce-product-page",
      github: "https://github.com/uyimolo/e-commerce-product-page",
      desktopView: productPageDesktop,
    },
    {
      title: "Interactive Credit Card",
      titleColor: "text-indigo-700",
      projectDesc: `This is a frontend mentor challenge, users can fill in data on the form and see it update live on the virtual credit card. It was built with javascript and features nice form validations and error handling. `,
      technologies: ["JS", "CSS", "HTML"],
      liveLink: "https://uyimolo.github.io/interactive-credit-card",
      github: "https://github.com/uyimolo/interactive-credit-card",
      desktopView: interactiveCardDesktop,
    },
  ];

  export default projectList