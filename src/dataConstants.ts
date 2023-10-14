export type NavItem = {
    name: string;
    href?: string,
    subItem?: NavItem[]
}

export const MainNavItems: NavItem[] = [
    {name: 'Home', href: '/home'},
    {name: 'Experience', subItem: [
        {name: 'Projects', href: '/projects'}, {name: 'Experience', href: '/experience'}]
    },
    {name: 'Blog', href: '/blog'},
    {name: 'Projects and Live Demos', subItem: [
        {name: 'Projects', href: '/projects'}, {name: 'Experience', href: '/experience'}]
    },
    {name: 'Contractible Services', href: '/contract'},
    {name: 'About', href: '/about'},


]