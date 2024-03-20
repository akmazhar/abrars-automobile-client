import { Outlet } from "react-router-dom";
import Navbar from "../Component/Header/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";





const MainLayout = () => {
    return (
        <div className='man-w-screen max-auto'>
         <Navbar></Navbar>
         <Outlet></Outlet>
      
        <Footer></Footer>
        </div>
    );
};

export default MainLayout;