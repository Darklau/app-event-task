import React, { useMemo } from 'react'
import { useCartStore } from '@/store/cartStore'
import { Button } from '@/components/ui/button'

export const CartMenu = () => {
  const { cart, clearCart } = useCartStore()
  const totalPrice = useMemo(() => cart.reduce((acc, product) => acc + product.price, 0), [cart])
  return cart.length ? (
    <>
      <div className=" hidden  md:w-auto left-0 rounded-0 md:static bottom-0 bg-neutral-0 p-[24px_16px] items-start  md:rounded-[12px] col-span-2 h-min md:flex flex-col gap-[8px]">
        <div className="flex justify-between  w-full items-center">
          <span className="text-neutral-500 text-lg">Цена:</span>
          <span className="text-accent-main font-bold">{totalPrice.toLocaleString()}₽</span>
        </div>
        <Button onClick={clearCart}>Очистить корзину</Button>
      </div>
      <div className="fixed h-auto md:hidden flex justify-between  shadow-2xl shadow-black left-0 p-[16px_24px] bg-neutral-0  w-screen bottom-0">
        <div className="flex gap-[8px]  w-full items-center">
          <span className="text-neutral-500 text-lg">Цена:</span>
          <span className="text-accent-main font-bold">{totalPrice.toLocaleString()}₽</span>
        </div>
        <Button onClick={clearCart}>Очистить корзину</Button>
      </div>
    </>
  ) : null
}
