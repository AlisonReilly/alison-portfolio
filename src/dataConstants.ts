import WallMedCrop from './assets/images/WallMedCrop.png';


export type NavItem = {
    name: string;
    href?: string,
    subNav?: NavItem[]
}

export type PortfolioItem = {
    title: string;
    href?: string;
    description: string;
    tags: string[];
    githubURL: string | string[];
    blogURL?: string;
    projectAssociation?: string;
    demoType: 'video' | 'image' | 'live'
}

export const MainNavItems: NavItem[] = [
    { name: 'Home', href: '/' },
    {
        name: 'Experience', 
        subNav: [
            { name: 'Resume', href: '/projects' }, 
            { name: 'Proficiencies', href: '/proficiencies' }
        ]
    },
    { name: 'Blog', href: '/blog' },
    {
        name: 'Projects', 
        subNav: [
            { name: 'Projects', href: '/projects' }, 
            { name: 'Live Demos', href: '/live-demos' }
        ]
    },
    { name: 'Contractible Services', href: '/contract' },
    { name: 'About', href: '/about' },


]
// todo, blog links:  link to 'newer' blog maybe and/or do blog next here and use that url
// todo, consider order of these what order should they appear in? or could it have options
// todo if wanting to reference something without a video could capture a screenshot if found somewhere or similar, provide a description and link to github
export const PortfolioItems: PortfolioItem[] = [
    { 
        title: 'Fauxtel Hotels',
        href: "https://www.youtube.com/embed/G4u_KgDfBYI",
        description: 'For Flatiron School\'s final project, I created a theoretical hotel brand web app providing hotel details and ability to book a reservation/modify/cancel. ' +  
        'Uses Active Mailer for email confirmations, jwt tokens for authentication, ' + 
        'React and Redux front end with Ruby on Rails backend.',
        tags: ['Flatiron School', 'Final Project', 'Ruby On Rails', 'REST API', 'CSS', 'Auths', 'JWT', 'CRUD', 'React', 'Redux'],
        githubURL: 'https://github.com/Tsunamins/FauxtelHotels',
        blogURL: 'https://tsunamins.github.io/fauxtel_hotels_-_the_final_project',
        projectAssociation: 'Flatiron School',
        demoType: 'video'
    },
    { 
        title: 'In Theory Blog',
        href: "https://www.youtube.com/embed/DHfhT9ddKp4",
        description: 'A project shortly after leaving the Flatiron School to learn how to hook up a Node based backend to a React FrontEnd. A basic MERN CRUD web app using MongoDB, Express, Node and React.  Idea was, ' + 
        'to familiarize with node.js/express.js in conjunction with React.  Uses JWT authentication, bootstrap and mongoose, for a basic introduction of use.',
        tags: ['Self Study', 'MERN', 'CRUD', 'REST API', 'CSS', 'Authentication', 'JWT', 'Bootstrap', 'MongoDB', 'Node', 'Express', 'React', 'Mongoose'],
        githubURL: 'https://github.com/Tsunamins/InTheoryBlog',
        projectAssociation: 'Self Study',
        demoType: 'video'
    },
    { 
        title: 'Miami Rooftop Pools',
        href: "https://www.youtube.com/embed/rlPety4CSeY",
        description: 'Second project for Flatiron School, a Sinatra and Ruby project focusing on auths with Bcrypt, route protection, ActiveRecord validations, CRUD, CSS animations and incorporation of bootstrap.',
        tags: ['Flatiron School', 'Sinatra', 'Ruby', 'Bootstrap', 'CSS', 'Auths', 'Bcrypt', 'CRUD'],
        githubURL: 'https://github.com/Tsunamins/miami_rooftop_pools',
        blogURL: 'https://tsunamins.github.io/sinatra_project_-_miami_rooftop_pools',
        projectAssociation: 'Flatiron School',
        demoType: 'video'
    },
    { 
        title: 'Prototype One: A Cat\'s Dream',
        href: "https://www.youtube.com/embed/MamqFgSoqq8",
        description: 'Fourth project for the Flatiron School. A JavaScript front end with Rails API back end, video demo of a single page web application project for the third Project at Flatiron School. ' + 
        'User stats are tracked after providing a name and added to the DOM via Vanilla JS only, player uses arrow keys and space bar to maneuver and complete the game.',
        tags: ['Flatiron School', 'JavaScript', 'Ruby on Rails', 'Phaser3', 'Tiled'],
        githubURL: 'https://github.com/Tsunamins/a-cats-dream',
        blogURL: '',
        projectAssociation: 'Flatiron School',
        demoType: 'video'
    },
    { 
        title: 'Amateur Wine Reviewer',
        href: "https://www.youtube.com/embed/chD6oSrJplk",
        description: 'Third project for the Flatiron School. Ruby on Rails web app demonstrating the  ' + 
        'ability to create a user profile through traditional login/sign up features, or, SSO with google. Provides basic demonstration of MVC, nested resources, etc. ' +  
        'User\'s can add new wines to the database, review those wines and like reviews of any user in the database.',
        tags: ['Flatiron School', 'Ruby On Rails', 'REST API', 'CSS', 'Auths', 'JWT', 'CRUD', 'bcrypt'],
        githubURL: 'https://github.com/Tsunamins/amateur_wine_reviewer',
        blogURL: '',
        projectAssociation: 'Flatiron School',
        demoType: 'video'
    },
    { 
        title: 'Miami Venues CLI Web Scraping',
        href: "https://www.youtube.com/embed/IZuhB9wp3Wo",
        description: 'First project for the Flatiron School. CLI project using Ruby and Nokogiri to scrape web pages for list data contained in web page elements. ' + 
        'This project utilized the websites of Perez Art Museum and Frost Science Museum\'s Laser Fridays events to demonstrate code ability and nokogiri functionality.',
        tags: ['Flatiron School', 'Ruby', 'CLI', 'Nokogiri', 'Webscraping'],
        githubURL: 'https://github.com/Tsunamins/miami_venues.git',
        blogURL: 'https://tsunamins.github.io/cli_project_noteworthy_points',
        projectAssociation: 'Flatiron School',
        demoType: 'video'
    },
    { 
        title: 'The Wall',
        href: WallMedCrop,
        description: 'Learned Python along with Python Flask for backend REST api creation. The project demonstrates authentication/authorization and basic CRUD operations, tied to a React UI.',
        tags: ['Self Study', 'Python', 'Flask', 'REST API', 'Auths', 'React'],
        githubURL: ['https://github.com/Tsunamins/wall-client', 'https://github.com/Tsunamins/wall-back'],
        blogURL: '',
        projectAssociation: 'Self Study',
        demoType: 'image'
    },
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
