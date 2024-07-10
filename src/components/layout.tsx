import {Outlet} from "react-router-dom";
import Header from "./header";

export const Layout = () => {
    return <main><Header/>
    <Outlet/></main>

}