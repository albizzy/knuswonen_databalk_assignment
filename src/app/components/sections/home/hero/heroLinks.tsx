// data
import data from "@/app/components/data";

// types
import { ButtonProps } from "@/types";

// components
import Button from "@/app/components/common/button/button";

const HeroLinks = () => {
    // get button data
    const heroLinkButtons: ButtonProps[] = data.heroLinkButtons;

    return (
        <div className="w-fit flex items-start flex-col gap-y-3">
            <h2 className="text-2xl text-white">Waarmee kunnen we je helpen?</h2>
            <div className="w-full flex flex-col justify-center md:justify-start md:flex-row items-center gap-x-6 gap-y-4">
                {heroLinkButtons.map((button, index) => (
                    <Button
                        type={button.type}
                        key={index}
                        label={button.label}
                        link={button.link}
                        imageIcon={button.imageIcon}
                        classes={button.classes}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default HeroLinks;