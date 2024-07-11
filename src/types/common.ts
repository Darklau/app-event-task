export interface Product {
  id: number
  image: string
  name: string
  price: number
}

export interface CartItem extends Product {
  added?: Date | string
}
