export type MenuItem = {
    name: string;
    href?: string,
    subItem?: MenuItem[]
}

export const MainNavItems: MenuItem[] = [
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