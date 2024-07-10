import {RouterLink} from "../routerLink";
import React from "react";
import {Logo} from "@/components/ui/icons";
import {Link} from "react-router-dom";
import {CartLink} from "@/components/layout/CartLink";

export const mainNavLinks: { to: string, children: React.ReactNode }[] = [
    {to: '/', children: 'Каталог'},
]

const Header = () => {
    return <header className='flex items-center bg-neutral-300 min-h-[72px] '>
        <div className='container  justify-between items-center flex'>
            <Link to={'/'} className='link  '><Logo height={50} width={50}/></Link>
            <nav className='flex gap-[8px]'>
                {mainNavLinks.map((link) =>
                    <RouterLink key={link.to} {...link}/>
                )}
                <CartLink/>
            </nav>
        </div>
    </header>
}

export default Header;