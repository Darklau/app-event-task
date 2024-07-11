import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/layout/layout";
import {useProductStore} from "@/store/productStore";
import {ProductCatalog} from "@/pages/productCatalog";
import {useLoadingStore} from "@/store/loadingStore";

function App() {
    const {fetchProducts} = useProductStore()
    const {setLoading, setImmediateLoading} = useLoadingStore()
    useEffect(() => {
        setImmediateLoading(true)
        fetchProducts().then(() => {
            console.log('products fetched')
            setLoading(false)
        })
    }, []);


    return (
        <div className="App">
            <div className='flex gap-[12px]'>

            </div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route path={'/'} element={<ProductCatalog/>}/>
                        <Route path={'/cart'} element={<div>cart</div>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
