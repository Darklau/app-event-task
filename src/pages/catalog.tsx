import {useProductStore} from "@/store/productStore";
import {useLoadingStore} from "@/store/loadingStore";
import {PreLoader} from "@/components/ui/preLoader";
import {ProductCard} from "@/components/complex/productCard";
import InfiniteScroll from "react-infinite-scroll-component";
import {useCallback, useEffect, useMemo, useState} from "react";
import {Link} from "react-router-dom";
import {Product} from "@/types/common";

export const Catalog = () => {
    const {products, shownProducts, setShownProducts} = useProductStore()
    const [isMore, setIsMore] = useState<boolean>(true)
    const [minPrice, setMinPrice] = useState<number>(0)
    const [maxPrice, setMaxPrice] = useState<number>(1000000)
    const [name, setName] = useState<string>('')
    const isEmpty = useMemo(() => {
        return !shownProducts.length
    }, [shownProducts])
    const filter = useCallback((product: Product) => {
        return minPrice < product.price && (maxPrice ? product.price < maxPrice : true) && product.name.toLowerCase().includes(name.toLowerCase())
    }, [maxPrice, minPrice, name])


    useEffect(() => {
        const newProducts = products.filter(filter).slice(0, 6)
        if (!newProducts.length) {
            setShownProducts([])
            setIsMore(false)
        } else {
            setShownProducts(products.filter(filter).slice(0, 6))
            setIsMore(true)
        }

    }, [maxPrice, minPrice, name]);

    const fetchMore = () => {
        setTimeout(() => {
            const newShownProducts = products.filter(filter).slice(0, shownProducts.length + 6)
            console.log('new shown products', shownProducts)
            if (newShownProducts.length % 6 !== 0) {
                setIsMore(false)
            }
            setShownProducts(newShownProducts)
        }, 500)

    }
    const {loading} = useLoadingStore()
    return <div className='grid gap-[24px] grid-cols-8'>
        <div className='col-span-6'>
            <InfiniteScroll
                className=''
                next={fetchMore}
                hasMore={isMore}
                endMessage={<div className='flex justify-center items-center h-[150px]'><Link to={'/cart'}>Перейти в
                    корзину</Link></div>}
                loader={<PreLoader/>}
                dataLength={shownProducts.length}>
                <div>
                    {loading ? <PreLoader/> : isEmpty ?
                        <div className='flex justify-center items-center'><span className='text-accent-main'>Ничего не нашлось :(</span>
                        </div> :
                        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-[12px] lg:gap-[16px] lg:grid-cols-3'>

                            {shownProducts.map((product) => <ProductCard product={product}/>)}

                        </ul>}

                </div>
            </InfiniteScroll>
        </div>
        <div className='bg-neutral-0 p-[12px_16px]  rounded-[12px] col-span-2 h-[200px] flex flex-col gap-[8px]'>
            <input className='bg-neutral-300 p-[4px_14px] rounded-[12px] text-neutral-0' type={'number'}
                   onChange={(e) => {
                       setMinPrice(Number(e.target.value))
                   }}/>
            <input className='bg-neutral-300 p-[4px_14px] rounded-[12px] text-neutral-0' type={'number'}
                   onChange={(e) => {
                       setMaxPrice(Number(e.target.value))
                   }}/>
            <input className='bg-neutral-300 p-[4px_14px] rounded-[12px] text-neutral-0' type={'text'}
                   onChange={(e) => {
                       setName(e.target.value)
                   }}/>
        </div>
    </div>
}