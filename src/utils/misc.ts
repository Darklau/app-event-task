import { CartItem, Product } from '@/types/common'
import moment from 'moment/moment'

export type ProductSort = 'price' | 'name'
export type CartTableSort = 'price' | 'name' | 'added'

export function sortFunc(items: [Product, Product], sort: ProductSort, asc: boolean): number
export function sortFunc(items: [CartItem, CartItem], sort: CartTableSort, asc: boolean): number

//Функция для сортировки товаров передается в качестве callback в Array.sort()
export function sortFunc(
  items: [Product | CartItem, Product | CartItem],
  sort: ProductSort | CartTableSort,
  asc: boolean
): number {
  const [a, b] = items
  if (sort === 'price') {
    return asc ? a.price - b.price : b.price - a.price
  }
  if (sort === 'name') {
    return asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  }
  if ('added' in a && 'added' in b && sort === 'added') {
    return asc ? moment(a.added).diff(moment(b.added)) : moment(b.added).diff(moment(a.added))
  }
  return 0
}
