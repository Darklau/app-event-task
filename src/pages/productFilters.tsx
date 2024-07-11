import {Input} from "@/components/ui/input";
import React, {useState} from "react";
import {useProductFilterStorage} from "@/store/productFiltersStore";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export const ProductFilters = () => {
    const [accordionOpen, setAccordionOpen] = useState<string>('')
    const {setMinPrice, setMaxPrice, setName, name, minPrice, maxPrice} = useProductFilterStorage()
    return <>
        <div
            className='hidden md:flex md:w-auto left-0 rounded-0 md:static bottom-0 bg-neutral-0 p-[24px_16px] items-start  md:rounded-[12px] col-span-2 h-min flex flex-col gap-[8px]'>
            <span className='text-neutral-500 font-bold'>Фильтровать: </span>
            <label className='flex text-neutral-500 flex-col w-full items-start gap-[4px]'>
                <span className='font-bold text-sm'>
                    Минимальная цена:
                </span>
                <Input className='w-full' type={'number'}
                       value={minPrice}
                       placeholder={'Минимальная цена'}
                       onChange={(e) => {
                           setMinPrice(Number(e.target.value))
                       }}/>
            </label>
            <label className='flex text-neutral-500 flex-col w-full items-start gap-[4px]'>
                <span className='font-bold text-sm'>
                    Максимальная цена:
                </span>
                <Input value={maxPrice} placeholder={'Максимальная цена'}
                       type={'number'}
                       onChange={(e) => {
                           setMaxPrice(Number(e.target.value))
                       }}/>
            </label>
            <label className='flex text-neutral-500 flex-col w-full items-start gap-[4px]'>
                <span className='font-bold text-sm'>
                   Названию:
                </span>
                <Input value={name} placeholder={'Поиск по имени...'} type={'text'}
                       onChange={(e) => {
                           setName(e.target.value)
                       }}/>
            </label>


        </div>
        <Accordion collapsible value={accordionOpen} onValueChange={setAccordionOpen}
                   className='fixed md:hidden shadow-xl left-0 p-[16px_24px] bg-neutral-0  w-screen bottom-0'
                   type={'single'}>
            <AccordionItem className={'overflow-visible'} value="item-1">
                <AccordionTrigger className='uppercase'>Фильтры</AccordionTrigger>
                <AccordionContent className='flex  flex-col gap-[8px]'>
                    <label className='flex text-neutral-500 flex-col w-full items-start gap-[4px]'>
                <span className='font-bold text-sm'>
                    Минимальная цена:
                </span>
                        <Input className='w-full' type={'number'}
                               value={minPrice}
                               placeholder={'Минимальная цена'}
                               onChange={(e) => {
                                   setMinPrice(Number(e.target.value))
                               }}/>
                    </label>
                    <label className='flex text-neutral-500 flex-col w-full items-start gap-[4px]'>
                <span className='font-bold text-sm'>
                    Максимальная цена:
                </span>
                        <Input value={maxPrice} placeholder={'Максимальная цена'}
                               type={'number'}
                               onChange={(e) => {
                                   setMaxPrice(Number(e.target.value))
                               }}/>
                    </label>
                    <label className='flex text-neutral-500 flex-col w-full items-start gap-[4px]'>
                <span className='font-bold text-sm'>
                   Названию:
                </span>
                        <Input value={name} placeholder={'Поиск по имени...'} type={'text'}
                               onChange={(e) => {
                                   setName(e.target.value)
                               }}/>
                    </label>

                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </>
}