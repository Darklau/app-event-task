import { create } from 'zustand'

interface LoadingStore {
  loading: boolean
  setLoading: (isLoading: boolean) => void
  setImmediateLoading: (isLoading: boolean) => void
}

export const useLoadingStore = create<LoadingStore>(set => ({
  loading: false,
  setImmediateLoading: isLoading => set({ loading: isLoading }),
  setLoading: isLoading => setTimeout(() => set({ loading: isLoading }), 500),
}))
