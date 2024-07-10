import {Product} from "@/types/common";
import {create} from "zustand";

interface ProductStore {
    readonly products: Product[]
    fetchProducts: () => Promise<void>
    getProductById: (productId: number) => Product | undefined


}

export const useProductStore = create<ProductStore>((set, get) => ({
    products: [],
    fetchProducts: async () => {
        // Fetch products from API
        const response = await fetch("https://fakestoreapi.com/products")
        const products = await response.json()

        set({products})
    },
    getProductById: (productId) =>
        get().products.find((product) => product.id === productId)
}))