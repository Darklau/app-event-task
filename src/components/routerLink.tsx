import {cn} from "@/utils/cn"
import {Link, useLocation} from "react-router-dom";
import React from "react";

interface Props {
    to: string;
    children: React.ReactNode;

}

export const RouterLink = React.forwardRef<HTMLAnchorElement, Props>((props: Props, ref) => {
    const isActive = useLocation().pathname === props.to
    return <Link ref={ref} to={props.to}
                 className={cn('transition-colors duration-300 uppercase flex p-[12px] rounded-md ',
                     isActive ? 'bg-neutral-0' : 'hover:bg-neutral-0'
                 )}>
        {props.children}
    </Link>
})
