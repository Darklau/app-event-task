import {Product} from "@/types/common";
import {create} from "zustand";
import {fetchProducts} from "@/services/product.service";

interface ProductStore {
    readonly products: Product[]
    fetchProducts: () => Promise<void>
    getProductById: (productId: number) => Product | undefined
    shownProducts: Product[]
    setShownProducts: (shownProducts: Product[]) => void
}

export const useProductStore = create<ProductStore>((set, get) => ({
    shownProducts: [],
    setShownProducts: (shownProducts) => {
        set({shownProducts})
    },

    products: [],
    fetchProducts: async () => {
        // Fetch products from API
        const response = await fetchProducts()
        const products = response.data.items
        set({products, shownProducts: products.slice(0, 6)})
    },
    getProductById: (productId) =>
        get().products.find((product) => product.id === productId)
}))