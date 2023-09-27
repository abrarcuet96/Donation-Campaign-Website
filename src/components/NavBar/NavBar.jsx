import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const NavBar = () => {
    return (
            <div className="flex flex-col md:flex-row items-center justify-between">
                <Logo></Logo>
                <div className="mt-2">
                    <nav>
                        <ul className="flex gap-5 ">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "penditng" : isActive ? "text-red-400 underline" : "text-black"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/donation"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-400 underline" : "text-black"
                                    }
                                >
                                    Donation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/statistics"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-400 underline" : "text-black"
                                    }
                                >
                                    Statistics
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
    

    );
};

export default NavBar;