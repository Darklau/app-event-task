interface Props{
    to: string;
    children: React.ReactNode;

}

export const RouterLink = (props: Props) => {
    const isActive = window.location.pathname === props.to;
    return <a className='flex p-[12px] rounded-md bg-neutral0'>
        {props.children}
    </a>
}