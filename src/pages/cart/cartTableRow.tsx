import { CartItem } from '@/types/common'
import moment from 'moment'
import { useCartStore } from '@/store/cartStore'
import { Button } from '@/components/ui/button'

interface Props {
  product: CartItem
}

export const CartTableRow = ({ product }: Props) => {
  const { removeProductFromCart } = useCartStore()
  const removeFromCart = () => {
    removeProductFromCart(product.id)
  }
  return (
    <div className="last:border-0  border-accent-main  ">
      <div className="grid bg-neutral-0  p-[16px_12px] gap-[8px] pr-[24px] lg:gap-[16px]  grid-cols-4">
        <div className="col-span-1 justify-center items-center flex">
          <a rel="noreferrer" href={product.image} target={'_blank'}>
            <img
              title={`Изображение ${product.name}`}
              className="max-h-[50px] lg:max-h-[100px] object-contain"
              alt={`Изображение ${product.name}`}
              src={product.image}
            />
          </a>
        </div>
        <div className="col-span-1 overflow-hidden items-start h-full flex">
          <span
            title={product.name}
            className="text-start break-all xs:break-keep max-h-full flex h-min text-sm md:text-md font-bold uppercase">
            {product.name}
          </span>
        </div>
        <div className="font-bold col-span-1 flex items-start justify-start text-accent-main">
          <span>{product.price.toLocaleString()} ₽</span>
        </div>
        <div className="font-bold col-span-1 flex items-start justify-between  flex-col gap-[8px] text-accent-main">
          <span>{moment(product.added).format('DD.MM HH:mm')}</span>

          <Button
            title={'Убрать товар из корзины'}
            className="!p-[6px] whitespace-pre w-full leading-[100%] h-[30px]"
            onClick={removeFromCart}>
            <span>Убрать</span>
            <span className="md:inline hidden">{' из корзины'}</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
