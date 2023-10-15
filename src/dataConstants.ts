export type NavItem = {
    name: string;
    href?: string,
    subNav?: NavItem[]
}

export const MainNavItems: NavItem[] = [
    {name: 'Home', href: '/home'},
    {name: 'Experience', subNav: [
        {name: 'Resume', href: '/projects'}, {name: 'Proficiencies', href: '/proficiencies'}]
    },
    {name: 'Blog', href: '/blog'},
    {name: 'Projects', subNav: [
        {name: 'Projects', href: '/projects'}, {name: 'Live Demos', href: '/live-demos'}]
    },
    {name: 'Contractible Services', href: '/contract'},
    {name: 'About', href: '/about'},


]