import {create} from "zustand";

interface ProductFiltersStore {
    maxPrice: number
    minPrice: number
    name: string
    setMinPrice: (minPrice: number) => void
    setMaxPrice: (maxPrice: number) => void
    setName: (name: string) => void
}

export const useProductFilterStorage = create<ProductFiltersStore>((set) => ({
    maxPrice: 0,
    minPrice: 0,
    name: '',
    setMinPrice: (minPrice) => {
        set({minPrice})
    },
    setMaxPrice: (maxPrice) => {
        set({maxPrice})
    },
    setName: (name) => {
        set({name})
    }
}))

