import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className="relative">
            <div className="absolute w-full">
                <div className="max-w-[1300px] mx-auto mt-5">
                    <NavBar></NavBar>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;