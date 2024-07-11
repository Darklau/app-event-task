import { Product } from '@/types/common'
import { useCartStorage } from '@/store/cartStore'
import React, { useMemo } from 'react'
import { Toggle } from '@/components/ui/toggle'

interface Props {
  product: Product
}

export const ProductCard = React.forwardRef<HTMLDivElement, Props>(({ product }, ref) => {
  const { addProductToCart, removeProductFromCart, cart } = useCartStorage()
  const isInCart = useMemo(() => {
    return cart.some(item => {
      return item.id === product.id
    })
  }, [product, cart])
  const toggleCart = () => {
    if (isInCart) {
      removeProductFromCart(product.id)
    } else {
      addProductToCart(product)
    }
  }
  return (
    <div
      ref={ref}
      className="flex flex-col p-[8px_16px]  bg-neutral-0 rounded-[12px] justify-between items-start gap-[8px]"
    >
      <img
        className="h-[150px] m-[0_auto] object-contain rounded-[12px]"
        title={`Изображение ${product.name}`}
        alt={`Изображение ${product.name}`}
        src={product.image}
      />
      <span title={product.name} className="font-bold text-start text-md leading-normal">
        {product.name}
      </span>
      <span className="text-accent-main font-bold">{product.price} Р</span>
      <Toggle
        title={isInCart ? 'Убрать товар из корзины' : 'Добавить товар в корзину'}
        variant={'ghost'}
        pressed={isInCart}
        onClick={toggleCart}
      >
        {isInCart ? 'Убрать из корзины' : 'Добавить в корзину'}
      </Toggle>
    </div>
  )
})
