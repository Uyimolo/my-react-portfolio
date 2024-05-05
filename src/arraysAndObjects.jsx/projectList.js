import nexamart1 from '../images/project-images/nexamart-1.png';
import nexamart2 from '../images/project-images/nexamart-2.png';

import popcornphoria1 from '../images/project-images/popcornphoria-1.png';
import popcornphoria2 from '../images/project-images/popcornphoria-2.png';

import multiStepForm1 from '../images/project-images/multi-step-form-1.png';
import multiStepForm2 from '../images/project-images/multi-step-form-2.png';

import getQrNow2 from '../images/project-images/get-qr-now-2.png';
import getQrNow1 from '../images/project-images/get-qr-now-1.png';

import restCountries1 from '../images/project-images/rest-countries-1.png'
import restCountries2 from '../images/project-images/rest-countries-2.png';


const projectList = [
  {
    id: 1,
    title: 'Nexamart',
    backgroundColor: '#4F91CD',
    technologies: ['React', 'CSS', 'Zustand', 'React Query', 'DummyJson API'],
    liveLink: `https://nexamart.vercel.app`,
    github: `https://github.com/Uyimolo/nexamart`,
    images: [nexamart1, nexamart2],
  },
  {
    id: 2,
    title: 'Popcornphoria',
    backgroundColor: '#F29E4C',
    technologies: [
      'React',
      'CSS',
      'Redux Tool Kit',
      'RTK Query',
      'TMDB API',
      'Light/Dark Mode',
    ],
    liveLink: `https://popcornphoria.vercel.app`,
    github: `https://github.com/Uyimolo/popcornphoria`,
    images: [popcornphoria1, popcornphoria2],
  },
  {
    id: 3,
    title: 'Multi Step Form',
    backgroundColor: '#6379F4',
    technologies: ['React', 'Css'],
    liveLink: `https://multi-step-form-uyimolo.vercel.app`,
    github: `https://github.com/Uyimolo/multi-step-form`,
    images: [multiStepForm1, multiStepForm2],
  },
  {
    id: 4,
    title: 'Get Qr Now',
    backgroundColor: '#93C5FD',
    projectDesc: `
      This QR code generator lets users create codes for URLs, emails, and even downloadable files. The clean interface allows input, file upload, QR code download as an image, or direct sharing. It showcases my React skills, QR code understanding, and user-friendly design.`,
    technologies: [
      'React',
      'Context',
      'Tailwind',
      'Firebase',
      'Light/Dark Mode',
    ],
    liveLink: `https://get-qr-now.vercel.app`,
    github: `https://github.com/Uyimolo/get-qr-now`,
    images: [getQrNow1, getQrNow2],
  },
  {
    id: 5,
    title: 'Rest Countries',
    backgroundColor: '#93C5FD',
    projectDesc: ``,
    technologies: [
      'HTML',
      'CSS',
      'Vanilla JS',
      'Rest Countries API',
      'Light/Dark Mode',
    ],
    liveLink: `https://rest-countries-wheat.vercel.app`,
    github: `https://github.com/Uyimolo/rest-countries`,
    images: [restCountries1, restCountries2],
  },
];

export default projectList;
