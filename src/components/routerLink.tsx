import {Link, useLocation} from "react-router-dom";
import React from "react";
import {Toggle} from "@/components/ui/toggle";

interface Props {
    to: string;
    children: React.ReactNode;

}

export const RouterLink = React.forwardRef<HTMLAnchorElement, Props>((props: Props, ref) => {
    const isActive = useLocation().pathname === props.to
    return <Toggle asChild pressed={isActive}><Link ref={ref} to={props.to}
    >
        {props.children}
    </Link></Toggle>
})
