import React from 'react';
import './App.css';
import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/layout/layout";

function App() {
    const router = createBrowserRouter([
        {path: '/', element: <div>home</div>},
        {path: '/catalog', element: <div>catalog</div>},
    ])

    return (
        <div className="App">
            <div className='flex gap-[12px]'>

            </div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>

                        <Route path={'/'} element={<div>catalog</div>}/>
                        <Route path={'/cart'} element={<div>cart</div>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
