import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/layout'
import { useProductStore } from '@/store/productStore'
import { ProductCatalog } from '@/pages/catalog/productCatalog'
import { useLoadingStore } from '@/store/loadingStore'
import Cart from '@/pages/cart/cart'

function App() {
  const { fetchProducts } = useProductStore()
  const { setLoading, setImmediateLoading } = useLoadingStore()
  useEffect(() => {
    setImmediateLoading(true)
    fetchProducts().then(() => {
      console.log('products fetched')
      setLoading(false)
    })
  }, [])

  return (
    <div className="App">
      <div className="flex gap-[12px]"></div>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route path={'/'} element={<ProductCatalog />} />
            <Route path={'/cart'} element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
