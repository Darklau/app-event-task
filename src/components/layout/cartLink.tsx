import { RouterLink } from '@/components/ui/routerLink'
import { ShoppingCartIcon } from 'lucide-react'
import { NotificationBadge } from '@/components/ui/notificationBadge'
import { useCartStore } from '@/store/cartStore'

export const CartLink = () => {
  const { cart } = useCartStore()
  return (
    <div className="relative">
      <NotificationBadge
        bottom={'-8px'}
        right={'-8px'}
        className={'absolute bg-accent-main  text-neutral-0 font-bold text-sm '}
        val={cart.length}>
        <RouterLink to={'/cart'}>
          <ShoppingCartIcon />
        </RouterLink>
      </NotificationBadge>
    </div>
  )
}
