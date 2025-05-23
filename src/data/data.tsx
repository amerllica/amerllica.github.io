import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import MediumIcon from '../components/Icon/MediumIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
/*import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';*/
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/recommendation.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Amer Lotfi Orimi resume website',
  description: "An abstract to my works",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  HeroBg: 'hero-bg',
  About: 'about',
  Contact: 'contact',
  // Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Recommendations: 'recommendations',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Amer Lotfi Orimi`,
  description: (
    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I'm a passionate <strong className="text-stone-100">Frontend Engineer</strong>.
      I'm experienced in JavaScript, Web/App UI Development, HTML/CSS, ReactJS and React Native.
    </p>
  ),
  actions: [
    {
      href: '/assets/Amer_Lotfi_-_Apr_2025_EN.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  soFlair: 'https://stackoverflow.com/users/flair/6877799.png?theme=dark&latest',
  description: `My fields of interest include Frontend development, building projects from scratch, maintaining legacy projects, migrating the architecture from legacy to new ones, and UI/UX design.
      I'm so eager about new technologies and readily accept new challenges.
      I'd love to write blog posts and articles and answer Stack Overflow questions in my spare time—also a big fan of using TypeScript in Frontend projects.`,
  aboutItems: [
    {label: 'Location', text: 'Balgat Mh. Sayıştay 06520 Çankaya Ankara', Icon: MapIcon},
    {label: 'Age', text: '37', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Iranian', Icon: FlagIcon},
    {label: 'Interests', text: 'Web/App development, Product consultant', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Economic Science', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Freelance, Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Persian',
        level: 10,
      },
      {
        name: 'English',
        level: 7,
      },
      {
        name: 'Turkish',
        level: 2,
      },
      {
        name: 'German',
        level: 1,
      },
    ],
  },
  {
    name: 'Web development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 5,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 2,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = []; /*[
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];*/

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2010-2013',
    location: 'Kharazmi University of Tehran',
    title: 'M.D. in Knowledge Engineering and Decision Science',
    content: <p><ul>
        <li>Most of the topics were about artificial intelligence and analyzing massive data for making better decisions.</li>
        <li>Coursework in physics, engineering, and statistics.</li>
      </ul></p>,
  },
  {
    date: '2004-2009',
    location: 'Damghan University',
    title: 'B.D. in Applied Mathematics',
    content: <p><ul>
        <li>Applied mathematics, I love it, and I miss it. Applied Mathematics makes me strong in analyzing and meticulous in problem-solving.</li>
      </ul></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jun 2022 - Apr 2023',
    location: 'London - England',
    title: 'TRIBES (remote)',
    content: (
        <p>
          <ul>
            <li>
              <p><strong>Freelance Frontend Engineer</strong> (06/2022, Present)</p>
              <ul>
                <li>Tribes is a company, it is like an umbrella, it has its own projects but it is working alongside many companies. Other companies request help from Tribes and Tribes send the developers like agents there to work with them and build the products.</li>
              </ul>
            </li>
            <li>
              <p><strong>React Native Developer at Dubit (contract base)</strong> (06/2022, 03/2023)</p>
              <ul>
                <li>I have designed an architecture for their application. The application was about playing podcasts for kids. The application has several actions and also a specific module for painting. I used RNTP for playing songs and React Native Skia for implementing the painting module. The painting module was one of the tough parts that I awesomely I have done it. I wrote an article on Medium about my experiences with the painting module.</li>
                <li>App Links:
                  <ul>
                    <li><a href="https://apps.apple.com/gb/app/kidspod/id6443950930" rel="nofollow">iOS</a></li>
                    <li><a href="https://play.google.com/store/apps/details?id=com.kidspod&amp;pli=1" rel="nofollow">Android</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </p>
    ),
  },
  {
    date: 'Dec 2020 - Jun 2022',
    location: 'San Fransisco - US',
    title: 'Information Technologies & Transformation (remote)',
    content: (
        <p>
          <ul>
            <li>
              <p><strong>Frontend and Business Consultant</strong> (06/2022, Present)</p>
              <ul>
                <li>After working two years on the Lobox social network, I'm still waiting for its success, so I can't spend time anymore on it but still, for consulting, I'm open to IT&amp;T to help them.</li>
              </ul>
            </li>
            <li>
              <p><strong>Frontend Engineer</strong> (07/2021, 06/2022)</p>
              <ul>
                <li>After 8 months of leading the Frontend team, I decided to transfer the leadership to a better teammate who was better and fitter in this situation.</li>
              </ul>
            </li>
            <li>
              <p><strong>Team Lead Frontend Development</strong> (12/2020, 07/2021)</p>
              <ul>
                <li>We are reinventing Social Networks, it is our motto, actually, we are creating a competitor of LinkedIn.
                  At the first of my entrance, I made up the team, brought the good Frontend and Backend developers and then create a very robust structure for the project.
                  I brought ReactJs with SSR, still, we are developing the features and the team is up now. features and the team is up now.</li>
              </ul>
            </li>
            <li>
              <p>Links:</p>
              <ul>
                <li><a href="https://lobox.com" rel="nofollow">production</a></li>
                <li><a href="https://dev.lobox.com" rel="nofollow">development</a></li>
              </ul>
            </li>
          </ul>
        </p>
    ),
  },
  {
    date: 'May 2020 - Dec 2020',
    location: 'Tehran - Iran',
    title: 'Frontend Developer at Sibche',
    content: (
        <p>
          <ul>
            <li>Actually, Sibche is an iOS store market, and I was responsible for the main app of this store, the main technology was React Native. I was developing the main app and other companies' apps based on React Native. For the whole of the project, I used TypeScript, Test, and the latest technologies.</li>
          </ul>
        </p>
    ),
  },
  {
    date: 'May 2018 - May 2020',
    location: 'Tehran - Iran',
    title: 'Frontend Engineer at Sheypoor',
    content: (
        <p>
          <ul>
            <li>
              <p>Sheypoor is one of the classified websites in Iran. Its work area is very professional and I practiced a lot of things like pair programming and planning methods for large-scale projects there. Also, I worked deeply on React-Native. I had previous knowledge of React-Native from before and have built a small application. However, at Sheypoor I experienced it from scratch and worked it very deeply. My work experiences also include:</p>
              <ul>
                <li>Design ReactJS/ReactNative UI Elements, Navigation, Composite Components, etc.</li>
                <li>Pair Programming and Pair Reviewing Front-end Codes (Web/App)</li>
                <li>Prepare Android/iOS Build Scripts for React Native</li>
                <li>Configure Webpack, ESLint, etc.</li>
              </ul>
            </li>
          </ul>
        </p>
    ),
  },
  {
    date: 'Dec 2017 - May 2018',
    location: 'Tehran - Iran',
    title: 'Frontend Developer at Scann Pay',
    content: (
        <p>
          <ul>
            <li>
              <p>Scann was a Fintech startup, I was encouraged to work there because their stack had to be written from scratch. So I decided to work with them to create a big challenge for myself.</p>
              <ul>
                <li>Design and Develop 3 Large-scale Apps</li>
                <li>Implement Redux and Redux Thunk</li>
                <li>Implement a Boilerplate for React Apps</li>
                <li>Node.js and ReactJS</li>
              </ul>
            </li>
          </ul>
        </p>
    ),
  },
  {
    date: 'Nov 2016 - Dec 2017',
    location: 'Tehran - Iran',
    title: 'Frontend Web Developer at Digikala',
    content: (
        <p>
          <ul>
            <li>
              <p>My primary duty in Digikala was to develop Web UI. I had to make Digikala better in UX and improve its conversion rate, including:</p>
              <ul>
                <li>
                  <p>Improved the UX of the mobile app and fix the serious bug that nobody was able to track since. The conversion rate of the Firefox mobile app was zero because of the poor JavaScript codebase. I fixed it and it also solved its other issues.</p>
                </li>
                <li>
                  <p>We refactored the search page. We implemented it as a single-page React application. However, it vanished after Digikala's big-bang update.</p>
                </li>
                <li>
                  <p>I was involved in the Partial Shipment project which was so valuable for the managers.</p>
                </li>
                <li>
                  <p>I got moved to Digikala Mag and comprehensively refactored it. We separated the Desktop and mobile apps.</p>
                </li>
              </ul>
            </li>
            <li>
              <p>I practised a lot of technologies and patterns, such as HTML5, Razor, CSS3, adaptive design, responsive design, flexbox, SVG animations SMIL, Neat, Bourbon, BEM, Less, SCSS, PostCSS, JavaScript(ES6), React, Redux, Babel, Gulp, Webpack, and etc.</p>
            </li>
            <li>
              <p>Links:</p>
              <ul>
                <li><a href="https://digikala.com" rel="nofollow">Digikala</a></li>
                <li><a href="https://digikala.com/mag" rel="nofollow">Digikala Mag</a></li>
              </ul>
            </li>
          </ul>
        </p>
    ),
  },
];

