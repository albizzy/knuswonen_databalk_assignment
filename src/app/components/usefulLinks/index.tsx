// data
import data from "../data";

// types
import { UsefulLinksProps } from "@/types";

// components
import LinkGroup from "./linkGroup";

const UsefulLinks = () => {
    const usefulLinksGroup: UsefulLinksProps[] = data.usefulLinks;
    const currentYear = new Date().getFullYear();
    return (
        <div className="w-full md:h-[48px] bg-white">
            <div className="w-full h-full flex flex-col gap-2 md:flex-row items-center justify-between py-4 px-4 md:px-8 lg:px-24">
                <LinkGroup links={usefulLinksGroup}/>

                <div className="flex justify-center items-center">
                    <p className="text-xs">© KnusWonen<span>{currentYear}</span></p>
                </div>
            </div>
        </div>
    );
}
 
export default UsefulLinks;