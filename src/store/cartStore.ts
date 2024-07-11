import { create } from 'zustand'
import { Product } from '@/types/common'
import { createJSONStorage, persist } from 'zustand/middleware'

interface CartStore {
  cart: (Product & { added?: Date })[]
  addProductToCart: (product: Product) => void
  removeProductFromCart: (productId: number) => void
  clearCart: () => void
}

//Хранилище корзины в localStorage
export const useCartStorage = create(
  persist<CartStore>(
    set => ({
      clearCart: () => {
        set({ cart: [] })
      },
      cart: [],
      addProductToCart: product => {
        set(state => ({
          cart: [...state.cart, { ...product, added: new Date() }],
        }))
      },
      removeProductFromCart: productId => {
        set(state => ({
          cart: state.cart.filter(product => product.id !== productId),
        }))
      },
    }),
    { name: 'cartStorage', storage: createJSONStorage(() => localStorage) }
  )
)
