import { useCartStore } from '@/store/cartStore'

import { Table, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/utils/cn'
import { TableHTMLAttributes, useEffect, useState } from 'react'
import { CartItem } from '@/types/common'
import moment from 'moment'
import { Button } from '@/components/ui/button'
import { CartTableSort, sortFunc } from '@/utils/misc'
import { SortOrderButton } from '@/components/ui/sortOrderButton'

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

export const CartTable = (props: Props) => {
  const { cart } = useCartStore()
  const [sortedCart, setSortedCart] = useState<CartItem[]>(cart)
  const [sort, setSort] = useState<CartTableSort>('price')
  const [asc, setAsc] = useState<boolean>(false)

  useEffect(() => {
    setSortedCart([...cart].sort((a, b) => sortFunc([a, b], sort, asc)))
  }, [cart, sort, asc])

  return (
    <Table {...props} className={cn('col-span-6  -mb-[2px] flex-col   ', props.className)}>
      <TableHeader>
        <TableRow className=" -mb-[1px] bg-neutral-0 gap-[8px] lg:gap-[16px]   p-[16px_24px]  grid-cols-4">
          <TableHead>
            <div className="flex justify-start">
              <span className="font-bold text-md overflow-hidden lg:text-lg truncate">
                Изображение
              </span>
            </div>
          </TableHead>
          <TableHead>
            <SortOrderButton
              className="flex gap-[8px] items-center justify-start font-bold text-md lg:text-lg truncate"
              value={'name'}
              sort={sort}
              setSort={setSort}
              asc={asc}
              setAsc={setAsc}>
              Название
            </SortOrderButton>
          </TableHead>
          <TableHead className="justify-start   ">
            <SortOrderButton
              className="flex gap-[8px] items-center justify-start font-bold text-md lg:text-lg truncate"
              value={'price'}
              sort={sort}
              setSort={setSort}
              asc={asc}
              setAsc={setAsc}>
              Цена
            </SortOrderButton>
          </TableHead>
          <TableHead className="justify-start   ">
            <SortOrderButton
              className="flex gap-[8px] items-center justify-start font-bold text-md lg:text-lg truncate"
              value={'added'}
              sort={sort}
              setSort={setSort}
              asc={asc}
              setAsc={setAsc}>
              Добавлен
            </SortOrderButton>
          </TableHead>
        </TableRow>
      </TableHeader>

      {sortedCart.map(cartElem => (
        <CartTableRow product={cartElem} />
      ))}
    </Table>
  )
}
