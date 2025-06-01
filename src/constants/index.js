import project1 from '../assets/projects/p1.png';
import project2 from '../assets/projects/p2.png';
import project3 from '../assets/projects/p3.png';
import project4 from '../assets/projects/p4.png';
import project5 from '../assets/projects/p5.png';
export const HERO_CONTENT = `I am a passionate full-stack developer focused on building robust and scalable web applications. My primary expertise lies in back-end development using ASP.NET Core, where I continuously deepen my knowledge of clean architecture, API security, and database management. On the front-end, I use React to create responsive and user-friendly interfaces. I enjoy combining both ends of development to deliver complete and efficient solutions. Currently, I’m working on several real-world projects that reflect my growth and commitment to writing clean, maintainable code. I’m eager to contribute to impactful products and collaborate with forward-thinking teams.`;

export const ABOUT_TEXT = `Hello! I'm Oğuzhan, a computer engineering student with a background in mechanical engineering. My journey began at MEF University studying mechanical engineering, but my growing passion for software development led me to switch my major to computer engineering at Nişantaşı University.

Initially captivated by frontend development, I spent significant time mastering technologies like React. Over time, my interest expanded toward backend development as well, where I now focus on building secure and scalable APIs using ASP.NET Core. I’m actively working on real-world projects that reflect my commitment to writing clean, maintainable code and becoming a well-rounded full-stack developer.

Outside of coding, I enjoy reading, playing football, and staying active through fitness—all of which contribute to my discipline, creativity, and mental resilience. I’m driven by a deep curiosity and the desire to continuously learn, aiming to contribute to impactful tech solutions and grow within collaborative and forward-thinking teams.`;

export const PROJECTS = [
  {
    title: 'E-Commerce Website',
    image: project1,
    url: 'https://comfystore-flame.vercel.app/',
    description:
      'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.',
    technologies: ['HTML', 'TailwindCSS', 'React', 'Redux'],
  },
  {
    title: 'Gym App',
    image: project2,
    url: 'https://gymapp-nextjs-14.vercel.app/',
    description:
      'A comprehensive fitness platform developed using Next.js, offering information about various classes, trainers, pricing plans, and testimonials. The site features details on bodybuilding, cardio, fitness, and CrossFit programs, with award-winning trainers and modern equipment. Users can explore membership options and read blog posts on maintaining fitness.',
    technologies: ['HTML', 'NextJs', 'TailwindCSS'],
  },
  {
    title: 'Weather App',
    image: project3,
    url: 'https://weathernext-wine.vercel.app/',
    description:
      'A modern platform providing current weather information for major cities, developed using OpenWeather API and Next.js. It features a user-friendly interface with options to switch themes and view the source code.',
    technologies: ['HTML', 'Next Js', 'TailwindCSS', 'Shadcn UI'],
  },
  {
    title: 'Crypto App',
    image: project4,
    url: 'https://crypto-navy-rho.vercel.app/',
    description:
      'A sleek platform for tracking cryptocurrency prices, developed using modern web technologies. It features real-time updates on various cryptocurrencies, providing users with essential market information at a glance. The user-friendly interface ensures easy navigation and quick access to detailed data on market trends and individual coin performance.',
    technologies: ['HTML', 'React', 'CSS'],
  },
  {
    title: 'Movie App',
    image: project5,
    url: 'https://movie-react-js-xi.vercel.app/',
    description:
      'A dynamic platform developed using React.js, offering an extensive database of movies and TV shows. Users can search for their favorite titles, view detailed information, ratings, and reviews. The site features a clean and intuitive interface, making it easy to discover new content and keep track of popular releases.',
    technologies: ['HTML', 'Chakra UI', 'React'],
  },
];

export const CONTACT = {
  address: 'Beyoğlu/Istanbul',
  phoneNo: '+90 507 453 19 82',
  email: 'yildirimog8@gmail.com',
};
