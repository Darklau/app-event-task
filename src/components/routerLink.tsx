import {cn} from "@/utils/cn"

interface Props {
    to: string;
    children: React.ReactNode;

}

export const RouterLink = (props: Props) => {
    const isActive = window.location.pathname === props.to;
    return <a href={props.to} className={cn('flex p-[12px] rounded-md ',
        isActive ? 'bg-gray-200' : 'hover:bg-gray-200'
    )}>
        {props.children}
    </a>
}