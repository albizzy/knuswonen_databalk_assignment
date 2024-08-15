// types
import { FooterContentSectionProps } from "@/types";

// data
import data from "../data";

// components
import FooterContentSection from "./footerContentSection";

const Footer = () => {
    const footerContents: FooterContentSectionProps[] = data.footerContents;

    return (
        <footer className="w-full h-full lg:h-[236px] bg-[#E5E5E5]">
            <div className="w-full h-full flex items-center py-8 md:py-4 px-4 md:px-8 lg:px-24">
                <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-x-8">
                    {footerContents.map((section, index) => (
                        <FooterContentSection key={index} {...section} />
                    ))}
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;