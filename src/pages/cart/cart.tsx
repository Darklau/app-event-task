import { cn } from '@/utils/cn'
import { useCartStore } from '@/store/cartStore'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { CartMenu } from '@/pages/cart/cartMenu'
import { CartTable } from '@/pages/cart/cartTable'

const Cart = () => {
  const { cart } = useCartStore()
  return (
    <div className={cn(' gap-[24px] grid-cols-8', cart.length && 'md:grid')}>
      {cart.length ? (
        <CartTable containerClass="col-span-6" />
      ) : (
        <div className="p-[16px_24px]  m-[0_auto] flex-col gap-[8px] w-max rounded-[24px] bg-neutral-0  flex items-center justify-center">
          <span className="font-bold text-accent-main text-xl">Корзина пуста :(</span>
          <Button asChild>
            <Link to={'/'}>Перейти в каталог</Link>
          </Button>
        </div>
      )}
      <CartMenu />
    </div>
  )
}

export default Cart
