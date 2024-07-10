import {navLinks} from "../constants";
import {NavLink} from "react-router-dom";
import {RouterLink} from "./routerLink";

const Header = () => {
    return <header className='flex items-center bg-neutral-100 min-h-[72px] mb-[50px] '>
        <div className='container  justify-between items-center flex'>


        <a className='link'></a>
        <nav className='flex gap-[8px]'>
            {navLinks.map((link) =>
            <RouterLink key={link.to} {...link}/>
                )}
        </nav>
        </div>
    </header>
}

export default Header;