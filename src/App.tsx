import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import {Layout} from "./components/layout";

function App() {
  const router = createBrowserRouter([
    {path: '/', element:  <div>home</div>},
    {path: '/catalog', element: <div>catalog</div>},
  ])

  return (
    <div className="App">
      <div className='flex gap-[12px]'>

      </div>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<div>home</div>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
