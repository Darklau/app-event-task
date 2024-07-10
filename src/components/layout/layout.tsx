import {Outlet} from "react-router-dom";
import Header from "./header";

export const Layout = () => {
    return <><Header/>
        <main className='pt-[50px] bg-neutral-100'>
            <div className='container'><Outlet/></div>
        </main>
    </>

}