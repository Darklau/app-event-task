import {cn} from "@/utils/cn"
import {Link, useLocation} from "react-router-dom";
import React from "react";

interface Props {
    to: string;
    children: React.ReactNode;

}

export const RouterLink = React.forwardRef<HTMLAnchorElement, Props>((props: Props, ref) => {
    const isActive = useLocation().pathname === props.to
    return <Link ref={ref} to={props.to} className={cn('uppercase flex p-[12px] rounded-md ',
        isActive ? 'bg-gray-200' : 'hover:bg-gray-200'
    )}>
        {props.children}
    </Link>
})
