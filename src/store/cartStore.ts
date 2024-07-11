import { create } from 'zustand'
import { CartItem, Product } from '@/types/common'
import { createJSONStorage, persist } from 'zustand/middleware'

interface CartStore {
  cart: CartItem[]
  addProductToCart: (product: Product) => void
  removeProductFromCart: (productId: number) => void
  clearCart: () => void
}

//Хранилище корзины в localStorage
export const useCartStore = create(
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
