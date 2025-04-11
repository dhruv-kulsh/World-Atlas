import { Outlet } from "react-router-dom"
import { Headers } from "../UI/Headers"
import { Footer } from "../UI/Footer"

export const AppLayout = () => {
    return (
        <>
        
        <Headers/>
        <Outlet/>
        <Footer/>
        </>
    )
}