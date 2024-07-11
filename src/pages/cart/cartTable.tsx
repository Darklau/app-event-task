import { useCartStore } from '@/store/cartStore'
import { CartTableRow } from '@/pages/cart/cartTableRow'

export const CartTable = () => {
  const { cart } = useCartStore()

  return (
    <div className="col-span-6 flex -mb-[2px] overflow-hidden flex-col  rounded-[12px] border-accent-main border-2">
      <div className="grid -mb-[1px] bg-neutral-0 gap-[8px] lg:gap-[16px]   p-[16px_24px]  grid-cols-4">
        <div className="col-span-1 flex justify-start">
          <span className="font-bold text-md lg:text-lg truncate">Изображение</span>
        </div>
        <div className="col-span-1 justify-start flex ">
          <span className="font-bold text-md  lg:text-lg truncate">Название</span>
        </div>
        <div className="justify-start col-span-1 flex ">
          <span className="font-bold text-md  lg:text-lg truncate">Цена</span>
        </div>
        <div className="justify-start col-span-1 flex ">
          <span className="font-bold text-md  lg:text-lg truncate">Добавлен</span>
        </div>
      </div>

      {cart.map(cartElem => (
        <CartTableRow product={cartElem} />
      ))}
    </div>
  )
}