/**
 * Recommendation section
 */
export const recommendation: TestimonialSection = {
  imageSrc: testimonialImage,
  recommendations: [
    {
      name: 'William Rose',
      text: 'Amer is a committed, hard working, and talented developer front-end engineer. He takes the time explain his methodology to those who are unfamiliar with his field and is receptive to feedback. He\'s a friendly person, a pleasure to work alongside, and more than pulls his weight as part of a team.',
      image: 'https://media.licdn.com/dms/image/D4E03AQFO_FWd9LCDhA/profile-displayphoto-shrink_800_800/0/1675187477985?e=1697673600&v=beta&t=zv_595wiOCS4Q76lso8hyKpfytb2XdFnbpUJQT88qLc',
      link: 'https://www.linkedin.com/in/williamrose944/'
    },
    {
      name: 'Matthew Bell',
      text: 'I worked alongside Amer on a recent app project. It was Amer\'s responsibility to develop my UI designs into a functional product, which he did to a very high standard. Amer is highly skilled, knowledgeable, and passionate about what he does. He\'s always willing to help and takes the time to listen, learn, and also share his knowledge with others. I enjoyed working with Amer and I\'m happy to recommend him to others.',
      image: 'https://media.licdn.com/dms/image/C4D03AQGhzWwp9xHmPA/profile-displayphoto-shrink_800_800/0/1650304098163?e=1697673600&v=beta&t=PGqm81eTe_fB0vDs1Fn5C7NYst6YqC7eM_80nohfEM8',
      link: 'https://www.linkedin.com/in/m-d-bell/'
    },
    {
      name: 'Can Ertaş',
      text: 'I have worked with many developers in my career. Amer was one of the best amongst them. His motto is “Everything is possible!” This explains a lot about his approach to the problems that we have faced. Amer was always a great asset to our team. Working with him in the same team was giving me the confidence that we can achieve the goals and do anything that the project needed. We weren’t only trying to solve the problems we have currently but what we possibly have in the future. I feel lucky to work with him and highly recommend him as a lead FE developer if you need one. ',
      image: 'https://media.licdn.com/dms/image/C4D03AQETorQcLRmPbg/profile-displayphoto-shrink_800_800/0/1638732144900?e=1697673600&v=beta&t=IxpTgjvAOBnf-CHHNbkTYVoxSd9tpsAnx1yOyok1Nzo',
      link: 'https://www.linkedin.com/in/ertascan/'
    },
    {
      name: 'Lucy Paine',
      text: 'I worked with Amer on a project for a period of months, Amer was a delight to work with. He has a can do, positive attitude, he’s very knowledgeable, and his communication skills are excellent. I would highly recommend Amer, his super positive attitude to life will bring light into any work place or team.',
      image: 'https://media.licdn.com/dms/image/D4E03AQHMpycBt14TyQ/profile-displayphoto-shrink_800_800/0/1690382466066?e=1695859200&v=beta&t=N49W21TdYb_rXoaTM2B3o9gCQCzWbxQ79hKNKGcMTEw',
      link: 'https://www.linkedin.com/in/lucy-paine-b2bb9b50/'
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "I'm here to help you with any questions you might have about my work.",
  items: [
    {
      type: ContactType.Email,
      text: 'amerllica@gmail.com',
      href: 'mailto:amerllica@gmail.com',
    },
    /*{
      type: ContactType.Phone,
      text: '+447496052859',
      href: 'tel:+447496052859',
    },*/
    /*{
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },*/
    /*{
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },*/
    {
      type: ContactType.Github,
      text: 'gh/amerllica',
      href: 'https://github.com/amerllica',
    },
    {
      type: ContactType.LinkedIn,
      text: 'in/amerllica',
      href: 'https://linkedin.com/in/amerllica',
    },
    {
      type: ContactType.Medium,
      text: '@amerllica',
      href: 'https://medium.com/@amerllica',
    },
    {
      type: ContactType.Facebook,
      text: 'fb/amerllica',
      href: 'https://fb.com/amerllica',
    },
    {
      type: ContactType.Twitter,
      text: '@amerllica',
      href: 'https://twitter.com/amerllica',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/amerllica'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/6877799/amerllica'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/amerllica/'},
  {label: 'Medium', Icon: MediumIcon, href: 'https://medium.com/@amerllica/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/amerllica/'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://fb.com/amerllica'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/amerllica'},
];
