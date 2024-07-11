import { useCartStore } from '@/store/cartStore'

import { Table, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/utils/cn'
import { TableHTMLAttributes, useEffect, useState } from 'react'
import { CartItem } from '@/types/common'
import moment from 'moment'
import { Button } from '@/components/ui/button'

type CartTableSort = 'price' | 'name' | 'added'

interface Props extends TableHTMLAttributes<HTMLTableElement> {
  containerClass?: string
}

export const CartTableRow = ({ product }: { product: CartItem }) => {
  const { removeProductFromCart } = useCartStore()
  const removeFromCart = () => {
    removeProductFromCart(product.id)
  }

  return (
    <TableRow>
      <TableCell>
        <div className="flex justify-center items-center ">
          <a rel="noreferrer" href={product.image} target={'_blank'}>
            <img
              title={`Изображение ${product.name}`}
              className="max-h-[50px] lg:max-h-[100px] object-contain"
              alt={`Изображение ${product.name}`}
              src={product.image}
            />
          </a>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center">
          <span
            title={product.name}
            className="text-start break-all xs:break-keep max-h-full  h-min text-sm md:text-md font-bold uppercase">
            {product.name}
          </span>
        </div>
      </TableCell>
      <TableCell>
        <span className="font-bold col-span-1 text-lg items-start justify-start text-accent-main">
          {product.price.toLocaleString()} ₽
        </span>
      </TableCell>
      <TableCell>
        <div className="gap-[8px] md:gap-[16px] items-start flex flex-col">
          <span className="font-bold text-lg text-accent-main">
            {moment(product.added).format('DD.MM HH:mm')}
          </span>

          <Button
            title={'Убрать товар из корзины'}
            className="!p-[6px] whitespace-pre w-full leading-[100%] h-[30px]"
            onClick={removeFromCart}>
            <span>Убрать</span>
            <span className="md:inline hidden">{' из корзины'}</span>
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}

const sortFunc = (items: [CartItem, CartItem], sort: CartTableSort, asc: boolean) => {
  const [a, b] = items
  if (sort === 'price') {
    return asc ? a.price - b.price : b.price - a.price
  }
  if (sort === 'name') {
    return asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  }
  if (sort === 'added') {
    return asc ? moment(a.added).diff(moment(b.added)) : moment(b.added).diff(moment(a.added))
  }
  return 0
}

export const CartTable = (props: Props) => {
  const { cart } = useCartStore()
  const [sortedCart, setSortedCart] = useState<CartItem[]>(cart)
  const [sort, setSort] = useState<CartTableSort>('price')
  const [asc, setAsc] = useState<boolean>(false)

  const toggleSort = (newSort: CartTableSort) => {
    if (sort === newSort) {
      setAsc(!asc)
    } else {
      setSort(newSort)
      setAsc(true)
    }
  }

  const toggleNameSort = () => {
    toggleSort('name')
  }
  const togglePriceSort = () => {
    toggleSort('price')
  }
  const toggleAddedSort = () => {
    toggleSort('added')
  }

  useEffect(() => {
    setSortedCart([...cart].sort((a, b) => sortFunc([a, b], sort, asc)))
  }, [cart, sort, asc])

  return (
    <Table {...props} className={cn('col-span-6  -mb-[2px] flex-col   ', props.className)}>
      <TableHeader>
        <TableRow className=" -mb-[1px] bg-neutral-0 gap-[8px] lg:gap-[16px]   p-[16px_24px]  grid-cols-4">
          <TableHead>
            <div className="flex justify-start">
              <span className="font-bold text-md lg:text-lg truncate">Изображение</span>
            </div>
          </TableHead>
          <TableHead>
            <button className="flex  gap-[8px] items-center justify-start" onClick={toggleNameSort}>
              <span className="font-bold text-md  lg:text-lg truncate">Название</span>{' '}
              {sort === 'name' && <span className="leading-[10px]">{asc ? '▲' : '▼'}</span>}
            </button>
          </TableHead>
          <TableHead className="justify-start   ">
            <button className="flex gap-[8px] justify-start" onClick={togglePriceSort}>
              <span className="font-bold text-md  lg:text-lg truncate">Цена</span>{' '}
              {sort === 'price' && <span>{asc ? '▲' : '▼'}</span>}
            </button>
          </TableHead>
          <TableHead className="justify-start   ">
            <button className="flex gap-[8px] justify-start" onClick={toggleAddedSort}>
              <span className="font-bold text-md items-center lg:text-lg truncate">Добавлен</span>{' '}
              {sort === 'added' && <span className="mr-[8px]">{asc ? '▲' : '▼'}</span>}
            </button>
          </TableHead>
        </TableRow>
      </TableHeader>

      {sortedCart.map(cartElem => (
        <CartTableRow product={cartElem} />
      ))}
    </Table>
  )
}
