import {RouterLink} from "@/components/routerLink";
import {ShoppingCartIcon} from "lucide-react";
import {NotificationBadge} from "@/components/ui/notificationBadge";
import {useCartStorage} from "@/store/cartStore";

export const CartLink = () => {
    const {cart} = useCartStorage()
    return <div className='relative'>

        <NotificationBadge bottom={'0'} right={'0'}
                           className={'absolute text-accent-hover bg-neutral-0 font-bold text-sm '}
                           val={cart.length}>
            <RouterLink to={'/cart'}>
                <ShoppingCartIcon/>

            </RouterLink>
        </NotificationBadge>
    </div>
}