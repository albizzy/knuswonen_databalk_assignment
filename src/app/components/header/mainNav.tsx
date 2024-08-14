import { Overlock } from "next/font/google";
import Link from "next/link";

const overLock = Overlock({ weight: "400", subsets: ["latin"] });

// types
import { MainNavRouteProps } from "@/types";

// data
import data from "../data";

const MainNav = () => {
    // extraxt navroutes from data
    const navRoutes: MainNavRouteProps[] = data.mainNavRoutes;

    return (
        <ul className="w-full border border-gray-100 md:border-0 rounded-lg h-fit md:h-[80px] flex flex-col md:flex-row md:mt-0 gap-3">
            {navRoutes.map((route, index) => (
                <li 
                    key={index}
                    className="w-full flex md:w-[80px] h-[60px] md:h-[80px] px-2 py-3 md:py-6"
                >
                    <Link 
                        href={route.path}
                        className="w-full flex justify-center items-center p-0"
                    >
                        <span className={`${overLock.className} text-[#39468C] w-full font-semibold text-base text-center`}>{route.label}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
 
export default MainNav;