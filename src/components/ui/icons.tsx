import {LucideComputer} from "lucide-react";

interface IconProps extends React.SVGProps<SVGSVGElement> {

}

export const Logo = (props: IconProps) => {
    return <div className='text-xl flex  uppercase font-bold text-neutral-0 gap-[8px] items-center'><LucideComputer
        {...props} /> Darklau</div>
}