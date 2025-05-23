import WallMedCrop from '../assets/images/WallMedCrop.png';

export interface NavItem {
    name: string;
    href?: string,
    subNav?: NavItem[]
}

export interface PortfolioItem {
    title: string;
    mediaLocation?: string;
    description: string;
    tags: string[];
    githubURL: string | string[];
    blogURL?: string;
    projectAssociation?: string;
    demoType: 'video' | 'image' | 'live'
    youTubeURL?: string;
    sequence: number;
}

export interface ResumeEntry {
    organization: string;
    orgURL?: string;
    skills?: string[];
    achieved?: string[];
    description?: string;
    date?: string;
    title?: string;
    concentration?: string;
    location?: string;
    graduation? :string;
}

export const MainNavItems: NavItem[] = [
    { name: 'Home', href: '/' },
    {
        name: 'Experience', href: '/resume'
        // subNav: [
        //     { name: 'Resume', href: '/resume' }, 
        //     { name: 'Proficiencies', href: '/proficiencies' }
        // ]
    },
    {
        name: 'Projects', 
        subNav: [
            { name: 'Projects', href: '/projects' }, 
            { name: 'Live Demos', href: '/live-demos' }
        ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Connect', href: '/connect' },

    // { name: 'Contractible Services', href: '/contract' },



]

// backup Project constants
export const PortfolioItems: PortfolioItem[] = [
    { 
        title: 'Fauxtel Hotels',
        mediaLocation: "https://www.youtube.com/embed/G4u_KgDfBYI",
        description: 'For Flatiron School\'s final project, I created a theoretical hotel brand web app providing hotel details and ability to book a reservation/modify/cancel. ' +  
        'Uses Active Mailer for email confirmations, jwt tokens for authentication, ' + 
        'React and Redux front end with Ruby on Rails backend.',
        tags: ['Flatiron School', 'Final Project', 'Ruby On Rails', 'REST API', 'CSS', 'Auths', 'JWT', 'CRUD', 'React', 'Redux'],
        githubURL: 'https://github.com/AlisonReilly/FauxtelHotels',
        blogURL: 'https://tsunamins.github.io/fauxtel_hotels_-_the_final_project',
        projectAssociation: 'Flatiron School',
        demoType: 'video',
        youTubeURL: "https://www.youtube.com/G4u_KgDfBYI",
        sequence: 1
    },
    { 
        title: 'In Theory Blog',
        mediaLocation: "https://www.youtube.com/embed/DHfhT9ddKp4",
        description: 'A project after completing the Flatiron School to learn how to hook up a Node based backend to a React FrontEnd. A basic MERN CRUD web app using MongoDB, Express, Node and React.  Idea was, ' + 
        'to familiarize with node.js/express.js in conjunction with React.  Uses JWT authentication, bootstrap and mongoose, for a basic introduction of use.',
        tags: ['Self Study', 'MERN', 'CRUD', 'REST API', 'CSS', 'Authentication', 'JWT', 'Bootstrap', 'MongoDB', 'Node', 'Express', 'React', 'Mongoose'],
        githubURL: 'https://github.com/Tsunamins/InTheoryBlog',
        projectAssociation: 'Self Study',
        demoType: 'video',
        youTubeURL: "https://www.youtube.com/DHfhT9ddKp4",
        sequence: 2
    },
    { 
        title: 'Miami Rooftop Pools',
        mediaLocation: "https://www.youtube.com/embed/rlPety4CSeY",
        description: 'Second project for Flatiron School, a Sinatra and Ruby project focusing on auths with Bcrypt, route protection, ActiveRecord validations, CRUD, CSS animations and incorporation of bootstrap.',
        tags: ['Flatiron School', 'Sinatra', 'Ruby', 'Bootstrap', 'CSS', 'Auths', 'Bcrypt', 'CRUD'],
        githubURL: 'https://github.com/AlisonReilly/miami_rooftop_pools',
        blogURL: 'https://tsunamins.github.io/sinatra_project_-_miami_rooftop_pools',
        projectAssociation: 'Flatiron School',
        demoType: 'video',
        youTubeURL: "https://www.youtube.com/rlPety4CSeY",
        sequence: 3
    },
    { 
        title: 'Prototype One: A Cat\'s Dream',
        mediaLocation: "https://www.youtube.com/embed/MamqFgSoqq8",
        description: 'Fourth project for the Flatiron School. A JavaScript front end with Rails API back end, video demo of a single page web application project for the fourth Project at Flatiron School. ' + 
        'User stats are tracked after providing a name and added to the DOM via Vanilla JS only, player uses arrow keys and space bar to maneuver and complete the game.',
        tags: ['Flatiron School', 'JavaScript', 'Ruby on Rails', 'Phaser3', 'Tiled'],
        githubURL: 'https://github.com/AlisonReilly/a-cats-dream',
        blogURL: '',
        projectAssociation: 'Flatiron School',
        demoType: 'video',
        youTubeURL: "https://www.youtube.com/MamqFgSoqq8",
        sequence: 4
    },
    { 
        title: 'Amateur Wine Reviewer',
        mediaLocation: "https://www.youtube.com/embed/chD6oSrJplk",
        description: 'Third project for the Flatiron School. Ruby on Rails web app demonstrating the  ' + 
        'ability to create a user profile through traditional login/sign up features, or, SSO with google. Provides basic demonstration of MVC, nested resources, etc. ' +  
        'User\'s can add new wines to the database, review those wines and like reviews of any user in the database.',
        tags: ['Flatiron School', 'Ruby On Rails', 'REST API', 'CSS', 'Auths', 'JWT', 'CRUD', 'bcrypt'],
        githubURL: 'https://github.com/AlisonReilly/amateur_wine_reviewer',
        blogURL: 'https://tsunamins.github.io/rails_project_things_to_remember_and_forget',
        projectAssociation: 'Flatiron School',
        demoType: 'video',
        youTubeURL: "https://www.youtube.com/chD6oSrJplk",
        sequence: 5
    },
    { 
        title: 'Miami Venues CLI Web Scraping',
        mediaLocation: "https://www.youtube.com/embed/IZuhB9wp3Wo",
        description: 'First project for the Flatiron School. CLI project using Ruby and Nokogiri to scrape web pages for list data contained in web page elements. ' + 
        'This project utilized the websites of Perez Art Museum and Frost Science Museum\'s Laser Fridays events to demonstrate code ability and nokogiri functionality.',
        tags: ['Flatiron School', 'Ruby', 'CLI', 'Nokogiri', 'Web scraping'],
        githubURL: 'https://github.com/AlisonReilly/miami_venues.git',
        blogURL: 'https://tsunamins.github.io/cli_project_noteworthy_points',
        projectAssociation: 'Flatiron School',
        demoType: 'video',
        youTubeURL: "https://www.youtube.com/IZuhB9wp3Wo",
        sequence: 6
    },
    { 
        title: 'The Wall',
        mediaLocation: WallMedCrop,
        description: 'Learned Python along with Python Django for backend REST api creation. The project demonstrates authentication/authorization and basic CRUD operations, tied to a React UI.',
        tags: ['Self Study', 'Python', 'Django', 'REST API', 'Auths', 'React'],
        githubURL: ['https://github.com/AlisonReilly/wall-client', 'https://github.com/AlisonReilly/wall-back'],
        projectAssociation: 'Self Study',
        demoType: 'image',
        sequence: 7
    },
]


export const ResumeEntries: ResumeEntry[] = [
    {
        organization: 'Instructure',
        title: 'Software Engineer II',
        date: '9/2022 - present',
        orgURL: 'https://www.parchment.com/',
        skills: ['TypeScript', 'React', 'GraphQL', 'Styled Components', 'Jest', 'React Testing Library', 'TurboRepo', 'Storybook', 'Accessibility', 'Java', 'Liquibase', 'Spring Boot'],
        achieved: [
            'Developed a React and TypeScript component library, ensuring UI consistency and improving development speed',
            'Implemented responsive design while ensuring accessibility compliance and improving user experience',
            'Led GraphQL integration, optimizing frontend data fetching and backend schema design for scalable API interactions',
            'Modernized legacy code on full stack teams, integrating component library with corresponding API revisions',
            'Designed API endpoints and managed schemas with Spring Boot, Hibernate, Lombok, and Liquibase for data integrity'
        ],
        description: 'Created a company wide, front end, component library for an electronic and automated credentialing organization. Worked on additional full stack application team with Java and Spring Boot.',
        location: 'Remote'
    },
    {
        organization: 'American Express',
        title: 'Software Engineer I',
        date: '12/2021 - 9/2022',
        orgURL: 'https://www.americanexpress.com/',
        skills: ['JavaScript', 'React', 'Python', 'Flask', 'Golang', 'Redis', 'Selenium', 'Jest', 'Enzyme', 'Docker', 'Kafka'],
        achieved: [
            'Created front-end features for an internal use automations platform using React and the company design library',
            'Developed interactive reporting UI with React, enhancing visibility of platform for the company',
            'Enhanced front-end performance and responsiveness by integrating Redis for optimized data retrieval and caching',
            'Built API endpoints in Golang and Python (Flask) with a focus on reporting solutions, increasing team impact',
            'Integrated Selenium tests into GitLab pipelines, increasing platform robustness through automated UI testing',
            'Co-hosted meetings to demonstrate product, facilitate onboarding, enhancing platform adoption and understanding'
        ],
        description: 'A team focusing on building a robust automations platform for the company wide adoption.',
        location: 'Remote'    
    },
    {
        organization: 'ServiceNow',
        title: 'Technical Support Engineer',
        date: '3/2021 - 12/2021',
        orgURL: 'https://www.servicenow.com/',
        skills: ['JavaScript', 'Platform Debugging', 'Java', 'ServiceNow', 'Platform as a Service', 'ServiceNow Administration', 'Troubleshooting', 'Accessibility'],
        achieved: [
            'Diagnosed UI/UX defects or misconfigurations with platform and Chrome Dev Tools, optimizing visual components',
            'Investigated JavaScript, Angular, and React customizations, enhancing platform performance and customer satisfaction',
            'Authored and updated knowledge base articles, driving self-service support and reducing recurring customer inquiries',
            'Optimized and suggested platform settings, security rules and table functions, optimizing workflow experience',
            'Accelerated ticket resolution by coordinating with customers, team and developers, streamlining problem-solving'
        ],
        description: 'Technical Support concentrating on debugging and finding root causes in the UI/UX features of the ServiceNow platform.',
        location: 'Remote'
    },
    {
        organization: '1909 Coworking',
        title: 'Backend Developer Intern',
        date: '8/2020 - 3/2021',
        orgURL: 'https://www.weare1909.org/',
        skills: ['JavaScript', 'Node', 'Integrations', 'Salesforce API', 'Firebase', 'Webhooks', 'ExpressJS'],
        achieved: [
            'Built middleware using Node.js and Firebase to integrate OfficeRnd and Salesforce APIs',
            'Implemented webhook routing with Express.js for efficient data handling and clear separation of concerns',
            'Synced goals bi-weekly with the product owner and team, ensuring alignment and progress.'
        ],
        description: 'An internship project building middleware and integrations for a local co-working space.',
        location: 'Remote'
    },
    {
        organization: 'Shuckers',
        title: 'Server',
        date: '5/2019 - 3/2020',
        skills: ['Team Work', 'Communication', 'Product Knowledge', 'Multi-tasking', 'Math', 'Prioritization', 'Work under pressure', 'Sales'],
        achieved: [
            'Ensured smooth operation during high volume service hours by multi-tasking and teamwork',
            'Navigated challenging people by adapting to personality and negotiating positive outcomes',
            'Met and exceeded high pressure demands of restaurant pace and volume by organizing tasks'
        ],
        description: 'Fast paced casual restaurant with a focus on seafood.',
        location: 'Miami Beach, FL'
    },
    {
        organization: 'Smith & Wollensky',
        title: 'Server',
        date: '11/2017 - 5/2019',
        skills: ['Team Work', 'Communication', 'Product Knowledge', 'Multi-tasking', 'Math', 'Prioritization', 'Sales'],
        achieved: [
            'Facilitated restaurant demands as a team member of both banquet and a la carte shifts',
            'Lead trainees in a one week, new hire orientation covering food, beverage & service',
            'Effectively communicated with other departments to gain efficiency and speed, increasing section revenue'
        ],
        description: 'High end steak house focusing on classic dining experiences.',
        location: 'Miami Beach, FL'
    },
    {
        organization: 'Quality Meats',
        title: 'Server',
        date: '6/2010 - 10/2017',
        skills: ['Team Work', 'Communication', 'Product Knowledge', 'Multi-tasking', 'Math', 'Prioritization', 'Wine Knowledge', 'Sales'],
        achieved: [
            'Professional wine knowledge increased personal and restaurant wine sales, average of 40% of sales',
            'Presented menu strategically to guide guests to food choices decreasing order, table and wait times',
            'Trained new hires on company steps of service, side duties and ensured menu knowledge'
        ],
        description: 'High end steak house with a modern twist.',
        location: 'New York, NY'
    },
]

export const Education: ResumeEntry[] = [
    {
        organization: 'Flatiron School',
        title: 'Software Engineering',
        date: '6/2020',
        description: 'Learned Full Stack Software Engineering with Ruby on Rails, JavaScript, React and Redux',
        concentration: 'Full Stack Software Engineering',
        skills: ['Ruby on Rails', 'React', 'Redux', 'JavaScript'],
        location: 'Remote'
    },
    {
        organization: 'LaGuardia Community College',
        title: 'Math & Science',
        description: 'Enrolled in a variety of science and math courses while working full time',
        concentration: 'Math and Science',
        skills: ['Anatomy and Physiology', 'Biology', 'Chemistry', 'Calculus', 'C++', 'Writing intensive courses'],
        location: 'Long Island City, NY'
    },
    {
        organization: 'Miami Dade College',
        title: 'Computer Science',
        description: 'Transferred credits to complete an Associate of Arts degree, online and evening classes',
        concentration: 'Computer Science',
        skills: ['Physics', 'Calculus', 'Ethics'],
        location: 'Miami, FL',
        graduation: 'Associate of Arts'
    }
]

export const AlphaDiagramMap: Record<number, string> = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
    8: 'i',
    9: 'j',
    10: 'k',
    11: 'l',
    12: 'm',
    13: 'n',
    14: 'o',
    15: 'p',
    16: 'q',
    17: 'r',
    18: 's',
};
