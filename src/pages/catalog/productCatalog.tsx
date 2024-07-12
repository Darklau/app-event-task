import { useProductStore } from '@/store/productStore'
import { useLoadingStore } from '@/store/loadingStore'
import { PreLoader } from '@/components/ui/preLoader'
import { ProductCard } from '@/pages/catalog/productCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '@/types/common'
import { Button } from '@/components/ui/button'
import { ProductFilters } from '@/pages/catalog/productFilters'
import { useProductFilterStorage } from '@/store/productFiltersStore'
import { Meta } from '@/components/meta/meta'

export const ProductCatalog = () => {
  const { products, shownProducts, setShownProducts } = useProductStore()
  const [isMore, setIsMore] = useState<boolean>(true)
  const [limit, setLimit] = useState(9)
  const { minPrice, maxPrice, name } = useProductFilterStorage()
  const timeout = useRef<NodeJS.Timeout>()

  const increaseLimit = () => {
    setLimit(prev => prev + 6)
  }
  const isEmpty = useMemo(() => {
    return !shownProducts.length
  }, [shownProducts])

  useEffect(() => {
    const filter = (products: Product[]) => {
      //Функция для фильтрации массива продуктов

      return products
        .filter(
          product =>
            minPrice < product.price &&
            (maxPrice ? product.price < maxPrice : true) &&
            product.name.toLowerCase().includes(name.toLowerCase())
        )
        .slice(0, limit)
    }
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      const newProducts = filter(products)
      if (newProducts.length === products.length) {
        console.log('no new products')
        setIsMore(false)
      } else {
        setIsMore(true)
      }
      setShownProducts(newProducts)
    }, 500)
  }, [maxPrice, minPrice, name, limit, products, setShownProducts])

  const { loading } = useLoadingStore()
  return (
    <div className="lg:grid gap-[24px] grid-cols-8">
      <Meta title={'Каталог'} description={'Каталог товаров'} />
      <div className="col-span-6  lg:md-0  min-h-screen">
        <InfiniteScroll
          scrollThreshold={0}
          next={increaseLimit}
          hasMore={isMore}
          endMessage={
            <div className="flex justify-center items-center h-[150px]">
              <Button size={'lg'} className="uppercase" asChild>
                <Link to={'/cart'}>Перейти в корзину</Link>
              </Button>
            </div>
          }
          loader={<span className=""></span>}
          dataLength={shownProducts.length}>
          <div className=" overflow-visible">
            {loading ? (
              <PreLoader />
            ) : isEmpty ? (
              <div className="flex justify-center items-center">
                <span className="text-accent-main">Ничего не нашлось :(</span>
              </div>
            ) : (
              <ul className="grid overflow-visible grid-cols-1 sm:grid-cols-2 gap-[12px] lg:gap-[16px] lg:grid-cols-3">
                {shownProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </ul>
            )}
          </div>
        </InfiniteScroll>
      </div>
      <ProductFilters />
    </div>
  )
}
